import React from "react";
import avatar1 from "../assets/avatar1.png";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search users" className="search-input" />
      <RiSearchLine className="search-icon" />
      <div className="search-results">
        <img src={avatar1} alt="profile image" className="search-avatar" />
        <span>Rijan</span>
      </div>
    </div>
  );
};

export default SearchBar;
