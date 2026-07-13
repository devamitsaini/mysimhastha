import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Button.css";

const Button = ({
  children,
  to,
  href,
  onClick,
  type = "button",

  variant = "primary", // primary secondary outline ghost success danger
  size = "md", // sm md lg
  fullWidth = false,

  leftIcon,
  rightIcon = <FaArrowRight />,

  disabled = false,

  className = "",
}) => {
  const classes = `
    btn
    btn-${variant}
    btn-${size}
    ${fullWidth ? "btn-block" : ""}
    ${disabled ? "btn-disabled" : ""}
    ${className}
  `;

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
      >
        {leftIcon}

        <span>{children}</span>

        {rightIcon}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
      >
        {leftIcon}

        <span>{children}</span>

        {rightIcon}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {leftIcon}

      <span>{children}</span>

      {rightIcon}
    </button>
  );
};

export default Button;