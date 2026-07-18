import React from "react";
import { Link } from "react-router-dom";

import "../../guides/styles/guidev3.css";

const GuideHero = ({ hero = {} }) => {

  return (

    <header className="guide-hero">

      <div className="guide-hero-content">

        {hero.badge && (
          <span className="guide-badge">
            {hero.badge}
          </span>
        )}

        <h1 className="guide-title">
          {hero.title}
        </h1>

        <div className="guide-meta">

          {hero.updated && (
            <span>
              📅 Updated {hero.updated}
            </span>
          )}

          {hero.readingTime && (
            <span>
              ⏱ {hero.readingTime}
            </span>
          )}

          {hero.author && (
            <span>
              ✍️ {hero.author}
            </span>
          )}

        </div>

        {hero.primaryButton && (

          <div className="guide-hero-buttons">

            <Link
              to={hero.primaryButton.link}
              className="guide-btn"
            >
              {hero.primaryButton.text}
            </Link>

            {hero.secondaryButton && (

              <Link
                to={hero.secondaryButton.link}
                className="guide-btn-outline"
              >
                {hero.secondaryButton.text}
              </Link>

            )}

          </div>

        )}

      </div>

      {hero.image && (

        <div className="guide-hero-image">

          <img
            src={hero.image}
            alt={hero.imageAlt}
            loading="eager"
                        width="1200"
            height="675"
          />

        </div>

      )}

      {hero.subtitle && (
        <div className="guide-hero-subtitle">
          <p className="guide-subtitle">
            {hero.subtitle}
          </p>
        </div>
      )}

    </header>

  );

};

export default GuideHero;