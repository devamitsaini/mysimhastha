import { useEffect, useRef, useState } from "react";
import {
  FiSearch,
  FiX,
  FiCalendar,
  FiUsers,
  FiMinus,
  FiPlus,
  FiChevronLeft,
  FiEdit2,
} from "react-icons/fi";

import "./SearchBar.css";

const DEFAULT_GUESTS = { rooms: 1, adults: 2, children: 0 };

const todayStr = () => new Date().toISOString().split("T")[0];

const addDays = (dateStr, days) => {
  const d = dateStr ? new Date(dateStr) : new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().split("T")[0];
};

const formatDate = (dateStr) => {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
};

const SearchBar = ({ filters, setFilters }) => {
  const [searchValue, setSearchValue] = useState(filters.search || "");
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [mobileEditOpen, setMobileEditOpen] = useState(false);

  const guestsRef = useRef(null);

  const guests = filters.guests || DEFAULT_GUESTS;
  const checkIn = filters.checkIn || "";
  const checkOut = filters.checkOut || "";

  // Keep local input synced if filters change externally
  useEffect(() => {
    setSearchValue(filters.search || "");
  }, [filters.search]);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setFilters((prev) => ({
        ...prev,
        search: searchValue,
        page: 1,
      }));
    }, 400);

    return () => clearTimeout(timer);
  }, [searchValue, setFilters]);

  // Close guests popover on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (guestsRef.current && !guestsRef.current.contains(e.target)) {
        setGuestsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const commitSearch = () => {
    setFilters((prev) => ({
      ...prev,
      search: searchValue,
      page: 1,
    }));
  };

  const handleSearchChange = (e) => setSearchValue(e.target.value);

  const clearSearch = () => {
    setSearchValue("");
    setFilters((prev) => ({ ...prev, search: "", page: 1 }));
  };

  const changeCheckIn = (e) => {
    const value = e.target.value;
    setFilters((prev) => {
      const next = { ...prev, checkIn: value, page: 1 };
      // push check-out forward if it's now before/equal check-in
      if (!prev.checkOut || prev.checkOut <= value) {
        next.checkOut = addDays(value, 1);
      }
      return next;
    });
  };

  const changeCheckOut = (e) => {
    setFilters((prev) => ({ ...prev, checkOut: e.target.value, page: 1 }));
  };

  const updateGuests = (key, delta) => {
    setFilters((prev) => {
      const current = prev.guests || DEFAULT_GUESTS;
      let value = current[key] + delta;

      if (key === "rooms") value = Math.max(1, Math.min(10, value));
      if (key === "adults") value = Math.max(1, Math.min(20, value));
      if (key === "children") value = Math.max(0, Math.min(10, value));

      return {
        ...prev,
        guests: { ...current, [key]: value },
        page: 1,
      };
    });
  };

  const guestsSummary = `${guests.rooms} Room${guests.rooms > 1 ? "s" : ""}, ${
    guests.adults + guests.children
  } Guest${guests.adults + guests.children > 1 ? "s" : ""}`;

  const runSearch = () => {
    commitSearch();
    setMobileEditOpen(false);
    setGuestsOpen(false);
  };

  const GuestsPopover = (
    <div className="guests-popover">
      {[
        { key: "rooms", label: "Rooms", min: 1 },
        { key: "adults", label: "Adults", sub: "Ages 13+", min: 1 },
        { key: "children", label: "Children", sub: "Ages 0-12", min: 0 },
      ].map((row) => (
        <div className="guests-row" key={row.key}>
          <div className="guests-row-label">
            <strong>{row.label}</strong>
            {row.sub && <span>{row.sub}</span>}
          </div>

          <div className="guests-stepper">
            <button
              type="button"
              onClick={() => updateGuests(row.key, -1)}
              disabled={guests[row.key] <= row.min}
              aria-label={`Decrease ${row.label}`}
            >
              <FiMinus size={14} />
            </button>

            <span>{guests[row.key]}</span>

            <button
              type="button"
              onClick={() => updateGuests(row.key, 1)}
              aria-label={`Increase ${row.label}`}
            >
              <FiPlus size={14} />
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        className="guests-done-btn"
        onClick={() => setGuestsOpen(false)}
      >
        Done
      </button>
    </div>
  );

  const FieldsContent = (
    <>
      {/* Search */}
      <div className="search-field search-field-text">
        <FiSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search hotels, dharamshalas, ashrams..."
          value={searchValue}
          onChange={handleSearchChange}
          onKeyDown={(e) => e.key === "Enter" && commitSearch()}
        />

        {searchValue && (
          <button
            type="button"
            className="clear-search-btn"
            onClick={clearSearch}
            aria-label="Clear search"
          >
            <FiX size={18} />
          </button>
        )}
      </div>

      <div className="search-divider" />

      {/* Check In */}
      <div className="search-field search-field-date">
        <FiCalendar />
        <div className="search-field-body">
          <label htmlFor="check-in-input">Check-in</label>
          <input
            id="check-in-input"
            type="date"
            min={todayStr()}
            value={checkIn}
            onChange={changeCheckIn}
          />
        </div>
      </div>

      <div className="search-divider" />

      {/* Check Out */}
      <div className="search-field search-field-date">
        <FiCalendar />
        <div className="search-field-body">
          <label htmlFor="check-out-input">Check-out</label>
          <input
            id="check-out-input"
            type="date"
            min={addDays(checkIn || todayStr(), 1)}
            value={checkOut}
            onChange={changeCheckOut}
          />
        </div>
      </div>

      <div className="search-divider" />

      {/* Guests */}
      <div className="search-field search-field-guests" ref={guestsRef}>
        <button
          type="button"
          className="guests-trigger"
          onClick={() => setGuestsOpen((o) => !o)}
        >
          <FiUsers />
          <span>{guestsSummary}</span>
        </button>

        {guestsOpen && GuestsPopover}
      </div>

      <button type="button" className="search-btn" onClick={runSearch}>
        <FiSearch size={16} />
        Search
      </button>
    </>
  );

  return (
    <div className="stays-search-wrap">
      {/* Desktop / tablet pill bar */}
      <div className="stays-search">{FieldsContent}</div>

      {/* Mobile collapsed summary bar */}
      <button
        type="button"
        className="stays-search-mobile-summary"
        onClick={() => setMobileEditOpen(true)}
      >
        <div className="mobile-summary-text">
          <strong>{searchValue || "Ujjain Stays"}</strong>
          <span>
            {checkIn && checkOut
              ? `${formatDate(checkIn)} - ${formatDate(checkOut)} · ${guestsSummary}`
              : "Add dates · guests"}
          </span>
        </div>

        <span className="mobile-summary-edit" aria-hidden="true">
          <FiEdit2 size={14} />
        </span>
      </button>

      {/* Mobile full-screen edit sheet */}
      <div className={`stays-search-mobile-sheet ${mobileEditOpen ? "open" : ""}`}>
        <div className="mobile-sheet-header">
          <button
            type="button"
            className="mobile-sheet-back"
            onClick={() => setMobileEditOpen(false)}
            aria-label="Close search"
          >
            <FiChevronLeft size={22} />
          </button>
          <strong>Edit search</strong>
        </div>

        <div className="mobile-sheet-body">{FieldsContent}</div>
      </div>

      {mobileEditOpen && (
        <div
          className="stays-search-mobile-backdrop"
          onClick={() => setMobileEditOpen(false)}
        />
      )}
    </div>
  );
};

export default SearchBar;
