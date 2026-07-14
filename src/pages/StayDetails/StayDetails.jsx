import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchStayBySlug } from "../../services/staysService";
import { SEO, SchemaProvider } from "../../seo";

import StayGallery from "../../components/stays/details/StayGallery";
import StayInfo from "../../components/stays/details/StayInfo";
import StickyContactCard from "../../components/stays/details/StickyContactCard";
import AboutProperty from "../../components/stays/details/AboutProperty";
import Amenities from "../../components/stays/details/Amenities";
import NearbyPlaces from "../../components/stays/details/NearbyPlaces";
import PropertyMap from "../../components/stays/details/PropertyMap";
import PropertyRules from "../../components/stays/details/PropertyRules";
import SimilarStays from "../../components/stays/details/SimilarStays";
import MobileStickyBar from "../../components/stays/details/MobileStickyBar";

import "../../components/stays/details/StayDetails.css";

export default function StayDetailsPage() {

  const { slug } = useParams();

  const [stay, setStay] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadStay() {

      const { data } = await fetchStayBySlug(slug);

      setStay(data);

      setLoading(false);

    }

    loadStay();

  }, [slug]);

  if (loading) {

    return (
      <div className="stay-container" style={{ padding: "80px 0" }}>
        Loading...
      </div>
    );

  }

  if (!stay) {

    return (
      <div className="stay-container" style={{ padding: "80px 0" }}>
        Property not found.
      </div>
    );

  }

  return (

    <>
      <SEO
        title={`${stay.name} | Hotels Near Mahakaleshwar Temple | MySimhastha`}
        description={stay.short_description || `Book ${stay.name} in Ujjain near Mahakaleshwar Temple.`}
        canonical={`https://www.mysimhastha.com/stays/${stay.slug}`}
        image={stay.featured_image || stay.image}
      />

      <SchemaProvider
        type="hotel"
        data={{
          name: stay.name,
          description: stay.short_description || stay.description,
          url: `https://www.mysimhastha.com/stays/${stay.slug}`,
          image: stay.featured_image || stay.image,
          about: "Accommodation",
          faqs: stay.faqs,
          reviews: stay.reviews,
          rating: stay.rating,
          priceRange: stay.price_range,
          address: stay.address,
          telephone: stay.phone,
        }}
      />

      <div className="stay-details-page">

        <div className="stay-container">

          <StayGallery stay={stay} />

          <div className="details-layout">

            <div className="details-main">

              <StayInfo stay={stay} />

              <AboutProperty stay={stay} />

              <Amenities stay={stay} />

              <NearbyPlaces stay={stay} />

              <PropertyMap stay={stay} />

              <PropertyRules stay={stay} />

              <SimilarStays stay={stay} />

            </div>

            <StickyContactCard stay={stay} />

          </div>

        </div>

        <MobileStickyBar stay={stay} />

      </div>
    </>

  );

}
