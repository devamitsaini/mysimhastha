import { FiSliders, FiMap } from "react-icons/fi";

import { useStayFilters } from "../../../context/StayFiltersContext";

import "./ResultsBar.css";

export default function ResultsBar() {

  const {
    count,
    sort,
    setSort,
  } = useStayFilters();

  return (

    <div className="results-bar">

      <div className="results-left">

        <h3>{count} Stays Found</h3>

        <span>Near Mahakaleshwar Temple</span>

      </div>

      <div className="results-right">

        <button className="map-btn">

          <FiMap />

          Map

        </button>

        <div className="sort-box">

          <FiSliders />

          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value)
            }
          >

            <option value="featured">
              Recommended
            </option>

            <option value="price_low">
              Price: Low to High
            </option>

            <option value="price_high">
              Price: High to Low
            </option>

            <option value="rating">
              Highest Rated
            </option>

            <option value="newest">
              Newest
            </option>

          </select>

        </div>

      </div>

    </div>

  );

}