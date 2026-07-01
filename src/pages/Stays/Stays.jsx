
import { useState } from "react";
import { Helmet } from "react-helmet-async";

import "./stays.css";

import Hero from "../../components/stays/Hero";
import StayTypes from "../../components/stays/StayTypes";
import Benefits from "../../components/stays/Benefits";
import FAQ from "../../components/stays/FAQ";
import HotelListing from "../../components/stays/HotelListing/HotelListing";

const Stays = () => {

  const [filters, setFilters] = useState({
    search: "",
    stayType: "all",
    rating: 0,
    verified: false,
    featured: false,
    sort: "featured",
    page: 1,
    limit: 12,
  });
console.log("Filters in Stays:", filters);
  return (
    <>
      <Helmet>

        <title>
          Hotels & Stays in Ujjain | MySimhastha
        </title>

        <meta
          name="description"
          content="Find verified hotels, dharamshalas, guest houses and ashrams near Mahakaleshwar Temple in Ujjain."
        />

        <link
          rel="canonical"
          href="https://mysimhastha.com/stays"
        />

      </Helmet>

      <main className="stays-page">

        <Hero />

        <StayTypes />

        <HotelListing
          filters={filters}
          setFilters={setFilters}
        />

        <Benefits />

        <FAQ />

      </main>

    </>
  );
};

export default Stays;