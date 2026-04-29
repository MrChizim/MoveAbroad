import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebase';

// Get checklist progress for a user + country
export async function getChecklistProgress(uid, countryCode) {
  const ref = doc(db, 'checklists', `${uid}_${countryCode}`);
  const snap = await getDoc(ref);
  if (!snap.exists()) return {};
  return snap.data().items || {};
}

// Toggle a checklist item
export async function toggleChecklistItem(uid, countryCode, itemId, checked) {
  const ref = doc(db, 'checklists', `${uid}_${countryCode}`);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      uid,
      countryCode,
      items: { [itemId]: checked },
      updatedAt: new Date().toISOString(),
    });
  } else {
    await updateDoc(ref, {
      [`items.${itemId}`]: checked,
      updatedAt: new Date().toISOString(),
    });
  }
}
