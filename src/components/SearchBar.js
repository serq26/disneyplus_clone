import React from "react";

export default function SearchBar({setSearch}) {
  return (
    <input
      className="searchBar"
      onChange={(e) => setSearch(e.target.value)}
      type="text"
      placeholder="Title, character or genre"
    />
  );
}
