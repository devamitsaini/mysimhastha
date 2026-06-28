import React from "react";

export default function GuideInfoBox({ box }) {
  if (!box) return null;

  return (
    <div
      className={`guide-info-box ${box.type || "info"}`}
    >
      {box.title && (
        <h3>{box.title}</h3>
      )}

      {Array.isArray(box.content) ? (
        box.content.map((item, index) => (
          <p key={index}>{item}</p>
        ))
      ) : (
        <p>{box.content}</p>
      )}
    </div>
  );
}