import { createContext, useContext, useEffect, useState } from 'react';
import { getRedirectResult, onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { toast } from 'sonner';
import { auth, db, googleProvider } from './firebase';

const AuthContext = createContext(null);

// Google blocks sign-in inside the built-in browsers of social apps.
function isInAppBrowser() {
  return /Instagram|FBAN|FBAV|FB_IAB|TikTok|musical_ly|BytedanceWebview|Line\/|Snapchat|Twitter/i.test(navigator.userAgent || '');
}

// Errors that just mean the person closed or re-clicked the Google window.
const SILENT_ERRORS = ['auth/popup-closed-by-user', 'auth/cancelled-popup-request', 'auth/user-cancelled'];

function showSignInError(err) {
  const code = err?.code || 'unknown';
  if (SILENT_ERRORS.includes(code)) return;
  if (code === 'auth/network-request-failed') {
    toast.error('Sign in failed: check your internet connection and try again.');
  } else if (code === 'auth/unauthorized-domain') {
    toast.error('Sign in is not enabled for this web address. Please contact moveabroadng@gmail.com.');
  } else {
    toast.error(`Sign in failed (${code}). Please try again or contact moveabroadng@gmail.com.`);
  }
  console.error('Sign in failed', err);
}

// Save a profile the first time someone signs in. Login must not depend on this succeeding.
async function ensureUserProfile(firebaseUser) {
  try {
    const ref = doc(db, 'users', firebaseUser.uid);
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      await setDoc(ref, {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        full_name: firebaseUser.displayName,
        photo_url: firebaseUser.photoURL,
        created_at: new Date().toISOString(),
      });
    }
  } catch (err) {
    console.warn('Could not save user profile', err);
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Surface errors from the redirect fallback used when popups are blocked.
    getRedirectResult(auth).catch(showSignInError);

    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          full_name: firebaseUser.displayName,
          photo_url: firebaseUser.photoURL,
        });
        ensureUserProfile(firebaseUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return unsub;
  }, []);

  // Returns true when sign-in completed, false otherwise. Never throws.
  const signInWithGoogle = async () => {
    if (isInAppBrowser()) {
      toast.error('Google sign in does not work inside this app. Tap ⋯ and choose "Open in browser" (Chrome or Safari), then sign in.');
      return false;
    }
    try {
      await signInWithPopup(auth, googleProvider);
      return true;
    } catch (err) {
      if (err?.code === 'auth/popup-blocked' || err?.code === 'auth/operation-not-supported-in-this-environment') {
        try {
          await signInWithRedirect(auth, googleProvider);
        } catch (redirectErr) {
          showSignInError(redirectErr);
        }
        return false;
      }
      showSignInError(err);
      return false;
    }
  };

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
