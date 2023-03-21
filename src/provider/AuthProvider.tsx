import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { User } from "../context/AuthContext";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loggedUser, setLoggedUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoggedUser(user);
    });

    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={loggedUser}>{children}</AuthContext.Provider>
  );
};
