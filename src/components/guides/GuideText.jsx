import React from "react";

export default function GuideText({ text }) {
  if (!text) return null;

  return (
    <div className="guide-text">

      {Array.isArray(text)
        ? text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))
        : <p>{text}</p>
      }

    </div>
  );
}