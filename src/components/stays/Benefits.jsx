    import {
      ShieldCheck,
      BadgeIndianRupee,
      MapPinned,
      Headset,
    } from "lucide-react";

    import "./Benefits.css";

    const benefits = [
      {
        icon: <ShieldCheck size={34} />,
        title: "Verified Stays",
        description:
          "Every listed hotel, dharamshala and ashram is manually verified for quality and trust.",
      },
      {
        icon: <BadgeIndianRupee size={34} />,
        title: "Best Price",
        description:
          "Connect directly with properties to get transparent pricing with no hidden charges.",
      },
      {
        icon: <MapPinned size={34} />,
        title: "Near Mahakal",
        description:
          "See exact distance from Mahakaleshwar Temple before booking your stay.",
      },
      {
        icon: <Headset size={34} />,
        title: "24×7 Assistance",
        description:
          "Need help finding accommodation? Our support is always available.",
      },
    ];

    const Benefits = () => {
      return (
        <section className="stay-benefits">

          <div className="container">

            <div className="section-heading">

              <span>WHY CHOOSE US</span>

              <h2>Book With Confidence</h2>

              <p>
                Trusted accommodation for every devotee visiting Ujjain.
              </p>

            </div>

            <div className="benefits-grid">

              {benefits.map((item, index) => (

                <div
                  className="benefit-card"
                  key={index}
                >

                  <div className="benefit-icon">

                    {item.icon}

                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </div>

              ))}

            </div>

          </div>

        </section>
      );
    };

    export default Benefits;