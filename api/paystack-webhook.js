// POST /api/paystack-webhook — Paystack calls this after every successful charge,
// so buyers are unlocked even if they close the tab before the browser check runs.
// The payload is not trusted on its own: the reference is re-verified with Paystack.
import { createHmac, timingSafeEqual } from 'node:crypto';
import { PaymentError, verifyAndRecordPayment } from './_lib/payments.js';
import { readRawBody, send } from './_lib/http.js';

function validSignature(raw, signature) {
  const secret = process.env.PAYSTACK_SECRET_KEY;
  if (!secret || !signature) return false;
  const expected = createHmac('sha512', secret).update(raw).digest('hex');
  return expected.length === signature.length && timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return send(res, 405, { error: 'method_not_allowed' });

  const raw = await readRawBody(req);
  if (!validSignature(raw, req.headers['x-paystack-signature'])) return send(res, 401, { error: 'bad_signature' });

  let event;
  try { event = JSON.parse(raw); } catch { return send(res, 400, { error: 'invalid_body' }); }
  if (event.event !== 'charge.success') return send(res, 200, { ignored: event.event });

  try {
    await verifyAndRecordPayment(event.data?.reference);
    return send(res, 200, { ok: true });
  } catch (err) {
    // Payments that don't match a package are acknowledged so Paystack stops retrying.
    if (err instanceof PaymentError && err.status < 500) return send(res, 200, { ignored: err.code });
    console.error('paystack-webhook failed', err);
    return send(res, 500, { error: 'server_error' });
  }
}
