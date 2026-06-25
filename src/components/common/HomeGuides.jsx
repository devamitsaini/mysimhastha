import { Link } from "react-router-dom";
import "../../styles/HomeGuides.css";

export default function HomeGuides() {
  const guides = [
    {
      title: "Simhastha 2028 Complete Guide",
      description:
        "Dates, Shahi Snan, Mahakal Darshan, travel and accommodation.",
      image: "/images/simhastha-2028.webp",
      tag: "Featured Guide",
      link: "/guide/simhastha-2028",
    },
    {
      title: "Sawan 2026 Ujjain Guide",
      description:
        "Sawan Somwar dates, Mahakal Darshan, Bhasma Aarti and travel guide.",
      image: "/images/sawan-2026.webp",
      tag: "Featured",
      link: "/guide/sawan-2026",
    },
    {
      title: "Mahakal Shahi Sawari Ujjain Guide",
      description:
        "Complete guide to Shahi Sawari dates, route, timings and best viewing tips.",
      image: "/images/mahakal-shahi-sawari.webp",
      tag: "Featured",
      link: "/guide/mahakal-shahi-sawari",
    },
  ];

  return (
    <section className="home-guides-section">
      <div className="container">
        <div className="sec-head center">
          <h2>Simhastha & Mahakal Darshan Guides</h2>
          <p>
            Complete guides for Simhastha 2028, Sawan 2026, Mahakal Darshan,
            Shahi Snan dates and Ujjain pilgrimage planning.
          </p>
        </div>

        <div className="home-guides-grid">
          {guides.map((guide) => (
            <Link
              key={guide.link}
              to={guide.link}
              className="home-guide-card"
            >
              <div className="home-guide-image-wrapper">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="home-guide-image"
                  loading="lazy"
                />
              </div>

              <div className="home-guide-content">
                <span className="home-guide-tag">
                  {guide.tag}
                </span>

                <h3 className="home-guide-title">
                  {guide.title}
                </h3>

                <p className="home-guide-description">
                  {guide.description}
                </p>

                <div className="home-guide-footer">
                  <span>Read Guide</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="home-guides-btn-wrap">
          <Link
            to="/guides"
            className="btn btn-outline"
          >
            Explore All Guides →
          </Link>
        </div>
      </div>
    </section>
  );
}