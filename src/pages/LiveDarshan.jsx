import React from "react";
import { Helmet } from "react-helmet-async";
import { DARSHAN_FEEDS } from "../data/simhasthaData";
import LiveDarshanCard from "../components/common/LiveDarshanCard";

function LiveDarshanPage() {
  const canonicalUrl = "https://www.mysimhastha.com/live-darshan";

  const image =
    "https://www.mysimhastha.com/images/live-darshan.webp";

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": canonicalUrl,
    name: "Live Darshan Ujjain | Mahakal Live Darshan",
    description:
      "Watch Live Darshan from Mahakaleshwar Temple, Harsiddhi Temple, Kal Bhairav Temple and other sacred temples of Ujjain. Find Mahakal Aarti timings, temple schedules and Simhastha 2028 live updates.",
    url: canonicalUrl,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.mysimhastha.com/#website"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.mysimhastha.com"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Live Darshan",
        item: canonicalUrl
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I watch Mahakal Live Darshan online?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. MySimhastha provides information about Mahakaleshwar Temple Live Darshan and official live streaming updates."
        }
      },
      {
        "@type": "Question",
        name: "When will Simhastha 2028 Live Darshan begin?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Live coverage will begin during Simhastha 2028 and will include major rituals, Shahi Snan and temple events whenever official streams are available."
        }
      },
      {
        "@type": "Question",
        name: "Is Live Darshan free?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Live Darshan information and official streaming links are completely free."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>

        <title>
          Live Darshan Ujjain | Mahakal Live Darshan, Aarti Timings & Simhastha 2028
        </title>

        <meta
          name="description"
          content="Watch Live Darshan from Mahakaleshwar Temple and other famous temples of Ujjain. Find Mahakal Aarti timings, temple schedules and Simhastha 2028 live updates."
        />

        <meta
          name="keywords"
          content="Mahakal Live Darshan, Mahakaleshwar Live Darshan, Ujjain Live Darshan, Mahakal Aarti, Simhastha Live, Temple Live Darshan, Mahakal Temple Live"
        />

        <meta
          name="robots"
          content="index,follow,max-image-preview:large"
        />

        <link
          rel="canonical"
          href={canonicalUrl}
        />

        <link
          rel="alternate"
          hrefLang="en"
          href={canonicalUrl}
        />

        <link
          rel="alternate"
          hrefLang="x-default"
          href={canonicalUrl}
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MySimhastha" />
        <meta property="og:locale" content="en_IN" />

        <meta
          property="og:url"
          content={canonicalUrl}
        />

        <meta
          property="og:title"
          content="Live Darshan Ujjain | Mahakal Live Darshan"
        />

        <meta
          property="og:description"
          content="Watch Mahakaleshwar Temple Live Darshan, Aarti timings and Simhastha 2028 live updates."
        />

        <meta
          property="og:image"
          content={image}
        />

        <meta
          property="og:image:width"
          content="1200"
        />

        <meta
          property="og:image:height"
          content="630"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Live Darshan Ujjain"
        />

        <meta
          name="twitter:description"
          content="Watch Mahakal Live Darshan, temple live streams and Aarti timings."
        />

        <meta
          name="twitter:image"
          content={image}
        />

        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>

      </Helmet>

      <div className="page-wrap">

  {/* Hero Section */}

  <div
    className="page-hero"
    data-shlok="जय महाकाल"
    style={{
      background: "linear-gradient(160deg,#0A0400,#1A0000)"
    }}
  >
    <div
      className="container"
      style={{
        position: "relative",
        zIndex: 1
      }}
    >

      <div
        style={{
          fontFamily: "var(--ui)",
          fontSize: "11px",
          fontWeight: 900,
          letterSpacing: "1px",
          textTransform: "uppercase",
          color: "rgba(255,200,100,.75)",
          marginBottom: "8px"
        }}
      >
        📡 LIVE STREAMS
      </div>

      <div className="page-hero-hi">
        लाइव दर्शन · आरती समय
      </div>

      <div className="page-hero-title">
        Mahakal Live Darshan & Ujjain Temple Live Streams
      </div>

      <p className="page-hero-sub">
        Watch Live Darshan from Mahakaleshwar Temple and other sacred temples
        of Ujjain. Find Mahakal Aarti timings, temple schedules and official
        Simhastha 2028 live updates.
      </p>

    </div>
  </div>

  {/* SEO Content */}

  <section className="section">
    <div className="container">

      <h2
        style={{
          fontFamily: "var(--serif)",
          color: "var(--deep)",
          marginBottom: "16px"
        }}
      >
        
        Watch Mahakal Live Darshan from Mahakaleshwar Temple, Harsiddhi Temple, Kal Bhairav Temple and other sacred temples of Ujjain. Get daily Aarti timings, temple schedules and official Simhastha 2028 live updates.
      </h2>

      <p
        style={{
          lineHeight: 1.9,
          color: "var(--muted)",
          marginBottom: "18px"
        }}
      >
        MySimhastha brings together information about Live Darshan from
        Mahakaleshwar Jyotirlinga, Harsiddhi Temple, Kal Bhairav Temple,
        Chintaman Ganesh Temple, Mangalnath Temple, Ram Ghat and other
        important temples of Ujjain. Devotees can stay updated with Mahakal
        Aarti timings, temple schedules, religious ceremonies and important
        announcements related to Simhastha 2028.
      </p>

      <p
        style={{
          lineHeight: 1.9,
          color: "var(--muted)",
          marginBottom: "18px"
        }}
      >
        During Simhastha 2028, this page will provide access to official live
        streams, important bathing day coverage, spiritual events,
        Mahakaleshwar Temple updates and pilgrimage information to help
        devotees around the world experience the sacred atmosphere of Ujjain.
      </p>

      <div className="darshan-grid">

        {DARSHAN_FEEDS.map((d, i) => (
          <LiveDarshanCard
            key={i}
            d={d}
          />
        ))}

      </div>
        <div
          style={{
            background: "var(--cream2)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            padding: "24px",
            marginTop: "32px",
            display: "flex",
            alignItems: "center",
            gap: "18px",
            flexWrap: "wrap"
          }}
        >
          <div style={{ fontSize: "28px" }}>
            🔔
          </div>

          <div style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: "var(--serif)",
                fontSize: "20px",
                fontWeight: 700,
                color: "var(--deep)",
                marginBottom: "6px"
              }}
            >
              Get Notified When Live Darshan Starts
            </div>

            <div
              style={{
                color: "var(--muted)",
                lineHeight: 1.7
              }}
            >
              Register to receive updates about Mahakal Live Darshan,
              Simhastha 2028 live streams, important Aarti timings,
              Shahi Snan coverage and major religious events.
            </div>
          </div>

          <button
            className="btn btn-primary"
            style={{ marginLeft: "auto" }}
            onClick={() =>
              alert(
                "Registration opens soon."
              )
            }
          >
            Notify Me →
          </button>
        </div>

        {/* Information Section */}

        <div style={{ marginTop: "60px" }}>

          <h2
            style={{
              fontFamily: "var(--serif)",
              color: "var(--deep)",
              marginBottom: "18px"
            }}
          >
            About Live Darshan
          </h2>

          <p
            style={{
              lineHeight: 1.9,
              color: "var(--muted)",
              marginBottom: "16px"
            }}
          >
            Live Darshan allows devotees across India and around the world
            to experience the spiritual atmosphere of Ujjain without
            travelling to the temple. During major festivals such as
            Simhastha, Mahashivratri, Sawan and other important occasions,
            official temple broadcasts provide real-time coverage of
            rituals and ceremonies.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              color: "var(--muted)",
              marginBottom: "16px"
            }}
          >
            MySimhastha brings together temple information, Mahakal Aarti
            timings, important announcements and official streaming
            updates to help pilgrims stay informed before and during
            their visit to Ujjain.
          </p>

        </div>

        {/* FAQ */}

        <div style={{ marginTop: "60px" }}>

          <h2
            style={{
              fontFamily: "var(--serif)",
              color: "var(--deep)",
              marginBottom: "20px"
            }}
          >
            Frequently Asked Questions
          </h2>

          <div className="faq-list">

            <div className="faq-item">
              <h3>
                Can I watch Mahakal Live Darshan online?
              </h3>

              <p>
                Yes. Official live streams are available during important
                rituals and festivals. MySimhastha also provides temple
                schedules and live stream updates.
              </p>
            </div>

            <div className="faq-item">
              <h3>
                Is Live Darshan free?
              </h3>

              <p>
                Yes. Live Darshan information and official streaming links
                are available free of charge.
              </p>
            </div>

            <div className="faq-item">
              <h3>
                When will Simhastha 2028 Live Darshan begin?
              </h3>

              <p>
                Live coverage is expected during Simhastha 2028,
                including important bathing days, temple ceremonies
                and religious events.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>

  </div>

    </>
  );
}

export default LiveDarshanPage;