import { FiHeart, FiCamera, FiStar } from "react-icons/fi";

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

        <div className="gallery-rating">
          <FiStar />
          {stay.rating || "New"}
        </div>

        <button className="gallery-all-photos">
          <FiCamera />
          View {images.length} Photos
        </button>

      </div>

      <div className="gallery-side">

        {images.slice(1, 5).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${stay.name} ${index + 2}`}
          />
        ))}

      </div>

    </section>
  );
}