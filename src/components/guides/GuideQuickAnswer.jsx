import React from "react";

export default function GuideQuickAnswer({ guide }) {
  if (!guide?.quickAnswer) return null;

  return (
    <section className="guide-section">

      <h2>
        {guide.language === "hi"
          ? "संक्षिप्त उत्तर"
          : "Quick Answer"}
      </h2>

      <div className="guide-highlight">

        <p>{guide.quickAnswer}</p>

      </div>

    </section>
  );
}