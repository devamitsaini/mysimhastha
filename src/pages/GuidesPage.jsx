import { Link, useNavigate } from "react-router-dom";
import { SEO, SchemaProvider } from "../seo";
import "../styles/GuidesPage.css";

export default function GuidesPage() {
  const navigate = useNavigate();
  
  const guides = [
    {
    title: "Kal Bhairav Temple, Ujjain: Complete Guide, Timings & Significance",
    description:
      "Everything you need to know before visiting Kal Bhairav Temple, Ujjain — history, darshan timings, the famous liquor offering ritual, how to reach, dress code, and nearby places to combine on your visit.",
    image: "/images/kal-bhairav-temple-guide.webp",
    enLink: "/guide/kal-bhairav-temple-guide",
    hiLink: "/hi/guide/kal-bhairav-temple-guide",
    date: "2026-07-13"
  },
    {
      title: "Ujjain to Omkareshwar Travel Guide: Distance, Route, Taxi, Bus & Train",
      description:
        "Planning a trip from Ujjain to Omkareshwar? Discover the best travel routes, distance, taxi fares, buses, trains, travel time, one-day itinerary, temple timings, and essential tips for visiting Omkareshwar Jyotirlinga.",
      image: "/images/ujjain-to-om.webp",
      enLink: "/guide/ujjain-to-omkareshwar",
      hiLink: "/hi/guide/ujjain-to-omkareshwar",
      date: "2026-07-05"
    },
    {
      title: "15 Common Mistakes to Avoid During Your Mahakal Temple Visit",
      description:
        "Planning a visit to Mahakaleshwar Temple? Avoid these common mistakes related to Bhasma Aarti, dress code, mobile phones, VIP entry, parking, timings, and temple etiquette.",
      image: "/images/mahakal-visit-mistakes.webp",
      enLink: "/guide/mahakal-visit-mistakes",
      hiLink: "/hi/guide/mahakal-visit-mistakes",
      date: "2026-07-05",
    },
    {
      title: "How to Reach Ujjain: Complete Travel Guide by Train, Flight & Road",
      description:
        "Learn how to reach Ujjain by train, flight, and road. Find the nearest airport, railway station, bus routes, travel time, distances from major cities, local transport, and tips for visiting Mahakaleshwar Temple.",
      image: "/images/how-to-reach-ujjain.webp",
      enLink: "/guide/how-to-reach-ujjain",
      hiLink: "/hi/guide/how-to-reach-ujjain",
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
    },
  ];

  return (
    <>
      <SEO
        title="Ujjain Travel Guides | Mahakal Temple, Simhastha 2028, Sawan & Pilgrimage Tips"
        description="Complete travel guides for Ujjain pilgrimage. Plan Simhastha 2028, Mahakaleshwar Temple darshan, Sawan 2026, Bhasma Aarti booking, and sacred site visits with expert tips."
        canonical="https://www.mysimhastha.com/guides"
        ogTitle="Ujjain Travel Guides | Mahakal Temple, Simhastha 2028, Sawan & Pilgrimage Tips"
        ogDescription="Complete travel guides for Ujjain pilgrimage. Plan Simhastha 2028, Mahakaleshwar Temple darshan, Sawan 2026, Bhasma Aarti booking, and sacred site visits with expert tips."
        twitterTitle="Ujjain Travel Guides | Mahakal Temple, Simhastha 2028, Sawan & Pilgrimage Tips"
        twitterDescription="Complete travel guides for Ujjain pilgrimage. Plan Simhastha 2028, Mahakaleshwar Temple darshan, Sawan 2026, Bhasma Aarti booking, and sacred site visits with expert tips."
      />

      <SchemaProvider
        type="collection"
        data={{
          title: "Ujjain Travel Guides | Mahakal Temple, Simhastha 2028, Sawan & Pilgrimage Tips",
          description: "Complete travel guides for Ujjain pilgrimage. Plan Simhastha 2028, Mahakaleshwar Temple darshan, Sawan 2026, Bhasma Aarti booking, and sacred site visits with expert tips.",
          url: "https://www.mysimhastha.com/guides",
          about: "Ujjain Travel Guides & Pilgrimage Tips",
          items: guides.map((guide) => ({
            name: guide.title,
            description: guide.description,
            url: `https://www.mysimhastha.com${guide.enLink}`,
            image: `https://www.mysimhastha.com${guide.image}`,
          })),
        }}
      />

      <div className="guides-page">
        <div className="container">
          {/* Header Section */}
          <div className="guides-header">
            <span className="sec-label">Complete Guides</span>
            <h1 className="guides-title">
              <span className="guides-title-main">Complete Ujjain & Simhastha Travel Guides</span>
            </h1>
            <p className="guides-subtitle">
              Expert travel guides for Mahakaleshwar Temple, Simhastha 2028, Sawan 2026,
              Bhasma Aarti booking, and sacred site visits. Plan your spiritual journey with confidence.
            </p>
          </div>

          {/* Guides Grid */}
          <div className="guides-grid">
            {[...guides]
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((guide) => (
                <article
                  key={guide.title}
                  className="guide-card"
                  onClick={() => navigate(guide.enLink)}
                >
                  <div className="guide-image-wrap">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="guide-image"
                      loading="lazy"
                    />
                  </div>

                  <div className="guide-body">
                    <h2 className="guide-title">{guide.title}</h2>
                    <p className="guide-excerpt">{guide.description}</p>

                    <div className="guide-actions">
                      <Link
                        to={guide.enLink}
                        className="guide-btn guide-btn-primary"
                        onClick={(e) => e.stopPropagation()}
                      >
                        English
                      </Link>
                      <Link
                        to={guide.hiLink}
                        className="guide-btn guide-btn-outline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        हिन्दी
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}