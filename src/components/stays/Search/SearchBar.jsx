import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Select, { components } from "react-select";

import {
  FiSearch,
  FiMapPin,
  FiHome,
  FiX,
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

  const [propertyOptions, setPropertyOptions] = useState([
    { value: "", label: "All Types" },
  ]);
  const [locationOptions, setLocationOptions] = useState([
    { value: "", label: "Anywhere" },
  ]);
  const [budgetOptions] = useState([
    { value: "", label: "Any Budget" },
    { value: "0-1000", label: "Below ₹1000" },
    { value: "1000-2000", label: "₹1000 – ₹2000" },
    { value: "2000-5000", label: "₹2000 – ₹5000" },
    { value: "5000+", label: "₹5000+" },
  ]);

  useEffect(() => {
    async function loadOptions() {
      try {
        const [typesResult, localitiesResult] = await Promise.all([
          fetchAllStayTypes(),
          fetchAllLocalities()
        ]);

        const typeOptions = [
          { value: "", label: "All Types" },
          ...(typesResult.data || []).map(type => ({
            value: type,
            label: type
          }))
        ];
        setPropertyOptions(typeOptions);

        const locationOpts = [
          { value: "", label: "Anywhere" },
          ...(localitiesResult.data || []).map(locality => ({
            value: locality,
            label: locality
          }))
        ];
        setLocationOptions(locationOpts);
      } catch (error) {
        console.error('Error loading search options:', error);
      }
    }

    loadOptions();
  }, []);

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

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
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
    <div className="ms-search-card">

      <h3 className="ms-search-heading">
        Find Your Stay
      </h3>

      <div
        className="ms-search-box ms-search-full"
        ref={searchInputRef}
      >

        <div className="ms-search-input">

          <FiSearch />

          <input
            type="text"
            placeholder="Search property, landmark or locality"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() =>
              search.trim().length > 0 &&
              setShowSuggestions(true)
            }
          />

          {search && (
            <button
              className="ms-search-clear"
              type="button"
              onClick={() => setSearch("")}
            >
              <FiX />
            </button>
          )}

        </div>

        {showSuggestions && suggestions.length > 0 && (

          <div
            className="ms-search-suggestions"
            ref={suggestionsRef}
          >

            {suggestions.map((suggestion) => (

              <div
                key={suggestion.id}
                className="ms-search-item"
                onClick={() =>
                  handleSuggestionClick(suggestion)
                }
              >

                <FiSearch className="ms-search-item-icon" />

                <div className="ms-search-item-content">

                  <span className="ms-search-item-title">
                    {suggestion.name}
                  </span>

                  {suggestion.locality && (
                    <span className="ms-search-item-subtitle">
                      {suggestion.locality}
                    </span>
                  )}

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

      <div className="ms-search-filters">

        <div className="ms-search-select">

          <label>Property</label>

          <div className="ms-search-select-wrap">

            <FiHome className="ms-search-select-icon" />

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
                <div className="ms-search-select">

          <label>Location</label>

          <div className="ms-search-select-wrap">

            <FiMapPin className="ms-search-select-icon" />

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

        <div className="ms-search-select">

          <label>Budget</label>

          <div className="ms-search-select-wrap">

            <MdCurrencyRupee className="ms-search-select-icon" />

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
          className="ms-search-btn"
          onClick={handleSearch}
        >
          Explore
        </button>

      </div>

    </div>
  );
}