import {
  FiSearch,
  FiSliders,
  FiFilter,
  FiMap,
} from "react-icons/fi";
import "./ListingHeader.css";
import { useStayFilters } from "../../../context/StayFiltersContext";
import { useNavigate } from "react-router-dom";


export default function ListingHeader({ onOpenFilters, onOpenSort }) {

  const navigate = useNavigate();
  const {
    search,
    setSearch,
    count,
  } = useStayFilters();

  return (

    <section className="listing-header">

      <div className="stay-container">

        <div className="listing-header-top">

          <div className="listing-title">

            <h1>Hotels & Stays in Ujjain</h1>

            <p>

              Showing {count} verified stays near Mahakaleshwar Temple

            </p>

          </div>

        </div>

        <div className="listing-search">

          <FiSearch />

          <input
            type="text"
            placeholder="Search hotel, homestay or locality..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />

        </div>

        <div className="mobile-action-bar">

          <button className="mobile-action-btn" onClick={onOpenFilters}>

            <FiFilter />

            <span>Filters</span>

          </button>

          <button className="mobile-action-btn" onClick={onOpenSort}>

            <FiSliders />

            <span>Sort</span>

          </button>

                  <button
          className="mobile-action-btn"
          onClick={() => navigate("/stays/map")}
        >
          <FiMap />
          <span>Map</span>
        </button>

        </div>

      </div>

    </section>

  );

}