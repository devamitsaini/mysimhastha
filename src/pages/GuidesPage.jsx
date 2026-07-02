import { Link, useNavigate } from "react-router-dom";
import "../styles/GuidesPage.css";


export default function GuidesPage() {

  const navigate = useNavigate();
  const guides = [
    {
    title: "How to Reach Ujjain: Complete Travel Guide by Train, Flight & Road",
    description:
      "Learn how to reach Ujjain by train, flight, and road. Find the nearest airport, railway station, bus routes, travel time, distances from major cities, local transport, and tips for visiting Mahakaleshwar Temple.",
    image: "/images/how-to-reach-ujjain.webp",
    enLink: "/guide/how-to-reach-ujjain",
    hiLink: "/hi/guide/ujjain-kaise-pahunche",
    date: "2026-07-02",
  },
    {
  title: "Where is Kumbh Mela Held? All 4 Kumbh Mela Locations in India Explained",
  description: "Discover all four Kumbh Mela locations in India—Ujjain, Prayagraj, Haridwar, and Nashik. Learn why Simhastha is celebrated only in Ujjain, explore the history, sacred rivers, mythology, travel tips, FAQs, and everything you need to know about Kumbh Mela.",
  image: "/images/kumbh-locations.webp",
  enLink: "/guide/kumbh-locations",
  hiLink: "/hi/guide/kumbh-locations",
  date: "2026-06-30",
},
    {
  title: "Mahakal Bhasma Aarti Guide 2026: Booking, Timings, Dress Code & Entry Rules",
  description: "Complete guide to Mahakal Bhasma Aarti at Mahakaleshwar Temple, Ujjain. Learn about online booking, timings, dress code, entry rules, required documents, VIP and free darshan, and important temple guidelines.",
  image: "/images/bhasma-arti.webp",
  enLink: "/guide/bhasma-arti",
  hiLink: "/hi/guide/bhasma-arti",
  date: "2026-06-30",
},
    {
    title: "Complete Guide to Mahakal Darshan at Mahakaleshwar Temple",
    description: "Temple visit guide, booking, costs, rules, spiritual experience",
    image: "/images/mahakal-darshan.webp",
    enLink: "/guide/mahakal-darshan",
    hiLink: "/hi/guide/mahakal-darshan",
    date: "2026-06-28",
  },
  {
    title: "Mahakal Shahi Sawari Ujjain Guide",
    description: "Complete guide for Mahakal Shahi Sawari...",
    image: "/images/mahakal-shahi-sawari.webp",
    enLink: "/guide/mahakal-shahi-sawari",
    hiLink: "/hi/guide/mahakal-shahi-sawari",
    date: "2026-06-25",
  },
  {
    title: "Sawan 2026 Ujjain Guide",
    description: "Mahakal Darshan, Sawan Mondays...",
    image: "/images/sawan-2026-ujjain.webp",
    enLink: "/guide/sawan-2026",
    hiLink: "/hi/guide/sawan-2026",
    date: "2026-06-24",
  },
  {
    title: "Sawan 2026 Dates Guide",
    description: "Complete Sawan 2026 calendar...",
    image: "/images/sawan-2026.webp",
    enLink: "/guide/sawan-2026-dates",
    hiLink: "/hi/guide/sawan-2026-dates",
    date: "2026-06-23",
  },
  {
    title: "Simhastha 2028 Complete Guide",
    description: "Everything about Simhastha 2028",
    image: "/images/simhastha-2028.webp",
    enLink: "/guide/simhastha-2028",
    hiLink: "/hi/guide/simhastha-2028",
    date: "2026-06-20",
  }
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

          {[...guides]
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .map((guide) => (
            <div
  key={guide.title}
  className="guide-card"
  onClick={() => navigate(guide.enLink)}
>

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
  onClick={(e) => e.stopPropagation()}
>
  English
</Link>

<Link
  to={guide.hiLink}
  className="lang-btn"
  onClick={(e) => e.stopPropagation()}
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