import React from "react";
import { useNavigate } from "react-router-dom";

import LiveDarshanCard from "../components/common/LiveDarshanCard";

import { DARSHAN_FEEDS } from "../data/simhasthaData";

import { SEO, SchemaProvider } from "../seo";

import "../styles/LiveDarshan.css";

function LiveDarshanPage(){

const navigate=useNavigate();

const stats=[
{
number:"15+",
label:"Temple Streams"
},
{
number:"24×7",
label:"Live Updates"
},
{
number:"365",
label:"Days Coverage"
},
{
number:"5 Cr+",
label:"Expected Viewers"
}
];

return(

<>

<SEO
title="Live Darshan Ujjain | Mahakal Live Darshan, Aarti Timings & Temple Live Streams"
description="Watch Mahakal Live Darshan, Mahakal Aarti, Harsiddhi Temple Live, Kal Bhairav Live Darshan, temple timings, official live streams and Simhastha 2028 coverage."
canonical="https://www.mysimhastha.com/live-darshan"
keywords="Mahakal Live Darshan, Mahakal Live, Mahakal Aarti, Mahakal Live Today, Live Darshan Ujjain, Temple Live, Simhastha Live, Mahakal Temple Live"
/>

<SchemaProvider
type="video"
data={{
title: "Live Darshan Ujjain | Mahakal Live Darshan, Aarti Timings & Temple Live Streams",
description: "Watch Mahakal Live Darshan, Mahakal Aarti, Harsiddhi Temple Live, Kal Bhairav Live Darshan, temple timings, official live streams and Simhastha 2028 coverage.",
url: "https://www.mysimhastha.com/live-darshan",
about: "Live Darshan",
}}
/>

<div className="live-page">

{/* HERO */}

<section className="live-hero">

<div className="hero-overlay"></div>

<div className="container">

<div className="hero-content">

<span className="hero-chip">

📡 LIVE DARSHAN

</span>

<h1>

Watch

<span>

Mahakal Live Darshan

</span>

</h1>

<p>

Experience the divine presence of
Mahakaleshwar Temple and other sacred temples
of Ujjain through official Live Darshan,
daily Aarti timings and festival broadcasts.

</p>

<div className="hero-actions">

<button
className="primary-btn"
onClick={()=>navigate("/simhastha-2028")}
>

Explore Simhastha

</button>

<button
className="secondary-btn"
onClick={()=>navigate("/snan-calendar")}
>

Shahi Snan

</button>

<button
className="outline-btn"
onClick={()=>navigate("/stays")}
>

Book Stay

</button>

</div>

</div>

</div>

</section>

{/* FLOATING BAR */}

<section className="live-floating">

<div className="container">

<div className="live-floating-card">

<div className="live-indicator">

<span className="live-dot"></span>

LIVE STATUS

</div>

<div className="live-next">

Next Major Event

<strong>

Mahakal Aarti

</strong>

</div>



</div>

</div>

</section>

{/* STATS */}

<section className="live-stats">

<div className="container">

<div className="section-heading center">

<span>

Live Coverage

</span>

<h2>

Temple Live Darshan at a Glance

</h2>

<p>

Watch important temple ceremonies,
Aarti broadcasts,
festival events
and official live streams from Ujjain.

</p>

</div>

<div className="stats-grid">

{stats.map((item,index)=>(

<div
key={index}
className="stat-card"
>

<h3>

{item.number}

</h3>

<p>

{item.label}

</p>

</div>

))}

</div>

</div>

</section>

{/* FEATURED STREAMS */}

<section className="featured-live">

<div className="container">

<div className="section-heading">

<span>

Official Streams

</span>

<h2>

Featured Live Darshan

</h2>

<p>

Watch official temple live streams,
daily Aarti,
religious ceremonies
and important Simhastha events.

</p>

</div>

<div className="live-grid">

{DARSHAN_FEEDS.map((item,index)=>(

<LiveDarshanCard

key={index}

d={item}

/>

))}

</div>

</div>

</section>
      {/* ======================================================
          TODAY'S AARTI SCHEDULE
      ====================================================== */}

      <section className="aarti-section">

        <div className="container">

          <div className="section-heading center">

            <span>

              Daily Schedule

            </span>

            <h2>

              Mahakal Aarti Timings

            </h2>

            <p>

              Important daily Aarti timings of
              Mahakaleshwar Temple. Timings may vary
              on festival days and during Simhastha.

            </p>

          </div>

          <div className="aarti-grid">

            <div className="aarti-card featured">

              <span className="live-tag">

                MOST POPULAR

              </span>

              <h3>

                Bhasma Aarti

              </h3>

              <h4>

                4:00 AM

              </h4>

              <p>

                The most sacred ritual of
                Mahakaleshwar Temple performed
                before sunrise.

              </p>

            </div>

            <div className="aarti-card">

              <h3>

                Morning Puja

              </h3>

              <h4>

                7:30 AM

              </h4>

              <p>

                Daily morning worship.

              </p>

            </div>

            <div className="aarti-card">

              <h3>

                Midday Aarti

              </h3>

              <h4>

                10:30 AM

              </h4>

              <p>

                Regular temple rituals.

              </p>

            </div>

            <div className="aarti-card">

              <h3>

                Evening Aarti

              </h3>

              <h4>

                7:00 PM

              </h4>

              <p>

                Sandhya Aarti with devotional chants.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          WHY LIVE DARSHAN
      ====================================================== */}

      <section className="why-live">

        <div className="container">

          <div className="section-heading center">

            <span>

              Divine Experience

            </span>

            <h2>

              Why Watch Live Darshan?

            </h2>

          </div>

          <div className="why-grid">

            <div className="why-card">

              <div className="why-icon">

                🕉

              </div>

              <h3>

                Spiritual Connection

              </h3>

              <p>

                Experience the divine atmosphere
                of Mahakal from anywhere in
                the world.

              </p>

            </div>

            <div className="why-card">

              <div className="why-icon">

                🌍

              </div>

              <h3>

                Global Devotees

              </h3>

              <p>

                Perfect for devotees who cannot
                travel to Ujjain.

              </p>

            </div>

            <div className="why-card">

              <div className="why-icon">

                📺

              </div>

              <h3>

                Official Coverage

              </h3>

              <p>

                Watch authentic temple broadcasts
                and festival ceremonies.

              </p>

            </div>

            <div className="why-card">

              <div className="why-icon">

                🔔

              </div>

              <h3>

                Never Miss Aarti

              </h3>

              <p>

                Stay updated with important
                temple rituals and events.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          TEMPLE DIRECTORY
      ====================================================== */}

      <section className="temple-directory">

        <div className="container">

          <div className="section-heading">

            <span>

              Temple Coverage

            </span>

            <h2>

              Live Darshan from Sacred Temples

            </h2>

            <p>

              Official temple broadcasts and
              important ceremonies across Ujjain.

            </p>

          </div>

          <div className="temple-grid">

            <div className="temple-card">

              <div className="temple-status live">

                LIVE

              </div>

              <h3>

                Mahakaleshwar Temple

              </h3>

              <p>

                Daily Aarti, Darshan &
                important festivals.

              </p>

            </div>

            <div className="temple-card">

              <div className="temple-status">

                Scheduled

              </div>

              <h3>

                Harsiddhi Temple

              </h3>

              <p>

                Evening Deep Stambh
                illumination.

              </p>

            </div>

            <div className="temple-card">

              <div className="temple-status">

                Scheduled

              </div>

              <h3>

                Kal Bhairav Temple

              </h3>

              <p>

                Daily rituals &
                temple updates.

              </p>

            </div>

            <div className="temple-card">

              <div className="temple-status">

                Scheduled

              </div>

              <h3>

                Chintaman Ganesh

              </h3>

              <p>

                Ganesh Darshan &
                special pujas.

              </p>

            </div>

            <div className="temple-card">

              <div className="temple-status">

                Scheduled

              </div>

              <h3>

                Mangalnath Temple

              </h3>

              <p>

                Mangal Dosh rituals &
                temple worship.

              </p>

            </div>

            <div className="temple-card">

              <div className="temple-status">

                Festival

              </div>

              <h3>

                Ram Ghat

              </h3>

              <p>

                Shipra Aarti and
                Simhastha ceremonies.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          UPCOMING EVENTS
      ====================================================== */}

      <section className="upcoming-live">

        <div className="container">

          <div className="section-heading center">

            <span>

              Upcoming Broadcasts

            </span>

            <h2>

              Upcoming Live Events

            </h2>

          </div>

          <div className="event-timeline">

            <div className="event-item">

              <div className="event-time">

                04:00 AM

              </div>

              <div className="event-content">

                <h3>

                  Mahakal Bhasma Aarti

                </h3>

                <p>

                  Official morning broadcast.

                </p>

              </div>

            </div>

            <div className="event-item">

              <div className="event-time">

                07:00 PM

              </div>

              <div className="event-content">

                <h3>

                  Evening Mahakal Aarti

                </h3>

                <p>

                  Daily evening darshan.

                </p>

              </div>

            </div>

            <div className="event-item">

              <div className="event-time">

                Festival

              </div>

              <div className="event-content">

                <h3>

                  Simhastha 2028 Live Coverage

                </h3>

                <p>

                  Shahi Snan,
                  temple rituals and
                  cultural events.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ======================================================
          HOW TO WATCH
      ====================================================== */}

      <section className="watch-guide">

        <div className="container">

          <div className="section-heading center">

            <span>

              Watch Guide

            </span>

            <h2>

              How to Watch Live Darshan

            </h2>

            <p>

              Follow these simple steps to enjoy
              uninterrupted Live Darshan from
              Mahakaleshwar Temple and other
              sacred temples of Ujjain.

            </p>

          </div>

          <div className="watch-grid">

            <div className="watch-step">

              <span>1</span>

              <h3>

                Choose a Temple

              </h3>

              <p>

                Select Mahakal or any temple
                whose Live Darshan you wish
                to watch.

              </p>

            </div>

            <div className="watch-step">

              <span>2</span>

              <h3>

                Check Schedule

              </h3>

              <p>

                View today's Aarti timings
                and upcoming ceremonies.

              </p>

            </div>

            <div className="watch-step">

              <span>3</span>

              <h3>

                Join Live Stream

              </h3>

              <p>

                Watch the official
                temple broadcast
                in real time.

              </p>

            </div>

            <div className="watch-step">

              <span>4</span>

              <h3>

                Receive Updates

              </h3>

              <p>

                Stay informed about
                important festivals,
                Aarti timings and
                Simhastha broadcasts.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          LIVE DARSHAN BENEFITS
      ====================================================== */}

      <section className="benefits-section">

        <div className="container">

          <div className="section-heading center">

            <span>

              Why MySimhastha

            </span>

            <h2>

              Everything in One Place

            </h2>

          </div>

          <div className="benefits-grid">

            <div className="benefit-card">

              <div className="benefit-icon">

                📡

              </div>

              <h3>

                Official Updates

              </h3>

              <p>

                Access official temple
                schedules and verified
                festival information.

              </p>

            </div>

            <div className="benefit-card">

              <div className="benefit-icon">

                🔔

              </div>

              <h3>

                Live Notifications

              </h3>

              <p>

                Get notified before
                important Aartis and
                Live Darshan begins.

              </p>

            </div>

            <div className="benefit-card">

              <div className="benefit-icon">

                🛕

              </div>

              <h3>

                Multiple Temples

              </h3>

              <p>

                Watch Live Darshan from
                Mahakal and other famous
                temples of Ujjain.

              </p>

            </div>

            <div className="benefit-card">

              <div className="benefit-icon">

                🌍

              </div>

              <h3>

                Global Access

              </h3>

              <p>

                Join the divine experience
                from anywhere in the world.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          NOTIFICATION CTA
      ====================================================== */}

      <section className="notify-section">

        <div className="container">

          <div className="notify-box">

            <div className="notify-left">

              <span>

                🔔

              </span>

              <div>

                <h2>

                  Never Miss a Live Darshan

                </h2>

                <p>

                  Receive notifications
                  for Mahakal Live Darshan,
                  Bhasma Aarti,
                  festival broadcasts
                  and Simhastha updates.

                </p>

              </div>

            </div>

            <button
              className="primary-btn"
            >

              Notify Me

            </button>

          </div>

        </div>

      </section>

      {/* ======================================================
          FAQ
      ====================================================== */}

      <section className="live-faq">

        <div className="container">

          <div className="section-heading center">

            <span>

              FAQs

            </span>

            <h2>

              Frequently Asked Questions

            </h2>

          </div>

          <div className="faq-grid">

            <div className="faq-card">

              <h3>

                Can I watch Mahakal Live Darshan online?

              </h3>

              <p>

                Yes. Official temple
                streams are available
                during important rituals
                and festivals.

              </p>

            </div>

            <div className="faq-card">

              <h3>

                Is Live Darshan free?

              </h3>

              <p>

                Yes.
                Live Darshan information
                and official links are
                completely free.

              </p>

            </div>

            <div className="faq-card">

              <h3>

                Does Mahakal have daily Live Darshan?

              </h3>

              <p>

                Major rituals,
                Aartis and festivals
                are broadcast whenever
                official streams
                are available.

              </p>

            </div>

            <div className="faq-card">

              <h3>

                Can I watch Simhastha Live?

              </h3>

              <p>

                Yes.
                During Simhastha,
                major ceremonies,
                Shahi Snan and temple
                events will be covered.

              </p>

            </div>

            <div className="faq-card">

              <h3>

                Which temples provide Live Darshan?

              </h3>

              <p>

                Mahakaleshwar,
                Harsiddhi,
                Kal Bhairav,
                Chintaman Ganesh,
                Mangalnath and more.

              </p>

            </div>

            <div className="faq-card">

              <h3>

                How do I receive notifications?

              </h3>

              <p>

                Register on MySimhastha
                to receive alerts before
                important temple broadcasts.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          RELATED GUIDES
      ====================================================== */}

      <section className="related-guides">

        <div className="container">

          <div className="section-heading">

            <span>

              Continue Exploring

            </span>

            <h2>

              Helpful Guides

            </h2>

          </div>

          <div className="guide-grid">

            <div
              className="guide-card"
              onClick={()=>navigate("/guide/mahakal-darshan")}
            >

              🛕

              <h3>

                Mahakal Darshan Guide

              </h3>

            </div>

            <div
              className="guide-card"
              onClick={()=>navigate("/snan-calendar")}
            >

              🔱

              <h3>

                Shahi Snan Calendar

              </h3>

            </div>

            <div
              className="guide-card"
              onClick={()=>navigate("/stays")}
            >

              🏨

              <h3>

                Hotels Near Mahakal

              </h3>

            </div>

            <div
              className="guide-card"
              onClick={()=>navigate("/guide/how-to-reach-ujjain")}
            >

              🚆

              <h3>

                How to Reach Ujjain

              </h3>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          FINAL CTA
      ====================================================== */}

      <section className="live-cta">

        <div className="container">

          <div className="cta-card">

            <span>

              📡 LIVE DARSHAN

            </span>

            <h2>

              Experience Divine Blessings Anytime

            </h2>

            <p>

              Watch official Live Darshan,
              explore Simhastha,
              plan your pilgrimage
              and stay connected
              with the spiritual heart
              of Ujjain.

            </p>

            <div className="cta-buttons">

              <button
                className="primary-btn"
                onClick={()=>navigate("/simhastha-2028")}
              >

                Explore Simhastha

              </button>

              <button
                className="secondary-btn"
                onClick={()=>navigate("/stays")}
              >

                Find Stays

              </button>

            </div>

          </div>

        </div>

      </section>

    </div>

  </>

);

}

export default LiveDarshanPage;