import { useState, useEffect } from "react";
import {
  FiHome,
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
  FiDollarSign,
  FiUpload,
  FiCheckCircle,
  FiCheck,
  FiStar,
  FiZap,
  FiUsers,
  FiEye,
  FiCalendar,
  FiTrendingUp,
} from "react-icons/fi";

import "./ListYourProperty.css";

export default function ListYourPropertyPage() {

  const propertyTypes = [
    "Hotel",
    "Homestay",
    "Guest House",
    "Dharamshala",
    "Hostel",
    "Resort",
    "Apartment",
    "Villa",
    "Ashram",
    "Camp",
    "Other",
  ];

  const featuredPlans = [
    "Silver",
    "Gold",
    "Platinum",
    "Simhastha Premium",
  ];

  const amenitiesList = [
    "AC",
    "WiFi",
    "Parking",
    "Restaurant",
    "Lift",
    "Power Backup",
    "Hot Water",
    "Family Rooms",
    "Temple View",
    "CCTV",
    "Wheelchair Access",
    "Room Service",
  ];

  const [formData, setFormData] = useState({

    owner_name: "",

    phone: "",

    whatsapp: "",

    email: "",

    property_name: "",

    property_type: "",

    listing_type: "Free Listing",

    listing_plan: "",

    address: "",

    locality: "",

    city: "Ujjain",

    state: "Madhya Pradesh",

    pincode: "",

    google_maps_url: "",

    starting_price: "",

    rooms: "",

    occupancy: "",

    checkin_time: "",

    checkout_time: "",

    description: "",

    website: "",

    instagram: "",

    facebook: "",

    amenities: [],

    featured_image: null,

    gallery_images: [],

    business_document: null,

    id_proof: null,

  });

  const [selectedPlan, setSelectedPlan] = useState(null);

  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowSticky(window.scrollY > 650);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleChange(e){

    const {name,value}=e.target;

    setFormData(prev=>({

      ...prev,

      [name]:value,

    }));

  }

  function handleAmenity(name){

    setFormData(prev=>({

      ...prev,

      amenities:prev.amenities.includes(name)

      ? prev.amenities.filter(item=>item!==name)

      : [...prev.amenities,name]

    }));

  }

  function handleFile(e){

    const {name,files}=e.target;

    if(name==="gallery_images"){

      setFormData(prev=>({

        ...prev,

        gallery_images:[...files],

      }));

    }else{

      setFormData(prev=>({

        ...prev,

        [name]:files[0],

      }));

    }

  }

  async function handleSubmit(e){

    e.preventDefault();

    console.log(formData);

    // Supabase submission (Part 2C)

  }

  function handlePlanSelect(planType){

    const planMapping={

      "free":{

        listing_type:"Free Listing",

        listing_plan:"",

        title: "Free Listing",

        price: "₹0",

        description: "Basic Listing"

      },

      "standard":{

        listing_type:"Featured Listing",

        listing_plan:"Gold",

        title: "Standard",

        price: "₹999",

        description: "Featured Listing"

      },

      "premium":{

        listing_type:"Featured Listing",

        listing_plan:"Platinum",

        title: "Premium",

        price: "₹2,499",

        description: "Maximum Visibility"

      }

    };

    const selectedPlan=planMapping[planType];

    if(selectedPlan){

      setFormData(prev=>({

        ...prev,

        listing_type:selectedPlan.listing_type,

        listing_plan:selectedPlan.listing_plan

      }));

      setSelectedPlan(selectedPlan);

      setTimeout(()=>{

        const formElement=document.getElementById("form");

        if(formElement){

          formElement.scrollIntoView({behavior:"smooth",block:"start"});

          formElement.style.transition="box-shadow 0.3s ease";

          formElement.style.boxShadow="0 0 0 4px rgba(37,99,235,0.3)";

          setTimeout(()=>{

            formElement.style.boxShadow="";

          },2000);

        }

      },100);

    }

  }

  return(

<div className="list-property-page">

<div className="stay-container">

<div className="listing-hero">

<span>

🏨 Partner With MySimhastha

</span>

<h1>

List Your Property

</h1>

<p>

Reach thousands of pilgrims looking for hotels,
homestays, dharamshalas and guest houses in Ujjain.

Choose a free listing or upgrade to a featured plan
for maximum visibility.

</p>

</div>

{/* ======================================================
   PRICING PLANS
===================================================== */}

{!selectedPlan && (

<section className="pricing-section">

<h2>Choose Your Listing Plan</h2>

<p>Select the perfect plan for your property. Start free and upgrade anytime for more visibility and features.</p>

<div className="pricing-cards">

{/* Free Plan */}
<div className="pricing-card">

<div className="pricing-icon">

<FiHome/>

</div>

<h3>Free Listing</h3>

<div className="price">

₹0

<span>/ forever</span>

</div>

<p className="price-note">Perfect for getting started</p>

<ul className="pricing-features">

<li>

<FiCheck/>

<span>Basic property listing</span>

</li>

<li>

<FiCheck/>

<span>Up to 5 photos</span>

</li>

<li>

<FiCheck/>

<span>Contact details visible</span>

</li>

<li>

<FiCheck/>

<span>Standard search placement</span>

</li>

<li className="disabled">

<FiCheck/>

<span>Featured badge</span>

</li>

<li className="disabled">

<FiCheck/>

<span>Priority support</span>

</li>

</ul>

<button 

  type="button"

  className="pricing-btn secondary"

  onClick={()=>handlePlanSelect("free")}

>

Get Started Free

</button>

</div>

{/* Standard Plan - Featured */}
<div className="pricing-card featured">

<div className="pricing-badge">

<FiStar/> Most Popular

</div>

<div className="pricing-icon">

<FiZap/>

</div>

<h3>Standard</h3>

<div className="price">

₹999

<span>/ month</span>

</div>

<p className="price-note">Best for growing properties</p>

<ul className="pricing-features">

<li>

<FiCheck/>

<span>Everything in Free</span>

</li>

<li>

<FiCheck/>

<span>Up to 15 photos</span>

</li>

<li>

<FiCheck/>

<span>Featured in search results</span>

</li>

<li>

<FiCheck/>

<span>Priority placement</span>

</li>

<li>

<FiCheck/>

<span>Performance analytics</span>

</li>

<li className="disabled">

<FiCheck/>

<span>Dedicated account manager</span>

</li>

</ul>

<button 

  type="button"

  className="pricing-btn primary"

  onClick={()=>handlePlanSelect("standard")}

>

Choose Standard

</button>

</div>

{/* Premium Plan */}
<div className="pricing-card">

<div className="pricing-icon">

<FiStar/>

</div>

<h3>Premium</h3>

<div className="price">

₹2,499

<span>/ month</span>

</div>

<p className="price-note">Maximum visibility & support</p>

<ul className="pricing-features">

<li>

<FiCheck/>

<span>Everything in Standard</span>

</li>

<li>

<FiCheck/>

<span>Unlimited photos</span>

</li>

<li>

<FiCheck/>

<span>Top search ranking</span>

</li>

<li>

<FiCheck/>

<span>Homepage featured slot</span>

</li>

<li>

<FiCheck/>

<span>Advanced analytics & reports</span>

</li>

<li>

<FiCheck/>

<span>Dedicated account manager</span>

</li>

</ul>

<button 

  type="button"

  className="pricing-btn secondary"

  onClick={()=>handlePlanSelect("premium")}

>

Choose Premium

</button>

</div>

</div>

</section>

)}

{/* ======================================================
   WHY LIST WITH US
===================================================== */}

<section className="why-list-section">

<h2>Why List With MySimhastha?</h2>

<div className="stats-grid">

<div className="stat-card">

<div className="stat-icon">

<FiUsers/>

</div>

<div className="stat-number">50K+</div>

<p className="stat-label">Monthly Pilgrim Visitors</p>

</div>

<div className="stat-card">

<div className="stat-icon">

<FiEye/>

</div>

<div className="stat-number">2.5M+</div>

<p className="stat-label">Property Views Per Month</p>

</div>

<div className="stat-card">

<div className="stat-icon">

<FiCalendar/>

</div>

<div className="stat-number">365</div>

<p className="stat-label">Days Of Visibility Yearly</p>

</div>

<div className="stat-card">

<div className="stat-icon">

<FiTrendingUp/>

</div>

<div className="stat-number">85%</div>

<p className="stat-label">Properties Get Bookings</p>

</div>

</div>

</section>

{selectedPlan && (

<div className="selected-plan-bar">

<div className="selected-plan-left">

<span className="selected-chip">

✓ Selected Plan

</span>

<div>

<h3>{selectedPlan.title}</h3>

<p>{selectedPlan.description}</p>

</div>

</div>

<div className="selected-plan-right">

<strong>{selectedPlan.price}</strong>

<button
type="button"
onClick={() => setSelectedPlan(null)}
>

Change Plan

</button>

</div>

</div>

)}

<div className="listing-layout">

<div className="listing-main">

<form
id="form"
className="listing-form"
onSubmit={handleSubmit}
>

{/* Owner Information */}
<section className="form-card">

<h2>

<FiUser/>

Owner Information

</h2>

<div className="form-grid">

<div className="form-group">

<label>

Owner Name *

</label>

<input

type="text"

name="owner_name"

value={formData.owner_name}

onChange={handleChange}

required

/>

</div>

<div className="form-group">

<label>

Mobile Number *

</label>

<input

type="tel"

name="phone"

value={formData.phone}

onChange={handleChange}

required

/>

</div>

<div className="form-group">

<label>

WhatsApp

</label>

<input

type="tel"

name="whatsapp"

value={formData.whatsapp}

onChange={handleChange}

/>

</div>

<div className="form-group">

<label>

Email *

</label>

<input

type="email"

name="email"

value={formData.email}

onChange={handleChange}

required

/>

</div>

</div>

</section>

{/* Property Information */}
<section className="form-card">

<h2>

<FiHome/>

Property Information

</h2>

<div className="form-grid">

<div className="form-group">

<label>

Property Name *

</label>

<input

type="text"

name="property_name"

value={formData.property_name}

onChange={handleChange}

required

/>

</div>

<div className="form-group">

<label>

Property Type *

</label>

<select

name="property_type"

value={formData.property_type}

onChange={handleChange}

required

>

<option value="">

Select Property Type

</option>

{propertyTypes.map(type=>(

<option
key={type}
value={type}
>

{type}

</option>

))}

</select>

</div>

<div className="form-group">

<label>

Listing Type *

</label>

<select

name="listing_type"

value={formData.listing_type}

onChange={handleChange}

>

<option>

Free Listing

</option>

<option>

Featured Listing

</option>

</select>

</div>

{formData.listing_type==="Featured Listing" && (

<div className="form-group">

<label>

Featured Plan *

</label>

<select

name="listing_plan"

value={formData.listing_plan}

onChange={handleChange}

>

<option value="">

Select Plan

</option>

{featuredPlans.map(plan=>(

<option

key={plan}

value={plan}

>

{plan}

</option>

))}

</select>

</div>

)}

</div>

</section>

{/* Property Location */}
<section className="form-card">

<h2>

<FiMapPin/>

Property Location

</h2>

<div className="form-grid">

<div className="form-group">

<label>

Address *

</label>

<input

type="text"

name="address"

value={formData.address}

onChange={handleChange}

required

/>

</div>

<div className="form-group">

<label>

Locality *

</label>

<input

type="text"

name="locality"

value={formData.locality}

onChange={handleChange}

required

/>

</div>

<div className="form-group">

<label>

City

</label>

<input

type="text"

name="city"

value={formData.city}

onChange={handleChange}

/>

</div>

<div className="form-group">

<label>

State

</label>

<input

type="text"

name="state"

value={formData.state}

onChange={handleChange}

/>

</div>

<div className="form-group">

<label>

PIN Code

</label>

<input

type="text"

name="pincode"

value={formData.pincode}

onChange={handleChange}

/>

</div>

<div className="form-group">

<label>

Google Maps Link

</label>

<input

type="url"

name="google_maps_url"

placeholder="https://maps.google.com/..."

value={formData.google_maps_url}

onChange={handleChange}

/>

</div>

</div>

</section>

{/* Property Details */}
<section className="form-card">

<h2>

<FiDollarSign/>

Property Details

</h2>

<div className="form-grid">

<div className="form-group">

<label>

Starting Price

</label>

<input

type="number"

name="starting_price"

value={formData.starting_price}

onChange={handleChange}

/>

</div>

<div className="form-group">

<label>

Total Rooms

</label>

<input

type="number"

name="rooms"

value={formData.rooms}

onChange={handleChange}

/>

</div>

<div className="form-group">

<label>

Maximum Occupancy

</label>

<input

type="number"

name="occupancy"

value={formData.occupancy}

onChange={handleChange}

/>

</div>

<div className="form-group">

<label>

Check In

</label>

<input

type="time"

name="checkin_time"

value={formData.checkin_time}

onChange={handleChange}

/>

</div>

<div className="form-group">

<label>

Check Out

</label>

<input

type="time"

name="checkout_time"

value={formData.checkout_time}

onChange={handleChange}

/>

</div>

<div className="form-group full-width">

<label>

Property Description

</label>

<textarea

rows="6"

name="description"

value={formData.description}

onChange={handleChange}

placeholder="Describe your property, nearby attractions, facilities and special features."

/>

</div>

</div>

</section>

{/* Amenities */}
<section className="form-card">

<h2>

Amenities

</h2>

<div className="amenities-grid">

{amenitiesList.map(item=>(

<label

key={item}

className="amenity-checkbox"

>

<input

type="checkbox"

checked={formData.amenities.includes(item)}

onChange={()=>handleAmenity(item)}

/>

<span>

{item}

</span>

</label>

))}

</div>

</section>

{/* Property Images */}
<section className="form-card">

<h2>

<FiUpload/>

Property Images

</h2>

<div className="form-grid">

<div className="form-group">

<label>

Featured Image *

</label>

<input

type="file"

accept="image/*"

name="featured_image"

onChange={handleFile}

/>

</div>

<div className="form-group">

<label>

Gallery Images

</label>

<input

type="file"

accept="image/*"

multiple

name="gallery_images"

onChange={handleFile}

/>

<small>

Upload up to 10 high-quality photos.

</small>

</div>

</div>

</section>

{/* Contact & Social */}
<section className="form-card">

<h2>

<FiPhone/>

Contact & Social Links

</h2>

<div className="form-grid">

<div className="form-group">

<label>

Website

</label>

<input

type="url"

name="website"

placeholder="https://"

value={formData.website}

onChange={handleChange}

/>

</div>

<div className="form-group">

<label>

Instagram

</label>

<input

type="url"

name="instagram"

placeholder="https://instagram.com/"

value={formData.instagram}

onChange={handleChange}

/>

</div>

<div className="form-group">

<label>

Facebook

</label>

<input

type="url"

name="facebook"

placeholder="https://facebook.com/"

value={formData.facebook}

onChange={handleChange}

/>

</div>

</div>

</section>

{/* Verification Documents */}
<section className="form-card">

<h2>

<FiUpload/>

Verification Documents

</h2>

<div className="form-grid">

<div className="form-group">

<label>

Owner ID Proof

</label>

<input

type="file"

accept=".pdf,.jpg,.jpeg,.png"

name="id_proof"

onChange={handleFile}

/>

</div>

<div className="form-group">

<label>

Business Registration (Optional)

</label>

<input

type="file"

accept=".pdf,.jpg,.jpeg,.png"

name="business_document"

onChange={handleFile}

/>

</div>

</div>

</section>

{/* Terms */}
<section className="form-card">

<label className="agree-box">

<input

type="checkbox"

required

/>

<span>

I confirm that all information provided is accurate.
MySimhastha may verify the property before publishing it.

</span>

</label>

<label className="agree-box">

<input

type="checkbox"

required

/>

<span>

I agree to the Terms & Conditions and Privacy Policy.

</span>

</label>

</section>

{/* Submit */}
<div className="submit-area">

<button

type="submit"

className="submit-btn"

>

<FiCheckCircle/>

Submit Property

</button>

<p>

After submission our team will review your property
within <strong>24 Hours</strong> and contact you through
Phone or WhatsApp.

</p>

</div>

</form>

</div>

{/* ======================================================
   SIDEBAR
===================================================== */}

<div className="listing-sidebar">

{/* Selected Plan Card */}
<div className="sidebar-card">

<h3>Selected Plan</h3>

<strong>

{formData.listing_type === "Featured Listing" ? formData.listing_plan : "Free Listing"}

</strong>

<hr/>

<div className="sidebar-list">

<div>

Property

<span>

{formData.property_type || "-"}

</span>

</div>

<div>

City

<span>

{formData.city}

</span>

</div>

<div>

Owner

<span>

{formData.owner_name || "-"}

</span>

</div>

</div>

<button className="change-plan-btn" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>

Change Plan

</button>

</div>

{/* Help Card */}
<div className="sidebar-card">

<h3>Need Help?</h3>

<a href="tel:+919999999999">

📞 +91 99999 99999

</a>

<a href="https://wa.me/919999999999">

💬 WhatsApp

</a>

<p>

Usually replies within 30 minutes.

</p>

</div>

</div>

</div>

</div>

</div>

);
}