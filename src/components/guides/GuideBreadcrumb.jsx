import React from "react";
import { Link } from "react-router-dom";

export default function GuideBreadcrumb({ guide }) {
  if (!guide) return null;

  const labels = {
    en: {
      home: "Home",
      guides: "Guides",
    },

    hi: {
      home: "होम",
      guides: "गाइड्स",
    },
  };

  const t = labels[guide.language || "en"];

  return (
    <nav
      className="guide-breadcrumb"
      aria-label="Breadcrumb"
    >
      <Link to="/">
        {t.home}
      </Link>

      <span className="breadcrumb-separator">
        /
      </span>

      <Link to="/guides">
        {t.guides}
      </Link>

      <span className="breadcrumb-separator">
        /
      </span>

      <span className="breadcrumb-current">
        {guide.hero?.title ||
          guide.seo?.title ||
          guide.title}
      </span>
    </nav>
  );
}