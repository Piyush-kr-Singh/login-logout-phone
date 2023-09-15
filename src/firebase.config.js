import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhWoACmC0WogPKbdeiAk3QZlRdjc-hYWo",
  authDomain: "otp-project-3bcb1.firebaseapp.com",
  projectId: "otp-project-3bcb1",
  storageBucket: "otp-project-3bcb1.appspot.com",
  messagingSenderId: "949011221917",
  appId: "1:949011221917:web:ac48bcaeaf1e51fdd03374",
  measurementId: "G-QK5352NH1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);