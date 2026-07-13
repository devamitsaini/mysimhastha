import React, { useState } from "react";
import {
  FaSearch,
  FaTimes,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./SearchBar.css";

const SearchBar = ({
  placeholder = "Search temples, hotels, guides...",
  suggestions = [],
  onSearch,
}) => {
  const [query, setQuery] = useState("");

  const filtered = suggestions.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="searchbar">

      <div className="search-input">

        <FaSearch className="search-icon" />

        <input
          type="text"
          value={query}
          placeholder={placeholder}
          onChange={(e) => setQuery(e.target.value)}
        />

        {query && (

          <button
            className="clear-btn"
            onClick={() => setQuery("")}
          >

            <FaTimes />

          </button>

        )}

      </div>

      {query && filtered.length > 0 && (

        <div className="search-dropdown">

          {filtered.slice(0, 6).map((item, index) => (

            <button
              key={index}
              onClick={() => {
                setQuery(item);
                onSearch?.(item);
              }}
            >

              <FaMapMarkerAlt />

              {item}

            </button>

          ))}

        </div>

      )}

      <button
        className="search-btn"
        onClick={handleSearch}
      >

        <FaSearch />

        Search

      </button>

    </div>
  );
};

export default SearchBar;