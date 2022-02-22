import React from "react";
import "./searchbar.scss";

const SearchBar = ({ onSearch }) => {
  function handleOnSearch() {
    const input = document.getElementById("Search");
    onSearch(input.value);
  }
  return (
    <div>
      <input
        id="Search"
        type="text"
        className="search"
        autoComplete="off"
        placeholder="Search..."
        onChange={handleOnSearch}
      />
    </div>
  );
};

export default SearchBar;
