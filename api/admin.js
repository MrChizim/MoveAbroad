// /api/admin — admin-only data and tools. Every request must carry a Firebase ID
// token for an address in src/lib/admins.js.
//   GET  ?action=analytics&days=30   daily traffic totals
//   GET  ?action=customers           purchases/{uid} docs
//   GET  ?action=payments            confirmed Paystack payments
//   POST { action: 'grant',  email, countries: ['CA'] | ['ALL'], note? }
//   POST { action: 'revoke', uid,   countries: ['CA'] | ['ALL'], note? }
import { FieldValue } from 'firebase-admin/firestore';
import { COUNTRIES } from '../src/lib/countries.js';
import { ConfigError, adminAuth, adminDb, requireAdmin } from './_lib/firebaseAdmin.js';
import { readRawBody, send } from './_lib/http.js';

const ALL_CODES = COUNTRIES.map((c) => c.code);

function lastDays(n) {
  const today = new Date(Date.now() + 60 * 60 * 1000); // Lagos, UTC+1
  return Array.from({ length: n }, (_, i) => {
    const d = new Date(today);
    d.setUTCDate(d.getUTCDate() - (n - 1 - i));
    return d.toISOString().slice(0, 10);
  });
}

function parseCountries(list) {
  if (!Array.isArray(list) || !list.length) return null;
  const codes = list.map((c) => String(c).toUpperCase());
  if (codes.includes('ALL')) return ALL_CODES;
  const valid = [...new Set(codes)].filter((c) => ALL_CODES.includes(c));
  return valid.length === codes.length ? valid : null;
}

async function analytics(db, days) {
  const dates = lastDays(days);
  const snaps = await db.getAll(...dates.map((d) => db.collection('analytics_daily').doc(d)));
  return dates.map((date, i) => {
    const d = snaps[i].exists ? snaps[i].data() : {};
    return {
      date,
      visitors: d.visitors || 0,
      pageviews: d.pageviews || 0,
      sessions: d.sessions || 0,
      events: d.events || {},
      pages: d.pages || {},
      sources: d.sources || {},
      devices: d.devices || {},
      visitorCountries: d.visitorCountries || {},
    };
  });
}

async function customers(db) {
  const snap = await db.collection('purchases').limit(1000).get();
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

async function payments(db) {
  const snap = await db.collection('payments').orderBy('recordedAt', 'desc').limit(500).get();
  return snap.docs.map((d) => ({ reference: d.id, ...d.data() }));
}

async function changeAccess(db, admin, body) {
  const countries = parseCountries(body.countries);
  if (!countries) return [400, { error: 'invalid_countries' }];
  const note = typeof body.note === 'string' ? body.note.slice(0, 300) : '';

  let uid = typeof body.uid === 'string' ? body.uid : null;
  let email = null;
  if (body.action === 'grant') {
    try {
      const user = await adminAuth().getUserByEmail(String(body.email || '').trim().toLowerCase());
      uid = user.uid;
      email = user.email;
    } catch {
      return [404, { error: 'user_not_found' }];
    }
  }
  if (!uid) return [400, { error: 'missing_user' }];

  const entry = {
    packageId: body.action === 'grant' ? 'manual_grant' : 'manual_revoke',
    countries,
    by: admin.email,
    note,
    paidAt: new Date().toISOString(),
  };
  const ref = db.collection('purchases').doc(uid);
  if (body.action === 'grant') {
    await ref.set({
      uid,
      email,
      countries: FieldValue.arrayUnion(...countries),
      packages: FieldValue.arrayUnion(entry),
    }, { merge: true });
  } else {
    const snap = await ref.get();
    if (!snap.exists) return [404, { error: 'no_purchases' }];
    const remove = countries.length === ALL_CODES.length ? [...ALL_CODES, 'ALL'] : countries;
    await ref.update({
      countries: FieldValue.arrayRemove(...remove),
      packages: FieldValue.arrayUnion(entry),
    });
  }
  const after = await ref.get();
  return [200, { ok: true, uid, countries: after.data()?.countries || [] }];
}

export default async function handler(req, res) {
  const admin = await requireAdmin(req);
  if (!admin) return send(res, 403, { error: 'admins_only' });

  try {
    const db = adminDb();
    if (req.method === 'GET') {
      const params = new URL(req.url, 'http://localhost').searchParams;
      const action = params.get('action');
      if (action === 'analytics') {
        const days = Math.min(Math.max(parseInt(params.get('days'), 10) || 30, 1), 90);
        return send(res, 200, { days: await analytics(db, days) });
      }
      if (action === 'customers') return send(res, 200, { customers: await customers(db) });
      if (action === 'payments') return send(res, 200, { payments: await payments(db) });
      return send(res, 400, { error: 'unknown_action' });
    }
    if (req.method === 'POST') {
      let body;
      try { body = JSON.parse(await readRawBody(req)); } catch { return send(res, 400, { error: 'invalid_body' }); }
      if (body.action !== 'grant' && body.action !== 'revoke') return send(res, 400, { error: 'unknown_action' });
      const [status, result] = await changeAccess(db, admin, body);
      return send(res, status, result);
    }
    return send(res, 405, { error: 'method_not_allowed' });
  } catch (err) {
    if (err instanceof ConfigError) return send(res, 500, { error: 'server_not_configured' });
    console.error('admin api failed', err);
    return send(res, 500, { error: 'server_error' });
  }
}
