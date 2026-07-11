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
  FiX,
  FiAlertCircle,
} from "react-icons/fi";
import { toast } from "react-toastify";
import {
  uploadFeaturedImage,
  uploadGalleryImages,
  uploadIdProof,
  uploadBusinessDocument,
} from "../../services/storageService";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../../services/staysService";
import { compressImage, compressImages, formatFileSize, isImageFile } from "../../utils/imageCompression";

import "./ListYourProperty.css";

export default function ListYourPropertyPage() {
  const location = useLocation();
  const navigate = useNavigate();

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
    gst_number: "",
  });

  const listingTypeToPlan = {
    "Free Listing": { title: "Free Listing", price: "₹0", description: "Basic Listing", maxGallery: 5 },
    "Featured Listing": { title: "Standard", price: "₹999", description: "Featured Listing", maxGallery: 15 },
    "Premium Listing": { title: "Premium", price: "₹2,499", description: "Maximum Visibility", maxGallery: 25 }
  };

  function getMaxGalleryLimit() {
    return listingTypeToPlan[formData.listing_type]?.maxGallery || 5;
  }

  const [selectedPlan, setSelectedPlan] = useState(listingTypeToPlan["Free Listing"]);
  const [showSticky, setShowSticky] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [compressing, setCompressing] = useState({
    featured_image: false,
    gallery_images: false,
    id_proof: false,
    business_document: false,
  });

  useEffect(() => {
    const onScroll = () => {
      setShowSticky(window.scrollY > 650);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Sync the sticky bar plan when listing_type dropdown changes
    if (name === "listing_type") {
      const planInfo = listingTypeToPlan[value];
      if (planInfo) {
        setSelectedPlan(planInfo);
      }
    }
  }

  function handleAmenity(name) {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(name)
        ? prev.amenities.filter(item => item !== name)
        : [...prev.amenities, name]
    }));
  }

  function removeFile(name) {
    if (name === "featured_image") {
      setFormData(prev => ({ ...prev, featured_image: null }));
    } else if (name === "gallery_images") {
      setFormData(prev => ({ ...prev, gallery_images: [] }));
    } else if (name === "id_proof") {
      setFormData(prev => ({ ...prev, id_proof: null }));
    } else if (name === "business_document") {
      setFormData(prev => ({ ...prev, business_document: null }));
    }
  }

  function removeGalleryImage(index) {
    setFormData(prev => ({
      ...prev,
      gallery_images: prev.gallery_images.filter((_, i) => i !== index)
    }));
  }

  function handleFile(e) {
    const { name, files } = e.target;

    // Handle image compression for featured_image
    if (name === "featured_image" && files[0]) {
      const file = files[0];
      
      if (isImageFile(file)) {
        setCompressing(prev => ({ ...prev, [name]: true }));
        
        compressImage(file, {
          maxWidth: 1200,
          maxHeight: 1200,
          quality: 0.8,
          maxSizeMB: 2
        })
        .then(compressedFile => {
          setFormData(prev => ({
            ...prev,
            [name]: compressedFile
          }));
        })
        .catch(error => {
          console.error('Compression error:', error);
          setFormData(prev => ({
            ...prev,
            [name]: file
          }));
        })
        .finally(() => {
          setCompressing(prev => ({ ...prev, [name]: false }));
        });
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: file
        }));
      }

    } else if (name === "gallery_images" && files) {
      const imageFiles = Array.from(files).filter(f => isImageFile(f));
      
      if (imageFiles.length > 0) {
        const currentCount = formData.gallery_images.length;
        const maxAllowed = getMaxGalleryLimit();
        const remaining = maxAllowed - currentCount;

        if (remaining <= 0) {
          toast.info(
            <div className="property-plan-toast">
              <FiAlertCircle className="toast-icon" />
              <div>
                <strong>Gallery Limit Reached</strong>
                <p>Your {formData.listing_type} plan allows a maximum of {maxAllowed} images. Remove some to upload more.</p>
              </div>
            </div>,
            {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              className: "property-plan-toast-container"
            }
          );
          e.target.value = "";
          return;
        }

        const allowedFiles = imageFiles.slice(0, remaining);
        
        if (allowedFiles.length < imageFiles.length) {
          toast.info(
            <div className="property-plan-toast">
              <FiAlertCircle className="toast-icon" />
              <div>
                <strong>Upload Limited</strong>
                <p>Your plan allows {maxAllowed} images ({currentCount} currently). Uploading only {remaining} more.</p>
              </div>
            </div>,
            {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              className: "property-plan-toast-container"
            }
          );
        }

        setCompressing(prev => ({ ...prev, [name]: true }));
        
        compressImages(allowedFiles, {
          maxWidth: 1200,
          maxHeight: 1200,
          quality: 0.8,
          maxSizeMB: 2
        })
        .then(compressedFiles => {
          setFormData(prev => ({
            ...prev,
            gallery_images: [...prev.gallery_images, ...compressedFiles]
          }));
        })
        .catch(error => {
          console.error('Gallery compression error:', error);
          setFormData(prev => ({
            ...prev,
            gallery_images: [...files]
          }));
        })
        .finally(() => {
          setCompressing(prev => ({ ...prev, [name]: false }));
        });
      }

    } else if (name === "id_proof" && files[0]) {
      const file = files[0];
      
      if (isImageFile(file)) {
        setCompressing(prev => ({ ...prev, [name]: true }));
        
        compressImage(file, {
          maxWidth: 1000,
          maxHeight: 1000,
          quality: 0.85,
          maxSizeMB: 1
        })
        .then(compressedFile => {
          setFormData(prev => ({
            ...prev,
            [name]: compressedFile
          }));
        })
        .catch(error => {
          console.error('ID proof compression error:', error);
          setFormData(prev => ({
            ...prev,
            [name]: file
          }));
        })
        .finally(() => {
          setCompressing(prev => ({ ...prev, [name]: false }));
        });
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: file
        }));
      }

    } else if (name === "business_document" && files[0]) {
      const file = files[0];
      
      if (isImageFile(file)) {
        setCompressing(prev => ({ ...prev, [name]: true }));
        
        compressImage(file, {
          maxWidth: 1000,
          maxHeight: 1000,
          quality: 0.85,
          maxSizeMB: 1
        })
        .then(compressedFile => {
          setFormData(prev => ({
            ...prev,
            [name]: compressedFile
          }));
        })
        .catch(error => {
          console.error('Business document compression error:', error);
          setFormData(prev => ({
            ...prev,
            [name]: file
          }));
        })
        .finally(() => {
          setCompressing(prev => ({ ...prev, [name]: false }));
        });
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: file
        }));
      }

    } else {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    }
  }

  function validateForm() {
    const errors = [];

    if (!formData.owner_name.trim()) {
      errors.push({ field: "owner_name", message: "Owner name is required" });
    }

    if (!formData.phone.trim()) {
      errors.push({ field: "phone", message: "Mobile number is required" });
    } else if (formData.phone.length < 10) {
      errors.push({ field: "phone", message: "Please enter a valid 10-digit mobile number" });
    }

    if (!formData.email.trim()) {
      errors.push({ field: "email", message: "Email is required" });
    } else if (!formData.email.includes("@")) {
      errors.push({ field: "email", message: "Please enter a valid email address" });
    }

    if (!formData.property_name.trim()) {
      errors.push({ field: "property_name", message: "Property name is required" });
    }

    if (!formData.property_type) {
      errors.push({ field: "property_type", message: "Please select a property type" });
    }

    if (!formData.address.trim()) {
      errors.push({ field: "address", message: "Property address is required" });
    }

    if (!formData.locality.trim()) {
      errors.push({ field: "locality", message: "Locality is required" });
    }

    if (!formData.featured_image) {
      errors.push({ field: "featured_image", message: "Featured image is required" });
    }

    return errors;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (submitting) return;

    const errors = validateForm();
    
    if (errors.length > 0) {
      errors.forEach((error, index) => {
        setTimeout(() => {
          toast.error(
            <div className="property-error-toast">
              <FiAlertCircle className="toast-icon" />
              <div>
                <strong>Required Field Missing</strong>
                <p>{error.message}</p>
              </div>
            </div>,
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              className: "property-error-toast-container"
            }
          );
        }, index * 300);
      });
      return;
    }

    setSubmitting(true);

    try {
      let featuredImagePath = null;
      let galleryImagePaths = [];
      let idProofPath = null;
      let businessDocumentPath = null;

      if (formData.featured_image) {
        featuredImagePath = await uploadFeaturedImage(formData.featured_image);
      }

      if (formData.gallery_images && formData.gallery_images.length > 0) {
        galleryImagePaths = await uploadGalleryImages(formData.gallery_images);
      }

      if (formData.id_proof) {
        idProofPath = await uploadIdProof(formData.id_proof);
      }

      if (formData.business_document) {
        businessDocumentPath = await uploadBusinessDocument(formData.business_document);
      }

      const payload = {
        owner_name: formData.owner_name,
        email: formData.email,
        phone: formData.phone,
        whatsapp: formData.whatsapp,
        property_name: formData.property_name,
        property_type: formData.property_type,
        listing_type: formData.listing_type,
        listing_plan: formData.listing_plan,
        address: formData.address,
        locality: formData.locality,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
        google_maps_url: formData.google_maps_url,
        starting_price: formData.starting_price,
        rooms: formData.rooms ? parseInt(formData.rooms) : null,
        occupancy: formData.occupancy ? parseInt(formData.occupancy) : null,
        checkin_time: formData.checkin_time,
        checkout_time: formData.checkout_time,
        description: formData.description,
        amenities: formData.amenities,
        website: formData.website,
        instagram: formData.instagram,
        facebook: formData.facebook,
        featured_image: featuredImagePath,
        gallery_images: galleryImagePaths,
        id_proof: idProofPath,
        business_document: businessDocumentPath,
        gst_number: formData.gst_number,
        status: "pending"
      };

      const { error } = await supabase
        .from("property_listing_requests")
        .insert([payload]);

      if (error) {
        toast.error(
          <div className="property-error-toast">
            <FiX className="toast-icon" />
            <div>
              <strong>Submission Failed</strong>
              <p>{error.message || "Unable to submit property. Please try again."}</p>
            </div>
          </div>,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            className: "property-error-toast-container"
          }
        );
        return;
      }

      navigate("/thank-you", {
        state: {
          ownerName: formData.owner_name,
          propertyName: formData.property_name,
          listingType: formData.listing_type
        }
      });

    } catch (err) {
      console.error(err);
      toast.error(
        <div className="property-error-toast">
          <FiX className="toast-icon" />
          <div>
            <strong>Unexpected Error</strong>
            <p>{err.message || "Something went wrong. Please try again."}</p>
          </div>
        </div>,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          className: "property-error-toast-container"
        }
      );
    } finally {
      setSubmitting(false);
    }
  }

  function handlePlanSelect(planType) {
    const planMapping = {
      "free": {
        listing_type: "Free Listing",
        listing_plan: "",
        title: "Free Listing",
        price: "₹0",
        description: "Basic Listing"
      },
      "standard": {
        listing_type: "Featured Listing",
        listing_plan: "",
        title: "Standard",
        price: "₹999",
        description: "Featured Listing"
      },
      "premium": {
        listing_type: "Premium Listing",
        listing_plan: "",
        title: "Premium",
        price: "₹2,499",
        description: "Maximum Visibility"
      }
    };

    const selectedPlan = planMapping[planType];

    if (selectedPlan) {
      setFormData(prev => ({
        ...prev,
        listing_type: selectedPlan.listing_type,
        listing_plan: selectedPlan.listing_plan
      }));

      setSelectedPlan(selectedPlan);

      setTimeout(() => {
        const formElement = document.getElementById("form");
        if (formElement) {
          formElement.scrollIntoView({ behavior: "smooth", block: "start" });
          formElement.style.transition = "box-shadow 0.3s ease";
          formElement.style.boxShadow = "0 0 0 4px rgba(37,99,235,0.3)";
          setTimeout(() => {
            formElement.style.boxShadow = "";
          }, 2000);
        }
      }, 100);
    }
  }

  return (
    <div className="list-property-page">
      <div className="stay-container">
        <div className="listing-hero">
          <div className="hero-badge">
            <span className="badge-icon">🏢</span>
            Partner With MySimhastha
          </div>
          <h1 className="hero-title">
            List Your Property <span className="hero-highlight">on MySimhastha</span>
          </h1>
          <p className="hero-subtitle">
            Reach thousands of pilgrims looking for hotels, homestays, dharamshalas and guest houses in Ujjain.
          </p>
          <div className="hero-stats-row">
            <div className="hero-stat">
              <span className="hero-stat-num">30K+</span>
              <span className="hero-stat-label">Monthly Visitors</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-num">85%</span>
              <span className="hero-stat-label">Get Bookings</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-num">1M+</span>
              <span className="hero-stat-label">Monthly Views</span>
            </div>
          </div>
        </div>

        <section className="pricing-section">
          <h2>Choose Your <span className="section-highlight">Listing Plan</span></h2>
          <p>Start free and upgrade anytime for maximum visibility.</p>
          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="pricing-icon">
                <FiHome />
              </div>
              <h3>Free Listing</h3>
              <div className="price">
                ₹0
                <span>/ forever</span>
              </div>
              <p className="price-note">Perfect for getting started</p>
              <ul className="pricing-features">
                <li><FiCheck /><span>Basic property listing</span></li>
                <li><FiCheck /><span>Up to 5 photos</span></li>
                <li><FiCheck /><span>Contact details visible</span></li>
                <li><FiCheck /><span>Standard search placement</span></li>
                <li className="disabled"><FiCheck /><span>Featured badge</span></li>
                <li className="disabled"><FiCheck /><span>Priority support</span></li>
              </ul>
              <button type="button" className="pricing-btn secondary" onClick={() => handlePlanSelect("free")}>
                Get Started Free
              </button>
            </div>

            <div className="pricing-card featured">
              <div className="pricing-badge">
                <FiStar /> Most Popular
              </div>
              <div className="pricing-icon">
                <FiZap />
              </div>
              <h3>Standard</h3>
              <div className="price">
                ₹999
                <span>/ month</span>
              </div>
              <p className="price-note">Best for growing properties</p>
              <ul className="pricing-features">
                <li><FiCheck /><span>Everything in Free</span></li>
                <li><FiCheck /><span>Up to 15 photos</span></li>
                <li><FiCheck /><span>Featured in search results</span></li>
                <li><FiCheck /><span>Priority placement</span></li>
                <li><FiCheck /><span>Performance analytics</span></li>
                <li className="disabled"><FiCheck /><span>Dedicated account manager</span></li>
              </ul>
              <button type="button" className="pricing-btn primary" onClick={() => handlePlanSelect("standard")}>
                Choose Standard
              </button>
            </div>

            <div className="pricing-card">
              <div className="pricing-icon">
                <FiStar />
              </div>
              <h3>Premium</h3>
              <div className="price">
                ₹2,499
                <span>/ month</span>
              </div>
              <p className="price-note">Maximum visibility & support</p>
              <ul className="pricing-features">
                <li><FiCheck /><span>Everything in Standard</span></li>
                <li><FiCheck /><span>Unlimited photos</span></li>
                <li><FiCheck /><span>Top search ranking</span></li>
                <li><FiCheck /><span>Homepage featured slot</span></li>
                <li><FiCheck /><span>Advanced analytics & reports</span></li>
                <li><FiCheck /><span>Dedicated account manager</span></li>
              </ul>
              <button type="button" className="pricing-btn secondary" onClick={() => handlePlanSelect("premium")}>
                Choose Premium
              </button>
            </div>
          </div>
        </section>

        {selectedPlan && (
          <div className="selected-plan-bar">
            <div className="selected-plan-left">
              <span className="selected-chip">✓ Selected Plan</span>
              <div>
                <h3>{selectedPlan.title}</h3>
                <p>{selectedPlan.description}</p>
              </div>
            </div>
            <div className="selected-plan-right">
              <strong>{selectedPlan.price}</strong>
              <button type="button" onClick={() => {
                const plans = ["premium", "standard", "free"];
                const currentIdx = plans.indexOf(
                  selectedPlan.title === "Premium" ? "premium" :
                  selectedPlan.title === "Standard" ? "standard" : "free"
                );
                const nextPlan = plans[(currentIdx + 1) % plans.length];
                handlePlanSelect(nextPlan);
              }}>
                Change Plan
              </button>
            </div>
          </div>
        )}

        <div className="listing-layout">
          <div className="listing-main">
            <form id="form" className="listing-form" onSubmit={handleSubmit}>
              <section className="form-card">
                <h2><FiUser /> Owner Information</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Owner Name *</label>
                    <input type="text" name="owner_name" value={formData.owner_name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Mobile Number *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>WhatsApp</label>
                    <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
              </section>

              <section className="form-card">
                <h2><FiHome /> Property Information</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Property Name *</label>
                    <input type="text" name="property_name" value={formData.property_name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Property Type *</label>
                    <select name="property_type" value={formData.property_type} onChange={handleChange} required>
                      <option value="">Select Property Type</option>
                      {propertyTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Listing Type *</label>
                    <select name="listing_type" value={formData.listing_type} onChange={handleChange}>
                      <option>Free Listing</option>
                      <option>Featured Listing</option>
                      <option>Premium Listing</option>
                    </select>
                  </div>
                </div>
              </section>

              <section className="form-card">
                <h2><FiMapPin /> Property Location</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Address *</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Locality *</label>
                    <input type="text" name="locality" value={formData.locality} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>State</label>
                    <input type="text" name="state" value={formData.state} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>PIN Code</label>
                    <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Google Maps Link</label>
                    <input type="url" name="google_maps_url" placeholder="https://maps.google.com/..." value={formData.google_maps_url} onChange={handleChange} />
                  </div>
                </div>
              </section>

              <section className="form-card">
                <h2><FiDollarSign /> Property Details</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Starting Price *</label>
                    <input type="number" name="starting_price" value={formData.starting_price} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Total Rooms</label>
                    <input type="number" name="rooms" value={formData.rooms} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Maximum Occupancy</label>
                    <input type="number" name="occupancy" value={formData.occupancy} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Check In *</label>
                    <input type="time" name="checkin_time" value={formData.checkin_time} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Check Out *</label>
                    <input type="time" name="checkout_time" value={formData.checkout_time} onChange={handleChange} />
                  </div>
                  <div className="form-group full-width">
                    <label>Property Description</label>
                    <textarea rows="6" name="description" value={formData.description} onChange={handleChange} placeholder="Describe your property, nearby attractions, facilities and special features." />
                  </div>
                </div>
              </section>

              <section className="form-card">
                <h2>Amenities</h2>
                <div className="amenities-grid">
                  {amenitiesList.map(item => (
                    <label key={item} className="amenity-checkbox">
                      <input type="checkbox" checked={formData.amenities.includes(item)} onChange={() => handleAmenity(item)} />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </section>

              <section className="form-card">
                <h2><FiUpload /> Property Images</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Featured Image *</label>
                    <input type="file" accept="image/*" name="featured_image" onChange={handleFile} disabled={compressing.featured_image} />
                    {compressing.featured_image && (
                      <div className="property-upload-toast">
                        <div className="upload-spinner"></div>
                        <span>Compressing image...</span>
                      </div>
                    )}
                    {formData.featured_image && !compressing.featured_image && (
                      <div className="file-preview">
                        <img src={URL.createObjectURL(formData.featured_image)} alt="Preview" className="preview-thumbnail" />
                        <span className="file-name">{formData.featured_image.name} ({formatFileSize(formData.featured_image.size)})</span>
                        <button type="button" className="remove-file-btn" onClick={() => removeFile("featured_image")} title="Remove image">
                          <FiX />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Gallery Images</label>
                    <input type="file" accept="image/*" multiple name="gallery_images" onChange={handleFile} disabled={compressing.gallery_images} />
                    <small>Upload up to {getMaxGalleryLimit()} high-quality photos ({formData.gallery_images.length}/{getMaxGalleryLimit()} used).</small>
                    {compressing.gallery_images && (
                      <div className="property-upload-toast">
                        <div className="upload-spinner"></div>
                        <span>Compressing images...</span>
                      </div>
                    )}
                    {formData.gallery_images && formData.gallery_images.length > 0 && !compressing.gallery_images && (
                      <div className="gallery-preview-grid">
                        {formData.gallery_images.map((file, index) => (
                          <div key={index} className="file-preview">
                            <img src={URL.createObjectURL(file)} alt={`Preview ${index + 1}`} className="preview-thumbnail" />
                            <span className="file-name">{file.name}</span>
                            <button type="button" className="remove-file-btn" onClick={() => removeGalleryImage(index)} title="Remove image">
                              <FiX />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </section>

              <section className="form-card">
                <h2><FiPhone /> Contact & Social Links</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Website</label>
                    <input type="url" name="website" placeholder="https://" value={formData.website} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Instagram</label>
                    <input type="url" name="instagram" placeholder="https://instagram.com/" value={formData.instagram} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Facebook</label>
                    <input type="url" name="facebook" placeholder="https://facebook.com/" value={formData.facebook} onChange={handleChange} />
                  </div>
                </div>
              </section>

              <section className="form-card">
                <h2><FiUpload /> Verification Documents</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Owner ID Proof</label>
                    <input type="file" accept=".pdf,.jpg,.jpeg,.png" name="id_proof" onChange={handleFile} />
                  </div>
                  <div className="form-group">
                    <label>Business Registration (Optional)</label>
                    <input type="file" accept=".pdf,.jpg,.jpeg,.png" name="business_document" onChange={handleFile} />
                  </div>
                </div>
              </section>

              <section className="form-card">
                <label className="agree-box">
                  <input type="checkbox" required />
                  <span>I confirm that all information provided is accurate. MySimhastha may verify the property before publishing it.</span>
                </label>
                <label className="agree-box">
                  <input type="checkbox" required />
                  <span>I agree to the Terms & Conditions and Privacy Policy.</span>
                </label>
              </section>

              <div className="submit-area">
                <button type="submit" className="submit-btn" disabled={submitting}>
                  {submitting ? <span className="btn-spinner"></span> : <FiCheckCircle />}
                  Submit Property
                </button>
                <p>After submission our team will review your property within <strong>24 Hours</strong> and contact you through Phone or WhatsApp.</p>
              </div>
            </form>
          </div>

          <div className="listing-sidebar">
            <div className="sidebar-card">
              <h3>Listing Type</h3>
              <strong>{formData.listing_type}</strong>
              <hr />
              <div className="sidebar-list">
                <div>Property<span>{formData.property_type || "-"}</span></div>
                <div>City<span>{formData.city}</span></div>
                <div>Owner<span>{formData.owner_name || "-"}</span></div>
              </div>
              <button className="change-plan-btn" onClick={() => {
                const types = ["Free Listing", "Featured Listing", "Premium Listing"];
                const currentIdx = types.indexOf(formData.listing_type);
                const nextType = types[(currentIdx + 1) % types.length];
                setFormData(prev => ({ ...prev, listing_type: nextType, listing_plan: "" }));
                const planInfo = listingTypeToPlan[nextType];
                if (planInfo) {
                  setSelectedPlan(planInfo);
                }
              }}>
                Change Plan
              </button>
            </div>

            <div className="sidebar-card">
              <h3>Need Help?</h3>
              <a href="tel:+91xxxxxxxxxx">📞 +91 XXXXX XXXX</a>
              <a href="https://wa.me/91xxxxxxxxxx">💬 WhatsApp</a>
              <p>Usually replies within 30 minutes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}