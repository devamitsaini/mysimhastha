import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import './index.css';

import MobileNav from './components/layout/MobileNav';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';

import HomePage from './pages/Home';

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
  const [page, setPage] = useState("home");
  const [openMissingForm, setOpenMissingForm] = useState(false);

useEffect(() => {
  window.scrollTo(0, 0);
}, [page]);
useEffect(() => {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
}, []);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [selectedNews, setSelectedNews] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const renderPage = () => {
    switch (page) {
      case "home":  return (<HomePage setPage={setPage} setOpenMissingForm={setOpenMissingForm}/>);
      case "live-darshan":    return <LiveDarshanPage setPage={setPage} />;
      case "hotels":          return <HotelsPage setPage={setPage} />;
      case "missing-persons": return (<MissingPersonsPage
  setPage={setPage}  openOnLoad={openMissingForm}
  setOpenMissingForm={setOpenMissingForm}
/>
  );
      case "simhastha-2028":  return <Simhastha2028Page setPage={setPage} />;
      case "snan-calendar":   return <SnanCalendarPage setPage={setPage} />;
      case "about":           return <AboutPage />;

      case "blog":
  return (
    <BlogPage
      setPage={setPage}
      setSelectedBlog={setSelectedBlog}
    />
  );
      case "blog-details":    return (<BlogDetailsPage 
        blog={selectedBlog}   setPage={setPage}/>);  
        
      case "news":  return ( <NewsPage setPage={setPage} setSelectedNews={setSelectedNews}/>);

      case "news-details": return (<NewsDetailsPage news={selectedNews}
      setPage={setPage}/>);
    }
  };

  return (
    <div className="app-container">
      <Navbar
        page={page}
        setPage={setPage}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
      />
      <Sidebar
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        setPage={setPage}
      />
      <main className="main-content">
  <Suspense fallback={<div>Loading...</div>}>

    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            setPage={setPage}
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
          <BlogPage
            setPage={setPage}
            setSelectedBlog={setSelectedBlog}
          />
        }
      />

      <Route
        path="/news"
        element={
          <NewsPage
            setPage={setPage}
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
    </Routes>

  </Suspense>
</main>
     <MobileNav  page={page} setPage={setPage}/>

    <Footer setPage={setPage} />
    </div>
  );
}

export default App;
