    import { useParams, Link } from "react-router-dom";
    import { useEffect, useState } from "react";
    import { Helmet } from "react-helmet-async";
    import { fetchStayBySlug } from "../../services/staysService";

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

    <Helmet>

      <title>
        {stay.name} | Hotels Near Mahakaleshwar Temple | MySimhastha
      </title>

      <meta
        name="description"
        content={
          stay.short_description ||
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