import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchStayBySlug } from "../../services/staysService";

import StaySEO from "../../components/stays/StaySEO";

import StayGallery from "../../components/stays/details/StayGallery";
import StayInfo from "../../components/stays/details/StayInfo";
import StickyContactCard from "../../components/stays/details/StickyContactCard";
import AboutProperty from "../../components/stays/details/AboutProperty";
import Amenities from "../../components/stays/details/Amenities";
import NearbyPlaces from "../../components/stays/details/NearbyPlaces";
import PropertyMap from "../../components/stays/details/PropertyMap";
import PropertyRules from "../../components/stays/details/PropertyRules";
import SimilarStays from "../../components/stays/details/SimilarStays";
import StayReviews from "../../components/stays/details/StayReviews";
import MobileStickyBar from "../../components/stays/details/MobileStickyBar";

import "../../components/stays/details/StayDetails.css";

export default function StayDetailsPage() {
  const { slug } = useParams();

  const [stay, setStay] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStay() {
      try {
        const { data } = await fetchStayBySlug(slug);
        setStay(data);
      } catch (error) {
        console.error("Error loading stay:", error);
      } finally {
        setLoading(false);
      }
    }

    loadStay();
  }, [slug]);

  if (loading) {
    return (
      <div
        className="stay-container"
        style={{ padding: "80px 0", textAlign: "center" }}
      >
        <h2>Loading property...</h2>
      </div>
    );
  }

  if (!stay) {
    return (
      <div
        className="stay-container"
        style={{ padding: "80px 0", textAlign: "center" }}
      >
        <h2>Property Not Found</h2>
        <p>
          The property you are looking for doesn't exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* SEO */}
      <StaySEO stay={stay} />

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

              <StayReviews stay={stay} />
            </div>

            <StickyContactCard stay={stay} />
          </div>
        </div>

        <MobileStickyBar stay={stay} />
      </div>
    </>
  );
}