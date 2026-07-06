import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchStayBySlug } from "../../services/staysService";

import StaySEO from "../../components/stays/StaySEO";

import StayGallery from "../../components/stays/Details/StayGallery";
import StayInfo from "../../components/stays/Details/StayInfo";
import StickyContactCard from "../../components/stays/Details/StickyContactCard";
import AboutProperty from "../../components/stays/Details/AboutProperty";
import Amenities from "../../components/stays/Details/Amenities";
import NearbyPlaces from "../../components/stays/Details/NearbyPlaces";
import PropertyMap from "../../components/stays/Details/PropertyMap";
import PropertyRules from "../../components/stays/Details/PropertyRules";
import SimilarStays from "../../components/stays/Details/SimilarStays";
import MobileStickyBar from "../../components/stays/Details/MobileStickyBar";

import "../../components/stays/Details/StayDetails.css";

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
    <StaySEO stay={stay} />
    <StayGallery stay={stay} />
    <StayInfo stay={stay} />
    <StayInfo stay={stay} />

<AboutProperty stay={stay} />

<Amenities stay={stay} />

<NearbyPlaces stay={stay} />

<PropertyMap stay={stay} />

<PropertyRules stay={stay} />

<SimilarStays stay={stay} />

<StickyContactCard stay={stay} />

<MobileStickyBar stay={stay} />
  </>
);
}