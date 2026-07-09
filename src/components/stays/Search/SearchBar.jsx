import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Select, { components } from "react-select";

import {
  FiSearch,
  FiMapPin,
  FiHome,
} from "react-icons/fi";

import { MdCurrencyRupee } from "react-icons/md";

import { searchStays } from "../../../services/staysService";

import "./SearchBar.css";

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props} />
);

const selectStyles = {
  menuPortal: (base) => ({
    ...base,
    zIndex: 99999,
  }),

  menu: (base) => ({
    ...base,
    borderRadius: 18,
    overflow: "hidden",
    boxShadow: "0 18px 45px rgba(15,23,42,.16)",
    marginTop: 8,
    zIndex: 99999,
  }),

  menuList: (base) => ({
    ...base,
    padding: 8,
    maxHeight: 280,
  }),
};

export default function SearchBar() {
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const suggestionsRef = useRef(null);

  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [propertyType, setPropertyType] = useState({
    value: "",
    label: "All Types",
  });

  const [location, setLocation] = useState({
    value: "",
    label: "Anywhere",
  });

  const [budget, setBudget] = useState({
    value: "",
    label: "Any Budget",
  });

  const propertyOptions = [
    { value: "", label: "All Types" },
    { value: "Hotel", label: "Hotel" },
    { value: "Homestay", label: "Homestay" },
    { value: "Guest House", label: "Guest House" },
    { value: "Dharamshala", label: "Dharamshala" },
  ];

  const locationOptions = [
    { value: "", label: "Anywhere" },
    { value: "Mahakal Temple", label: "Mahakal Temple" },
    { value: "Mahakal Lok", label: "Mahakal Lok" },
    { value: "Ram Ghat", label: "Ram Ghat" },
    { value: "Freeganj", label: "Freeganj" },
    { value: "Nanakheda", label: "Nanakheda" },
  ];

  const budgetOptions = [
    { value: "", label: "Any Budget" },
    { value: "0-1000", label: "Below ₹1000" },
    { value: "1000-2000", label: "₹1000 – ₹2000" },
    { value: "2000-5000", label: "₹2000 – ₹5000" },
    { value: "5000+", label: "₹5000+" },
  ];

  // Debounced search effect
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (search.trim().length >= 1) {
        const { data } = await searchStays(search.trim(), 8);
        setSuggestions(data || []);
        setShowSuggestions(true);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // Click outside handler
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSearch() {
    setShowSuggestions(false);
    const params = new URLSearchParams();

    if (search.trim()) {
      params.append("search", search.trim());
    }

    if (propertyType?.value) {
      params.append("type", propertyType.value);
    }

    if (location?.value) {
      params.append("location", location.value);
    }

    if (budget?.value) {
      params.append("budget", budget.value);
    }

    navigate(`/stays/list?${params.toString()}`);
  }

  function handleSuggestionClick(suggestion) {
    setSearch(suggestion.name);
    setShowSuggestions(false);
    handleSearch();
  }

  return (
    <div className="stay-search-card">

      <h3 className="search-heading">
        Find Your Stay
      </h3>

      {/* Search */}

      <div className="stay-search-box full-width" ref={searchInputRef}>

        <div className="stay-input">

          <FiSearch />

          <input
            type="text"
            placeholder="Search property, landmark or locality"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => search.trim().length > 0 && setShowSuggestions(true)}
          />

        </div>

        {/* Suggestions Dropdown */}

        {showSuggestions && suggestions.length > 0 && (
          <div className="search-suggestions" ref={suggestionsRef}>
            {suggestions.map((suggestion) => (
              <div
                key={suggestion.id}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <FiSearch className="suggestion-icon" />
                <div className="suggestion-content">
                  <span className="suggestion-name">{suggestion.name}</span>
                  {suggestion.locality && (
                    <span className="suggestion-locality">{suggestion.locality}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Filters */}

      <div className="search-filters">

        {/* Property */}

        <div className="search-select">

          <label>Property</label>

          <div className="react-select-wrap">

            <FiHome className="select-icon" />

            <Select
              classNamePrefix="stay"
              value={propertyType}
              options={propertyOptions}
              onChange={setPropertyType}
              isSearchable={false}
              components={{ DropdownIndicator }}
              styles={selectStyles}
              menuPortalTarget={document.body}
              menuPosition="fixed"
              maxMenuHeight={280}
            />

          </div>

        </div>

        {/* Location */}

        <div className="search-select">

          <label>Location</label>

          <div className="react-select-wrap">

            <FiMapPin className="select-icon" />

            <Select
              classNamePrefix="stay"
              value={location}
              options={locationOptions}
              onChange={setLocation}
              isSearchable={false}
              components={{ DropdownIndicator }}
              styles={selectStyles}
              menuPortalTarget={document.body}
              menuPosition="fixed"
              maxMenuHeight={280}
            />

          </div>

        </div>

        {/* Budget */}

        <div className="search-select">

          <label>Budget</label>

          <div className="react-select-wrap">

            <MdCurrencyRupee className="select-icon" />

            <Select
              classNamePrefix="stay"
              value={budget}
              options={budgetOptions}
              onChange={setBudget}
              isSearchable={false}
              components={{ DropdownIndicator }}
              styles={selectStyles}
              menuPortalTarget={document.body}
              menuPosition="fixed"
              maxMenuHeight={280}
            />

          </div>

        </div>

        <button
          className="search-btn"
          onClick={handleSearch}
        >
          Explore
        </button>

      </div>

    </div>
  );
}