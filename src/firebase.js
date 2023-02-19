import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbnKmWU1UvxGGGgSBYQ6Tbbwaq_3k6620",
  authDomain: "chatapp-2db93.firebaseapp.com",
  projectId: "chatapp-2db93",
  storageBucket: "chatapp-2db93.appspot.com",
  messagingSenderId: "222464332642",
  appId: "1:222464332642:web:30c81119f566e43b41123b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const Auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
