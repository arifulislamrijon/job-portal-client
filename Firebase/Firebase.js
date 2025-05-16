// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoE2PkQq0HYGbUjJiAd6tOHvbSFzjcIvA",
  authDomain: "job-portal-client-cc572.firebaseapp.com",
  projectId: "job-portal-client-cc572",
  storageBucket: "job-portal-client-cc572.firebasestorage.app",
  messagingSenderId: "784769213200",
  appId: "1:784769213200:web:7d0fdc64c52ee2dd0bbb95",
  measurementId: "G-RRD5SDCWM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };