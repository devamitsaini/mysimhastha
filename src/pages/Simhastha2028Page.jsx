import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
  SNAN_DATES,
  DARSHAN_FEEDS,
  PLACE_BG,
  HERITAGE_BG,
  HOTELS_DATA,
  heritageList,
  CULTURE_DATA
} from '../data/simhasthaData';
import CountdownHub from '../components/common/CountdownHub/CountdownHub';
import AITripPlanner from '../components/home/AITripPlanner/AITripPlanner';

import { SEO, SchemaProvider } from "../seo";
import "../styles/Simhastha2028Page.css";
import {
  FaShieldAlt,
  FaCalendarAlt,
  FaRoute,
  FaHotel,
  FaPlaceOfWorship,
  FaBookOpen,
  FaUtensils,
  FaNewspaper,
  FaParking,
  FaBus,
  FaShoppingBag,
  FaArrowRight,
  FaCheckCircle,
  FaMapMarkedAlt,
  FaWallet,
  FaUsers,
  FaTrain,
  FaPlane,
  FaCar,
  FaMotorcycle,
  FaStar,
  FaWifi,
  FaSnowflake,
  FaHeart,
  FaFire,
  FaClock,
  FaMapMarkerAlt,
  FaOm,
  FaSun,
  FaWater,
  FaLandmark,
  FaFlag
} from "react-icons/fa";

function Simhastha2028Page() {
  const navigate = useNavigate();
  
  const [hotelPage, setHotelPage] = useState(1);
  const hotelsPerPage = 4;
  const totalPages = Math.ceil(HOTELS_DATA.length / hotelsPerPage);
  const [modalData, setModalData] = useState(null);

  const paginatedHotels = HOTELS_DATA.slice(
    (hotelPage - 1) * hotelsPerPage,
    hotelPage * hotelsPerPage
  );
  const [activeTab, setActiveTab] = useState("temples");
  
  const [selectedHeritage, setSelectedHeritage] = useState(null);

  const tabData = {
    temples: [
      { icon: <FaOm />, name: "Mahakaleshwar Jyotirlinga", hi: "महाकालेश्वर ज्योतिर्लिंग", desc: "One of the 12 Jyotirlingas. Bhasma Aarti at dawn.", detail: "Bhasma Aarti: 4 AM" },
      { icon: <FaSun />, name: "Harsiddhi Mata Mandir",     hi: "हरसिद्धि माता मंदिर",    desc: "One of the 51 Shakti Peethas.",        detail: "Shakti Peetha" },
      { icon: <FaFlag />, name: "Kal Bhairav Temple",        hi: "काल भैरव मंदिर",          desc: "Guardian deity of Ujjain.",            detail: "Open: 5 AM – 10 PM" },
      { icon: <FaBookOpen />, name: "Sandipani Ashram",          hi: "सांदीपनि आश्रम",           desc: "Ancient gurukul of Lord Krishna.",    detail: "Historical site" },
      { icon: <FaStar />, name: "Mangalnath Temple",         hi: "मंगलनाथ मंदिर",            desc: "Birthplace of Mars (Mangal).",         detail: "Special puja" },
      { icon: <FaLandmark />, name: "Chintaman Ganesh",          hi: "चिंतामन गणेश",             desc: "Self-manifested ancient idol.",        detail: "Open: 5 AM – 9 PM" },
    ],
    ghats: [
      { icon: <FaSun />, name: "Ram Ghat",         hi: "राम घाट",         desc: "Primary Simhastha Snan site.",     detail: "Aarti: 7 PM" },
      { icon: <FaWater />, name: "Triveni Ghat",     hi: "त्रिवेणी घाट",   desc: "Confluence of three streams.",    detail: "Pind Daan" },
      { icon: <FaLandmark />, name: "Narsimha Ghat",    hi: "नरसिंह घाट",     desc: "Significant Snan site.",          detail: "Vaishakh Purnima" },
      { icon: <FaSun />, name: "Ganesh Ghat",      hi: "गणेश घाट",       desc: "Popular for meditation.",          detail: "Best for mornings" },
      { icon: <FaBookOpen />, name: "Patal Bhairavi",   hi: "पाताल भैरवी घाट", desc: "Tantric traditions.",            detail: "Tantrik rites" },
      { icon: <FaSun />, name: "Mangala Ghat",     hi: "मंगला घाट",       desc: "Used for Graha Shanti.",          detail: "Graha Shanti" },
    ],
    akhadas: [
      { category: "Shaiva Akharas (Followers of Lord Shiva)", icon: <FaFlag />, name: "Shri Panch Dashnaam Juna Akhara", hi: "श्री पंच दशनाम जूना अखाड़ा", desc: "Largest and most ancient Shaiva Akhara of Naga sadhus.", detail: "Shaiva" },
      { category: "Shaiva Akharas (Followers of Lord Shiva)", icon: <FaFlag />, name: "Shri Panchayati Niranjani Akhara", hi: "श्री पंचायती निरंजनी अखाड़ा", desc: "Prestigious Shaiva Akhara with deep Vedic scholarship.", detail: "Shaiva" },
      { category: "Shaiva Akharas (Followers of Lord Shiva)", icon: <FaFlag />, name: "Shri Panchayati Mahanirvani Akhara", hi: "श्री पंचायती महानिर्वाणी अखाड़ा", desc: "Renowned Shaiva Akhara known for spiritual discipline.", detail: "Shaiva" },
      { category: "Shaiva Akharas (Followers of Lord Shiva)", icon: <FaFlag />, name: "Shri Panch Atal Akhara", hi: "श्री पंच अटल अखाड़ा", desc: "Ancient Shaiva Akhara following the Atal tradition.", detail: "Shaiva" },
      { category: "Shaiva Akharas (Followers of Lord Shiva)", icon: <FaFlag />, name: "Shri Panchayati Avahan Akhara", hi: "श्री पंचायती आवाहन अखाड़ा", desc: "Shaiva Akhara devoted to Lord Shiva worship.", detail: "Shaiva" },
      { category: "Shaiva Akharas (Followers of Lord Shiva)", icon: <FaFlag />, name: "Shri Panch Agni Akhara", hi: "श्री पंच अग्नि अखाड़ा", desc: "Shaiva Akhara known for fire rituals and austerities.", detail: "Shaiva" },
      { category: "Shaiva Akharas (Followers of Lord Shiva)", icon: <FaFlag />, name: "Shri Taponidhi Anand Akhara", hi: "श्री तपोनिधि आनंद अखाड़ा", desc: "Shaiva Akhara focused on meditation and penance.", detail: "Shaiva" },
      { category: "Vaishnava Akharas (Followers of Lord Vishnu)", icon: <FaFlag />, name: "Shri Digambar Ani Akhara", hi: "श्री दिगंबर आनी अखाड़ा", desc: "Vaishnava Akhara of digambar (naked) sadhus.", detail: "Vaishnava" },
      { category: "Vaishnava Akharas (Followers of Lord Vishnu)", icon: <FaFlag />, name: "Shri Nirvani Ani Akhara", hi: "श्री निर्वाणी आनी अखाड़ा", desc: "Vaishnava Akhara following Lord Vishnu.", detail: "Vaishnava" },
      { category: "Vaishnava Akharas (Followers of Lord Vishnu)", icon: <FaFlag />, name: "Shri Panch Nirmohi Ani Akhara", hi: "श्री पंच निर्मोही आनी अखाड़ा", desc: "Vaishnava Akhara of Lord Ram's followers.", detail: "Vaishnava" },
      { category: "Udasin and Nirmal Akharas (Followers of Guru Nanak/Shri Chand)", icon: <FaFlag />, name: "Shri Panchayati Bada Udasin Akhara", hi: "श्री पंचायती बड़ा उदासीन अखाड़ा", desc: "Bridges Hindu and Sikh Udasin traditions.", detail: "Udasin" },
      { category: "Udasin and Nirmal Akharas (Followers of Guru Nanak/Shri Chand)", icon: <FaFlag />, name: "Shri Panchayati Akhara Naya Udasin", hi: "श्री पंचायती अखाड़ा नया उदासीन", desc: "Udasin Akhara following Guru Nanak's teachings.", detail: "Udasin" },
      { category: "Udasin and Nirmal Akharas (Followers of Guru Nanak/Shri Chand)", icon: <FaFlag />, name: "Shri Nirmal Panchayati Akhara", hi: "श्री निर्मल पंचायती अखाड़ा", desc: "Nirmal Akhara blending Sikh and Shaiva lines.", detail: "Nirmal" },
    ],
  };

  const quickStats = [
    { number: "400M+", label: "Expected Pilgrims" },
    { number: "4", label: "Shahi Snan Dates" },
    { number: "60+", label: "Days of Festival" },
    { number: "13", label: "Sacred Akharas" },
  ];

  const quickActions = [
    { icon: <FaCalendarAlt />, title: "Snan Calendar", link: "#snan-calendar" },
    { icon: <FaPlaceOfWorship />, title: "Temples & Ghats", link: "#temples-ghats" },
    { icon: <FaHotel />, title: "Book a Stay", link: "/hotels" },
    { icon: <FaRoute />, title: "Plan Your Trip", link: "/trip-planner" },
    { icon: <FaBookOpen />, title: "Travel Guides", link: "/guide" },
    { icon: <FaNewspaper />, title: "Latest News", link: "/news" },
    { icon: <FaBus />, title: "Transport", link: "/transport" },
    { icon: <FaUtensils />, title: "Food & Culture", link: "#culture" },
  ];

  return (
    <>
      <SEO
        title="Simhastha 2028 Ujjain | Complete Kumbh Mela Guide | Dates, Hotels, Ghats"
        description="Plan your Simhastha 2028 pilgrimage to Ujjain. Get Shahi Snan dates, Mahakaleshwar Temple guide, hotel booking, live darshan, 13 Akharas, zones, routes, and travel tips."
        canonical="https://www.mysimhastha.com/simhastha-2028"
        image="https://www.mysimhastha.com/images/hero-image.webp"
        ogTitle="Simhastha 2028 Ujjain | Complete Kumbh Mela Guide | Dates, Hotels, Ghats"
        ogDescription="Plan your Simhastha 2028 pilgrimage to Ujjain. Get Shahi Snan dates, Mahakaleshwar Temple guide, hotel booking, live darshan, 13 Akharas, zones, routes, and travel tips."
        twitterTitle="Simhastha 2028 Ujjain | Complete Kumbh Mela Guide | Dates, Hotels, Ghats"
        twitterDescription="Plan your Simhastha 2028 pilgrimage to Ujjain. Get Shahi Snan dates, Mahakaleshwar Temple guide, hotel booking, live darshan, 13 Akharas, zones, routes, and travel tips."
      />

      <SchemaProvider
        type="event"
        data={{
          title: "Simhastha 2028 Ujjain | Complete Kumbh Mela Guide | Dates, Hotels, Ghats",
          description: "Plan your Simhastha 2028 pilgrimage to Ujjain. Get Shahi Snan dates, Mahakaleshwar Temple guide, hotel booking, live darshan, 13 Akharas, zones, routes, and travel tips.",
          url: "https://www.mysimhastha.com/simhastha-2028",
          about: "Simhastha 2028",
          image: "https://www.mysimhastha.com/images/hero-image.webp",
          startDate: "2028-03-27",
          endDate: "2028-05-27",
          location: "Ujjain, Madhya Pradesh, India",
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        }}
      />

      <div className="sim2028-page">

        {/* ================= HERO + COUNTDOWN ================= */}
        {/* Wrapper caps hero + countdown together at ~75% viewport height (see .sim2028-hero-wrap) */}
        <div className="sim2028-hero-wrap">
          <section className="sim2028-hero">
            <div className="sim2028-hero-card">
              <div className="sim2028-hero-image">
                <img
                  src="https://www.ercotravels.com/blog/wp-content/uploads/2016/01/groupofsadhus.jpg"
                  alt="Simhastha 2028 Ujjain"
                />
                <div className="sim2028-hero-image-fade" />
            
              </div>
              <div className="sim2028-hero-content">
                <div className="sim2028-hero-deva">उज्जैन सिंहस्थ महाकुम्भ २०२८</div>
                <h1 className="sim2028-hero-title">
                  Your Complete Guide to <span className="highlight">Ujjain, Mahakal & Simhastha 2028</span>
                </h1>
                <p className="sim2028-hero-subtitle">
                  Verified information, temple guides, stays, transport and everything you need for a blessed pilgrimage.
                </p>
                <div className="sim2028-hero-buttons">
                  <button className="sim2028-hero-btn sim2028-hero-btn-primary" onClick={() => navigate("/trip-planner")}>
                    <FaRoute />
                    Plan My Trip
                  </button>
                  <button className="sim2028-hero-btn sim2028-hero-btn-secondary" onClick={() => navigate("/hotels")}>
                    <FaHotel />
                    Book a Stay
                  </button>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* ================= COUNTDOWN ================= */}
        <CountdownHub />

        {/* ================= QUICK STATS ================= */}
        <section className="sim2028-stats">
          <div className="container">
            <div className="sim2028-section-header">
              <span className="sim2028-section-badge">
                <FaCheckCircle />
                Festival Overview
              </span>
              <h2>Simhastha 2028 at a Glance</h2>
            </div>
            
            {/* SEO-rich summary */}
            <div className="sim2028-overview-summary">
              <p>
                <strong>Simhastha 2028</strong> (also known as Ujjain Simhastha Mahakumbh) is one of the four sacred Kumbh Melas held every twelve years in the holy city of <strong>Ujjain, Madhya Pradesh</strong>. Scheduled from <strong>March 27 to May 27, 2028</strong>, this grand pilgrimage will witness over <strong>40 million devotees</strong> gathering on the banks of the sacred <strong>Shipra River</strong>.
              </p>
              <p>
                The festival features <strong>4 Shahi Snan dates</strong> (royal bathing processions) where 13 sacred Akharas of sadhus and saints take holy dips. Pilgrims can witness magnificent processions, attend spiritual discourses, seek blessings at the <strong>Mahakaleshwar Jyotirlinga</strong>, and participate in sacred rituals spanning <strong>60+ days</strong> of festivities.
              </p>
              <p>
                Whether you're planning to attend the Shahi Snan, explore ancient temples and ghats, or experience the spiritual energy of one of the world's largest religious gatherings, this comprehensive guide provides everything you need for a blessed and well-planned pilgrimage to Simhastha 2028.
              </p>
            </div>
            
            <div className="sim2028-stats-grid">
              {quickStats.map((item, index) => (
                <div key={index} className="sim2028-stat-card">
                  <h3>{item.number}</h3>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SNAN CALENDAR ================= */}
        <section id="snan-calendar" className="sim2028-snan">
          <div className="container">
            <div className="sim2028-section-header">
              <span className="sim2028-section-badge">
                <FaCalendarAlt />
                Sacred Calendar
              </span>
              <h2>Simhastha 2028 Snan Calendar</h2>
              <p>Complete bathing schedule including all Shahi Snan dates.</p>
            </div>
            <div className="sim2028-snan-grid">
              {SNAN_DATES.map((snan, index) => (
                <div key={index} className={`sim2028-snan-card ${snan.shahi ? "shahi" : ""}`}>
                  {snan.shahi && <div className="sim2028-snan-badge">SHAHI SNAN</div>}
                  <div className="sim2028-snan-date">
                    <div className="sim2028-snan-day">{snan.day}</div>
                    <div className="sim2028-snan-month-wrap">
                      <span className="sim2028-snan-month">{snan.month}</span>
                      <span className="sim2028-snan-weekday">{snan.weekday}</span>
                    </div>
                  </div>
                  <div className="sim2028-snan-name">{snan.name}</div>
                  {snan.nameHi && <div className="sim2028-snan-hi">{snan.nameHi}</div>}
                  <div className="sim2028-snan-tithi">{snan.tithi}</div>
                </div>
              ))}
            </div>
            <div className="sim2028-snan-legend">
              <div className="sim2028-snan-legend-item">
                <span className="sim2028-snan-legend-dot shahi" />
                <span>Shahi Snan — Royal bathing procession of all 13 Akharas</span>
              </div>
              <div className="sim2028-snan-legend-item">
                <span className="sim2028-snan-legend-dot normal" />
                <span>Auspicious bathing tithi</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SIMHASTHA GUIDES ================= */}
        <section className="sim2028-guides">
          <div className="container">
            <div className="sim2028-section-header">
              <span className="sim2028-section-badge">
                <FaBookOpen />
                Simhastha Guides
              </span>
              <h2>Essential Simhastha 2028 Guides</h2>
              <p>Everything you need to know for a successful pilgrimage.</p>
            </div>
            <div className="sim2028-guides-grid">
              {[
                {
                  icon: <FaCalendarAlt />,
                  title: "Shahi Snan Dates",
                  desc: "Complete schedule of all 4 royal bathing dates",
                  link: "#snan-calendar",
                  popular: true,
                  image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963"
                },
                {
                  icon: <FaMapMarkedAlt />,
                  title: "Zones & Routes",
                  desc: "Navigate 6 festival zones and plan your entry",
                  link: "#zones-routes",
                  popular: false,
                  image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                },
                {
                  icon: <FaHotel />,
                  title: "Accommodation Guide",
                  desc: "Hotels, dharamshalas, and tent city booking",
                  link: "/hotels",
                  popular: true,
                  image: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
                },
                {
                  icon: <FaRoute />,
                  title: "Transport Guide",
                  desc: "Trains, flights, buses, and local transport",
                  link: "/transport",
                  popular: false,
                  comingSoon: true,
                  image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
                },
                {
                  icon: <FaUsers />,
                  title: "Akhada Information",
                  desc: "Learn about 13 sacred Akharas and their traditions",
                  link: "#temples-ghats",
                  popular: true,
                  comingSoon: true,
                  image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455"
                },
                {
                  icon: <FaShieldAlt />,
                  title: "Safety & Security",
                  desc: "Crowd management, emergency contacts, and tips",
                  link: "/guide",
                  popular: false,
                  comingSoon: true,
                  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                }
              ].map((guide, index) => (
                <div
                  key={index}
                  className="sim2028-guide-card"
                  onClick={() => {
                    if (guide.comingSoon) return;
                    if (guide.link.startsWith("/")) {
                      navigate(guide.link);
                    } else {
                      document.querySelector(guide.link)?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {guide.popular && (
                    <span className="sim2028-guide-popular">
                      <FaFire /> Popular
                    </span>
                  )}
                  <div className="sim2028-guide-image">
                    <img src={guide.image} alt={guide.title} loading="lazy" />
                  </div>
                  <div className="sim2028-guide-content">
                    <div className="sim2028-guide-icon">{guide.icon}</div>
                    <h3>{guide.title}</h3>
                    <p>{guide.desc}</p>
                    <span className="sim2028-guide-link">
                      {guide.comingSoon ? "Coming Soon" : "Read More"} <FaArrowRight />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= LIVE DARSHAN ================= */}
        <section className="sim2028-darshan">
          <div className="container">
            <div className="sim2028-section-header">
              <span className="sim2028-section-badge">Sacred Streams</span>
              <h2>Live Darshan & Aarti Timings</h2>
              <p>Watch live feeds from Ujjain's most sacred temples.</p>
            </div>
            <div className="sim2028-darshan-grid">
              {DARSHAN_FEEDS.slice(0, 3).map((d, i) => (
                <div key={i} className="sim2028-darshan-card" onClick={() => navigate("/live-darshan")}>
                  <div className="sim2028-darshan-thumb" style={{ background: `linear-gradient(160deg,${d.color},#050200)` }}>
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(212,82,10,.18) 0%,transparent 70%)" }} />
                    <div className="sim2028-darshan-icon">{d.icon}</div>
                    <div className="sim2028-darshan-badge">
                      <span className="sim2028-darshan-dot" />
                      <span className="sim2028-darshan-badge-txt">LIVE APR 2028</span>
                    </div>
                  </div>
                  <div className="sim2028-darshan-body">
                    <div className="sim2028-darshan-name">{d.name}</div>
                    <div className="sim2028-darshan-name-hi">{d.nameHi}</div>
                    <div className="sim2028-darshan-aarti-label">Aarti Timings</div>
                    {d.aartis.map((a, j) => (
                      <div key={j} className="sim2028-darshan-aarti-row">
                        <span className="sim2028-darshan-aarti-name">{a.n}</span>
                        <span className="sim2028-darshan-aarti-time">{a.t}</span>
                      </div>
                    ))}
                    <div className="sim2028-darshan-footer">
                      <button className="sim2028-darshan-watch">📡 {d.free ? "Watch Free" : "Watch HD"}</button>
                      <span className={d.free ? "sim2028-darshan-free" : "sim2028-darshan-premium"}>{d.free ? "Free" : "Premium"}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="sim2028-darshan-cta">
              <button className="sim2028-hero-btn sim2028-hero-btn-secondary" onClick={() => navigate("/live-darshan")}>
                View All Aartis <FaArrowRight />
              </button>
            </div>
          </div>
        </section>

        {/* ================= TEMPLES / GHATS / AKHADAS ================= */}
        <section id="temples-ghats" className="sim2028-places">
          <div className="container">
            <div className="sim2028-section-header">
              <span className="sim2028-section-badge">Sacred Ujjain</span>
              <h2>Temples, Ghats & Akhadas</h2>
              <p>Explore the sacred sites of Ujjain - essential for your Simhastha 2028 pilgrimage.</p>
            </div>
            <div className="sim2028-places-tabs">
              {[
                ["temples", "Temples"],
                ["ghats", "Ghats"],
                ["akhadas", "Akhadas"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  className={`sim2028-places-tab${activeTab === id ? " active" : ""}`}
                  onClick={() => setActiveTab(id)}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="sim2028-places-grid">
              {tabData[activeTab].map((p, i) => {
                const bgImg = PLACE_BG[activeTab]?.[i] || "";
                const showCategory =
                  activeTab === "akhadas" &&
                  (i === 0 || tabData[activeTab][i - 1].category !== p.category);
                return (
                  <React.Fragment key={i}>
                    {showCategory && (
                      <div className="sim2028-place-category">{p.category}</div>
                    )}
                    <div className="sim2028-place-card" onClick={() => setModalData(p)}>
                      <div className="sim2028-place-card-img" style={{ backgroundImage: `url(${bgImg})` }} />
                      <div className="sim2028-place-card-overlay" />
                      <div className="sim2028-place-card-content">
                        <span className="sim2028-place-icon">{p.icon}</span>
                        <div className="sim2028-place-title">{p.name}</div>
                        <div className="sim2028-place-subtitle">{p.hi}</div>
                        <div className="sim2028-place-desc">{p.desc}</div>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= HERITAGE ================= */}
        <section id="heritage" className="sim2028-heritage">
          <div className="container">
            <div className="sim2028-section-header">
              <span className="sim2028-section-badge">Ancient Legacy</span>
              <h2>Heritage of Ujjain</h2>
              <p>Discover 3,000+ years of spiritual heritage - from Vikramaditya's empire to Mahadev's eternal city.</p>
            </div>
            <div className="sim2028-heritage-grid">
              {heritageList.map((h, i) => {
                const bgImg = HERITAGE_BG?.[i] || "";
                return (
                  <div key={i} className="sim2028-heritage-card" onClick={() => setSelectedHeritage({ ...h, bg: bgImg })}>
                    <div className="sim2028-heritage-card-img" style={{ backgroundImage: `url(${bgImg})` }} />
                    <div className="sim2028-heritage-card-overlay" />
                    <div className="sim2028-heritage-card-content">
                      <div className="sim2028-heritage-emoji">{h.emoji}</div>
                      <div className="sim2028-heritage-era">{h.era}</div>
                      <div className="sim2028-heritage-name">{h.name}</div>
                      <div className="sim2028-heritage-desc">{h.desc.substring(0, 60)}...</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= ZONES & ROUTES ================= */}
        <section id="zones-routes" className="sim2028-zones">
          <div className="container">
            <div className="sim2028-section-header">
              <span className="sim2028-section-badge">Navigation Guide</span>
              <h2>Simhastha Zones & Routes</h2>
              <p>Navigate the festival grounds and plan your journey to Ujjain.</p>
            </div>
            <div className="sim2028-zones-wrap">
              <div className="sim2028-zones-map">
                <svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: "320px" }}>
                  <rect width="320" height="280" fill="#F8FAFC" rx="12" />
                  <path d="M 28 140 Q 76 122 112 146 Q 150 170 188 152 Q 226 134 264 158 Q 292 170 312 162" stroke="rgba(30,90,180,.4)" strokeWidth="13" fill="none" strokeLinecap="round" />
                  <path d="M 28 140 Q 76 122 112 146 Q 150 170 188 152 Q 226 134 264 158 Q 292 170 312 162" stroke="rgba(30,90,180,.12)" strokeWidth="20" fill="none" strokeLinecap="round" />
                  <text x="155" y="136" textAnchor="middle" fontFamily="serif" fontSize="9" fill="rgba(30,90,180,.7)">शिप्रा नदी</text>
                  <ellipse cx="112" cy="106" rx="56" ry="30" fill="rgba(249,115,22,.09)" stroke="#F97316" strokeWidth="1.5" strokeDasharray="4,2" />
                  <text x="112" y="100" textAnchor="middle" fontFamily="system-ui" fontSize="9" fontWeight="700" fill="#F97316">Z1 · Ram Ghat</text>
                  <ellipse cx="188" cy="90" rx="46" ry="26" fill="rgba(249,115,22,.07)" stroke="#FB923C" strokeWidth="1.5" strokeDasharray="4,2" />
                  <text x="188" y="84" textAnchor="middle" fontFamily="system-ui" fontSize="9" fontWeight="700" fill="#FB923C">Z2 · Mahakal</text>
                  <ellipse cx="85" cy="184" rx="52" ry="24" fill="rgba(239,68,68,.06)" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4,2" />
                  <text x="85" y="178" textAnchor="middle" fontFamily="system-ui" fontSize="9" fontWeight="700" fill="#EF4444">Z3 · Akhadas</text>
                  <ellipse cx="218" cy="198" rx="54" ry="24" fill="rgba(16,185,129,.06)" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4,2" />
                  <text x="218" y="192" textAnchor="middle" fontFamily="system-ui" fontSize="9" fontWeight="700" fill="#10B981">Z4 · Tent City</text>
                  <ellipse cx="160" cy="242" rx="60" ry="20" fill="rgba(100,116,139,.04)" stroke="#64748B" strokeWidth="1" strokeDasharray="4,2" opacity=".6" />
                  <text x="160" y="236" textAnchor="middle" fontFamily="system-ui" fontSize="9" fontWeight="700" fill="#64748B">Z5 · Bazaar · Z6 · Entry</text>
                  <text x="18" y="24" fontFamily="system-ui" fontSize="12" fill="#64748B" fontWeight="700">N↑</text>
                </svg>
              </div>
              <div className="sim2028-zones-list">
                {[
                  ["Z1", "Ram Ghat Zone", "Ram Ghat, Triveni Ghat, Mahakaleshwar Temple", "Primary Snan"],
                  ["Z2", "Mahakal Zone", "Mahakal Lok, Kal Bhairav, Harsiddhi, Sandipani", "Temple Circuit"],
                  ["Z3", "Akhada Zone", "13 Akhada camps along Shipra banks", "Akhada Camps"],
                  ["Z4", "Tent City Zone", "Govt tent cities, dharamshalas, camp sites", "Accommodation"],
                  ["Z5", "Mela Bazaar", "Food courts, artisan stalls, religious goods", "Commerce"],
                  ["Z6", "Entry & Transit", "Bus stands, parking, VVIP entry, shuttles", "Arrival"],
                ].map(([n, name, areas, tag]) => (
                  <div key={n} className="sim2028-zone-card" onClick={() => alert(`Zone ${n}: ${name}\n\n${areas}`)}>
                    <div className="sim2028-zone-num">{n}</div>
                    <div>
                      <div className="sim2028-zone-name">{name}</div>
                      <div className="sim2028-zone-areas">{areas}</div>
                      <span className="sim2028-zone-tag">{tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Routes */}
            <div className="sim2028-section-header" style={{ marginTop: "60px" }}>
              <span className="sim2028-section-badge">Getting Here</span>
              <h2>Routes to Ujjain</h2>
            </div>
            <div className="sim2028-routes-grid">
              {[
                { from: "Mumbai", modes: [["🚆 Train", "11–13 hrs", "₹400–1,800"], ["✈ Fly + Cab", "3 hrs", "₹3,500+"], ["🚌 Bus", "14 hrs", "₹600–900"]] },
                { from: "Delhi", modes: [["🚆 Train", "12–14 hrs", "₹500–2,000"], ["✈ Fly + Cab", "2.5 hrs", "₹4,000+"], ["🚌 Bus", "16 hrs", "₹700–1,200"]] },
                { from: "Ahmedabad", modes: [["🚆 Train", "7–9 hrs", "₹300–1,200"], ["🚗 Drive", "7 hrs", "₹2,500+"], ["🚌 Bus", "9 hrs", "₹400–700"]] },
                { from: "Indore Airport", modes: [["🚖 Cab", "50 min", "₹600–900"], ["🚌 Shuttle", "1 hr", "₹100–150"], ["🚆 Train", "1.5 hrs", "₹50–120"]] },
                { from: "Bhopal", modes: [["🚆 Train", "2.5 hrs", "₹80–350"], ["🚗 Drive", "2 hrs", "₹1,800+"], ["🚌 Bus", "3 hrs", "₹120–200"]] },
                { from: "Ratlam", modes: [["🚆 Train", "1.5 hrs", "₹50–180"], ["🚌 Bus", "2 hrs", "₹80–120"], ["🚗 Drive", "1.5 hrs", "₹1,200+"]] },
              ].map((r, i) => (
                <div key={i} className="sim2028-route-card" onClick={() => alert(`Routes from ${r.from} to Ujjain:\n${r.modes.map(m => `${m[0]}: ${m[1]} · ${m[2]}`).join("\n")}`)}>
                  <div className="sim2028-route-from-to">
                    <span className="sim2028-route-place">{r.from}</span>
                    <span className="sim2028-route-arrow">→</span>
                    <span className="sim2028-route-place">Ujjain</span>
                  </div>
                  {r.modes.map((m, j) => (
                    <div key={j} className="sim2028-route-mode">
                      <span className="sim2028-route-mode-name">{m[0]}</span>
                      <span className="sim2028-route-mode-time">{m[1]}</span>
                      <span className="sim2028-route-mode-price">{m[2]}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ACCOMMODATION ================= */}
        <section className="sim2028-hotels">
          <div className="container">
            <div className="sim2028-section-header">
              <span className="sim2028-section-badge">
                <FaHotel />
                Featured Stays
              </span>
              <h2>Your Property Could Be Here</h2>
              <p>Put Your Property in Front of
Thousands of Pilgrims. Only limited slots Hurry up!</p>
            </div>
            
            {/* Featured Properties Demo */}
            <div className="sim2028-featured-stays">
              {[
                {
                  id: 1,
                  name: "Your Property Here",
                  image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
                  distance: "700m from Mahakal",
                  price: "₹1,800",
                  rating: "4.8",
                  reviews: "324",
                  location: "Mahakal Temple Road",
                  amenities: ["WiFi", "Parking", "AC", "Family"],
                  featured: true
                },
                {
                  id: 2,
                  name: "Your Property Here",
                  image: "https://images.unsplash.com/photo-1582719508461-905c673771fd",
                  distance: "Featured",
                  price: "₹2,400",
                  rating: "4.7",
                  reviews: "212",
                  location: "Freeganj",
                  amenities: ["WiFi", "Parking", "AC"],
                  featured: false
                },
                {
                  id: 3,
                  name: "Your Property Here",
                  image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
                  distance: "500m from Mahakal",
                  price: "₹1,200",
                  rating: "4.6",
                  reviews: "165",
                  location: "Mahakal Area",
                  amenities: ["WiFi", "Family"],
                  featured: true
                },
                {
                  id: 4,
                  name: "Your Property Here",
                  image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
                  distance: "2 km from Mahakal",
                  price: "₹3,100",
                  rating: "4.9",
                  reviews: "492",
                  location: "Nanakheda",
                  amenities: ["WiFi", "Parking", "AC", "Family"],
                  featured: true
                }
              ].map((stay) => (
                <div key={stay.id} className="sim2028-featured-card" onClick={() => navigate("/list-your-property")}>
                  <div className="sim2028-featured-img">
                    <img src={stay.image} alt={stay.name} loading="lazy" />
                    <div className="sim2028-featured-overlay" />
                    <div className="sim2028-featured-badges">
                      {stay.featured && (
                        <span className="sim2028-featured-badge">
                          <FaFire /> Featured
                        </span>
                      )}
                      <span className="sim2028-distance-badge">{stay.distance}</span>
                    </div>
                  </div>
                  <div className="sim2028-featured-body">
                    <div className="sim2028-featured-top">
                      <h3>{stay.name}</h3>
                      <div className="sim2028-featured-rating">
                        <FaStar /> {stay.rating} ({stay.reviews})
                      </div>
                    </div>
                    <p className="sim2028-featured-location">
                      <FaMapMarkerAlt /> {stay.location}
                    </p>
                    <div className="sim2028-featured-amenities">
                      {stay.amenities.map((amenity, idx) => (
                        <span key={idx}>{amenity}</span>
                      ))}
                    </div>
                    <div className="sim2028-featured-bottom">
                      <div className="sim2028-featured-price">
                        {stay.price}
                        <span>/night</span>
                      </div>
                      <button className="sim2028-featured-btn" onClick={(e) => { e.stopPropagation(); navigate("/list-your-property"); }}>
                        Get Featured <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="sim2028-featured-footer">
              <button className="sim2028-hero-btn sim2028-hero-btn-primary" onClick={() => navigate("/list-your-property")}>
                Get Featured <FaArrowRight />
              </button>
            </div>
          </div>
        </section>

        {/* ================= CULTURE & EVENTS ================= */}
        <section id="culture" className="sim2028-culture">
          <div className="container">
            <div className="sim2028-section-header">
              <span className="sim2028-section-badge">Experience Ujjain</span>
              <h2>Events & Culture</h2>
              <p>Discover the rich cultural heritage of Ujjain during Simhastha.</p>
            </div>
            <div className="sim2028-culture-grid">
              {CULTURE_DATA.map((c, i) => (
                <div key={i} className="sim2028-culture-card" onClick={() => setModalData({ name: c.name, desc: c.desc, detail: "This feature will be live soon." })}>
                  <div className="sim2028-culture-img" style={{ backgroundImage: `url(${c.img})` }} />
                  <div className="sim2028-culture-body">
                    <div className="sim2028-culture-tag">{c.tag}</div>
                    <div className="sim2028-culture-name">{c.name}</div>
                    <div className="sim2028-culture-desc">{c.desc}</div>
                    <button
                      className="sim2028-culture-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalData({ icon: "🚀", name: c.name, desc: c.desc, detail: "This feature will be live soon." });
                      }}
                    >
                      {c.btn}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section className="sim2028-faq">
          <div className="container">
            <div className="sim2028-section-header">
              <span className="sim2028-section-badge">
                <FaCheckCircle />
                Frequently Asked Questions
              </span>
              <h2>Common Questions About Simhastha 2028</h2>
              <p>Find answers to the most frequently asked questions about the sacred Kumbh at Ujjain.</p>
            </div>
            <div className="sim2028-faq-grid">
              <div className="sim2028-faq-item">
                <div className="sim2028-faq-question">
                  <span className="sim2028-faq-icon">❓</span>
                  <span>When is Simhastha 2028?</span>
                </div>
                <div className="sim2028-faq-answer">
                  Simhastha 2028 will be held from March 27 to May 27, 2028, in Ujjain, Madhya Pradesh. The festival lasts for approximately 60 days with four major Shahi Snan dates.
                </div>
              </div>
              <div className="sim2028-faq-item">
                <div className="sim2028-faq-question">
                  <span className="sim2028-faq-icon">❓</span>
                  <span>What is Shahi Snan?</span>
                </div>
                <div className="sim2028-faq-answer">
                  Shahi Snan is the royal bathing procession of all 13 Akharas (sadhu orders). It's the most auspicious event where millions of devotees gather to take a holy dip in the Shipra River.
                </div>
              </div>
              <div className="sim2028-faq-item">
                <div className="sim2028-faq-question">
                  <span className="sim2028-faq-icon">❓</span>
                  <span>How to reach Ujjain for Simhastha?</span>
                </div>
                <div className="sim2028-faq-answer">
                  Ujjain is well-connected by train, bus, and air. The nearest airport is in Indore (55 km away). Direct trains are available from major cities like Delhi, Mumbai, and Ahmedabad.
                </div>
              </div>
              <div className="sim2028-faq-item">
                <div className="sim2028-faq-question">
                  <span className="sim2028-faq-icon">❓</span>
                  <span>Where to stay during Simhastha?</span>
                </div>
                <div className="sim2028-faq-answer">
                  Accommodation ranges from budget dharamshalas to premium hotels. Government tent cities will be set up. Book well in advance as 400M+ pilgrims are expected. Use our hotel booking section for verified options.
                </div>
              </div>
              <div className="sim2028-faq-item">
                <div className="sim2028-faq-question">
                  <span className="sim2028-faq-icon">❓</span>
                  <span>What are the main attractions?</span>
                </div>
                <div className="sim2028-faq-answer">
                  Key attractions include Mahakaleshwar Jyotirlinga, Ram Ghat, Triveni Ghat, 13 Akhada processions, Shahi Snan, live aartis, and the spiritual atmosphere along the sacred Shipra River.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= MODAL ================= */}
        {modalData && (
          <div className="sim2028-modal-overlay" onClick={() => setModalData(null)}>
            <div className="sim2028-modal-box" onClick={(e) => e.stopPropagation()}>
              <button className="sim2028-modal-close" onClick={() => setModalData(null)}>✕</button>
              <div className="sim2028-modal-icon">{modalData.icon || "🕉️"}</div>
              <div className="sim2028-modal-name">{modalData.name}</div>
              <div className="sim2028-modal-desc">{modalData.desc}</div>
              {modalData.detail && <div className="sim2028-modal-detail">{modalData.detail}</div>}
            </div>
          </div>
        )}

        {/* ================= HERITAGE MODAL ================= */}
        {selectedHeritage && (
          <div className="sim2028-modal-overlay" onClick={() => setSelectedHeritage(null)}>
            <div className="sim2028-modal-box" onClick={(e) => e.stopPropagation()}>
              <button className="sim2028-modal-close" onClick={() => setSelectedHeritage(null)}>✕</button>
              <div className="sim2028-modal-icon">{selectedHeritage.emoji}</div>
              <div className="sim2028-heritage-era" style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.7px", textTransform: "uppercase", color: "#F97316", marginBottom: "4px" }}>{selectedHeritage.era}</div>
              <div className="sim2028-modal-name">{selectedHeritage.name}</div>
              <div className="sim2028-modal-desc">{selectedHeritage.desc}</div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}

export default Simhastha2028Page;