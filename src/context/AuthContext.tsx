import React, { createContext } from "react";
import firebase from "firebase/app";

export interface User {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}

export const AuthContext = createContext<User | null>(null);
