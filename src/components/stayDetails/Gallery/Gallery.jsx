import { useEffect, useMemo, useState } from "react";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import "./Gallery.css";

const Gallery = ({ stay }) => {
  if (!stay) return null;

  // Handle gallery_images whether it's array or JSON string
  const galleryImages = useMemo(() => {
    if (Array.isArray(stay.gallery_images)) {
      return stay.gallery_images;
    }

    if (typeof stay.gallery_images === "string") {
      try {
        return JSON.parse(stay.gallery_images);
      } catch {
        return [];
      }
    }

    return [];
  }, [stay.gallery_images]);

  // Merge all images and remove duplicates
  const images = useMemo(() => {
    return [
      stay.featured_image,
      stay.image,
      ...galleryImages,
    ]
      .filter(Boolean)
      .filter(
        (img, index, self) =>
          self.indexOf(img) === index
      );
  }, [stay, galleryImages]);

  const [activeImage, setActiveImage] = useState(0);

  
  const [lightboxOpen, setLightboxOpen] = useState(false);

const nextImage = () =>
  setActiveImage((prev) =>
    prev === images.length - 1 ? 0 : prev + 1
  );

const previousImage = () =>
  setActiveImage((prev) =>
    prev === 0 ? images.length - 1 : prev - 1
  );

  useEffect(() => {
    setActiveImage(0);
  }, [stay.slug]);

  if (!images.length) {
    return null;
  }

  return (
    <section className="hotel-gallery">

      <div className="container">

        <div
          className={`gallery-grid ${
            images.length === 1
              ? "single-image"
              : ""
          }`}
        >

          {/* Hero Image */}

          <div className="gallery-main">

            <img
    src={images[activeImage]}
    alt={stay.name}
    onClick={() => setLightboxOpen(true)}
/>

            <div className="gallery-count">

              <Camera size={15} />

              {images.length} Photos

            </div>

          </div>

          {/* Thumbnails */}

          {images.length > 1 && (

            <div className="gallery-side">

              {images
                .slice(1, 5)
                .map((img, index) => {

                  const realIndex = index + 1;

                  return (

                    <div
                      key={realIndex}
                      className={`gallery-thumb ${
                        activeImage === realIndex
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        setActiveImage(realIndex)
                      }
                    >

                      <img
                        src={img}
                        alt={`${stay.name} ${realIndex}`}
                      />

                    </div>

                  );
                })}

            </div>

          )}

        </div>

      </div>

        {lightboxOpen && (

<div className="gallery-lightbox">

    <button
        className="gallery-close"
        onClick={() => setLightboxOpen(false)}
    >
        <X size={26}/>
    </button>

    <button
        className="gallery-arrow left"
        onClick={previousImage}
    >
        <ChevronLeft size={34}/>
    </button>

    <img
        src={images[activeImage]}
        alt={stay.name}
    />

    <button
        className="gallery-arrow right"
        onClick={nextImage}
    >
        <ChevronRight size={34}/>
    </button>

</div>

)}

    </section>
  );
};

export default Gallery;