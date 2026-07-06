import React, { useState } from "react";
import "../../guides/styles/guidev3.css";

const GuideFAQ = ({ faq = [] }) => {
  const [active, setActive] = useState(null);

  if (!faq.length) return null;

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="guide-faq">

      <h2 className="guide-section-title">
        Frequently Asked Questions
      </h2>

      <div className="guide-faq-list">

        {faq.map((item, index) => (

          <div
            key={index}
            className={`guide-faq-item ${
              active === index ? "active" : ""
            }`}
          >

            <button
              className="guide-faq-question"
              onClick={() => toggleFAQ(index)}
            >

              <span>{item.question}</span>

              <span>
                {active === index ? "−" : "+"}
              </span>

            </button>

            {active === index && (

              <div className="guide-faq-answer">

                <p>{item.answer}</p>

              </div>

            )}

          </div>

        ))}

      </div>

    </section>
  );
};

export default GuideFAQ;