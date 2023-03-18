import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

interface User {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}

interface AuthContextProps {
  currentUser: User | null;
}

export const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
});

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
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

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

/*
Note that:

The AuthContextProps interface is defined with a currentUser property that is optional.
The AuthContext is created using the createContext function with a default value that has a currentUser property set to null.
The AuthContextProvider component now takes in a prop called children with type React.ReactNode. The children prop is used in the return statement of the component.
The onAuthStateChanged method is used on the auth object imported from ../firebase to subscribe to authentication state changes. When a user is authenticated, their user object is deconstructed and used to create a new currentUser object with optional properties of email, photoURL, and displayName.
The unsubscribe function returned from the onAuthStateChanged method is used to unsubscribe from authentication state changes when the component unmounts.
*/
