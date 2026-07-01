import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import MobileNav from "./components/layout/MobileNav";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import Breadcrumb from "./components/layout/Breadcrumb";

import HomePage from "./pages/Home";

import GuidesPage from "./pages/GuidesPage";


import { Navigate } from "react-router-dom";
const AboutPage = lazy(() => import("./pages/AboutPage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const NewsDetailsPage = lazy(() => import("./pages/NewsDetailsPage"));
const LiveDarshanPage = lazy(() => import("./pages/LiveDarshan"));
const HotelsPage = lazy(() => import("./pages/Hotels"));
const MissingPersonsPage = lazy(() => import("./pages/MissingPersons"));
const Simhastha2028Page = lazy(() => import("./pages/Simhastha2028"));
const SnanCalendarPage = lazy(() => import("./pages/SnanCalendar"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogDetailsPage = lazy(() => import("./pages/BlogDetailsPage"));
const StaysPage = lazy(() => import("./pages/Stays/Stays"));
const StayDetailsPage = lazy(() => import("./pages/StayDetails/StayDetails"));
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

function App() {
  const [openMissingForm, setOpenMissingForm] = useState(false);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);


  const [selectedNews, setSelectedNews] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="app-container">
<Navbar
  drawerOpen={drawerOpen}
  setDrawerOpen={setDrawerOpen}
/>

<Sidebar
  drawerOpen={drawerOpen}
  setDrawerOpen={setDrawerOpen}
/>

      <main className="main-content">

  <Breadcrumb />

  <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  setOpenMissingForm={setOpenMissingForm}
                />
              }
            />

            <Route
              path="/about"
              element={<AboutPage />}
            />

            <Route
              path="/blog"
              element={
               <BlogPage />
              }
            />

            {/* BLOG DETAILS */}
            <Route
            path="/blog/:slug"
            element={<BlogDetailsPage />}
            />

            <Route path="/news" element={<NewsPage />} />

<Route
  path="/news/:slug"
  element={<NewsDetailsPage />}
/>

            <Route
              path="/hotels"
              element={<HotelsPage />}
            />
                        <Route
              path="/stays"
              element={<StaysPage />}
            />

            <Route
              path="/stays/:slug"
              element={<StayDetailsPage />}
            />

            <Route
              path="/snan-calendar"
              element={<SnanCalendarPage />}
            />
            <Route
            path="/news-details"
            element={<NewsDetailsPage news={selectedNews} />}
            />
            <Route
              path="/simhastha-2028"
              element={<Simhastha2028Page />}
            />

            <Route
              path="/live-darshan"
              element={<LiveDarshanPage />}
            />

            <Route
              path="/missing-persons"
              element={
                <MissingPersonsPage
                  openOnLoad={openMissingForm}
                  setOpenMissingForm={setOpenMissingForm}
                />
              }
            />

            <Route
              path="/guides"
              element={<GuidesPage />}
            />
            <Route
              path="/guide"
              element={<GuidesPage />}
            />
            <Route
              path="/hi/guides"
              element={<GuidesPage />}
            />
            <Route
              path="/hi/guide"
              element={<GuidesPage />}
            />
            <Route
            path="/guide/simhastha-2028"
            element={<Simhastha2028 />}
            />
            <Route
            path="/hi/guide/simhastha-2028"
            element={<Simhastha2028HI />}
            />

            <Route
            path="/guide/sawan-2026"
            element={<Sawan2026 />}
            />
            <Route
            path="/hi/guide/sawan-2026"
            element={<Sawan2026HI />}
            />

            <Route
              path="/guide/sawan-2026-dates"
              element={<Sawan2026Dates />}
            />

            <Route
            path="/hi/guide/sawan-2026-dates"
            element={<Sawan2026DatesHI />}
            />

            <Route
              path="/guide/mahakal-shahi-sawari"
              element={<MahakalShahiSawari />}
            />
            <Route
              path="/hi/guide/mahakal-shahi-sawari"
              element={<MahakalShahiSawariHi />}
            />

            <Route
              path="/guide/mahakal-darshan"
              element={<MahakalDarshan />}
            />
            <Route
              path="/hi/guide/mahakal-darshan"
              element={<MahakalDarshanHi />}
            />
            <Route
              path="/guide/bhasma-arti"
              element={<BhasmaartiGuideEn />}
            />

            <Route
              path="/hi/guide/bhasma-arti"
              element={<BhasmaartiGuideHi />}
            />
            <Route
              path="/guide/kumbh-locations"
              element={<KumbhLocations />}
            />

            <Route
              path="/hi/guide/kumbh-locations"
              element={<KumbhLocationsHi />}
            />
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
           </Routes>
        </Suspense>
      </main>

      <MobileNav />
      <Footer />
      <ToastContainer
      position="bottom-right"
      autoClose={3000}
      newestOnTop
      closeOnClick
      pauseOnHover
      theme="light"
    />
    </div>
  );
}

export default App;