import React from "react";
import "./Chip.css";

const Chip = ({
  text,
  icon,
  active = false,
  clickable = false,
  color = "default",
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`
        chip
        chip-${color}
        ${active ? "active" : ""}
        ${clickable ? "clickable" : ""}
      `}
      onClick={onClick}
    >
      {icon && (
        <span className="chip-icon">
          {icon}
        </span>
      )}

      <span>{text}</span>
    </button>
  );
};

export default Chip;