import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import { fetchStayBySlug } from "../../services/staysService";

import Gallery from "../../components/stayDetails/Gallery/Gallery";
import HotelInfo from "../../components/stayDetails/HotelInfo/HotelInfo";
import Amenities from "../../components/stayDetails/Amenities/Amenities";
import MapSection from "../../components/stayDetails/MapSection/MapSection";
import NearbyPlaces from "../../components/stayDetails/NearbyPlaces/NearbyPlaces";
import HotelFAQ from "../../components/stayDetails/HotelFAQ/HotelFAQ";
import Reviews from "../../components/stayDetails/Reviews/Reviews";
import SimilarHotels from "../../components/stayDetails/SimilarHotels/SimilarHotels";
import BookingCard from "../../components/stayDetails/BookingCard/BookingCard";

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
    </>
  );
};

export default StayDetails;