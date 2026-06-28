import React from "react";

export default function GuideTableOfContents({ guide }) {
  if (!guide?.tableOfContents?.length) return null;

  return (
    <section className="guide-section">

      <h2>
        {guide.language === "hi"
          ? "विषय सूची"
          : "Table of Contents"}
      </h2>

      <nav className="table-of-contents">

        <ul>

          {guide.tableOfContents.map((item, index) => (

            <li key={index}>

              <a href={`#${item.id}`}>

                {item.title}

              </a>

            </li>

          ))}

        </ul>

      </nav>

    </section>
  );
}