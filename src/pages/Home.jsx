  import React, { useState, useRef, useEffect } from 'react';
  import { useTranslation } from "react-i18next";
  import { supabase } from "../lib/supabase";
  import {
    GALLERY_IMAGES,
    MISSING_DATA,
    KUMBH_YEARS,
    DARSHAN_FEEDS,
    HOTELS_DATA,
    SNAN_DATES
  } from '../data/simhasthaData';
  import HERO_IMAGE from '../assets/hero-image.webp';
  import LiveDarshanCard from '../components/common/LiveDarshanCard';
  import Countdown from '../components/common/Countdown';
  import '../index.css';
  import '../styles/home-hero.css';

  const Home = ({ setPage, setOpenMissingForm }) => {
  const { t } = useTranslation();

  const [galleryItems] = useState(GALLERY_IMAGES);
  const SHAHI_SNAN_DATES = SNAN_DATES.filter(s => s.shahi);
    const [mpList] = useState(MISSING_DATA.slice(0, 4));
    const [latestNews, setLatestNews] = useState([]);
    const [selectedNews, setSelectedNews] = useState(null);
    const [showNriForm, setShowNriForm] = useState(false);
    const [nriForm, setNriForm] = useState({ name: '', email: '', country: '', service: 'pooja' });
    const [formStatus, setFormStatus] = useState('idle'); // idle | loading | success | error

    const carouselRef = useRef(null);

    useEffect(() => {
  const fetchLatestNews = async () => {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(2);

    if (!error) {
      setLatestNews(data || []);
    } else {
      console.error(error);
    }
  };

  fetchLatestNews();
}, []);

    const scrollCarousel = (direction) => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
      }
    };

    const handleNriSubmit = async () => {
      if (!nriForm.name || !nriForm.email) return;
      setFormStatus('loading');
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY,
            Name: nriForm.name,
            Email: nriForm.email,
            Country: nriForm.country,
            Service: nriForm.service,
          }),
        });
        if (res.ok) { setFormStatus('success'); }
        else { setFormStatus('error'); }
      } catch {
        setFormStatus('error');
      }
    };

    return (
      <>
        {/* HERO */}
        <section className="hero hero-cinematic" aria-label="Simhastha 2028 Hero">
          <div
  className="hero-bg"
  aria-hidden="true"
  style={{ backgroundImage: `url(${HERO_IMAGE})` }}
>
  <div className="hero-bg-overlay" />
</div>
          <div className="container">
            <div className="hero-inner">
              <p className="hero-eyebrow">
  {t("heroEyebrow")}
</p>
              <h1 className="hero-title">सिंहस्थ महाकुम्भ</h1>
              <p className="hero-sub">Ujjain 2028</p>
              <Countdown />
              <div className="hero-ctas">
                <button type="button" className="btn btn-primary btn-xl" onClick={() => setPage('simhastha-2028')}>
                  {t("exploreSimhastha")} →
                </button>
                <button type="button" className="btn btn-white btn-xl" onClick={() => {
    setPage('hotels');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }}>
                  {t("bookStay")}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SHLOK TRUST BAR */}
        <div className="trust-bar trust-bar--original" role="complementary" aria-label="Sanskrit shloka">
          <div className="container">
            <p className="shlok-text">कुम्भे स्नानं महापुण्यं सर्वपापहरं शुभम्</p>
            <p className="shlok-trans">— Bathing in the Kumbh bestows great merit and washes away all sins</p>
          </div>
        </div>
{/* =========================
    QUICK ACCESS
========================= */}

<section className="ms-home-quick">
  <div className="container">

    <div className="ms-home-quick-header">
      
      <h2 className="ms-home-quick-title">
        {t("quickAccess")}
      </h2>
    </div>

    <div className="ms-home-quick-grid">

      <button
        type="button"
        className="ms-home-quick-card"
        onClick={() => setPage('snan-calendar')}
      >
        <div className="ms-home-quick-icon">📅</div>

        <div className="ms-home-quick-label">
          <span>Snan Calendar</span>
          <span className="ms-home-quick-arrow">›</span>
        </div>
      </button>

      <button
        type="button"
        className="ms-home-quick-card"
        onClick={() => setPage('live-darshan')}
      >
        <div className="ms-home-quick-icon">📺</div>

        <div className="ms-home-quick-label">
          <span>Live Darshan</span>
          <span className="ms-home-quick-arrow">›</span>
        </div>
      </button>

      <button
        type="button"
        className="ms-home-quick-card"
        onClick={() => setPage('hotels')}
      >
        <div className="ms-home-quick-icon">🏨</div>

        <div className="ms-home-quick-label">
          <span>Hotel & Stay</span>
          <span className="ms-home-quick-arrow">›</span>
        </div>
      </button>

      <button
        type="button"
        className="ms-home-quick-card"
        onClick={() => setPage('missing-persons')}
      >
        <div className="ms-home-quick-icon">⚠️</div>

        <div className="ms-home-quick-label">
          <span>Missing Person</span>
          <span className="ms-home-quick-arrow">›</span>
        </div>
      </button>

    </div>
  </div>
</section>

{/* =========================
    SHAHI SNAN PREVIEW
========================= */}

<section className="ms-home-shahi">
  <div className="container">

    <div className="ms-home-shahi-header">
      <h2 className="ms-home-shahi-title">
        Shahi Snan 2028
      </h2>

      <p className="ms-home-shahi-description">
        Shahi Snan Dates
      </p>

    </div>

    <div className="ms-home-shahi-grid">

      {SHAHI_SNAN_DATES.map((snan, index) => (

        <div key={index} className="ms-home-shahi-card">

          <div className="ms-home-shahi-trishul">
            🔱
          </div>

          <div className="ms-home-shahi-date">
            {snan.day}
          </div>

          <div className="ms-home-shahi-month">
            {snan.month === 'APR'
              ? 'April 2028'
              : snan.month === 'MAY'
              ? 'May 2028'
              : 'June 2028'}
          </div>

          <div className="ms-home-shahi-divider"></div>

          <div className="ms-home-shahi-name">
            {snan.name}
          </div>

          <span className="ms-home-shahi-badge">
            👑 Shahi Snan
          </span>

        </div>

      ))}

    </div>

    <button
      type="button"
      className="ms-home-shahi-button"
      onClick={() => setPage('snan-calendar')}
    >
      📅 Open Full Snan Calendar →
    </button>

  </div>
</section>

        {/* LATEST NEWS */}
        <section className="section" aria-labelledby="news-heading">
          <div className="container">
            <div className="sec-head">
              <div className="sec-label">Updates &amp; Notifications</div>
              <h2 id="news-heading">Latest Simhastha News</h2>
            </div>
            <div className="news-container">
    {latestNews.map((n) => (
      <article
        key={n.id}
        className="news-card"
        onClick={() => setSelectedNews(n)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setSelectedNews(n)}
      >
        <div className="news-img">
          <img
            src={n.image_url}
            alt={n.title}
            loading="lazy"
            width="400"
            height="160"
          />
        </div>

        <div className="news-body">
          <h3 className="news-title">{n.title}</h3>
          <p className="news-desc">
  {n.content}
</p>
          <span className="read-more">
            Read More →
          </span>
        </div>
      </article>
    ))}
  </div>
          </div>
          <div className="news-view-all">
    <button onClick={() => setPage("news")}>
      View All News →
    </button>
  </div>
        </section>

        {/* NEWS MODAL */}
        {selectedNews && (
          <div className="modal-overlay" role="dialog" aria-modal="true" aria-label={selectedNews.title} onClick={() => setSelectedNews(null)}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedNews(null)} aria-label="Close">✕</button>
              <img
  src={selectedNews.image_url}
  alt={selectedNews.title}
  className="news-modal-image"
/>

<h2 className="news-modal-title">
  {selectedNews.title}
</h2>

<div className="news-modal-content">
  {selectedNews.content
    ?.split("\n")
    .filter(Boolean)
    .map((para, index) => (
      <p key={index}>{para}</p>
    ))}
</div>
            </div>
          </div>
        )}

        {/* KUMBH THROUGH YEARS */}
        <section className="section" style={{ background: 'var(--cream2)' }} aria-labelledby="years-heading">
          <div className="container">
            <div className="sec-head center">
              <h2 id="years-heading">Kumbh Through the Years</h2>
              <p className="sec-sub">A legacy of faith spanning millennia</p>
            </div>
            <div className="kumbh-years">
    {KUMBH_YEARS.map((k) => (
      <div
        key={k.year}
        className={`ky-strip ${k.active ? 'active' : ''}`}
        onClick={() => k.active && setPage('simhastha-2028')}
      >
        <div className="ky-year">{k.year}</div>
        <div className="ky-city">{k.city}</div>
        <div className="ky-type">{k.type}</div>
        {k.active && <div className="ky-arrow">→</div>}
      </div>
    ))}
  </div>
          </div>
        </section>

        {/* LIVE DARSHAN */}
        <section className="section" style={{ background: 'var(--white)' }} aria-labelledby="darshan-heading">
          <div className="container">
            <div className="sec-head" style={{ marginBottom: '24px' }}>
    <div>
      <div className="sec-label">Sacred Streams</div>
      <h2 id="darshan-heading">Live Darshan</h2>
      <p className="sec-sub" style={{ maxWidth: '420px' }}>
        Watch sacred temples of Ujjain live. All Aarti timings listed.
      </p>
    </div>
  </div>

  <div className="darshan-grid">
    {DARSHAN_FEEDS.slice(0, 2).map((d, i) => (
      <LiveDarshanCard key={i} d={d} />
    ))}
  </div>
          </div>
          <div className="darshan-cta">
    <button
      className="btn btn-outline"
      onClick={() => setPage('live-darshan')}
    >
      View All Feeds →
    </button>
  </div>
        </section>
        

        {/* NRI / PRASAD SECTION */}
        <section id="NRI" className="section nri-section" style={{ background: 'linear-gradient(135deg, var(--deep) 0%, #3D0C00 50%, #1C0900 100%)' }} aria-labelledby="nri-heading">
          <div className="container">
            <div className="nri-inner">
              <div className="nri-copy">
                <div className="sec-label" style={{ color: 'rgba(255,190,80,.7)' }}>For Devotees Worldwide</div>
                <h2 id="nri-heading">Can&apos;t Travel? <em>Your Faith Reaches Ujjain.</em></h2>
                <p>Book pooja, receive prasad at your doorstep, and support temple seva from anywhere in the world.</p>
                <button className="btn btn-primary" onClick={() => setShowNriForm(true)}>Register Interest →</button>
              </div>
              <div className="nri-services">
                {[
                  { icon: '🪔', title: 'Pooja & Prasad', desc: 'Book rituals at Mahakal and receive blessed prasad by post.' },
                  { icon: '📡', title: 'Live Darshan Access', desc: 'Priority HD streams and Aarti notifications for global devotees.' },
                  { icon: '🙏', title: 'Temple Donations', desc: 'Transparent seva and annadanam contributions with receipts.' },
                ].map((s) => (
                  <div
                    key={s.title}
                    className="nri-svc"
                    onClick={() => setShowNriForm(true)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setShowNriForm(true)}
                  >
                    <span className="nri-svc-icon">{s.icon}</span>
                    <div>
                      <div className="nri-svc-title">{s.title}</div>
                      <div className="nri-svc-desc">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="section" style={{ background: 'var(--cream)', padding: '60px 0' }} aria-labelledby="gallery-heading">
          <div className="container">
            <div className="sec-head center">
              <h2 id="gallery-heading">Simhastha Gallery</h2>
              <p className="sec-sub">Glimpses of divine moments</p>
            </div>
            <div className="gallery-wrap">
              <button type="button" className="gallery-nav prev" onClick={() => scrollCarousel('left')} aria-label="Previous images">◀</button>
              <div ref={carouselRef} className="gallery-track hide-scroll">
                {galleryItems.map((img, i) => (
                  <figure key={i} className="gallery-slide">
                    <img
                      src={img.url || img.img || img.src}
                      alt={img.cap || `Simhastha gallery image ${i + 1}`}
                      loading="lazy"
                      width="280"
                      height="200"
                    />
                    <figcaption className="gallery-cap">{img.cap}</figcaption>
                  </figure>
                ))}
              </div>
              <button type="button" className="gallery-nav next" onClick={() => scrollCarousel('right')} aria-label="Next images">▶</button>
            </div>
          </div>
        </section>

        {/* MISSING PERSONS */}
        <section className="section" style={{ background: '#FFF5F5' }} aria-labelledby="mp-heading">
          <div className="container">
            <div className="mp-board-header">
              <div>
                <div className="sec-label" style={{ color: '#DC2626' }}>Emergency Help</div>
                <h2 id="mp-heading">Missing Persons Board</h2>
                <p className="sec-sub">Help reunite families — ground team monitors 24/7 during Simhastha</p>
              </div>
              <div className="mp-actions">
    <button
  type="button"
  className="btn btn-red"
  onClick={() => {
    setOpenMissingForm(true);
    setPage('missing-persons');
  }}
>
  ⚠️ Report Missing
</button>

    <button
      type="button"
      className="btn btn-outline"
      onClick={() => setPage('missing-persons')}
    >
      View All Cases →
    </button>
  </div>
            </div>
            <div className="mp-grid">
              {mpList.slice(0, 2).map((p) => (
                <div key={p.id} className="mp-card" onClick={() => setPage('missing-persons')} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setPage('missing-persons')}>
                  <div className="mp-photo">
    {p.name.charAt(0)}
  </div>
                  <div className="mp-body">
                    <div className="mp-name-row">
                      <span className="mp-name">{p.name}</span>
                      <span className="mp-badge">Missing</span>
                    </div>
                    <div className="mp-age">{p.age}</div>
                    <p className="mp-desc">{p.desc}</p>
                    <div className="mp-detail">📍 {p.location}</div>
                    <div className="mp-detail">🗓 {p.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOTELS */}
        <section className="section" style={{ background: 'var(--white)' }} 
        aria-labelledby="hotels-heading">
          
          <div className="container">
            <div className="sec-head hotels-sec-head" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <div className="sec-label">Pilgrim Services</div>
                <h2 id="hotels-heading">Hotels &amp; Stays</h2>
                <p className="sec-sub">Verified partner accommodations near Mahakal and Ram Ghat</p>
              </div>
            </div>
            <div className="hotels-grid">
              {HOTELS_DATA
    .filter(h => h.type === 'Hotel')
    .slice(0, 3)
    .map(h => (
                <div key={h.id} className="hotel-card" onClick={() => {
    setPage('hotels');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setPage('hotels')}>
                  <div className="hcard-img">
                    {h.img
                      ? <img src={h.img} alt={h.name} loading="lazy" width="400" height="200" />
                      : <span style={{ fontSize: '70px' }} role="img" aria-label="Hotel">🏨</span>
                    }
                    <div className="hcard-tags">
                      <span className="hcard-tag">{h.tier}</span>
                      {h.featured && <span className="hcard-tag featured">Featured</span>}
                    </div>
                  </div>
                  <div className="hcard-body">
                    <div className="hcard-top">
                      <div className="hcard-name">{h.name}</div>
                      <div className="hcard-rating">⭐ {h.rating}</div>
                    </div>
                    <p className="hcard-desc">{h.desc}</p>
                    <div className="hcard-meta">📍 {h.location}</div>
                    <div className="hcard-foot">
                      <span className="hcard-price">{h.price}</span>
                      <button className="btn btn-primary btn-sm">
    Book Now
  </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="hotels-cta">
    <button
      type="button"
      className="btn btn-outline"
      onClick={() => {
    setPage('hotels');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }}
    >
      View All Stays →
    </button>
  </div>
          </div>
          
        </section>

        {/* NRI REGISTRATION MODAL */}
        {showNriForm && (
          <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Global Devotee Registration" onClick={() => { setShowNriForm(false); setFormStatus('idle'); }}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => { setShowNriForm(false); setFormStatus('idle'); }} aria-label="Close">✕</button>
              {formStatus === 'success' ? (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div style={{ fontSize: '48px', marginBottom: '12px' }}>🙏</div>
                  <h3 style={{ fontFamily: 'var(--serif)', color: 'var(--deep)', marginBottom: '8px' }}>Thank You!</h3>
                  <p style={{ color: 'var(--muted)' }}>We'll reach out with pilgrimage service details soon.</p>
                </div>
              ) : (
                <>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '22px', color: 'var(--deep)', marginBottom: '4px' }}>Global Devotee Registration</h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '20px' }}>Register your interest for pooja, prasad, and darshan services.</p>
                  <div className="form-group">
                    <label htmlFor="nri-name">Full Name *</label>
                    <input id="nri-name" type="text" placeholder="Your name" value={nriForm.name} onChange={(e) => setNriForm({ ...nriForm, name: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nri-email">Email Address *</label>
                    <input id="nri-email" type="email" placeholder="you@example.com" value={nriForm.email} onChange={(e) => setNriForm({ ...nriForm, email: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nri-country">Country</label>
                    <input id="nri-country" type="text" placeholder="USA, UK, UAE…" value={nriForm.country} onChange={(e) => setNriForm({ ...nriForm, country: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nri-service">I'm interested in</label>
                    <select id="nri-service" value={nriForm.service} onChange={(e) => setNriForm({ ...nriForm, service: e.target.value })}>
                      <option value="pooja">Pooja & Prasad</option>
                      <option value="darshan">Live Darshan Access</option>
                      <option value="donation">Temple Donations</option>
                      <option value="all">All Services</option>
                    </select>
                  </div>
                  {formStatus === 'error' && <p style={{ color: '#DC2626', fontSize: '13px', marginBottom: '12px' }}>Something went wrong. Please try again.</p>}
                  <button
                    className="btn btn-primary btn-full"
                    onClick={handleNriSubmit}
                    disabled={formStatus === 'loading' || !nriForm.name || !nriForm.email}
                    style={{ opacity: formStatus === 'loading' ? 0.7 : 1 }}
                  >
                    {formStatus === 'loading' ? 'Submitting…' : 'Register Interest 🙏'}
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </>
    );
  };

  export default Home;
