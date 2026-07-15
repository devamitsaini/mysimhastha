import React, { lazy, Suspense, memo } from "react";
import { SEO, SchemaProvider } from "../seo";
import "../styles/Home.css";  

/* ===========================
   HOME COMPONENTS - LAZY LOADED
=========================== */

const Hero = lazy(() => import("../components/home/Hero/Hero"));
const SearchBar = lazy(() => import("../components/ui/SearchBar/SearchBar"));
const CountdownTimer = lazy(() => import("../components/home/CountdownTimer/CountdownTimer"));
const QuickAccess = lazy(() => import("../components/home/QuickAccess/QuickAccess"));
const LiveUpdates = lazy(() => import("../components/home/LiveUpdates/LiveUpdates"));
const AITripPlanner = lazy(() => import("../components/home/AITripPlanner/AITripPlanner"));
const SacredPlaces = lazy(() => import("../components/home/SacredPlaces/SacredPlaces"));
const FeaturedStays = lazy(() => import("../components/home/FeaturedStays/FeaturedStays"));
const PopularGuides = lazy(() => import("../components/home/PopularGuides/PopularGuides"));
const LatestNews = lazy(() => import("../components/home/LatestNews/LatestNews"));
const MissingPersonsHome = lazy(() => import("../components/home/MissingPersonsHome/MissingPersonsHome"));
const GalleryHome = lazy(() => import("../components/home/GalleryHome/GalleryHome"));
const FAQPreview = lazy(() => import("../components/home/FAQPreview/FAQPreview"));
const Newsletter = lazy(() => import("../components/home/Newsletter/Newsletter"));

// Loading placeholder
const SectionLoader = () => (
  <div style={{ 
    minHeight: "200px", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center" 
  }}>
    <div style={{
      width: "40px",
      height: "40px",
      border: "3px solid var(--border)",
      borderTopColor: "var(--saffron)",
      borderRadius: "50%",
      animation: "spin 0.8s linear infinite"
    }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

/* ===========================
   HOME PAGE
=========================== */

const Home = memo(() => {
  return (
    <>
      <SEO
        title="MySimhastha | Complete Ujjain Pilgrimage Portal | Mahakal, Simhastha 2028"
        description="Your complete Ujjain pilgrimage guide. Plan Simhastha 2028, Mahakaleshwar Temple darshan, Bhasma Aarti, hotels, live darshan, and spiritual travel with trusted information."
        canonical="https://www.mysimhastha.com"
        ogTitle="MySimhastha | Complete Ujjain Pilgrimage Portal | Mahakal, Simhastha 2028"
        ogDescription="Your complete Ujjain pilgrimage guide. Plan Simhastha 2028, Mahakaleshwar Temple darshan, Bhasma Aarti, hotels, live darshan, and spiritual travel with trusted information."
        twitterTitle="MySimhastha | Complete Ujjain Pilgrimage Portal | Mahakal, Simhastha 2028"
        twitterDescription="Your complete Ujjain pilgrimage guide. Plan Simhastha 2028, Mahakaleshwar Temple darshan, Bhasma Aarti, hotels, live darshan, and spiritual travel with trusted information."
      />

      <SchemaProvider
        type="home"
        data={{
          title: "MySimhastha | Complete Ujjain Pilgrimage Portal | Mahakal, Simhastha 2028",
          description: "Your complete Ujjain pilgrimage guide. Plan Simhastha 2028, Mahakaleshwar Temple darshan, Bhasma Aarti, hotels, live darshan, and spiritual travel with trusted information.",
          url: "https://www.mysimhastha.com",
          about: "Ujjain Pilgrimage",
        }}
      />

      <main className="home-page">
      {/* Hero - Critical, load immediately */}
      <Suspense fallback={<SectionLoader />}>
        <Hero />
      </Suspense>

      {/* Countdown Timer */}
      <Suspense fallback={<SectionLoader />}>
        <CountdownTimer />
      </Suspense>

      {/* Live Updates */}
      <Suspense fallback={<SectionLoader />}>
        <LiveUpdates />
      </Suspense>

      {/* Quick Access */}
      <Suspense fallback={<SectionLoader />}>
        <QuickAccess />
      </Suspense>

      {/* AI Trip Planner */}
      <Suspense fallback={<SectionLoader />}>
        <AITripPlanner />
      </Suspense>

      {/* Sacred Places */}
      <Suspense fallback={<SectionLoader />}>
        <SacredPlaces />
      </Suspense>

      {/* Featured Hotels */}
      <Suspense fallback={<SectionLoader />}>
        <FeaturedStays />
      </Suspense>

      {/* Popular Guides */}
      <Suspense fallback={<SectionLoader />}>
        <PopularGuides />
      </Suspense>

      {/* Latest News */}
      <Suspense fallback={<SectionLoader />}>
        <LatestNews />
      </Suspense>

      {/* Missing Persons */}
      <Suspense fallback={<SectionLoader />}>
        <MissingPersonsHome />
      </Suspense>

      {/* Gallery */}
      <Suspense fallback={<SectionLoader />}>
        <GalleryHome />
      </Suspense>

      {/* FAQ */}
      <Suspense fallback={<SectionLoader />}>
        <FAQPreview />
      </Suspense>

      {/* Newsletter */}
      <Suspense fallback={<SectionLoader />}>
        <Newsletter />
      </Suspense>
      </main>
    </>
  );
});

export default Home;
