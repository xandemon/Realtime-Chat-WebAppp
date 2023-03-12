import React from "react";
import avatar3 from "../assets/avatar3.png";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search users" className="search-input" />
      <RiSearchLine className="search-icon" />
      <div className="search-results">
        <img src={avatar3} alt="profile image" className="search-avatar" />
        <span>Elony</span>
      </div>
    </div>
  );
};

export default SearchBar;
