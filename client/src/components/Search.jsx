import React from "react";
import SearchIcon from "./../icons/SearchIcon.jsx";

export default function Search({ glossaryQuery, searchPokedex }) {
  return (
    <div className="search-bar">
      <label htmlFor="search"></label>
      <input
        type="text"
        id="search"
        placeholder="Search Pokèmon..."
        ref={glossaryQuery}
        onChange={searchPokedex}
      ></input>
      <SearchIcon />
    </div>
  );
}
