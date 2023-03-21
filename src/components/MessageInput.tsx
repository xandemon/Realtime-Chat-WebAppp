import React, { useContext, useEffect, useState } from "react";
import { BsEmojiLaughing } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";
import sendBtn from "../assets/sendBtn.png";
import { ChatContext } from "../context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  const loggedUser = useContext(AuthContext);

  const sendMessage = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());
      await uploadBytesResumable(storageRef, img).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          await updateDoc(doc(db, "chats", data.chatID), {
            messages: arrayUnion({
              id: uuid(),
              text,
              senderID: loggedUser.uid,
              date: Timestamp.now(),
              img: downloadURL,
            }),
          });
        });
      });
    } else {
      await updateDoc(doc(db, "chats", data.chatID), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderID: loggedUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", loggedUser.uid), {
      [data.chatID + ".lastMessage"]: {
        text,
      },
      [data.chatID + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatID + ".lastMessage"]: {
        text,
      },
      [data.chatID + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };

  return (
    <div className="message-input">
      <input
        type="text"
        className="text-input"
        placeholder="Type something ..."
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />
      <BsEmojiLaughing size={24} className="emoji-btn" />
      <label htmlFor="upload-image">
        <BiImageAdd size={28} />
      </label>
      <input
        type="file"
        name="upload-image"
        id="upload-image"
        onChange={(e) => {
          setImg(e.target.files[0]);
        }}
      />
      <button className="send-btn" onClick={sendMessage}>
        <img src={sendBtn} alt="send-message" />
      </button>
    </div>
  );
};

export default MessageInput;
