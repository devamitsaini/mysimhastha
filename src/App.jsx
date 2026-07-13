import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import CountdownHub from "./components/common/CountdownHub/CountdownHub";
import MobileNav from "./components/layout/MobileNav";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import Breadcrumb from "./components/layout/Breadcrumb";

import HomePage from "./pages/Home";

// Beautiful loading animation component
const LoadingSpinner = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #FAF6EF 0%, #FFF9F2 100%)',
    zIndex: 9999,
    gap: '20px'
  }}>
    <div style={{
      width: '80px',
      height: '80px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Outer spinning ring */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        border: '4px solid rgba(212, 82, 10, 0.1)',
        borderTop: '4px solid #D4520A',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      
      {/* Inner spinning ring */}
      <div style={{
        position: 'absolute',
        width: '60%',
        height: '60%',
        border: '3px solid rgba(37, 99, 235, 0.1)',
        borderBottom: '3px solid #2563EB',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite reverse'
      }} />
      
      {/* Center dot */}
      <div style={{
        width: '12px',
        height: '12px',
        background: 'linear-gradient(135deg, #D4520A, #2563EB)',
        borderRadius: '50%',
        animation: 'pulse 1.5s ease-in-out infinite'
      }} />
    </div>
    
    {/* Loading text with animation */}
    <div style={{
      fontFamily: 'Georgia, serif',
      fontSize: '18px',
      fontWeight: 600,
      background: 'linear-gradient(90deg, #D4520A, #2563EB, #D4520A)',
      backgroundSize: '200% 100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: 'gradientShift 2s ease infinite',
      letterSpacing: '0.5px'
    }}>
      Loading...
    </div>
    
    <style>{`
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.2); opacity: 0.7; }
      }
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `}</style>
  </div>
);

import GuidesPage from "./pages/GuidesPage";



import { Navigate } from "react-router-dom";
const AboutPage = lazy(() => import("./pages/AboutPage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const NewsDetailsPage = lazy(() => import("./pages/NewsDetailsPage"));
const LiveDarshanPage = lazy(() => import("./pages/LiveDarshan"));
const HotelsPage = lazy(() => import("./pages/Hotels"));
const MissingPersonsPage = lazy(() => import("./pages/MissingPersons"));
const Simhastha2028Page = lazy(() => import("./pages/Simhastha2028Page"));
const SnanCalendarPage = lazy(() => import("./pages/SnanCalendar"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogDetailsPage = lazy(() => import("./pages/BlogDetailsPage"));
const TripPlanner = lazy(() => import("./pages/TripPlanner/TripPlanner"));

const StayMapPage = lazy(() =>
  import("./pages/Stays/StayMapPage")
);

const StayHomePage = lazy(() => import("./pages/Stays/StayHomePage"));

const StayListingPage = lazy(() =>
  import("./pages/Stays/StayListingPage")
);

const StayDetailsPage = lazy(() =>
  import("./pages/Stays/StayDetailsPage")
);

const ListYourPropertyPage = lazy(() =>
  import("./pages/Stays/ListYourPropertyPage")
);

const BusinessThankYouPage = lazy(() =>
  import("./pages/Stays/BusinessThankYouPage")
);

const Simhastha2028 = lazy(() => import("./guides/en/Simhastha2028"));
const Simhastha2028HI = lazy(() => import("./guides/hi/Simhastha2028"));

const Sawan2026 = lazy(() => import("./guides/en/Sawan2026"));
const Sawan2026HI = lazy(() => import("./guides/hi/Sawan2026"));

const Sawan2026Dates = lazy(() => import("./guides/en/Sawan2026Dates"));
const Sawan2026DatesHI = lazy(() => import("./guides/hi/Sawan2026Dates"));

const MahakalShahiSawari = lazy(() => import("./guides/en/MahakalShahiSawari"));
const MahakalShahiSawariHi = lazy(() => import("./guides/hi/MahakalShahiSawari"));
    
const MahakalDarshan = lazy(() => import("./guides/en/MahakalDarshan"));
const MahakalDarshanHi = lazy(() => import("./guides/hi/MahakalDarshan"));

const BhasmaartiGuideEn = lazy(() => import("./guides/en/Bhasmaarti"));
const BhasmaartiGuideHi = lazy(() => import("./guides/hi/Bhasmaarti"));

const KumbhLocations = lazy(() => import("./guides/en/KumbhLocations"));
const KumbhLocationsHi = lazy(() => import("./guides/hi/KumbhLocations"));

const HowToReachUjjain = lazy(() => import("./guides/en/HowToReachUjjain"));
const HowToReachUjjainHi = lazy(() => import("./guides/hi/HowToReachUjjain"));

const MahakalVisitMistakes = lazy(() => import("./guides/en/MahakalVisitMistakes"));
const MahakalVisitMistakesHi = lazy(() => import("./guides/hi/MahakalVisitMistakes"));

const UjjainToOmkareshwarGuide = lazy(() => import("./guides/en/UjjainToOmkareshwarGuide"));
const UjjainToOmkareshwarGuideHi = lazy(() => import("./guides/hi/UjjainToOmkareshwarGuide"));


// V3 Guides

const UjjainItinerary = lazy(() => import("./guides/ujjain-itinerary"));
const KalBhairavTempleGuide = lazy(() => import("./guides/kal-bhairav"));

const TemplesPage = lazy(() => import("./pages/TemplesPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));


function App() {
  const [openMissingForm, setOpenMissingForm] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";    }
  }, []);

  return (
    <div className="app-container">
      <Navbar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <Sidebar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />

      <main className="main-content">
        <Breadcrumb />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage setOpenMissingForm={setOpenMissingForm} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:slug" element={<NewsDetailsPage />} />
            <Route path="/hotels" element={<HotelsPage />} />

            {/* STAYS ROUTES */}
            <Route path="/stays" element={<StayHomePage />} />
            <Route path="/stays/list" element={<StayListingPage />} />
            <Route path="/stays/:slug" element={<StayDetailsPage />} />
            <Route path="/stays/map" element={<StayMapPage />}/>
                       
            <Route path="/temples" element={<TemplesPage />} />
            <Route path="/temple/:slug" element={<TemplesPage />} />
            <Route path="/snan-calendar" element={<SnanCalendarPage />} />
            <Route path="/simhastha-2028" element={<Simhastha2028Page />} />
            <Route path="/live-darshan" element={<LiveDarshanPage />} />
            <Route path="/missing-persons" element={
                        <MissingPersonsPage openOnLoad={openMissingForm} 
                        setOpenMissingForm={setOpenMissingForm}/>} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/trip-planner" element={<TripPlanner />} />

            {/* BUSINESS */}

              <Route
                path="/list-your-property"
                element={<ListYourPropertyPage />}
              />

              {/* Backward Compatibility */}

              <Route
                path="/business/feature-your-property"
                element={<Navigate to="/list-your-property" replace />}
              />

              <Route
                path="/thank-you"
                element={<BusinessThankYouPage />}
              />
                          
            {/* GUIDES ROUTES */}
              <Route path="/guides" element={<GuidesPage />} />

              {/* English */}
              <Route path="/guide/simhastha-2028" element={<Simhastha2028 />} />
              <Route path="/guide/sawan-2026" element={<Sawan2026 />} />
              <Route path="/guide/sawan-2026-dates" element={<Sawan2026Dates />} />
              <Route path="/guide/mahakal-shahi-sawari" element={<MahakalShahiSawari />} />
              <Route path="/guide/mahakal-darshan" element={<MahakalDarshan />} />
              <Route path="/guide/bhasma-arti" element={<BhasmaartiGuideEn />} />
              <Route path="/guide/kumbh-locations" element={<KumbhLocations />} />
              <Route path="/guide/how-to-reach-ujjain" element={<HowToReachUjjain />} />
              <Route path="/guide/mahakal-visit-mistakes" element={<MahakalVisitMistakes />} />
              <Route path="/guide/ujjain-to-omkareshwar" element={<UjjainToOmkareshwarGuide />}/>
              <Route path="/guide/2-3-day-ujjain-itinerary"  element={<UjjainItinerary />} />
              <Route path="/guide/kal-bhairav-temple-guide" element={<KalBhairavTempleGuide />} />

              {/* Hindi */}
              <Route path="/hi/guide/simhastha-2028" element={<Simhastha2028HI />} />
              <Route path="/hi/guide/sawan-2026" element={<Sawan2026HI />} />
              <Route path="/hi/guide/sawan-2026-dates" element={<Sawan2026DatesHI />} />
              <Route path="/hi/guide/mahakal-shahi-sawari" element={<MahakalShahiSawariHi />} />
              <Route path="/hi/guide/mahakal-darshan" element={<MahakalDarshanHi />} />
              <Route path="/hi/guide/bhasma-arti" element={<BhasmaartiGuideHi />} />
              <Route path="/hi/guide/kumbh-locations" element={<KumbhLocationsHi />} />
              <Route path="/hi/guide/how-to-reach-ujjain" element={<HowToReachUjjainHi />} />
              <Route path="/hi/guide/mahakal-visit-mistakes" 
              element={<MahakalVisitMistakesHi />}/>
              <Route path="/hi/guide/ujjain-to-omkareshwar" element={<UjjainToOmkareshwarGuideHi/>}/>
              <Route path="/hi/guide/2-3-day-ujjain-itinerary"element={<UjjainItinerary />}/>
              <Route path="/hi/guide/kal-bhairav-temple-guide" element={<KalBhairavTempleGuide />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      <MobileNav />
      <Footer />
      <ToastContainer position="bottom-right" autoClose={3000} newestOnTop closeOnClick pauseOnHover theme="light" />
    </div>
  );
}

export default App;
