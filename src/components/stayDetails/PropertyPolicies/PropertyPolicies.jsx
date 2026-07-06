import { useState } from "react";
import { ChevronDown } from "lucide-react";

import "./PropertyPolicies.css";

const PropertyPolicies = ({ stay }) => {
  if (!stay) return null;

  const [expanded, setExpanded] = useState(false);

  const mainPolicies = [
    { title: "Check-in", value: "12:00 PM onwards" },
    { title: "Check-out", value: "11:00 AM" },
    {
      title: "Cancellation Policy",
      value: "Free cancellation till 26 Apr 2028, 11:59 PM",
    },
  ];

  const morePolicies = [
    { title: "ID Proof", value: "Valid Govt. ID is required at check-in" },
    { title: "Children Policy", value: "Children of all ages are welcome" },
    { title: "Pets", value: "Pets are not allowed" },
  ];

  const policies = expanded ? [...mainPolicies, ...morePolicies] : mainPolicies;

  return (
    <section className="sd-section">
      <div className="sd-policies-header">
        <h2 className="sd-section-title">Property Policies</h2>
      </div>

      <div className="sd-policies-list">
        {policies.map((policy, index) => (
          <div key={index} className="sd-policy-row">
            <span className="sd-policy-title">{policy.title}</span>
            <span className="sd-policy-value">{policy.value}</span>
          </div>
        ))}
      </div>

      <button
        className="sd-more-policies"
        onClick={() => setExpanded((prev) => !prev)}
      >
        {expanded ? "Show less" : "More policies"}
        <ChevronDown size={16} className={expanded ? "sd-rotate" : ""} />
      </button>
    </section>
  );
};

export default PropertyPolicies;