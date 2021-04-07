// import libraries:
import React from "react";
// import styles:
import "./styles/SearchBar.scss";

function SearchBar({ search, handleChange }) {
  return (
    <div className="searchBar">
      <input
        className="searchBar__input"
        placeholder="search country"
        type="text"
        name="search-input"
        onChange={handleChange}
        value={search}
      />
      <button className="searchBar__btn">
        <i class="fas fa-search"></i>
      </button>
    </div>
  );
}

export default SearchBar;
