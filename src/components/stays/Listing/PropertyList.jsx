import ResultsBar from "./ResultsBar";
import ActiveFilters from "./ActiveFilters";
import ListingPropertyCard from "./ListingPropertyCard";

import { useStayFilters } from "../../../context/StayFiltersContext";

import "./PropertyList.css";

export default function PropertyList() {

  const {
    stays,
    loading,
  } = useStayFilters();

  return (

    <div className="property-list-wrapper">

      <ResultsBar />

      <ActiveFilters />

      {loading ? (

        <div
          style={{
            padding: "60px 0",
            textAlign: "center",
          }}
        >
          Loading stays...
        </div>

      ) : (

        <div className="property-list">

          {stays.length === 0 ? (

            <div
              style={{
                padding: "80px 0",
                textAlign: "center",
              }}
            >
              <h2>No stays found</h2>

              <p>
                Try changing your search or filters.
              </p>

            </div>

          ) : (

            stays.map((stay) => (

              <ListingPropertyCard
                key={stay.id}
                stay={stay}
              />

            ))

          )}

        </div>

      )}

    </div>

  );

}