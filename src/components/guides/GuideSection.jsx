import React from "react";

export default function GuideSection({
  section,
  children,
}) {
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

      {/* Render children such as GuideRenderer */}
      {children}

      {/* Backward compatibility */}
      {section.content &&
        (!children ? (
          <div className="section-content">
            {Array.isArray(section.content)
              ? section.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              : <p>{section.content}</p>}
          </div>
        ) : null)}
    </section>
  );
}