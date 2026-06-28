import React from "react";

export default function GuideFAQ({ guide }) {
  if (!guide?.faq?.length) return null;

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
          className="faq-item"
        >

          <h3>
            Q. {item.question}
          </h3>

          <p>
            {item.answer}
          </p>

        </div>

      ))}

    </section>
  );
}