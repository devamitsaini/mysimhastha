import { useState } from "react";
import { ChevronDown } from "lucide-react";

import "./FAQ.css";

const faqs = [
  {
    question: "Are all stays verified?",
    answer:
      "Yes. Every property listed on MySimhastha is manually reviewed before being published.",
  },
  {
    question: "Can I contact the hotel directly?",
    answer:
      "Absolutely. You can call, WhatsApp or navigate directly to the property from the listing.",
  },
  {
    question: "Do you charge any booking fee?",
    answer:
      "No. MySimhastha does not charge devotees any booking fee.",
  },
  {
    question: "Which stay is nearest to Mahakaleshwar Temple?",
    answer:
      "Each listing shows its approximate distance from Mahakaleshwar Temple.",
  },
  {
    question: "Can I find Dharamshalas and Ashrams?",
    answer:
      "Yes. Hotels, Dharamshalas, Ashrams and Guest Houses are available with filters.",
  },
];

const FAQ = () => {

  const [active, setActive] = useState(0);

  return (

    <section className="stay-faq">

      <div className="container">

        <div className="section-heading">

          <span>FAQ</span>

          <h2>Frequently Asked Questions</h2>

        </div>

        <div className="faq-list">

          {faqs.map((faq, index) => (

            <div
              className={`faq-item ${active===index?"active":""}`}
              key={index}
            >

              <button
                className="faq-question"
                onClick={() =>
                  setActive(
                    active===index
                      ? -1
                      : index
                  )
                }
              >

                {faq.question}

                <ChevronDown size={20} />

              </button>

              {active===index && (

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

};

export default FAQ;