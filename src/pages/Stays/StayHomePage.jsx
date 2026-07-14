import React from "react";
import { SEO, SchemaProvider } from "../../seo";

import StayHero from "../../components/stays/Hero/StayHero";
import FeaturedProperties from "../../components/stays/Sections/FeaturedProperties";
import PropertyCategories from "../../components/stays/Sections/PropertyCategories";
import PopularLocations from "../../components/stays/Sections/PopularLocations";
import FAQSection from "../../components/stays/Sections/FAQSection";

const StayHomePage = () => {
  return (
    <>
      <SEO
        title="Stays in Ujjain | Hotels, Homestays & Dharamshalas Near Mahakal | MySimhastha"
        description="Browse verified hotels, homestays, guest houses, dharamshalas and pilgrim accommodations in Ujjain near Mahakaleshwar Temple."
        canonical="https://www.mysimhastha.com/stays"
      />

      <SchemaProvider
        type="stays"
        data={{
          title: "Stays in Ujjain | Hotels, Homestays & Dharamshalas Near Mahakal",
          description: "Browse verified hotels, homestays, guest houses, dharamshalas and pilgrim accommodations in Ujjain near Mahakaleshwar Temple.",
          url: "https://www.mysimhastha.com/stays",
          about: "Accommodation",
        }}
      />

      <main className="stay-home-page">

      <StayHero />

      <FeaturedProperties />

      <PropertyCategories />

      <PopularLocations />

      <FAQSection />

      </main>
    </>
  );
};

export default StayHomePage;