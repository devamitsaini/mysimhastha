import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";


import MobileNav from "./components/layout/MobileNav";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import Breadcrumb from "./components/layout/Breadcrumb";

import HomePage from "./pages/Home";
import Simhastha2028 from "./guides/en/Simhastha2028";
import Simhastha2028HI from "./guides/hi/Simhastha2028";
import Sawan2026 from "./guides/en/Sawan2026";
import Sawan2026HI from "./guides/hi/Sawan2026";
import GuidesPage from "./pages/GuidesPage";
import Sawan2026Dates from "./guides/en/Sawan2026Dates";
import Sawan2026DatesHI from "./guides/hi/Sawan2026Dates";
import MahakalShahiSawari from "./guides/en/MahakalShahiSawari";
import MahakalShahiSawariHi from "./guides/hi/MahakalShahiSawari";

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

            <Route
              path="/news"
              element={
                <NewsPage
                  setSelectedNews={setSelectedNews}
                />
              }
            />

            <Route
              path="/hotels"
              element={<HotelsPage />}
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
            path="/hi/sawan-2026-dates"
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

          </Routes>
        </Suspense>
      </main>

      <MobileNav />
      <Footer />
    </div>
  );
}

export default App;