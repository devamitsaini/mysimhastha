import ListingHeader from "../../components/stays/Listing/ListingHeader";
import FiltersSidebar from "../../components/stays/Listing/FiltersSidebar";
import PropertyList from "../../components/stays/Listing/PropertyList";
import {
  StayFiltersProvider,
} from "../../context/StayFiltersContext";

import "./StayListingPage.css";

export default function StayListingPage() {
  return (
    <StayFiltersProvider>

<div className="stay-list-page">

      <ListingHeader />

      <div className="stay-container">

        <div className="listing-layout">

          {/* Left Sidebar */}
          <FiltersSidebar />

          {/* Right Content */}
          <PropertyList />

        </div>

      </div>

    </div>

</StayFiltersProvider>
  );
}