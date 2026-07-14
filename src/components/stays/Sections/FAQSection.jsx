import React, { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";



import "./FAQSection.css";

export default function FAQSection() {
  const [faqs, setFaqs] = useState([]);
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFaqs() {
      try {
        setFaqs([
  {
    id: 1,
    question: "How can I contact the property owner?",
    answer: "You can directly call or WhatsApp the owner using the contact buttons on the property page.",
  },
  {
    id: 2,
    question: "Do I need to pay any booking commission?",
    answer: "No. MySimhastha does not charge any booking commission.",
  },
  {
    id: 3,
    question: "Are the properties verified?",
    answer: "Verified properties display the Verified badge after our review process.",
  },
]);
      } catch (error) {
        console.error('Error loading FAQs:', error);
      } finally {
        setLoading(false);
      }
    }

    loadFaqs();
  }, []);

  if (loading) {
    return (
      <section className="stay-faq">
        <div className="stay-container">
          <div className="section-heading">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know before choosing your stay in Ujjain.</p>
          </div>
          <p style={{ color: "#64748b", fontSize: "14px" }}>Loading FAQs...</p>
        </div>
      </section>
    );
  }

  if (faqs.length === 0) {
    return null;
  }

  return (
    <section className="stay-faq">

      <div className="stay-container">

        <div className="section-heading">

          <h2>Frequently Asked Questions</h2>

          <p>
            Everything you need to know before choosing your stay in Ujjain.
          </p>

        </div>

        <div className="faq-list">

          {faqs.map((faq, index) => (

            <div
              key={faq.id || index}
              className={`faq-item ${
                active === index ? "active" : ""
              }`}
            >

              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
              >

                {faq.question}

                {active === index ? (
                  <FiChevronUp />
                ) : (
                  <FiChevronDown />
                )}

              </button>

              {active === index && (

                <div className="faq-answer">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
