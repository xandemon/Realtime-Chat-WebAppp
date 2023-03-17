import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import avatar2 from "../assets/avatar2.png";
import { auth } from "../firebase";

const ProfileBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <div className="profile-bar-container">
      <div className="profile-info">
        <img src={avatar2} alt="profile image" className="profile-avatar" />
        <span>Sandesh</span>
      </div>
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </div>
  );
};

export default ProfileBar;
