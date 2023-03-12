import React from "react";
import avatar3 from "../assets/avatar3.png";

const ChatUsers = () => {
  return (
    <div>
      <div className="chat-users">
        <img src={avatar3} alt="profile image" className="chat-avatar" />
        <div className="chat-info">
          <span className="user-name">Elon</span>
          <span>Let's meet next week.</span>
        </div>
      </div>
      <div className="chat-users">
        <img src={avatar3} alt="profile image" className="chat-avatar" />
        <div className="chat-info">
          <span className="user-name">Elon</span>
          <span>Let's meet next week.</span>
        </div>
      </div>
      <div className="chat-users">
        <img src={avatar3} alt="profile image" className="chat-avatar" />
        <div className="chat-info">
          <span className="user-name">Elon</span>
          <span>Let's meet next week.</span>
        </div>
      </div>
    </div>
  );
};

export default ChatUsers;
