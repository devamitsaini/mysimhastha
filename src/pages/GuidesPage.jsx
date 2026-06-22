  import { Link } from "react-router-dom";
  import "../styles/GuidesPage.css";

  export default function GuidesPage() {
    const guides = [
      {
        title: "Simhastha 2028 Complete Guide",
        description:
          "Everything about Simhastha 2028 including dates, Shahi Snan, travel and FAQs.",
        link: "/guide/simhastha-2028",
      },
      {
        title: "Sawan 2026 Ujjain Guide",
    description:
      "Mahakal Darshan, Sawan Mondays, crowd updates, hotels and travel tips.",
    link: "/guide/sawan-2026",
      }
    ];

    return (
      <section className="simhastha-guide">
        <div className="container">
          <div className="guide-header">
            <h1>Simhastha Guides</h1>
            <p>
              Explore complete guides for Simhastha 2028,
              Mahakaleshwar Temple, Ujjain travel,
              accommodation and more.
            </p>
          </div>

          <div className="guides-grid">
            {guides.map((guide) => (
              <Link
                key={guide.link}
                to={guide.link}
                className="guide-card"
              >
                <h2>{guide.title}</h2>

                <p>{guide.description}</p>

                <span>
                  Read Guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }