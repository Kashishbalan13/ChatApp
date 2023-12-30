import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
// const analytics = getAnalytics(app);