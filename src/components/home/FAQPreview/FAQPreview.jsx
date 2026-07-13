import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";
import "./FAQPreview.css";

const faqData = [
  {
    question: "Which area is best to stay near Mahakaleshwar Temple?",
    answer:
      "The Mahakaleshwar Temple area is ideal for devotees attending Bhasma Aarti. Freeganj and Nanakheda are better for families seeking spacious hotels, parking and quieter surroundings.",
  },
  {
    question: "How can I attend Bhasma Aarti in Ujjain?",
    answer:
      "Bhasma Aarti requires advance registration on selected dates. Carry a valid ID, follow the dress code and reach the temple well before reporting time.",
  },
  {
    question: "When should I book hotels during Simhastha?",
    answer:
      "Book your accommodation at least 3 to 6 months before Simhastha to get better prices and more options near Mahakal Temple.",
  },
  {
    question: "Are budget hotels available near Mahakal Temple?",
    answer:
      "Yes. Budget hotels, guest houses and dharamshalas are available within walking distance from Mahakal Temple. Prices increase during festivals and weekends.",
  },
  {
    question: "How far is Ujjain Railway Station from Mahakal Temple?",
    answer:
      "Mahakaleshwar Temple is approximately 2 to 3 km from Ujjain Junction Railway Station and can be reached within 10–15 minutes by auto or taxi.",
  },
  {
    question: "Which hotels provide parking near Mahakal?",
    answer:
      "Many hotels in Freeganj, Nanakheda and selected properties near Mahakal offer dedicated parking. Always confirm parking availability before booking.",
  },
];

const FAQPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-preview">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">
            FAQ
          </span>

          <h2>
            Frequently Asked Questions
          </h2>

          <p>
            Find answers to the most common questions about Mahakal
            Darshan, hotels, Bhasma Aarti, Simhastha and travelling
            to Ujjain.
          </p>

        </div>

        <div className="faq-wrapper">

          {faqData.slice(0, 3).map((faq, index) => (

            <div
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >

              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >

                <span>{faq.question}</span>

                <FaChevronDown />

              </button>

              <div className="faq-answer">

                <p>{faq.answer}</p>

              </div>

            </div>

          ))}

        </div>

        <div className="faq-footer">

          <Link
            to="/faq"
            className="faq-btn"
          >

            View All FAQs

            <FaArrowRight />

          </Link>

        </div>

      </div>

    </section>
  );
};

export default FAQPreview;