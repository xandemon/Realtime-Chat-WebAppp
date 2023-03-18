import React from "react";
import avatar2 from "../assets/avatar2.png";

const ProfileBar = () => {
  return (
    <div className="profile-bar-container">
      <div className="profile-info">
        <img src={avatar2} alt="profile image" className="profile-avatar" />
        <span>Sandesh</span>
      </div>
      <button className="logout-btn">Logout</button>
    </div>
  );
};

export default ProfileBar;
