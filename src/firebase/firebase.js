import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAKt_NSob7lxvE8cq0co6hHhBmyC-1axHI",
  authDomain: "nexusweb-e7ecd.firebaseapp.com",
  projectId: "nexusweb-e7ecd",
  storageBucket: "nexusweb-e7ecd.appspot.com",
  messagingSenderId: "610280118070",
  appId: "1:610280118070:web:8b409727a5b07fb87c8597",
  measurementId: "G-7GTCN00C6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };