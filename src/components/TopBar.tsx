import React from "react";
import { BsCameraVideoFill, BsThreeDots } from "react-icons/bs";

const TopBar = () => {
  return (
    <div className="top-bar">
      <span>Elony</span>
      <span className="top-bar-btns">
        <BsCameraVideoFill />
        <BsThreeDots />
      </span>
    </div>
  );
};

export default TopBar;
