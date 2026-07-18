import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { SchemaProvider } from "../../../seo";
import "./GalleryHome.css";

const GalleryHome = () => {
  const galleryImages = [
    { id: 1, src: "/temple/mahakal.webp", alt: "Mahakal Temple" },
    { id: 2, src: "/temple/harsiddhi.webp", alt: "Harsiddhi Mata Temple" },
    { id: 3, src: "/temple/kalbhairav.webp", alt: "Kal Bhairav Temple" },
    { id: 4, src: "/temple/mangalnath.webp", alt: "Mangalnath Temple" },
    { id: 5, src: "/temple/omkareshwar.webp", alt: "Omkareshwar" },
    { id: 6, src: "/images/guide-boating.webp", alt: "Narmada River Boating" },
    { id: 7, src: "/images/guide-mahakal-lok.webp", alt: "Mahakal Lok" },
    { id: 8, src: "/images/guide-narmada-ghat.webp", alt: "Narmada ghat" },
    { id: 9, src: "/images/guide-ram-ghat.webp", alt: "Ram ghat ujjain" },
    { id: 10, src: "/images/guide-shipra.webp", alt: "Shipra River Ujjain" },
    { id: 11, src: "/images/guide-entry.webp", alt: "Mahakal mandir entry gate" },
  ];

  return (
    <>
      <SchemaProvider
        type="gallery"
        data={{
          title: "Mahakal Darshan & Kumbh Mela Gallery",
          description: "A visual collection of spiritual and cultural moments from Mahakal Temple and Kumbh Mela in Ujjain.",
          url: "https://www.mysimhastha.com/gallery",
          images: galleryImages.map((img) => `https://www.mysimhastha.com${img.src}`),
        }}
      />

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
    </>
  );
};

export default GalleryHome;