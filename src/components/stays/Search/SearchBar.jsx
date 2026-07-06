import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiMapPin,
  FiHome,
} from "react-icons/fi";
import { MdCurrencyRupee } from "react-icons/md";

import "./SearchBar.css";

export default function SearchBar() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [propertyType, setPropertyType] = useState("Hotel");
const [location, setLocation] = useState("Near Mahakal Mandir");
const [budget, setBudget] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (search) params.append("search", search);
    if (propertyType) params.append("type", propertyType);
    if (location) params.append("location", location);
    if (budget) params.append("budget", budget);

    navigate(`/stays/list?${params.toString()}`);
  };

  return (
    <div className="stay-search-card">

      <h3 className="search-heading">
        Find Your Stay
      </h3>

      {/* Search */}

      <div className="stay-search-box full-width">

        <div className="stay-input">

          <FiSearch />

          <input
            type="text"
            placeholder="Search property, landmark or locality"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </div>

      {/* Filters */}

      <div className="search-filter-row">

        <div className="stay-search-box">

          <label>Property</label>

          <div className="stay-input">

            <FiHome />

            <select
  value={propertyType}
  onChange={(e) => setPropertyType(e.target.value)}
>
  <option value="Hotel">Hotels</option>
  <option value="Homestay">Homestays</option>
  <option value="Guest House">Guest Houses</option>
  <option value="Dharamshala">Dharamshalas</option>
</select>

          </div>

        </div>

        <div className="stay-search-box">

          <label>Location</label>

          <div className="stay-input">

            <FiMapPin />

           <select
  value={location}
  onChange={(e) => setLocation(e.target.value)}
>
  <option value="Ujjain">Ujjain</option>
  <option value="Mahakal Temple">Mahakal Temple</option>
  <option value="Mahakal Lok">Mahakal Lok</option>
  <option value="Ram Ghat">Ram Ghat</option>
  <option value="Freeganj">Freeganj</option>
  <option value="Nanakheda">Nanakheda</option>
</select>

          </div>

        </div>

        <div className="stay-search-box">

          <label>Budget</label>

          <div className="stay-input">

            <MdCurrencyRupee />

            <select
  value={budget}
  onChange={(e) => setBudget(e.target.value)}
>
  <option value="5000">₹0 – ₹5000+</option>
  <option value="1000">Below ₹1000</option>
  <option value="2000">₹1000 – ₹2000</option>
  <option value="3000">₹2000 – ₹3000</option>
  <option value="999999">Above ₹3000</option>
</select>

          </div>

        </div>

        <button
          className="stay-search-button"
          onClick={handleSearch}
        >
          Explore
        </button>

      </div>

    </div>
  );
}