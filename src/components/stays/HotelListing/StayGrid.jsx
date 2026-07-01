import { useEffect, useState } from "react";
import { fetchAllStays } from "../../../services/staysService";
import StayCardV2 from "../StayCardV2";
import StayCardSkeleton from "./StayCardSkeleton";

import "./StayGrid.css";

const StayGrid = ({
  filters,
  setTotal,
}) => {

  const [stays, setStays] = useState([]);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStays();
  }, [filters]);

  const loadStays = async () => {

    setLoading(true);

    const result = await fetchAllStays(filters);
console.log(result.error);
    console.log("🔥 Filters:", filters);
    console.log("🔥 Result:", result);

    if (!result.error) {
      setStays(result.data);
      setTotal(result.count);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="stay-grid">

        {Array.from({ length: 6 }).map((_, index) => (
          <StayCardSkeleton key={index} />
        ))}

      </div>
    );
  }

  if (stays.length === 0) {
    return (

<div className="stay-empty">

    <div className="empty-icon">

        🔍

    </div>

    <h2>No stays found</h2>

    <p>

        We couldn't find any property matching your search.

    </p>

    <button

        className="clear-filter-btn"

        onClick={() =>
            window.location.reload()
        }

    >

        Clear Search

    </button>

</div>

);
  }
console.log("State stays:", stays);
console.log("Length:", stays.length);
return (
  <>


    <div className="stay-grid">

      {stays.map((stay) => (

       <StayCardV2
    key={stay.id}
    stay={stay}
/>

      ))}

    </div>

  </>
);
};

export default StayGrid;