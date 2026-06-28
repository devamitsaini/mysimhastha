import React from "react";

export default function GuideOfficialResources({ guide }) {
  if (!guide?.officialResources?.length) return null;

  return (
    <section className="guide-section">

      <h2>
        {guide.labels?.officialResources || "Official Resources"}
      </h2>

      <ul className="official-links">

        {guide.officialResources.map((resource, index) => (

          <li key={index}>

            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {resource.title} ↗
            </a>

            {resource.description && (
              <p className="resource-description">
                {resource.description}
              </p>
            )}

          </li>

        ))}

      </ul>

    </section>
  );
}