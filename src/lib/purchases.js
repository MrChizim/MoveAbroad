import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import { isAdminEmail } from './admins';

// Get all purchases for a user
export async function getUserPurchases(uid) {
  const ref = doc(db, 'purchases', uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return { countries: [], packages: [] };
  return snap.data();
}

// Purchases are recorded by the server (api/_lib/payments.js) after Paystack confirms them.

export { ADMIN_EMAILS } from './admins';

// Check if a user has access to a specific country
export async function hasAccessToCountry(uid, countryCode, email) {
  if (!uid) return false;
  if (isAdminEmail(email)) return true;
  const data = await getUserPurchases(uid);
  return data.countries?.includes(countryCode) || data.countries?.includes('ALL');
}
