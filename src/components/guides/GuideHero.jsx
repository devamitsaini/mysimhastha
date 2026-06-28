import React from "react";

export default function GuideHero({ guide }) {
  if (!guide) return null;

  const hero = guide.hero || {};

  return (
    <header className="guide-header">

      <h1>
        {hero.title || guide.title}
      </h1>

      {hero.description && (
        <p>
          {hero.description}
        </p>
      )}

      <div className="guide-meta">

        {guide.author && (
          <span>
            👤 {guide.author}
          </span>
        )}

        {guide.updated && (
          <>
            {" • "}
            <span>
              📅 Updated: {guide.updated}
            </span>
          </>
        )}

        {guide.readingTime && (
          <>
            {" • "}
            <span>
              ⏱ {guide.readingTime}
            </span>
          </>
        )}

      </div>

      {hero.image && (
        <figure className="guide-figure">

          <img
            src={`/images/${hero.image}`}
            alt={hero.imageAlt || hero.title}
            className="guide-image"
            loading="eager"
            width="1200"
            height="630"
            decoding="async"
          />

          {hero.caption && (
            <figcaption>
              {hero.caption}
            </figcaption>
          )}

        </figure>
      )}

    </header>
  );
}