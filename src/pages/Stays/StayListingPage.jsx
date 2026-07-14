import { useState } from "react";
import ListingHeader from "../../components/stays/Listing/ListingHeader";
import FiltersSidebar from "../../components/stays/Listing/FiltersSidebar";
import PropertyList from "../../components/stays/Listing/PropertyList";
import {
  StayFiltersProvider,
  useStayFilters,
} from "../../context/StayFiltersContext";
import { SEO, SchemaProvider } from "../../seo";

import "./StayListingPage.css";

export default function StayListingPage() {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showMobileSort, setShowMobileSort] = useState(false);

  return (
    <StayFiltersProvider>
      <SEO
        title="All Stays in Ujjain | Hotels, Homestays & Dharamshalas Near Mahakal | MySimhastha"
        description="Browse all verified hotels, homestays, guest houses, dharamshalas and pilgrim accommodations in Ujjain near Mahakaleshwar Temple with filters and live availability."
        canonical="https://www.mysimhastha.com/stays/list"
      />

      <SchemaProvider
        type="stays"
        data={{
          title: "All Stays in Ujjain | Hotels, Homestays & Dharamshalas Near Mahakal",
          description: "Browse all verified hotels, homestays, guest houses, dharamshalas and pilgrim accommodations in Ujjain near Mahakaleshwar Temple.",
          url: "https://www.mysimhastha.com/stays/list",
          about: "Accommodation",
          breadcrumbs: [
            { label: "Home", url: "https://www.mysimhastha.com" },
            { label: "Stays", url: "https://www.mysimhastha.com/stays" },
            { label: "All Listings", url: "https://www.mysimhastha.com/stays/list" },
          ],
        }}
      />

      <div className="stay-list-page">

        <ListingHeader
          onOpenFilters={() => setShowMobileFilters(true)}
          onOpenSort={() => setShowMobileSort(true)}
        />

        <div className="stay-container">

          <div className="listing-layout">

            {/* Desktop Filters */}
            <FiltersSidebar />

            {/* Results */}
            <PropertyList />

          </div>

        </div>

        {/* ==============================
            MOBILE FILTERS
        ============================== */}

        {showMobileFilters && (
          <div
            className="mobile-filters-overlay"
            onClick={() => setShowMobileFilters(false)}
          >
            <div
              className="mobile-filters-sheet"
              onClick={(e) => e.stopPropagation()}
            >

              <div className="mobile-filters-header">

                <h3>Filters</h3>

                <button
                  type="button"
                  onClick={() => setShowMobileFilters(false)}
                >
                  ✕
                </button>

              </div>

              <div className="mobile-filters-content">

                <FiltersSidebar />

              </div>

            </div>
          </div>
        )}

        {/* ==============================
            MOBILE SORT
        ============================== */}

        {showMobileSort && (
          <div
            className="mobile-filters-overlay"
            onClick={() => setShowMobileSort(false)}
          >
            <div
              className="mobile-filters-sheet sort-sheet"
              onClick={(e) => e.stopPropagation()}
            >

              <div className="mobile-filters-header">

                <h3>Sort By</h3>

                <button
                  type="button"
                  onClick={() => setShowMobileSort(false)}
                >
                  ✕
                </button>

              </div>

              <div className="mobile-filters-content">

                <SortOptions
                  onClose={() => setShowMobileSort(false)}
                />

              </div>

            </div>
          </div>
        )}

      </div>
    </StayFiltersProvider>
  );
}

/* =====================================
   SORT OPTIONS
===================================== */

function SortOptions({ onClose }) {

  const {
    sort,
    setSort,
  } = useStayFilters();

  const options = [
    {
      value: "featured",
      label: "Recommended",
    },
    {
      value: "price_low",
      label: "Price: Low to High",
    },
    {
      value: "price_high",
      label: "Price: High to Low",
    },
    {
      value: "rating",
      label: "Highest Rated",
    },
    {
      value: "newest",
      label: "Newest",
    },
  ];

  return (
    <div className="sort-options">

      {options.map((option) => (

        <label
          key={option.value}
          className="sort-option"
        >

          <input
            type="radio"
            name="sort"
            value={option.value}
            checked={sort === option.value}
            onChange={() => {
              setSort(option.value);
              onClose();
            }}
          />

          <span>{option.label}</span>

        </label>

      ))}

    </div>
  );
}