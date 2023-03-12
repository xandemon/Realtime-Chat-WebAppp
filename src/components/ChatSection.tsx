import React from "react";
import ChatMessages from "./ChatMessages";
import MessageInput from "./MessageInput";
import TopBar from "./TopBar";

const ChatSection = () => {
  return (
    <div className="chat-section">
      <TopBar />
      <ChatMessages />
      <MessageInput />
    </div>
  );
};

export default ChatSection;
