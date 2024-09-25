// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiKlDQv4d9lw-f4b6LkYPmNtjZmPXsFQI",
  authDomain: "hotel-app-6bbff.firebaseapp.com",
  projectId: "hotel-app-6bbff",
  storageBucket: "hotel-app-6bbff.appspot.com",
  messagingSenderId: "741881998488",
  appId: "1:741881998488:web:27cbad09e7dfdcd9a774ed",
  measurementId: "G-QSBDQZY859",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
