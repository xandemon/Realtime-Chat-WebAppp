import React from "react";
import { signOut } from "firebase/auth";
import avatar2 from "../assets/avatar2.png";
import { auth } from "../firebase";

const ProfileBar = () => {
  return (
    <div className="profile-bar-container">
      <div className="profile-info">
        <img src={avatar2} alt="profile image" className="profile-avatar" />
        <span>Sandesh</span>
      </div>
      <button onClick={() => signOut(auth)} className="logout-btn">
        Logout
      </button>
    </div>
  );
};

export default ProfileBar;
