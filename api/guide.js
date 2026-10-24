// GET /api/guide?code=CA
//
// Serves country guides so paid content never ships in the browser bundle.
// - Anyone gets the free preview (tagline, overview, stats).
// - The full guide is returned only with a valid Firebase ID token
//   (Authorization: Bearer <token>) for an admin, or for a user whose
//   purchases/{uid} document includes the country (or 'ALL').
//
// The purchase lookup uses the caller's own ID token against the Firestore REST
// API, so it obeys the same security rules as the site and needs no admin keys.
// Written with plain Node req/res so it runs both on Vercel and in the Vite
// dev/preview server (see vite.config.js).
import { GUIDE_CONTENT } from '../content/guideContent.js';
import { isAdminEmail } from '../src/lib/admins.js';
import { PROJECT_ID, bearerToken, send, verifyFirebaseToken } from './_lib/http.js';

const FREE_FIELDS = ['tagline', 'overview', 'stats'];

function preview(guide) {
  const free = Object.fromEntries(FREE_FIELDS.filter((k) => k in guide).map((k) => [k, guide[k]]));
  // Official government links are public information; show them to everyone.
  free.sources = (guide.embassy?.extra_links || []).slice(0, 8);
  return free;
}

// Returns the list of purchased country codes, or null if the lookup failed.
async function purchasedCountries(uid, idToken) {
  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/purchases/${encodeURIComponent(uid)}`;
  const r = await fetch(url, { headers: { Authorization: `Bearer ${idToken}` } });
  if (r.status === 404) return [];
  if (!r.ok) {
    console.error('purchase lookup failed', r.status, await r.text().catch(() => ''));
    return null;
  }
  const doc = await r.json();
  const values = doc.fields?.countries?.arrayValue?.values || [];
  return values.map((v) => v.stringValue).filter(Boolean);
}

export default async function handler(req, res) {
  if (req.method !== 'GET') return send(res, 405, { error: 'method_not_allowed' });

  const code = (new URL(req.url, 'http://localhost').searchParams.get('code') || '').toUpperCase();
  const guide = Object.hasOwn(GUIDE_CONTENT, code) ? GUIDE_CONTENT[code] : null;
  if (!guide) return send(res, 404, { error: 'not_found' });

  const idToken = bearerToken(req);
  if (!idToken) return send(res, 200, { access: false, guide: preview(guide) });

  const claims = await verifyFirebaseToken(idToken);
  if (!claims) return send(res, 401, { error: 'invalid_token' });

  let access = claims.email_verified === true && isAdminEmail(claims.email);
  if (!access) {
    const countries = await purchasedCountries(claims.sub, idToken);
    if (countries === null) return send(res, 502, { error: 'purchase_lookup_failed', guide: preview(guide) });
    access = countries.includes(code) || countries.includes('ALL');
  }

  return send(res, 200, { access, guide: access ? guide : preview(guide) });
}
