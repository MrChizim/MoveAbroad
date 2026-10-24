// POST /api/verify-payment  { reference }  with Authorization: Bearer <Firebase ID token>
// Called by the browser right after Paystack reports success.
import { PaymentError, verifyAndRecordPayment } from './_lib/payments.js';
import { bearerToken, readRawBody, send, verifyFirebaseToken } from './_lib/http.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return send(res, 405, { error: 'method_not_allowed' });

  const idToken = bearerToken(req);
  const claims = idToken && await verifyFirebaseToken(idToken);
  if (!claims) return send(res, 401, { error: 'sign_in_required' });

  let reference;
  try {
    reference = JSON.parse(await readRawBody(req)).reference;
  } catch {
    return send(res, 400, { error: 'invalid_body' });
  }

  try {
    const result = await verifyAndRecordPayment(reference);
    if (result.uid !== claims.sub) return send(res, 403, { error: 'payment_belongs_to_another_account' });
    return send(res, 200, { ok: true, countries: result.countries });
  } catch (err) {
    if (err instanceof PaymentError) return send(res, err.status, { error: err.code });
    console.error('verify-payment failed', err);
    return send(res, 500, { error: 'server_error' });
  }
}
