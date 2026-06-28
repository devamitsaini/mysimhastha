import React from "react";

export default function GuideQuickFacts({ guide }) {
  if (!guide || !guide.quickFacts?.length) return null;

  return (
    <section className="guide-section">

      <h2>
        {guide.language === "hi"
          ? "मुख्य जानकारी"
          : "Quick Facts"}
      </h2>

      <div className="quick-facts">

        {guide.quickFacts.map((fact, index) => (

          <div
            className="quick-fact-card"
            key={index}
          >

            <span className="quick-fact-label">
              {fact.label}
            </span>

            <div className="quick-fact-value">
              {fact.value}

              {fact.note && (
                <small>{fact.note}</small>
              )}
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}