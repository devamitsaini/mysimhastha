import { FiCheckCircle, FiClock, FiUsers, FiSlash, FiCreditCard, FiSun, FiVolume2 } from "react-icons/fi";

// Map rule keys to appropriate icons for visual distinction
const iconMap = {
  check_in: <FiClock />,
  check_out: <FiClock />,
  checkin: <FiClock />,
  checkout: <FiClock />,
  pets: <FiUsers />,
  smoking: <FiSlash />,
  children: <FiUsers />,
  payment: <FiCreditCard />,
  cancellation: <FiCreditCard />,
  quiet_hours: <FiVolume2 />,
  pool: <FiSun />,
};

export default function PropertyRules({ stay }) {
  // Support two data formats:
  // 1. Structured rules from `stay_rules` table → `stay.rules_structured`
  //    [{ rule_key, rule_label, rule_value }, ...]
  // 2. Simple TEXT[] from `stays` table rules column → `stay.rules`
  //    ["Rule text", ...]
  const structuredRules = stay.rules_structured || [];
  const simpleRules = stay.rules || [];

  const hasStructured = structuredRules.length > 0;
  const hasSimple = simpleRules.length > 0;

  if (!hasStructured && !hasSimple) {
    return null;
  }

  return (
    <section className="details-card">
      <h2>Property Rules</h2>

      <div className="rules-list">
        {hasStructured
          ? structuredRules.map((rule, index) => (
              <div className="rule-item" key={rule.rule_key || index}>
                {iconMap[rule.rule_key] || <FiCheckCircle />}
                <div>
                  <strong>{rule.rule_label}</strong>
                  <span>{rule.rule_value}</span>
                </div>
              </div>
            ))
          : simpleRules.map((rule, index) => (
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
