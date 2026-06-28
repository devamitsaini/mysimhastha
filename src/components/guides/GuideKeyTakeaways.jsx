import React from "react";

export default function GuideKeyTakeaways({ guide }) {
  if (!guide?.keyTakeaways?.length) return null;

  return (
    <section className="guide-section">

      <h2>
        {guide.language === "hi"
          ? "मुख्य बातें"
          : "Key Takeaways"}
      </h2>

      <ul className="key-takeaways">

        {guide.keyTakeaways.map((item, index) => (

          <li key={index}>
            {item}
          </li>

        ))}

      </ul>

    </section>
  );
}