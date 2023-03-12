import React from "react";
import avatar3 from "../assets/avatar3.png";

const Message = () => {
  return (
    <div className="message">
      <img src={avatar3} alt="user avatar" />
      <div className="user-message">
        <img
          src="https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="txt-message">
          <span>Hello</span>
          <span className="msg-date">Just now</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
