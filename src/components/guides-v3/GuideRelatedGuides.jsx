import React from "react";
import { Link } from "react-router-dom";



import "../../guides/styles/guidev3.css";

const GuideRelatedGuides = ({

  relatedGuides = [],

  language = "en"

}) => {

  if (!relatedGuides.length) return null;

  const guides = relatedGuides
    .map((slug) => GUIDE_INDEX?.[language]?.[slug])
    .filter(Boolean);

  if (!guides.length) return null;

  return (

    <section className="guide-related">

      <h2>Related Guides</h2>

      <div className="guide-related-grid">

        {guides.map((guide) => (

          <Link

            key={guide.slug}

            to={`/${language === "hi" ? "hi/" : ""}guide/${guide.slug}`}

            className="guide-related-card"

          >

            <img

              src={guide.hero.image}

              alt={guide.hero.imageAlt}

              loading="lazy"

            />

            <div>

              <h3>

                {guide.title}

              </h3>

              <p>

                {guide.description}

              </p>

            </div>

          </Link>

        ))}

      </div>

    </section>

  );

};

export default GuideRelatedGuides;