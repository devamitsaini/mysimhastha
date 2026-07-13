import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import "./SectionHeader.css";

const SectionHeader = ({
  badge,
  title,
  description,
  align = "center",

  buttonText,
  buttonLink,

  light = false,
}) => {
  return (
    <div
      className={`section-header ${
        align
      } ${light ? "light" : ""}`}
    >

      {badge && (

        <span className="section-badge">

          {badge}

        </span>

      )}

      <h2>

        {title}

      </h2>

      {description && (

        <p>

          {description}

        </p>

      )}

      {buttonText && buttonLink && (

        <Link
          to={buttonLink}
          className="section-header-btn"
        >

          {buttonText}

          <FaArrowRight />

        </Link>

      )}

    </div>
  );
};
0
export default SectionHeader;