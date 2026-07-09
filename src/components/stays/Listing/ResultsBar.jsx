import { FiSliders, FiMap } from "react-icons/fi";

import { useStayFilters } from "../../../context/StayFiltersContext";

import { FiNavigation } from "react-icons/fi";

import Select, { components } from "react-select";

import "./ResultsBar.css";

const sortOptions = [
  { value: "featured", label: "Recommended" },
  { value: "price_low", label: "Price: Low to High" },
  { value: "price_high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest" },
];

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props} />
);

const sortSelectStyles = {
  menuPortal: (base) => ({
    ...base,
    zIndex: 99999,
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 12,
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

export default function ResultsBar() {

  const {
  count,
  sort,
  setSort,
  findNearbyHotels,
} = useStayFilters();

  const currentSort = sortOptions.find(opt => opt.value === sort) || sortOptions[0];

  return (

    <div className="results-bar">

      <div className="results-left">

        <h3>{count} Stays Found</h3>

        <span>Near Mahakaleshwar Temple</span>

      </div>

      <div className="results-right">

              <button
  className="map-btn near-me-btn"
  onClick={findNearbyHotels}
>
  <FiNavigation />
  Near Me
</button>

        <div className="sort-box">

          <FiSliders />

          <Select
            classNamePrefix="stay"
            value={currentSort}
            options={sortOptions}
            onChange={(selected) => selected && setSort(selected.value)}
            components={{ DropdownIndicator }}
            styles={sortSelectStyles}
            menuPortalTarget={document.body}
            menuPosition="fixed"
            maxMenuHeight={280}
            isSearchable={false}
          />

        </div>

      </div>

    </div>

  );

}
