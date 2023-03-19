import React, { useContext, useState } from "react";
import avatar3 from "../assets/avatar3.png";
import { RiSearchLine } from "react-icons/ri";
import { AuthContext, User } from "../context/AuthContext";
import { db } from "../firebase";
import {
  collection,
  getDoc,
  doc,
  getDocs,
  query,
  where,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

const SearchBar = () => {
  const loggedUser = useContext(AuthContext);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchedUser, setSearchedUser] = useState<User | null>(null);
  const [error, setError] = useState("");

  const handleKey = (e: any) => {
    e.code === "Enter" && searchForUsers();
  };

  const searchForUsers = async () => {
    const q = await query(
      collection(db, "users"),
      where("displayName", "==", searchKeyword)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.data().email);
        setSearchedUser(doc.data());
      });
      console.log(`Search keyword: ${searchKeyword}`);
      console.log(`User result: ${searchedUser.uid}`);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        console.log(error);
      }
    }
  };

  const selectUser = async () => {
    //check whether the group (chats in firebase) exists or not, if not, create
    const combinedID =
      loggedUser.uid > searchedUser.uid
        ? loggedUser.uid + searchedUser.uid
        : searchedUser.uid + loggedUser.uid;
    console.log(combinedID);
    try {
      const res = await getDoc(doc(db, "chats", combinedID));

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedID), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", loggedUser.uid), {
          [combinedID + ".userInfo"]: {
            uid: searchedUser.uid,
            displayName: searchedUser.displayName,
            photoURL: searchedUser.photoURL,
          },
          [combinedID + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", searchedUser.uid), {
          [combinedID + ".userInfo"]: {
            uid: loggedUser.uid,
            displayName: loggedUser.displayName,
            photoURL: loggedUser.photoURL,
          },
          [combinedID + ".date"]: serverTimestamp(),
        });

        // data structure in database
        // userChats: {
        //   loggedUserID: {
        //     combinedID: {
        //       userInfo: {
        //         dn, img, id
        //       },
        //       lastMessage,
        //       date
        //     }
        //   }
        // }
      }
    } catch (err) {}
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search users"
        className="search-input"
        onKeyDown={handleKey}
        onChange={(e) => {
          setSearchKeyword(e.target.value);
        }}
      />
      <RiSearchLine className="search-icon" />
      {searchedUser && (
        <div onClick={selectUser} className="search-results">
          <img
            src={searchedUser.photoURL}
            alt="profile image"
            className="search-avatar"
          />
          <span>{searchedUser.displayName}</span>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
