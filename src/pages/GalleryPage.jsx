import React from "react";
import { SEO, SchemaProvider } from "../seo";
import "../styles/GalleryPage.css";

const GalleryPage = () => {
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
    <>
      <SEO
        title="Gallery | MySimhastha"
        description="View our collection of spiritual and cultural moments from Mahakal Temple and Kumbh Mela in Ujjain."
        canonical="https://www.mysimhastha.com/gallery"
      />

      <SchemaProvider
        type="gallery"
        data={{
          title: "Mahakal Darshan & Kumbh Mela Gallery",
          description: "A visual collection of spiritual and cultural moments from Mahakal Temple and Kumbh Mela in Ujjain.",
          url: "https://www.mysimhastha.com/gallery",
          breadcrumbs: [
            { label: "Home", url: "https://www.mysimhastha.com" },
            { label: "Gallery", url: "https://www.mysimhastha.com/gallery" },
          ],
          images: galleryImages.map((img) => `https://www.mysimhastha.com${img.src}`),
        }}
      />

      <div className="gallery-page">
        <div className="container">
          <div className="page-header">
            <h1>Mahakal Darshan & Kumbh Mela Gallery</h1>
            <p>Experience the divine moments and sacred atmosphere of Ujjain</p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div key={image.id} className="gallery-item">
                <img src={image.src} alt={image.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;