import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./StayDetails.css";

export default function StayDetails() {
  return (
    <>
      <Helmet>
        <title>Stay Details | MySimhastha</title>

        <meta
          name="description"
          content="Premium hotels and dharamshalas near Mahakaleshwar Temple are coming soon on MySimhastha."
        />

        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <main className="stay-details-page">
        <div
          style={{
            maxWidth: "800px",
            margin: "80px auto",
            padding: "48px 32px",
            background: "#fff",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: "0 10px 40px rgba(0,0,0,.08)",
          }}
        >
          <h1
            style={{
              fontSize: "2.4rem",
              marginBottom: "20px",
              color: "#1f2937",
            }}
          >
            🚧 Stay Details Coming Soon
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              color: "#6b7280",
              lineHeight: 1.8,
              marginBottom: "32px",
            }}
          >
            We are building a premium hotel booking experience for pilgrims
            visiting Mahakaleshwar Temple and Simhastha 2028.
            <br />
            Detailed property pages, room information, amenities, maps, reviews,
            and direct booking will be available soon.
          </p>

          <Link
            to="/stays"
            style={{
              display: "inline-block",
              padding: "14px 28px",
              borderRadius: "10px",
              background: "#f97316",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            ← Back to Hotels
          </Link>
        </div>
      </main>
    </>
  );
}
{/*import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import { fetchStayBySlug } from "../../services/staysService";

import Gallery from "../../components/stayDetails/Gallery/Gallery";
import HotelInfo from "../../components/stayDetails/HotelInfo/HotelInfo";
import Amenities from "../../components/stayDetails/Amenities/Amenities";
import MapSection from "../../components/stayDetails/MapSection/MapSection";
import NearbyPlaces from "../../components/stayDetails/NearbyPlaces/NearbyPlaces";
import PropertyRules from "../../components/stayDetails/PropertyRules/PropertyRules";
import HotelFAQ from "../../components/stayDetails/HotelFAQ/HotelFAQ";
import Reviews from "../../components/stayDetails/Reviews/Reviews";
import SimilarHotels from "../../components/stayDetails/SimilarHotels/SimilarHotels";
import BookingCard from "../../components/stayDetails/BookingCard/BookingCard";
import StickyBookingBar from "../../components/stayDetails/StickyBookingBar/StickyBookingBar";

import "./StayDetails.css";

const StayDetails = () => {
  const { slug } = useParams();

  const [stay, setStay] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    loadStay();
  }, [slug]);

  const loadStay = async () => {
    setLoading(true);

    const result = await fetchStayBySlug(slug);

    if (!result.error) {
      setStay(result.data);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <main className="stay-details-page">
        <div className="container">
          <div className="stay-details-loading">
            Loading hotel...
          </div>
        </div>
      </main>
    );
  }

  if (!stay) {
    return (
      <main className="stay-details-page">
        <div className="container">
          <div className="stay-details-loading">
            Hotel not found.
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>
          {stay.name} | Hotels Near Mahakaleshwar Temple | MySimhastha
        </title>

        <meta
          name="description"
          content={
            stay.short_description ||
            stay.description ||
            `Book ${stay.name} in Ujjain near Mahakaleshwar Temple.`
          }
        />

        <link
          rel="canonical"
          href={`https://mysimhastha.com/stays/${stay.slug}`}
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content={stay.name}
        />

        <meta
          property="og:description"
          content={
            stay.short_description ||
            stay.description
          }
        />

        <meta
          property="og:image"
          content={stay.featured_image || stay.image}
        />

        <meta
          property="og:url"
          content={`https://mysimhastha.com/stays/${stay.slug}`}
        />
      </Helmet>

      <main className="stay-details-page">

        <nav className="hotel-breadcrumb">
          <Link to="/">Home</Link>

          <span>/</span>

          <Link to="/stays">Hotels</Link>

          <span>/</span>

          <span>{stay.name}</span>
        </nav>

        <Gallery stay={stay} />
          
          <div className="hotel-section-nav">

  <a href="#overview">Overview</a>

  <a href="#amenities">Amenities</a>

  <a href="#location">Location</a>

  <a href="#reviews">Reviews</a>

  <a href="#faq">FAQ</a>

</div>

        <div className="container stay-details-layout">

          <div className="stay-details-left">

            <section id="overview">

  <HotelInfo stay={stay} />

</section>

            <section id="amenities">

  <Amenities stay={stay} />

</section>

            <section id="location">

  <MapSection stay={stay} />

</section>

            <NearbyPlaces stay={stay} />

            <PropertyRules stay={stay} />

            <section id="faq">

  <HotelFAQ stay={stay} />

</section>

            <section id="reviews">

  <Reviews stay={stay} />

</section>

            <SimilarHotels stay={stay} />

          </div>

          <aside className="stay-details-right">

            <BookingCard stay={stay} />

          </aside>

        </div>

      </main>

      <StickyBookingBar stay={stay} />
    </>
  );
};

export default StayDetails;*/}
