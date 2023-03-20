import React, { useContext } from "react";
import { BsCameraVideoFill, BsThreeDots } from "react-icons/bs";
import { ChatContext } from "../context/ChatContext";

const TopBar = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="top-bar">
      <span>{data.user?.displayName}</span>
      <span className="top-bar-btns">
        <BsCameraVideoFill className="video-call-btn" />
        <BsThreeDots className="more-options-btn" />
      </span>
    </div>
  );
};

export default TopBar;
