import { Link } from "react-router-dom";
import "../styles/GuidesPage.css";

export default function GuidesPage() {
  const guides = [
    {
      title: "Simhastha 2028 Complete Guide",
      description:
        "Everything about Simhastha 2028 including dates, Shahi Snan, travel and FAQs.",
      image: "/images/mahakal-shahi-sawari-hi.webp",
      enLink: "/guide/simhastha-2028",
      hiLink: "/hi/guide/simhastha-2028",
    },
    {
      title: "Sawan 2026 Ujjain Guide",
      description:
        "Mahakal Darshan, Sawan Mondays, crowd updates, hotels and travel tips.",
      image: "/images/mahakal-shahi-sawari-hi.webp",
      enLink: "/guide/sawan-2026",
      hiLink: "/hi/guide/sawan-2026",
    },
    {
      title: "Sawan 2026 Dates Guide",
      description:
        "Complete Sawan 2026 calendar, Sawan Somwar dates and Shravan month information.",
      image: "/images/mahakal-shahi-sawari-hi.webp",
      enLink: "/guide/sawan-2026-dates",
      hiLink: "/hi/sawan-2026-dates",
    },
    {
      title: "Mahakal Shahi Sawari Ujjain Guide",
      description:
        "Complete guide for Mahakal Shahi Sawari: dates, routes and viewing tips.",
      image: "/images/mahakal-shahi-sawari-hi.webp",
      enLink: "/guide/mahakal-shahi-sawari",
      hiLink: "/hi/guide/mahakal-shahi-sawari",
    },
  ];

  return (
    <section className="simhastha-guide">
      <div className="container">

        <div className="guide-header">
          <h1>Guides</h1>

          <p>
            Explore complete guides for Simhastha 2028,
            Mahakaleshwar Temple, Sawan/Shravan Month Guide,
            Ujjain travel, accommodation and more.
          </p>
        </div>

        <div className="guides-grid">

          {guides.map((guide) => (
            <div key={guide.title} className="guide-card">

              {/* Left Image */}
              <div className="guide-card-image-wrapper">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="guide-card-image"
                  loading="lazy"
                />
              </div>

              {/* Right Content */}
              <div className="guide-card-content">

                <h2>{guide.title}</h2>

                <p>{guide.description}</p>

                <div className="guide-language-switch">

                  <Link
                    to={guide.enLink}
                    className="lang-btn"
                  >
                    English
                  </Link>

                  <Link
                    to={guide.hiLink}
                    className="lang-btn"
                  >
                    हिन्दी
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}