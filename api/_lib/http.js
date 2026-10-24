// Small helpers shared by the /api functions. Plain Node req/res so the same
// code runs on Vercel and in the Vite dev/preview servers.
import { createRemoteJWKSet, jwtVerify } from 'jose';

export const PROJECT_ID = 'moveabroadng';

const GOOGLE_KEYS = createRemoteJWKSet(
  new URL('https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com'),
);

export function send(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  // Responses differ per user, so nothing may be cached by the CDN or browser.
  res.setHeader('Cache-Control', 'private, no-store');
  res.end(JSON.stringify(body));
}

export function bearerToken(req) {
  const header = req.headers.authorization || '';
  return header.startsWith('Bearer ') ? header.slice(7).trim() : null;
}

// Verifies a Firebase ID token; returns its claims or null if invalid.
export async function verifyFirebaseToken(idToken) {
  try {
    const { payload } = await jwtVerify(idToken, GOOGLE_KEYS, {
      issuer: `https://securetoken.google.com/${PROJECT_ID}`,
      audience: PROJECT_ID,
    });
    return payload;
  } catch {
    return null;
  }
}

// Returns the raw request body as a string. Reads the stream first, because
// touching req.body makes Vercel parse (and consume) it, and the Paystack
// signature must be checked against the exact bytes that were sent.
export async function readRawBody(req) {
  if (!req.readableEnded) {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    if (chunks.length) return Buffer.concat(chunks).toString('utf8');
  }
  if (typeof req.body === 'string') return req.body;
  if (Buffer.isBuffer(req.body)) return req.body.toString('utf8');
  if (req.body && typeof req.body === 'object') return JSON.stringify(req.body);
  return '';
}
