import React from "react";
import ChatSection from "../components/ChatSection";
import SideBar from "../components/SideBar";
import "../styles.scss";

const MainChatApp = () => {
  return (
    <div className="main-chat-app-container">
      <div className="main-chat-app-wrapper">
        <SideBar />
        <ChatSection />
      </div>
    </div>
  );
};

export default MainChatApp;
