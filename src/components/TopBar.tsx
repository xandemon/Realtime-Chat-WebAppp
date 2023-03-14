import React from "react";
import { BsCameraVideoFill, BsThreeDots } from "react-icons/bs";

const TopBar = () => {
  return (
    <div className="top-bar">
      <span>Elony</span>
      <span className="top-bar-btns">
        <BsCameraVideoFill className="video-call-btn" />
        <BsThreeDots className="more-options-btn" />
      </span>
    </div>
  );
};

export default TopBar;
