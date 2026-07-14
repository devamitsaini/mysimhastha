import { useState, useEffect } from "react";
import {
  FiHeart,
  FiCamera,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import "./StayGallery.css";

export default function StayGallery({ stay }) {
  // Build the gallery directly from the stay object (single API call).
  // Priority: gallery_images -> featured_image -> image.
  // Deduplicate so the same image is never rendered twice.
  const gallery = (() => {
    const sources = [
      ...(stay.gallery_images || []),
      stay.featured_image,
      stay.image,
    ].filter(Boolean);

    return [...new Set(sources)];
  })();

  const [heroImage, setHeroImage] = useState(gallery[0] || "");
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  // Keep hero image in sync when the stay changes.
  useEffect(() => {
    setHeroImage(gallery[0] || "");
    setCurrent(0);
    setOpen(false);
  }, [stay]);

  function openGallery(index) {
    setCurrent(index);
    setHeroImage(gallery[index]);
    setOpen(true);
  }

  function next() {
    const i = (current + 1) % gallery.length;
    setCurrent(i);
    setHeroImage(gallery[i]);
  }

  function prev() {
    const i = (current - 1 + gallery.length) % gallery.length;
    setCurrent(i);
    setHeroImage(gallery[i]);
  }

  // Gracefully handle an empty gallery.
  if (gallery.length === 0) {
    return (
      <section className="stay-gallery">
        <div className="gallery-main">
          <div className="gallery-empty">No Images Available</div>
        </div>
      </section>
    );
  }

  return (
    <section className="stay-gallery">
      <div className="gallery-main" onClick={() => openGallery(current)}>
        <img src={heroImage} alt={stay.name} />

        <button className="gallery-wishlist">
          <FiHeart />
        </button>

        <button
          className="gallery-view-all"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
        >
          <FiCamera />
          {gallery.length} Photos
        </button>
      </div>

      {gallery.length > 1 && (
        <div className="gallery-side">
          {gallery.slice(1, 5).map((img, index) => (
            <div
              key={img}
              className="gallery-thumb"
              onClick={() => {
                setHeroImage(img);
                setCurrent(index + 1);
              }}
            >
              <img src={img} alt={`${stay.name} ${index + 1}`} />

              {index === 3 && gallery.length > 5 && (
                <div className="gallery-more">+{gallery.length - 4}</div>
              )}
            </div>
          ))}
        </div>
      )}

      {open && (
        <div className="gallery-modal">
          <button className="gallery-close" onClick={() => setOpen(false)}>
            <FiX />
          </button>

          <button className="gallery-prev" onClick={prev}>
            <FiChevronLeft />
          </button>

          {heroImage ? (
            <img src={heroImage} alt={stay.name} />
          ) : (
            <div className="gallery-empty">No Images Available</div>
          )}

          <button className="gallery-next" onClick={next}>
            <FiChevronRight />
          </button>

          <div className="gallery-counter">
            {current + 1} / {gallery.length}
          </div>
        </div>
      )}
    </section>
  );
}