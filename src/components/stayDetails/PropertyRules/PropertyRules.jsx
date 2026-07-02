import {
  Clock3,
  IdCard,
  Users,
  Ban,
  MessageCircleQuestion,
} from "lucide-react";

import "./PropertyRules.css";

const PropertyRules = ({ stay }) => {
  if (!stay) return null;

  return (
    <section className="property-rules">

      <h2>Property Rules</h2>

      <div className="rules-grid">

        <div className="rule-item">

          <Clock3 size={19} />

          <div>

            <strong>Check-in / Check-out</strong>

            <span>

              Check-in from {stay.check_in || "12:00 PM"},
              check-out until {stay.check_out || "11:00 AM"}

            </span>

          </div>

        </div>

        <div className="rule-item">

          <IdCard size={19} />

          <div>

            <strong>ID Proof</strong>

            <span>

              A valid government photo ID is required
              at check-in for all guests

            </span>

          </div>

        </div>

        <div className="rule-item">

          <Users size={19} />

          <div>

            <strong>Guest Policy</strong>

            <span>

              Couple, family and group policies vary by
              property — please confirm directly before booking

            </span>

          </div>

        </div>

        <div className="rule-item">

          <Ban size={19} />

          <div>

            <strong>Smoking &amp; Alcohol</strong>

            <span>

              Follows local property rules — many pilgrim
              stays near the temple do not permit either

            </span>

          </div>

        </div>

      </div>

      <div className="rules-note">

        <MessageCircleQuestion size={16} />

        <span>

          Exact policies can differ by property. Use the
          Call or WhatsApp buttons on this page to confirm
          anything specific before you book.

        </span>

      </div>

    </section>
  );
};

export default PropertyRules;
