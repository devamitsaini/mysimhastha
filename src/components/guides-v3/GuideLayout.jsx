import React from "react";

import GuideSEO from "./GuideSEO";
import GuideHero from "./GuideHero";
import GuideRenderer from "./GuideRenderer";
import GuideFAQ from "./GuideFAQ";
import GuideRelatedGuides from "./GuideRelatedGuides";
import GuideFeedback from "./GuideFeedback";
import ShareButtons from "./ShareButtons";
import GuideLanguageSwitcher from "./GuideLanguageSwitcher";

import "../../guides/styles/guidev3.css";

const GuideLayout = ({ guide }) => {

  if (!guide) return null;

  return (

    <>

      <GuideSEO guide={guide} />

      <article className="guide-page">

        <GuideHero hero={guide.hero} />

        <GuideLanguageSwitcher
          slug={guide.slug}
          language={guide.language}
        />

        {guide.quickAnswer && (
          <section className="guide-quick-answer">
            <h2>{guide.quickAnswer.title}</h2>
            <p>{guide.quickAnswer.answer}</p>
          </section>
        )}

        {guide.quickFacts?.length > 0 && (
          <section className="guide-quick-facts">

            <h2>Quick Facts</h2>

            <div className="guide-facts-grid">

              {guide.quickFacts.map((fact, index) => (

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
        )}

        {guide.keyTakeaways?.length > 0 && (
          <section className="guide-takeaways">

            <h2>Key Takeaways</h2>

            <ul>

              {guide.keyTakeaways.map((item, index) => (
                <li key={index}>{item}</li>
              ))}

            </ul>

          </section>
        )}
                {/* ===============================
            Table Of Contents
        =============================== */}

        {guide.tableOfContents?.length > 0 && (

          <nav className="guide-toc">

            <h2>Table of Contents</h2>

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

        )}



        {/* ===============================
            Main Guide Content
        =============================== */}

        <GuideRenderer
          sections={guide.sections}
        />



        {/* ===============================
            FAQ
        =============================== */}

        {guide.faq?.length > 0 && (

          <GuideFAQ
            faq={guide.faq}
          />

        )}



        {/* ===============================
            Share Buttons
        =============================== */}

        <ShareButtons
          title={guide.title}
          slug={guide.slug}
        />



        {/* ===============================
            Feedback
        =============================== */}

        <GuideFeedback
          slug={guide.slug}
        />



        {/* ===============================
            Related Guides
        =============================== */}

        {guide.relatedGuides?.length > 0 && (

          <GuideRelatedGuides
            guides={guide.relatedGuides}
          />

        )}



        {/* ===============================
            CTA
        =============================== */}

        {guide.cta && (

          <section className="guide-cta">

            <h2>{guide.cta.title}</h2>

            <p>{guide.cta.description}</p>

            <a

              href={guide.cta.buttonLink}

              className="guide-btn"

            >

              {guide.cta.buttonText}

            </a>

          </section>

        )}

      </article>

    </>

  );

};

export default GuideLayout;