import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

interface User {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}

export const AuthContext = createContext<User | undefined>(undefined);

export const AuthContextProvider = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, photoURL, uid } = user;
        setCurrentUser({
          uid,
          email: email ?? "",
          photoURL: photoURL ?? "",
          displayName: displayName ?? "",
        });
      } else {
        setCurrentUser(null);
      }
    });
    return unsubscribe;
  }, []);

  // return (
  //   <AuthContext.Provider>
  //   {children}
  //   </AuthContext.Provider>
  // )
};
