import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import React, { useContext, useEffect, useState } from "react";
import avatar1 from "../assets/avatar1.png";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const ChatUsers = () => {
  const [chats, setChats] = useState([]);
  const loggedUser = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", loggedUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    loggedUser.uid && getChats();
  }, [loggedUser.uid]);

  console.log(Object.entries(chats));

  const handleSelect = (info) => {
    dispatch({ type: "CHANGE_USER", payload: info });
  };

  return (
    <div>
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            id={chat[0]}
            className="chat-users"
            onClick={() => {
              handleSelect(chat[1].userInfo);
            }}
          >
            <img
              src={chat[1].userInfo.photoURL}
              alt="profile image"
              className="chat-avatar"
            />
            <div className="chat-info">
              <span className="user-name">{chat[1].userInfo.displayName}</span>
              <span className="msg-preview">{chat[1].lastMessage?.text}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ChatUsers;
