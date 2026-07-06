import React from "react";
import { Link } from "react-router-dom";
import "../../guides/styles/guidev3.css";

const GuideLanguageSwitcher = ({
  slug,
  language = "en"
}) => {

  const isHindi = language === "hi";

  return (

    <div className="guide-language-switcher">

      <span>Language</span>

      <div className="guide-language-buttons">

        <Link
          to={`/guide/${slug}`}
          className={`language-btn ${!isHindi ? "active" : ""}`}
        >
          English
        </Link>

        <Link
          to={`/hi/guide/${slug}`}
          className={`language-btn ${isHindi ? "active" : ""}`}
        >
          हिन्दी
        </Link>

      </div>

    </div>

  );

};

export default GuideLanguageSwitcher;