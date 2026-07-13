import React from "react";
import "./Badge.css";

const Badge = ({
  text,
  icon,
  color = "blue",
  size = "md",
  rounded = true,
}) => {
  return (
    <span
      className={`badge badge-${color} badge-${size} ${
        rounded ? "rounded" : ""
      }`}
    >
      {icon && (
        <span className="badge-icon">
          {icon}
        </span>
      )}

      {text}
    </span>
  );
};

export default Badge;