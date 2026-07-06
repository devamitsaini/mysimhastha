import React, { useState } from "react";

export default function GuideFAQ({ guide }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!guide?.faq?.length) return null;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="guide-section faq-section">

      <h2>
        {guide.language === "hi"
          ? "अक्सर पूछे जाने वाले प्रश्न"
          : "Frequently Asked Questions"}
      </h2>

      {guide.faq.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${openIndex === index ? "open" : ""}`}
        >

          <h3
            className="faq-question"
            onClick={() => toggleFAQ(index)}
          >
            <span>Q. {item.question}</span>
            <span className="faq-question-icon">+</span>
          </h3>

          <p className="faq-answer">
            {item.answer}
          </p>

        </div>
      ))}

    </section>
  );
}