import React from "react";
import { Link } from "react-router-dom";

export default function GuideLanguageSwitcher({ guide }) {
  if (!guide) return null;

  const currentLanguage = guide.language || "en";

  const englishSlug = guide.englishSlug || guide.slug;
const hindiSlug = guide.hindiSlug || guide.slug;

  return (
    <div className="language-switcher">

      <Link
        to={`/guide/${englishSlug}`}
        className={currentLanguage === "en" ? "active" : ""}
        aria-label="View English Guide"
      >
        English
      </Link>

      <Link
        to={`/hi/guide/${hindiSlug}`}
        className={currentLanguage === "hi" ? "active" : ""}
        aria-label="हिन्दी गाइड देखें"
      >
        हिन्दी
      </Link>

    </div>
  );
}