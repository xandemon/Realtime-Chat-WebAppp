import { onAuthStateChanged } from "firebase/auth";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { auth } from "../firebase";

export type User = {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
};

export interface AuthContextInterface {
  // currentUser: User | null;
  currentUser: User;
  setCurrentUser: Dispatch<SetStateAction<User>>;
}

const defaultState = {
  currentUser: {
    displayName: "",
    email: "",
    photoURL: "",
    uid: "",
  },
  setCurrentUser: (user: User) => {},
} as AuthContextInterface;

export const AuthContext = createContext(defaultState);

type AuthProvideProps = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: AuthProvideProps) => {
  const [currentUser, setCurrentUser] = useState<User>({
    displayName: "",
    email: "",
    photoURL: "",
    uid: "",
  });

  useEffect(() => {
    console.log("inisde useEffect");
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // console.log(user);
      if (user) {
        const { displayName, email, photoURL, uid } = user;
        setCurrentUser({
          uid,
          email: email ?? "",
          photoURL: photoURL ?? "",
          displayName: displayName ?? "",
        });
        // } else {
        //   setCurrentUser({
        //     displayName: "",
        //     email: "",
        //     photoURL: "",
        //     uid: "",
        //   });
      }
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
