import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAh2j59Pmi8dsUjDR82qh0oi1F34aCH2Tg",
  authDomain: "practice-auth-app-f37d4.firebaseapp.com",
  projectId: "practice-auth-app-f37d4",
  storageBucket: "practice-auth-app-f37d4.appspot.com",
  messagingSenderId: "564105375721",
  appId: "1:564105375721:web:5a75ef5392cd3542fda578"
};

initializeApp(firebaseConfig);

export const auth = getAuth();