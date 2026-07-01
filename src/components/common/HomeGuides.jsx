  import { Link } from "react-router-dom";
  import "../../styles/HomeGuides.css";

  export default function HomeGuides() {
    const guides = [
    {
      title: "Where is Kumbh Mela Held? All 4 Kumbh Mela Locations in India Explained",
      description:
        "Discover the four sacred Kumbh Mela locations in India—Ujjain, Prayagraj, Haridwar, and Nashik. Learn why only Ujjain hosts Simhastha, explore the mythology, history, sacred rivers, travel tips, and FAQs.",
      image: "/images/kumbh-locations.webp",
      enLink: "/guide/kumbh-locations",
      hiLink: "/hi/guide/kumbh-locations",
      date: "2026-06-30",
      readingTime: "12 min",
      category: "Kumbh Mela",
      featured: true,
    },

    {
      title: "Mahakal Bhasma Aarti Guide 2026: Booking, Timings, Dress Code & Entry Rules",
      description:
        "Complete guide to Mahakal Bhasma Aarti at Mahakaleshwar Temple, including online booking, timings, dress code, entry rules, required documents, and important temple guidelines.",
      image: "/images/bhasma-arti.webp",
      enLink: "/guide/bhasma-arti",
      hiLink: "/hi/guide/bhasma-arti",
      date: "2026-06-30",
      readingTime: "15 min",
      category: "Mahakal",
      featured: true,
    },

    {
      title: "Complete Guide to Mahakal Darshan at Mahakaleshwar Temple",
      description:
        "Everything you need to know about Mahakal Darshan, including darshan timings, VIP entry, temple rules, ticket information, and travel tips.",
      image: "/images/mahakal-darshan.webp",
      enLink: "/guide/mahakal-darshan",
      hiLink: "/hi/guide/mahakal-darshan",
      date: "2026-06-28",
      readingTime: "14 min",
      category: "Mahakal",
      featured: true,
    },

    {
      title: "Mahakal Shahi Sawari Ujjain Guide",
      description:
        "Complete guide to Mahakal Shahi Sawari, including procession dates, route map, timings, traditions, history, and travel tips.",
      image: "/images/mahakal-shahi-sawari.webp",
      enLink: "/guide/mahakal-shahi-sawari",
      hiLink: "/hi/guide/mahakal-shahi-sawari",
      date: "2026-06-25",
      readingTime: "10 min",
      category: "Festival",
      featured: false,
    },

    {
      title: "Sawan 2026 Ujjain Guide",
      description:
        "Complete Sawan 2026 guide covering Mahakal Darshan, Monday celebrations, temple timings, crowd information, and travel planning.",
      image: "/images/sawan-2026-ujjain.webp",
      enLink: "/guide/sawan-2026",
      hiLink: "/hi/guide/sawan-2026",
      date: "2026-06-24",
      readingTime: "13 min",
      category: "Sawan",
      featured: false,
    },

    {
      title: "Sawan 2026 Dates Guide",
      description:
        "Check the complete Sawan 2026 calendar, Somwar dates, important festivals, and religious significance.",
      image: "/images/sawan-2026.webp",
      enLink: "/guide/sawan-2026-dates",
      hiLink: "/hi/guide/sawan-2026-dates",
      date: "2026-06-23",
      readingTime: "8 min",
      category: "Sawan",
      featured: false,
    },

    {
      title: "Simhastha 2028 Complete Guide: Dates, Shahi Snan & Travel",
      description:
        "Everything about Simhastha 2028, including dates, Shahi Snan schedule, travel planning, accommodation, history, and FAQs.",
      image: "/images/simhastha-2028.webp",
      enLink: "/guide/simhastha-2028",
      hiLink: "/hi/guide/simhastha-2028",
      date: "2026-06-20",
      readingTime: "18 min",
      category: "Simhastha",
      featured: true,
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
    {[...guides]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 4)
      .map((guide) => (
        <Link
          key={guide.enLink}
          to={guide.enLink}
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
              {guide.category}
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