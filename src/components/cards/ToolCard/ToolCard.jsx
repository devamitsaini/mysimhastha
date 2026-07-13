import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import "./ToolCard.css";

const ToolCard = ({
  icon,
  title,
  description,
  link,
  badge,
  color = "#2563EB",
}) => {
  return (
    <Link
      to={link}
      className="tool-card"
    >

      <div
        className="tool-icon"
        style={{ background: color }}
      >
        {icon}
      </div>

      {badge && (
        <span className="tool-badge">
          {badge}
        </span>
      )}

      <h3>
        {title}
      </h3>

      <p>
        {description}
      </p>

      <div className="tool-footer">

        <span>
          Open Tool
        </span>

        <FaArrowRight />

      </div>

    </Link>
  );
};

export default ToolCard;