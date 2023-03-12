import React from "react";
import avatar1 from "../assets/avatar1.png";

const ChatUsers = () => {
  return (
    <div>
      <div className="chat-users">
        <img src={avatar1} alt="profile image" className="chat-avatar" />
        <div className="chat-info">
          <span className="user-name">Rijan</span>
          <span>Let's meet next week.</span>
        </div>
      </div>
      <div className="chat-users">
        <img src={avatar1} alt="profile image" className="chat-avatar" />
        <div className="chat-info">
          <span className="user-name">Saksham</span>
          <span>Let's meet next week.</span>
        </div>
      </div>
      <div className="chat-users">
        <img src={avatar1} alt="profile image" className="chat-avatar" />
        <div className="chat-info">
          <span className="user-name">Sabin</span>
          <span>Let's meet next week.</span>
        </div>
      </div>
    </div>
  );
};

export default ChatUsers;
