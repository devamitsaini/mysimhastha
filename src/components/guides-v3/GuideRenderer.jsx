import React from "react";
import { Link } from "react-router-dom";
import "../../guides/styles/guidev3.css";

const GuideRenderer = ({ sections = [] }) => {
  if (!sections?.length) return null;

  /* ===============================
      Heading
  =============================== */

  const renderHeading = (section, key) => (
    <section
      key={key}
      id={section.id}
      className="guide-section"
    >
      <h2>{section.text}</h2>
    </section>
  );

  /* ===============================
      Sub Heading
  =============================== */

  const renderSubheading = (section, key) => (
    <section
      key={key}
      id={section.id}
      className="guide-section"
    >
      <h3>{section.text}</h3>
    </section>
  );

  /* ===============================
      Paragraph
  =============================== */

  const renderParagraph = (section, key) => (
    <section
    key={key}
    id={section.id}
    className="guide-official-resources"
>
      {section.content?.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </section>
  );

  /* ===============================
      List
  =============================== */

  const renderList = (section, key) => (
    <section
    key={key}
    id={section.id}
    className="guide-section"
>
      {section.title && <h3>{section.title}</h3>}

      <ul className="guide-list">
        {section.items?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );

  /* ===============================
      Ordered List
  =============================== */

  const renderOrderedList = (section, key) => (
    <section
      key={key}
      className="guide-section"
    >
      {section.title && <h3>{section.title}</h3>}

      <ol className="guide-list">
        {section.items?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </section>
  );
    /* ===============================
      Table
  =============================== */

  const renderTable = (section, key) => (
    <section
      key={key}
      className="guide-section"
    >
      {section.title && <h3>{section.title}</h3>}

      <div className="guide-table-wrapper">
        <table className="guide-table">

          <thead>
            <tr>
              {section.headers?.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {section.rows?.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </section>
  );



  /* ===============================
      Image
  =============================== */

  const renderImage = (section, key) => (
    <figure
      key={key}
      className="guide-image"
    >
      <img
        src={section.src}
        alt={section.alt}
        loading="lazy"
        width={section.width || 1200}
        height={section.height || 675}
      />

      {section.caption && (
        <figcaption>{section.caption}</figcaption>
      )}
    </figure>
  );



  /* ===============================
      Gallery
  =============================== */

  const renderGallery = (section, key) => (
    <section
      key={key}
      className="guide-gallery"
    >
      {section.title && <h3>{section.title}</h3>}

      <div className="guide-gallery-grid">

        {section.images?.map((image, index) => (

          <figure key={index}>

            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
            />

            {image.caption && (

              <figcaption>

                {image.caption}

              </figcaption>

            )}

          </figure>

        ))}

      </div>

    </section>
  );



  /* ===============================
      Quote
  =============================== */

  const renderQuote = (section, key) => (

    <blockquote

      key={key}

      className="guide-quote"

    >

      <p>{section.quote}</p>

      {section.author && (

        <footer>

          — {section.author}

        </footer>

      )}

    </blockquote>

  );



  /* ===============================
      Divider
  =============================== */

  const renderDivider = (_, key) => (

    <hr

      key={key}

      className="guide-divider"

    />

  );
    /* ===============================
      Quick Answer
  =============================== */

  const renderQuickAnswer = (section, key) => (
    <section
    key={key}
    id={section.id}
    className="guide-quick-answer"
>
      <h2>{section.title || "Quick Answer"}</h2>

      <p>{section.answer}</p>
    </section>
  );



  /* ===============================
      Quick Facts
  =============================== */

  const renderQuickFacts = (section, key) => (
    <section
    key={key}
    id={section.id}
    className="guide-quick-facts"
>
      <h2>{section.title || "Quick Facts"}</h2>

      <div className="guide-facts-grid">

        {section.items?.map((fact, index) => (

          <div
            key={index}
            className="guide-fact-card"
          >

            <span className="fact-label">

              {fact.label}

            </span>

            <span className="fact-value">

              {fact.value}

            </span>

          </div>

        ))}

      </div>

    </section>
  );



  /* ===============================
      Key Takeaways
  =============================== */

  const renderKeyTakeaways = (section, key) => (

    <section
    key={key}
    id={section.id}
    className="guide-takeaways"
>

      <h2>

        {section.title || "Key Takeaways"}

      </h2>

      <ul>

        {section.items?.map((item, index) => (

          <li key={index}>{item}</li>

        ))}

      </ul>

    </section>

  );



  /* ===============================
      Info Box
  =============================== */

  const renderInfo = (section, key) => (

    <section
      key={key}
      className="guide-info-box"
    >

      <h3>{section.title}</h3>

      <p>{section.content}</p>

    </section>

  );



  /* ===============================
      Tip Box
  =============================== */

  const renderTip = (section, key) => (

    <section
      key={key}
      className="guide-tip-box"
    >

      <h3>

        💡 {section.title}

      </h3>

      <p>{section.content}</p>

    </section>

  );



  /* ===============================
      Warning Box
  =============================== */

  const renderWarning = (section, key) => (

    <section
      key={key}
      className="guide-warning-box"
    >

      <h3>

        ⚠️ {section.title}

      </h3>

      <p>{section.content}</p>

    </section>

  );

  /* ===============================
      Cards
=============================== */

const renderCards = (section, key) => (

<section
    key={key}
    id={section.id}
    className="guide-section"

>

{section.title && <h2>{section.title}</h2>}

<div className="guide-cards">

{section.items?.map((card,index)=>(

<div

key={index}

className="guide-card"

>

{card.icon && (

<div className="card-icon">

{card.icon}

</div>

)}

<h3 className="card-title">

{card.title}

</h3>

<p className="card-description">

{card.description}

</p>

{card.badge && (

<span className="card-badge">

{card.badge}

</span>

)}

</div>

))}

</div>

</section>

);

/* ===============================
      Info Grid
=============================== */

const renderInfoGrid = (section,key)=>(

<section

key={key}

className="guide-section"

>

{section.title && <h2>{section.title}</h2>}

<div className="info-grid">

{section.items?.map((item,index)=>(

<div

key={index}

className="info-card"

>

<div className="info-label">

{item.label}

</div>

<div className="info-value">

{item.value}

</div>

</div>

))}

</div>

</section>

);

/* ===============================
      Checklist
=============================== */

const renderChecklist=(section,key)=>(

<section

key={key}

className="guide-section"

>

{section.title && <h2>{section.title}</h2>}

<div className="guide-checklist">

{section.items?.map((item,index)=>(

<div

key={index}

className="guide-checklist-item"

>

<div className="guide-checklist-icon">

✓

</div>

<div className="guide-checklist-text">

{item}

</div>

</div>

))}

</div>

</section>

);

/* ===============================
      Alert
=============================== */

const renderAlert=(section,key)=>(

<section

key={key}

className={`guide-alert ${section.variant || "info"}`}

>

<h4>

{section.title}

</h4>

<p>

{section.text || section.content}

</p>

</section>

);

  /* ===============================
      Timeline
  =============================== */

  const renderTimeline = (section, key) => (

<section

key={key}

className="guide-section"

>

<h2>{section.title}</h2>

<div className="guide-timeline">

{section.items?.map((item,index)=>(

<div

key={index}

className="timeline-item"

>

<div className="timeline-left">

<div className="timeline-dot"></div>

{index!==section.items.length-1 && (

<div className="timeline-line"></div>

)}

</div>

<div className="timeline-card">

<div className="timeline-time">

🕒 {item.time}

</div>

<h3>

{item.title}

</h3>

{item.description && (

<p>

{item.description}

</p>

)}

{item.tags && (

<div className="timeline-tags">

{item.tags.map((tag,index)=>(

<span

key={index}

className={`timeline-tag ${tag.type || ""}`}

>

{tag.icon && <span>{tag.icon}</span>}

{tag.text}

</span>

))}

</div>

)}

</div>

</div>

))}

</div>

</section>

);
    /* ===============================
      Official Resources
  =============================== */

  const renderOfficialResources = (section, key) => (
    <section
      key={key}
      className="guide-official-resources"
    >
      <h2>{section.title || "Official Resources"}</h2>

      <div className="guide-resource-list">

        {section.resources?.map((resource, index) => (

          <a
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="guide-resource-card"
          >

            <h4>{resource.title}</h4>

            {resource.description && (
              <p>{resource.description}</p>
            )}

          </a>

        ))}

      </div>

    </section>
  );



  /* ===============================
      CTA
  =============================== */

  const renderCTA = (section, key) => (
    <section
      key={key}
      className="guide-cta"
    >

      <h2>{section.title}</h2>

      <p>{section.description}</p>

      {section.buttonLink?.startsWith("http") ? (
    <a
        href={section.buttonLink}
        target="_blank"
        rel="noopener noreferrer"
        className="guide-btn"
    >
        {section.buttonText}
    </a>
) : (
    <Link
        to={section.buttonLink}
        className="guide-btn"
    >
        {section.buttonText}
    </Link>
)}

    </section>
  );



  /* ===============================
      YouTube
  =============================== */

  const renderYoutube = (section, key) => (

    <section
      key={key}
      className="guide-youtube"
    >

      <div className="youtube-wrapper">

        <iframe

          src={`https://www.youtube.com/embed/${section.videoId}`}

          title={section.title}

          loading="lazy"

          allowFullScreen

        />

      </div>

    </section>

  );



  /* ===============================
      Renderer Map
  =============================== */

  const renderers = {

    heading: renderHeading,

    subheading: renderSubheading,

    paragraph: renderParagraph,

    list: renderList,

    orderedList: renderOrderedList,

    table: renderTable,

    image: renderImage,

    gallery: renderGallery,

    quote: renderQuote,

    divider: renderDivider,

    quickAnswer: renderQuickAnswer,

    quickFacts: renderQuickFacts,

    keyTakeaways: renderKeyTakeaways,

    info: renderInfo,

    warning: renderWarning,

    tip: renderTip,

    cards: renderCards,

    infoGrid: renderInfoGrid,

    alert: renderAlert,
    
    checklist: renderChecklist,

    timeline: renderTimeline,

    officialResources: renderOfficialResources,

    cta: renderCTA,

    youtube: renderYoutube,

  };
    /* ===============================
      Render
  =============================== */

  return (
    <div className="guide-content">

      {sections.map((section, index) => {

        if (!section || !section.type) {
    console.warn("Invalid section:", section);
    return null;
}

const renderer = renderers[section.type];

        if (!renderer) {
          console.warn(
            `Unknown section type: ${section.type}`
          );

          return null;
        }

        return renderer(section, section.id || index);

      })}

    </div>
  );

};

export default GuideRenderer;