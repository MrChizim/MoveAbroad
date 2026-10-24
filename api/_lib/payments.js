// Confirms a Paystack payment with Paystack itself, then records the purchase
// in Firestore using the Admin SDK. This is the only place purchases are
// written; Firestore rules block browsers from writing them.
//
// Needs two Vercel environment variables:
//   PAYSTACK_SECRET_KEY        sk_live_... (or sk_test_... for testing)
//   FIREBASE_SERVICE_ACCOUNT   the service-account JSON from Firebase console
import { FieldValue } from 'firebase-admin/firestore';
import { COUNTRIES, PACKAGES } from '../../src/lib/countries.js';
import { ConfigError, adminDb as getAdminDb } from './firebaseAdmin.js';

const ALL_CODES = COUNTRIES.map((c) => c.code);

export class PaymentError extends Error {
  constructor(code, status = 400) {
    super(code);
    this.code = code;
    this.status = status;
  }
}

function adminDb() {
  try {
    return getAdminDb();
  } catch (err) {
    if (err instanceof ConfigError) throw new PaymentError('server_not_configured', 500);
    throw err;
  }
}

async function fetchTransaction(reference) {
  const secret = process.env.PAYSTACK_SECRET_KEY;
  if (!secret) throw new PaymentError('server_not_configured', 500);
  const r = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
    headers: { Authorization: `Bearer ${secret}` },
  });
  const body = await r.json().catch(() => ({}));
  if (r.status === 404 || (body.status === false && /not found/i.test(body.message || ''))) {
    throw new PaymentError('payment_not_found', 404);
  }
  if (!r.ok || !body.data) throw new PaymentError('paystack_unavailable', 502);
  return body.data;
}

function metadataFields(tx) {
  let meta = tx.metadata;
  if (typeof meta === 'string') {
    try { meta = JSON.parse(meta); } catch { meta = {}; }
  }
  const fields = {};
  for (const f of meta?.custom_fields || []) fields[f.variable_name] = String(f.value ?? '');
  return fields;
}

// Works out which countries a successful transaction pays for, or throws.
function purchaseFromTransaction(tx) {
  if (tx.status !== 'success') throw new PaymentError('payment_not_successful');
  if (tx.currency !== 'NGN') throw new PaymentError('wrong_currency');

  const fields = metadataFields(tx);
  const pkg = PACKAGES.find((p) => p.id === fields.package);
  if (!pkg) throw new PaymentError('unknown_package');
  if (tx.amount !== pkg.price * 100) throw new PaymentError('wrong_amount');
  if (!fields.uid) throw new PaymentError('missing_user');

  let countries;
  if (pkg.id === 'all_access') {
    countries = ALL_CODES;
  } else {
    countries = [...new Set((fields.countries || '').split(',').map((c) => c.trim().toUpperCase()))]
      .filter((c) => ALL_CODES.includes(c));
    if (countries.length !== pkg.countries) throw new PaymentError('wrong_country_count');
  }
  return { uid: fields.uid, packageId: pkg.id, countries };
}

// Verifies the reference with Paystack and records it once. Safe to call
// repeatedly (browser callback and webhook both call it).
export async function verifyAndRecordPayment(reference) {
  if (!reference || typeof reference !== 'string' || reference.length > 200) {
    throw new PaymentError('missing_reference');
  }
  const tx = await fetchTransaction(reference);
  const purchase = purchaseFromTransaction(tx);
  const email = tx.customer?.email || null;
  const db = adminDb();

  const paymentDoc = db.collection('payments').doc(tx.reference);
  const purchaseDoc = db.collection('purchases').doc(purchase.uid);

  const alreadyRecorded = await db.runTransaction(async (t) => {
    const existing = await t.get(paymentDoc);
    if (existing.exists) return true;
    t.set(paymentDoc, {
      uid: purchase.uid,
      email,
      packageId: purchase.packageId,
      countries: purchase.countries,
      amountKobo: tx.amount,
      paidAt: tx.paid_at || null,
      recordedAt: new Date().toISOString(),
    });
    t.set(purchaseDoc, {
      uid: purchase.uid,
      email,
      countries: FieldValue.arrayUnion(...purchase.countries),
      packages: FieldValue.arrayUnion({
        packageId: purchase.packageId,
        countries: purchase.countries,
        paystackRef: tx.reference,
        paidAt: tx.paid_at || new Date().toISOString(),
      }),
    }, { merge: true });
    return false;
  });

  return { ...purchase, alreadyRecorded };
}
