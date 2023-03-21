import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBp4hi7oWy4qd3soMERizuptIAHve6JbW8",
  authDomain: "realtime-chat-webapp-50217.firebaseapp.com",
  projectId: "realtime-chat-webapp-50217",
  storageBucket: "realtime-chat-webapp-50217.appspot.com",
  messagingSenderId: "115614818856",
  appId: "1:115614818856:web:7090bb89007761be290b1d",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
