import { useStayFilters } from "../../../context/StayFiltersContext";
import "./FiltersSidebar.css";

export default function FiltersSidebar() {

  const {
    stayType,
    setStayType,

    priceMin,
    priceMax,
    setPriceMin,
    setPriceMax,

    rating,
    setRating,

    verified,
    setVerified,

    featured,
    setFeatured,

    clearFilters,
  } = useStayFilters();

  return (

    <aside className="filters-sidebar">

      <div className="filter-card">

        <div className="filter-header">

          <h3>Filters</h3>

          <button onClick={clearFilters}>
            Clear
          </button>

        </div>

        {/* PROPERTY TYPE */}

        <div className="filter-group">

          <h4>Property Type</h4>

          <label>

            <input
              type="radio"
              name="stayType"
              checked={stayType==="all"}
              onChange={()=>setStayType("all")}
            />

            All

          </label>

          <label>

            <input
              type="radio"
              name="stayType"
              checked={stayType==="Hotel"}
              onChange={()=>setStayType("Hotel")}
            />

            Hotels

          </label>

          <label>

            <input
              type="radio"
              name="stayType"
              checked={stayType==="Homestay"}
              onChange={()=>setStayType("Homestay")}
            />

            Homestays

          </label>

          <label>

            <input
              type="radio"
              name="stayType"
              checked={stayType==="Dharamshala"}
              onChange={()=>setStayType("Dharamshala")}
            />

            Dharamshalas

          </label>

          <label>

            <input
              type="radio"
              name="stayType"
              checked={stayType==="Guest House"}
              onChange={()=>setStayType("Guest House")}
            />

            Guest Houses

          </label>

        </div>

        {/* PRICE */}

        <div className="filter-group">

          <h4>Budget</h4>

          <label>

            <input
              type="radio"
              name="budget"
              checked={priceMin===0 && priceMax===1000}
              onChange={()=>{
                setPriceMin(0);
                setPriceMax(1000);
              }}
            />

            ₹0 – ₹1000

          </label>

          <label>

            <input
              type="radio"
              name="budget"
              checked={priceMin===1000 && priceMax===2000}
              onChange={()=>{
                setPriceMin(1000);
                setPriceMax(2000);
              }}
            />

            ₹1000 – ₹2000

          </label>

          <label>

            <input
              type="radio"
              name="budget"
              checked={priceMin===2000 && priceMax===5000}
              onChange={()=>{
                setPriceMin(2000);
                setPriceMax(5000);
              }}
            />

            ₹2000 – ₹5000

          </label>

          <label>

            <input
              type="radio"
              name="budget"
              checked={priceMin===5000}
              onChange={()=>{
                setPriceMin(5000);
                setPriceMax(0);
              }}
            />

            ₹5000+

          </label>

        </div>

        {/* RATING */}

        <div className="filter-group">

          <h4>Rating</h4>

          <label>

            <input
              type="radio"
              name="rating"
              checked={rating === 0}
              onChange={() => setRating(0)}
            />

            All Ratings

          </label>

          <label>

            <input
              type="radio"
              name="rating"
              checked={rating === 3}
              onChange={() => setRating(3)}
            />

            3+ Stars

          </label>

          <label>

            <input
              type="radio"
              name="rating"
              checked={rating === 4}
              onChange={() => setRating(4)}
            />

            4+ Stars

          </label>

          <label>

            <input
              type="radio"
              name="rating"
              checked={rating === 4.5}
              onChange={() => setRating(4.5)}
            />

            4.5+ Stars

          </label>

        </div>

        {/* VERIFIED */}

        <div className="filter-group">

          <h4>Property Status</h4>

          <label>

            <input
              type="checkbox"
              checked={verified}
              onChange={(e)=>setVerified(e.target.checked)}
            />

            Verified Only

          </label>

          <label>

            <input
              type="checkbox"
              checked={featured}
              onChange={(e)=>setFeatured(e.target.checked)}
            />

            Featured Only

          </label>

        </div>

      </div>

    </aside>

  );

}