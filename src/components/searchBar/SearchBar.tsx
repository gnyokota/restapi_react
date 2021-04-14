// import libraries:
import React from "react";
//import components:
import { PropsSearch } from "../../types/types";
// import styles:
import "./styles/SearchBar.scss";

const SearchBar = ({ search, handleChange, handleClick }: PropsSearch) => {
  return (
    <div className="searchBar">
      <input
        className="searchBar__input"
        placeholder="search by country name"
        type="text"
        name="search-input"
        onChange={handleChange}
        value={search}
      />
      <button className="searchBar__btn" onClick={handleClick}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
