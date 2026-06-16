import React, { useState, useEffect } from 'react';
import './index.css';

import MobileNav from './components/layout/MobileNav';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';


import AboutPage from "./pages/AboutPage";
import HomePage from './pages/Home';
import NewsPage from "./pages/NewsPage";
import LiveDarshanPage from './pages/LiveDarshan';
import HotelsPage from './pages/Hotels';
import MissingPersonsPage from './pages/MissingPersons';
import Simhastha2028Page from './pages/Simhastha2028';
import NotFoundPage from './pages/NotFound';
import SnanCalendarPage from './pages/SnanCalendar';
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";

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
  const [drawerOpen, setDrawerOpen] = useState(false);

  const renderPage = () => {
    switch (page) {
      case "home":  return (<HomePage setPage={setPage} setOpenMissingForm={setOpenMissingForm}/>);
      case "live-darshan":    return <LiveDarshanPage setPage={setPage} />;
      case "hotels":          return <HotelsPage setPage={setPage} />;
      case "missing-persons": return (<MissingPersonsPage
  setPage={setPage}
  openOnLoad={openMissingForm}
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
        
      case "news":            return <NewsPage setPage={setPage} />;
      default:                return <NotFoundPage setPage={setPage} />;
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
        {renderPage()}
      </main>
     <MobileNav  page={page} setPage={setPage}/>

    <Footer setPage={setPage} />
    </div>
  );
}

export default App;
