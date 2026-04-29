import { doc, getDoc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from './firebase';

// Get all purchases for a user
export async function getUserPurchases(uid) {
  const ref = doc(db, 'purchases', uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return { countries: [], packages: [] };
  return snap.data();
}

// Record a purchase after Paystack payment succeeds
export async function recordPurchase(uid, { packageId, countries, paystackRef, email }) {
  const ref = doc(db, 'purchases', uid);
  const snap = await getDoc(ref);

  const entry = {
    packageId,
    countries,
    paystackRef,
    paidAt: new Date().toISOString(),
  };

  if (!snap.exists()) {
    await setDoc(ref, {
      uid,
      email,
      countries: countries,
      packages: [entry],
    });
  } else {
    await updateDoc(ref, {
      countries: arrayUnion(...countries),
      packages: arrayUnion(entry),
    });
  }
}

// Check if a user has access to a specific country
export async function hasAccessToCountry(uid, countryCode) {
  if (!uid) return false;
  const data = await getUserPurchases(uid);
  return data.countries?.includes(countryCode) || data.countries?.includes('ALL');
}
