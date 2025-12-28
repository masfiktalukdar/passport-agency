import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// REPLACE THE STRINGS BELOW WITH YOUR OWN FIREBASE CONFIG KEYS
const firebaseConfig = {
  apiKey: "AIzaSyBetZkU_VtgA9y8cASnL4B8t5mUI0547pY",
  authDomain: "hero-io-7e0e0.firebaseapp.com",
  projectId: "hero-io-7e0e0",
  storageBucket: "hero-io-7e0e0.firebasestorage.app",
  messagingSenderId: "289602348354",
  appId: "1:289602348354:web:6a7af9be97d880759454db",
  measurementId: "G-EKJRBZSWR1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
