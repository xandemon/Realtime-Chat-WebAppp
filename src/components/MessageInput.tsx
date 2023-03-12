import React from "react";
import { BsEmojiLaughing } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";
import sendBtn from "../assets/sendBtn.png";

const MessageInput = () => {
  return (
    <div className="message-input">
      <textarea className="text-input"></textarea>
      <BsEmojiLaughing size={24} className="emoji-btn" />
      <label htmlFor="upload-image">
        <BiImageAdd size={28} />
      </label>
      <input type="file" name="upload-image" id="upload-image" />
      <button className="send-btn">
        <img src={sendBtn} alt="send-message" />
      </button>
    </div>
  );
};

export default MessageInput;
