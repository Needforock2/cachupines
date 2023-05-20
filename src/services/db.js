import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7bEHzvxJ-FWWGautL4EhhANmwBjIrAtU",
  authDomain: "ecommerce-cachupines.firebaseapp.com",
  projectId: "ecommerce-cachupines",
  storageBucket: "ecommerce-cachupines.appspot.com",
  messagingSenderId: "641415233556",
  appId: "1:641415233556:web:32d7a3cf74006715f5a701",
  measurementId: "G-FFEL75CKT3",
};

// Initialize Firebase
export const app= initializeApp(firebaseConfig);
export const db = getFirestore();
