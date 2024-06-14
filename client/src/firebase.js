// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "swift-liaison.firebaseapp.com",
  projectId: "swift-liaison",
  storageBucket: "swift-liaison.appspot.com",
  messagingSenderId: "282445374096",
  appId: "1:282445374096:web:a0fc43f55d29215533ae15",
  measurementId: "G-E1Y6DP6PDY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
