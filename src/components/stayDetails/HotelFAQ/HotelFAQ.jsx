import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./HotelFAQ.css";

const HotelFAQ = ({ stay }) => {
  if (!stay) return null;

  const faqs = [
    {
      q: `How far is ${stay.name} from Mahakaleshwar Temple?`,
      a: `${stay.name} is located ${
        stay.distance_to_mahakal || "near"
      } Mahakaleshwar Temple.`,
    },
    {
      q: "What is the check-in and check-out time?",
      a: `Check-in is from ${
        stay.check_in || "12:00 PM"
      } and check-out is until ${
        stay.check_out || "11:00 AM"
      }.`,
    },
    {
      q: "Does this property provide parking?",
      a: stay.parking
        ? "Yes, parking is available."
        : "Please contact the property to confirm parking availability.",
    },
    {
      q: "Is Wi-Fi available?",
      a: stay.wifi
        ? "Yes, complimentary Wi-Fi is available."
        : "Please contact the property for Wi-Fi details.",
    },
    {
      q: "How can I book this hotel?",
      a: "You can contact the property directly using the Call or WhatsApp buttons available on this page.",
    },
  ];

  return (
    <section className="hotel-faq">

      <h2>Frequently Asked Questions</h2>

      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          faq={faq}
        />
      ))}

    </section>
  );
};

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">

      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
      >
        <span>{faq.q}</span>

        <ChevronDown
          className={open ? "rotate" : ""}
          size={18}
        />
      </button>

      {open && (
        <div className="faq-answer">

          {faq.a}

        </div>
      )}

    </div>
  );
}

export default HotelFAQ;