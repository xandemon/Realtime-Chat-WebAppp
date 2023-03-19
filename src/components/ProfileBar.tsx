import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import avatar2 from "../assets/avatar2.png";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const ProfileBar = () => {
  const loggedUser = useContext(AuthContext);
  const logOutAccount = async () => {
    await signOut(auth);
    window.location.href = "/";
  };
  return (
    <div className="profile-bar-container">
      <div className="profile-info">
        <img
          src={loggedUser.photoURL}
          alt="profile image"
          className="profile-avatar"
        />
        <span>{loggedUser.displayName}</span>
      </div>
      <button onClick={logOutAccount} className="logout-btn">
        Logout
      </button>
    </div>
  );
};

export default ProfileBar;
