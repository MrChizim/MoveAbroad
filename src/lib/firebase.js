import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAch_yIR4zhT-Zww7IEbutKSjSF7n90n8Y",
  authDomain: "moveabroadng.firebaseapp.com",
  projectId: "moveabroadng",
  storageBucket: "moveabroadng.firebasestorage.app",
  messagingSenderId: "82922754725",
  appId: "1:82922754725:web:d12151f08d08cf808b334c",
  measurementId: "G-71WMH9RLR8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
