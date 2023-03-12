import React from "react";
import ChatUsers from "./ChatUsers";
import ProfileBar from "./ProfileBar";
import SearchBar from "./SearchBar";

const SideBar = () => {
  return (
    <div className="sidebar">
      <ProfileBar />
      <SearchBar />
      <ChatUsers />
    </div>
  );
};

export default SideBar;
