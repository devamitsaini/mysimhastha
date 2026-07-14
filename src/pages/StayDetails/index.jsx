    import { useParams, Link } from "react-router-dom";
    import { useEffect, useState } from "react";
    import { fetchStayBySlug } from "../../services/staysService";
    import { SEO, SchemaProvider } from "../../seo";

    import Gallery from "../../components/stayDetails/Gallery/Gallery";
    import HotelInfo from "../../components/stayDetails/HotelInfo/HotelInfo";
    import Amenities from "../../components/stayDetails/Amenities/Amenities";
    import BookingCard from "../../components/stayDetails/BookingCard/BookingCard";
    import StickyBookingBar from "../../components/stayDetails/StickyBookingBar/StickyBookingBar";
    import NearbyPlaces from "../../components/stayDetails/NearbyPlaces/NearbyPlaces";
    import HotelFAQ from "../../components/stayDetails/HotelFAQ/HotelFAQ";
    import SimilarHotels from "../../components/stayDetails/SimilarHotels/SimilarHotels";
    import MapSection from "../../components/stayDetails/MapSection/MapSection";
    import Reviews from "../../components/stayDetails/Reviews/Reviews";

    import "./StayDetails.css";

    const StayDetails = () => {

        const { slug } = useParams();

        const [stay,setStay]=useState(null);

        const [loading,setLoading]=useState(true);

        useEffect(()=>{

            loadStay();

        },[slug]);

        const loadStay=async()=>{

            const result=await fetchStayBySlug(slug);

            ("Slug:", slug);
            ("Result:", result);
            if(!result.error){

                setStay(result.data);

            }

            setLoading(false);

        }

        if(!stay){

            return <div className="stay-details-loading">Stay not found</div>

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

    <main className="stay-details-page">

  <nav className="hotel-breadcrumb">

    <Link to="/">Home</Link>

    <span>/</span>

    <Link to="/stays">Hotels</Link>

    <span>/</span>

    <span>{stay.name}</span>

  </nav>

  <Gallery stay={stay} />

  <div className="container stay-details-layout">

    <div className="stay-details-left">

      <HotelInfo stay={stay} />

      <Amenities stay={stay} />

      <NearbyPlaces stay={stay} />

      <HotelFAQ stay={stay} />

      <SimilarHotels stay={stay} />

      <StickyBookingBar stay={stay} />

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