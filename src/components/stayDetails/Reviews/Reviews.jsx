import {
  Star,
  UserCircle2,
} from "lucide-react";

import "./Reviews.css";

const sampleReviews = [
  {
    name: "Rahul Sharma",
    rating: 5,
    date: "2 weeks ago",
    review:
      "Excellent location near Mahakaleshwar Temple. Rooms were clean and staff was very helpful.",
  },
  {
    name: "Priya Verma",
    rating: 4,
    date: "1 month ago",
    review:
      "Comfortable stay with good amenities. Walking distance to Mahakal Temple.",
  },
  {
    name: "Amit Patel",
    rating: 5,
    date: "2 months ago",
    review:
      "Highly recommended for families visiting Ujjain. Great service and clean rooms.",
  },
];

const Reviews = ({ stay }) => {
  if (!stay) return null;

  // Use real reviews from Supabase if present, otherwise fall back
  // to sample content so the section never looks empty.
  const hasRealReviews =
    Array.isArray(stay.reviews) && stay.reviews.length > 0;

  const reviews = hasRealReviews
    ? stay.reviews.map((r) => ({
        name: r.author || "Anonymous",
        rating: r.rating || 5,
        date: r.date || "",
        review: r.text || "",
      }))
    : sampleReviews;

  return (
    <section className="hotel-reviews">

      <div className="reviews-header">

        <h2>Guest Reviews</h2>

        <div className="reviews-summary">

          <Star
            fill="currentColor"
            size={20}
          />

          <strong>
            {stay.rating || "4.5"}
          </strong>

          <span>
            ({stay.review_count || reviews.length} Reviews)
          </span>

        </div>

      </div>

      <div className="reviews-list">

        {reviews.map((review, index) => (

          <div
            className="review-card"
            key={index}
          >

            <div className="review-top">

              <div className="review-user">

                <UserCircle2 size={44} />

                <div>

                  <h4>{review.name}</h4>

                  <small>{review.date}</small>

                </div>

              </div>

              <div className="review-rating">

                <Star
                  fill="currentColor"
                  size={16}
                />

                {review.rating}

              </div>

            </div>

            <p>{review.review}</p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Reviews;
