import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import "./FAQSection.css";

const faqs = [
  {
    question: "Are these stays verified by MySimhastha?",
    answer:
      "Yes. We verify property information before listing it on MySimhastha whenever possible.",
  },
  {
    question: "How do I contact the property owner?",
    answer:
      "Every property details page includes Call and WhatsApp contact options whenever available.",
  },
  {
    question: "Can I book directly from MySimhastha?",
    answer:
      "Currently MySimhastha is a stay directory. You can contact the property directly to confirm availability and pricing.",
  },
  {
    question: "Are prices fixed during Simhastha?",
    answer:
      "No. Prices may change depending on demand during festivals and peak travel dates.",
  },
  {
    question: "Can I search stays near Mahakal Temple?",
    answer:
      "Yes. Use the search filters to explore hotels, homestays and dharamshalas near Mahakal Temple and other popular areas of Ujjain.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="stay-faq">

      <div className="stay-container">

        <div className="section-heading">

          <h2>Frequently Asked Questions</h2>

          <p>
            Everything you need to know before choosing your stay in Ujjain.
          </p>

        </div>

        <div className="faq-list">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className={`faq-item ${
                active === index ? "active" : ""
              }`}
            >

              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
              >

                {faq.question}

                {active === index ? (
                  <FiChevronUp />
                ) : (
                  <FiChevronDown />
                )}

              </button>

              {active === index && (

                <div className="faq-answer">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}