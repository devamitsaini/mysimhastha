import { FiStar } from "react-icons/fi";

const reviews = [
  {
    name: "Rahul Sharma",
    rating: 5,
    date: "2 weeks ago",
    review:
      "Very clean rooms and walking distance from Mahakal Temple. Staff was very helpful.",
  },
  {
    name: "Priya Patel",
    rating: 4,
    date: "1 month ago",
    review:
      "Good location, spacious rooms and quick check-in. Highly recommended for families.",
  },
];

export default function GuestReviews() {
  return (
    <section className="details-card">

      <h2>Guest Reviews</h2>

      <div className="reviews-list">

        {reviews.map((review) => (

          <div className="review-card" key={review.name}>

            <div className="review-top">

              <strong>{review.name}</strong>

              <span>{review.date}</span>

            </div>

            <div className="review-stars">

              {[...Array(review.rating)].map((_, i) => (
                <FiStar key={i} />
              ))}

            </div>

            <p>{review.review}</p>

          </div>

        ))}

      </div>

    </section>
  );
}