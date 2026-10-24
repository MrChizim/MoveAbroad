// Firebase Admin SDK, initialised once from the FIREBASE_SERVICE_ACCOUNT env var.
// The Admin SDK ignores Firestore security rules, so only server code uses it.
import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { isAdminEmail } from '../../src/lib/admins.js';
import { bearerToken, verifyFirebaseToken } from './http.js';

export class ConfigError extends Error {}

function app() {
  if (!getApps().length) {
    const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (!raw) throw new ConfigError('FIREBASE_SERVICE_ACCOUNT is not set');
    initializeApp({ credential: cert(JSON.parse(raw)) });
  }
  return getApps()[0];
}

export const adminDb = () => getFirestore(app());
export const adminAuth = () => getAuth(app());

// Returns the token claims if the request comes from a verified admin, else null.
export async function requireAdmin(req) {
  const token = bearerToken(req);
  const claims = token && await verifyFirebaseToken(token);
  if (!claims || claims.email_verified !== true || !isAdminEmail(claims.email)) return null;
  return claims;
}
