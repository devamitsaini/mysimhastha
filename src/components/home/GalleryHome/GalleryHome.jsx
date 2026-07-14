import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./GalleryHome.css";

const GalleryHome = () => {
  const galleryImages = [
    { id: 1, src: "/images/temple/mahakal.webp", alt: "Mahakal Temple" },
    { id: 2, src: "/images/temple/harsiddhi.webp", alt: "Harsiddhi Mata Temple" },
    { id: 3, src: "/images/temple/kalbhairav.webp", alt: "Kal Bhairav Temple" },
    { id: 4, src: "/images/temple/mangalnath.webp", alt: "Mangalnath Temple" },
    { id: 5, src: "/images/temple/omkareshwar.webp", alt: "Omkareshwar" },
    { id: 6, src: "/images/guide-boating.webp", alt: "Narmada River Boating" },
    { id: 7, src: "/images/guide-mahakal-lok.webp", alt: "Mahakal Lok" },
    { id: 8, src: "/images/guide-narmada-ghat.webp", alt: "Narmada ghat" },
    { id: 9, src: "/images/guide-ram-ghat.webp", alt: "Ram ghat ujjain" },
    { id: 10, src: "/images/guide-shipra.webp", alt: "Shipra River Ujjain" },
    { id: 10, src: "/images/guide-entry.webp", alt: "Mahakal mandir entry  gate" },
  ];

  return (
    <section className="gallery-home">
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">GALLERY</span>
          <h2>Mahakal Darshan & Kumbh Mela</h2>
          <p>
            Experience the divine moments and sacred atmosphere of Ujjain.
            View our collection of spiritual and cultural moments.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="gallery-footer">
          <Link to="/gallery" className="view-gallery-btn">
            View Full Gallery
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryHome;