import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAY7-8YNSIIx0zD9YZwd6Z6M3lcuuNHE4U",
  authDomain: "chat-81383.firebaseapp.com",
  projectId: "chat-81383",
  storageBucket: "chat-81383.appspot.com",
  messagingSenderId: "44723769698",
  appId: "1:44723769698:web:eae19a1bc5dd48404b9c3b",
  measurementId: "G-V6QWRF3WQ4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();