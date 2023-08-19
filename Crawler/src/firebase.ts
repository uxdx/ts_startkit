import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAPS7Gy-k3M9cupopSSd6omYEGyBrbNtGw",
  authDomain: "sazokr.firebaseapp.com",
  projectId: "sazokr",
  storageBucket: "sazokr.appspot.com",
  messagingSenderId: "920363921915",
  appId: "1:920363921915:web:6c0c78396471656a3d9b5e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = admin.firestore(app);
