import React from "react";
import { Link } from "react-router-dom";

export default function GuideRelatedGuides({ guide }) {
  if (!guide?.relatedGuides?.length) return null;

  return (
    <section className="guide-section">

      <h2>
        {guide.labels?.relatedGuides || "Related Guides"}
      </h2>

      <div className="related-guides-grid">

        {guide.relatedGuides.map((item, index) => (

          <Link
            key={index}
            to={item.url}
            className="related-guide-card"
          >

            {item.image && (

              <img
                src={`/images/${item.image}`}
                alt={item.title}
                loading="lazy"
                width="400"
                height="225"
              />

            )}

            <div className="related-guide-content">

              <h3>{item.title}</h3>

              {item.description && (
                <p>{item.description}</p>
              )}

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}