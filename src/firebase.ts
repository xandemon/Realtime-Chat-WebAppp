// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBtWj_isJd6ykyw87-bXL-AG4KsgOOahSA",
  authDomain: "realtime-chat-webapp-446f0.firebaseapp.com",
  projectId: "realtime-chat-webapp-446f0",
  storageBucket: "realtime-chat-webapp-446f0.appspot.com",
  messagingSenderId: "652497834425",
  appId: "1:652497834425:web:eb389bff428de7e6c72668",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
