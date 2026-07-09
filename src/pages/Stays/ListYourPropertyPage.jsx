import { useState } from "react";
import {
  FiHome,
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
  FiDollarSign,
  FiUpload,
  FiCheckCircle,
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

<form
className="listing-form"
onSubmit={handleSubmit}
>

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

{/* ======================================================
   LOCATION
====================================================== */}

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

{/* ======================================================
   PROPERTY DETAILS
====================================================== */}

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

{/* ======================================================
   AMENITIES
====================================================== */}

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

{/* ======================================================
   IMAGES
====================================================== */}

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
{/* ======================================================
   CONTACT & SOCIAL
====================================================== */}

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

{/* ======================================================
   DOCUMENTS
====================================================== */}

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

{/* ======================================================
   TERMS
====================================================== */}

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

{/* ======================================================
   SUBMIT
====================================================== */}

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

</div>

);

}