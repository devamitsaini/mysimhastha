import { FiCheckCircle } from "react-icons/fi";

export default function PropertyRules({ stay }) {
  // Rules live directly on the stay object (TEXT[] column in the `stays` table).
  // Only render the section when rules actually exist.
  const rules = stay.rules || [];

  if (rules.length === 0) {
    return null;
  }

  return (
    <section className="details-card">
      <h2>Property Rules</h2>

      <div className="rules-list">
        {rules.map((rule, index) => (
          <div className="rule-item" key={index}>
            <FiCheckCircle />
            <div>
              <span>{rule}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}