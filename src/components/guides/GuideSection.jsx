import React from "react";

export default function GuideSection({ section }) {
  if (!section) return null;

  return (
    <section
      id={section.id}
      className={`guide-section ${section.className || ""}`}
    >
      {section.title && (
        <h2>{section.title}</h2>
      )}

      {section.subtitle && (
        <p className="section-subtitle">
          {section.subtitle}
        </p>
      )}

      {section.content && (
        <div className="section-content">

          {Array.isArray(section.content)
            ? section.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            : <p>{section.content}</p>}

        </div>
      )}

    </section>
  );
}