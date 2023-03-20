import React, { useContext, useEffect, useRef } from "react";
import avatar3 from "../assets/avatar3.png";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }: any) => {
  const loggedUser = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behaviour: "smooth" });
  }, []);

  return (
    <div
      ref={ref}
      className={`message ${
        message.senderID === loggedUser.uid && "your-message"
      }`}
    >
      <img
        src={
          message.senderID === loggedUser.uid
            ? loggedUser.photoURL
            : data.user.photoURL
        }
        alt="user avatar"
      />
      <div className="user-message">
        {message.img && <img src={message.img} alt="" />}
        <div className="txt-message">
          <span>{message.text}</span>
          <span className="msg-date">Just now</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
