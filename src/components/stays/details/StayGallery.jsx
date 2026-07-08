import { FiHeart } from "react-icons/fi";
import "./StayGallery.css";

export default function StayGallery({ stay }) {
  let images = [];

  // gallery_images can be a JSON array or a JSON string
  if (stay.gallery_images) {
    if (Array.isArray(stay.gallery_images)) {
      images = stay.gallery_images;
    } else {
      try {
        images = JSON.parse(stay.gallery_images);
      } catch (e) {
        images = [];
      }
    }
  }

  if (stay.image) {
    images.unshift(stay.image);
  }

  if (stay.featured_image) {
    images.unshift(stay.featured_image);
  }

  // remove duplicates & empty values
  images = [...new Set(images.filter(Boolean))];

  if (images.length === 0) {
    images = ["/images/hero-image.webp"];
  }

  while (images.length < 5) {
    images.push(images[0]);
  }

  return (
    <section className="stay-gallery">

      <div className="gallery-main">

        <img
          src={images[0]}
          alt={stay.name}
        />

        <button className="gallery-wishlist">
          <FiHeart />
        </button>

      </div>

      <div className="gallery-side">

        {images.slice(1, 4).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${stay.name} ${index + 2}`}
          />
        ))}

        {images.length > 4 && (
          <div className="photo-count-overlay">
            <img
              src={images[4]}
              alt={`${stay.name} 5`}
            />
            <div className="overlay">
              <div className="count">+{images.length - 4}</div>
              <div className="label">Property & Guest Photos</div>
            </div>
          </div>
        )}

      </div>

    </section>
  );
}