import { ShieldCheck, BadgeCheck, Lock, Headphones } from "lucide-react";

import "./WhyBookWithUs.css";

const WhyBookWithUs = ({ stay }) => {
  if (!stay) return null;

  const features = [
    {
      icon: <ShieldCheck size={20} />,
      title: "Best Price Guarantee",
      description: "Get the best prices online",
    },
    {
      icon: <BadgeCheck size={20} />,
      title: "Verified Properties",
      description: "Handpicked & verified stays",
    },
    {
      icon: <Lock size={20} />,
      title: "Secure Payments",
      description: "100% safe & secure",
    },
    {
      icon: <Headphones size={20} />,
      title: "24×7 Customer Support",
      description: "We're here to help",
    },
  ];

  return (
    <section className="sd-section">
      <h2 className="sd-section-title">Why book with MySimhastha?</h2>
      
      <div className="sd-why-book-list">
        {features.map((feature, index) => (
          <div key={index} className="sd-why-book-item">
            <div className="sd-why-book-icon">
              {feature.icon}
            </div>
            <div className="sd-why-book-content">
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyBookWithUs;