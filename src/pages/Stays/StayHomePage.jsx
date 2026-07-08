import React from "react";

import StayHero from "../../components/stays/Hero/StayHero";
import FeaturedProperties from "../../components/stays/Sections/FeaturedProperties";
import PropertyCategories from "../../components/stays/Sections/PropertyCategories";
import PopularLocations from "../../components/stays/Sections/PopularLocations";
import FAQSection from "../../components/stays/Sections/FAQSection";

const StayHomePage = () => {
  return (
    <main className="stay-home-page">

      <StayHero />

      <FeaturedProperties />

      <PropertyCategories />

      <PopularLocations />

      <FAQSection />

    </main>
  );
};

export default StayHomePage;