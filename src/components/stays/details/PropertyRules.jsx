import {
  FiCheckCircle,
} from "react-icons/fi";

export default function PropertyRules() {

  const rules = [
    {
      title: "Check-in",
      value: "12:00 PM onwards",
    },
    {
      title: "Check-out",
      value: "Before 10:00 AM",
    },
    {
      title: "Pets",
      value: "Not Allowed",
    },
    {
      title: "Smoking",
      value: "No Smoking",
    },
    {
      title: "Children",
      value: "Family Friendly",
    },
    {
      title: "Payment",
      value: "Cash & UPI",
    },
  ];

  return (
    <section className="details-card">

      <h2>Property Rules</h2>

      <div className="rules-list">

        {rules.map((rule) => (

          <div
            className="rule-item"
            key={rule.title}
          >

            <FiCheckCircle />

            <div>

              <strong>{rule.title}</strong>

              <span>{rule.value}</span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}