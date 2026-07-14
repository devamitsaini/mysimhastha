import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiCheckCircle,
  FiClock,
  FiPhone,
  FiMail,
  FiHome,
  FiMapPin,
  FiTrendingUp,
  FiShield,
  FiStar,
  FiArrowRight,
  FiSearch,
  FiUsers,
} from "react-icons/fi";
import { SEO, SchemaProvider } from "../../seo";

import "./BusinessThankYouPage.css";

export default function BusinessThankYouPage() {

  const location = useLocation();

  const ownerName = location.state?.ownerName || "Partner";
  const propertyName = location.state?.propertyName || "your property";
  const listingType = location.state?.listingType || "Listing";

  const timeline = [
    {
      icon: <FiCheckCircle />,
      title: "Application Received",
      desc: "We've successfully received your partnership request.",
    },
    {
      icon: <FiSearch />,
      title: "Property Review",
      desc: "Our team reviews your accommodation details.",
    },
    {
      icon: <FiPhone />,
      title: "We'll Contact You",
      desc: "We'll reach out by phone or email within 24–48 hours.",
    },
    {
      icon: <FiStar />,
      title: "Go Live",
      desc: "Your property becomes visible on MySimhastha.",
    },
  ];

  const benefits = [
    {
      icon: <FiTrendingUp />,
      title: "Premium Visibility",
      desc:
        "Get featured on MySimhastha and increase exposure among pilgrims.",
    },
    {
      icon: <FiUsers />,
      title: "Direct Enquiries",
      desc:
        "Receive genuine customer calls and booking enquiries directly.",
    },
    {
      icon: <FiShield />,
      title: "Verified Partner",
      desc:
        "Build trust with a verified listing badge on your property page.",
    },
    {
      icon: <FiMapPin />,
      title: "Dedicated Listing",
      desc:
        "Showcase photos, amenities, location and contact details.",
    },
  ];

  const faqs = [
    {
      q: "How long does approval take?",
      a: "Most partnership requests are reviewed within 24–48 hours.",
    },
    {
      q: "Can I list multiple properties?",
      a: "Yes. Hotels, homestays, guest houses and dharamshalas can all be listed.",
    },
    {
      q: "Will someone contact me?",
      a: "Yes. Our partnership team will reach out to discuss your property.",
    },
    {
      q: "Can I update my information later?",
      a: "Absolutely. You can update your listing anytime after approval.",
    },
  ];

  return (

    <>
      <SEO
        title="Property Listing Submitted | MySimhastha"
        description="Thank you for listing your property on MySimhastha. Our team will review your hotel, homestay, guest house or dharamshala and contact you shortly."
        canonical="https://www.mysimhastha.com/thank-you"
      />

      <SchemaProvider
        type="article"
        data={{
          title: "Property Listing Submitted | MySimhastha",
          description: "Thank you for listing your property on MySimhastha. Our team will review your accommodation and contact you shortly.",
          url: "https://www.mysimhastha.com/thank-you",
          published: "2026-01-01",
          modified: new Date().toISOString().split("T")[0],
        }}
      />

      <div className="business-thankyou-page">

      {/* Hero */}

      <section className="thankyou-hero">

        <div className="stay-container">

          <div className="hero-card">

            <div className="success-icon">

              <FiCheckCircle />

            </div>

            <span className="status-pill">

              <FiClock />

              Review Pending

            </span>

            <h1>

              Thank You{ownerName ? `, ${ownerName}` : ""}!

            </h1>

            <p className="hero-text">

              We've successfully received your partnership enquiry
              for <strong>{propertyName}</strong> ({listingType}).

              <br />

              Our team is now reviewing your submission and will
              contact you within <strong>24–48 hours</strong>.

            </p>

            <div className="hero-buttons">

              <Link
                to="/stays"
                className="btn-primary"
              >

                Browse Stay Listings

              </Link>

              <Link
                to="/"
                className="btn-secondary"
              >

                Back to Home

              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* Timeline */}

      <section className="timeline-section">

        <div className="stay-container">

          <div className="section-heading">

            <span>

              WHAT HAPPENS NEXT

            </span>

            <h2>

              Your Partnership Journey

            </h2>

            <p>

              Here's what you can expect after submitting your request.

            </p>

          </div>

          <div className="timeline">

            {timeline.map((step, index) => (

              <div
                className="timeline-item"
                key={index}
              >

                <div className="timeline-icon">

                  {step.icon}

                </div>

                <div className="timeline-content">

                  <h3>

                    {step.title}

                  </h3>

                  <p>

                    {step.desc}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Benefits */}

      <section className="benefits-section">

        <div className="stay-container">

          <div className="section-heading">

            <span>

              WHY PARTNER WITH US

            </span>

            <h2>

              Benefits You'll Receive

            </h2>

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

                <h3>

                  {item.title}

                </h3>

                <p>

                  {item.desc}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
            {/* Contact Support */}

      <section className="support-section">

        <div className="stay-container">

          <div className="support-card">

            <div className="support-left">

              <span className="section-badge">

                Need Assistance?

              </span>

              <h2>

                Have Questions Before We Contact You?

              </h2>

              <p>

                Our partnership team is happy to answer your
                questions regarding featured listings,
                accommodation registration and partnership
                opportunities.

              </p>

            </div>

            <div className="support-right">

              <div className="support-item">

                <FiMail />

                <div>

                  <small>Email</small>

                  <a href="mailto:business@mysimhastha.com">

                    business@mysimhastha.com

                  </a>

                </div>

              </div>

              <div className="support-item">

                <FiPhone />

                <div>

                  <small>Phone</small>

                  <a href="tel:+919999999999">

                    +91 99999 99999

                  </a>

                </div>

              </div>

              <div className="support-item">

                <FiClock />

                <div>

                  <small>Business Hours</small>

                  <span>

                    Monday – Saturday

                    <br />

                    10:00 AM – 7:00 PM

                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="faq-section">

        <div className="stay-container">

          <div className="section-heading">

            <span>

              FREQUENTLY ASKED QUESTIONS

            </span>

            <h2>

              Everything You Need to Know

            </h2>

          </div>

          <div className="faq-grid">

            {faqs.map((faq, index) => (

              <div
                key={index}
                className="faq-card"
              >

                <h3>

                  {faq.q}

                </h3>

                <p>

                  {faq.a}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Explore */}

      <section className="explore-section">

        <div className="stay-container">

          <div className="section-heading">

            <span>

              EXPLORE MYSIMHASTHA

            </span>

            <h2>

              Continue Exploring

            </h2>

          </div>

          <div className="explore-grid">

            <Link
              to="/stays"
              className="explore-card"
            >

              <FiHome />

              <h3>

                Stay Listings

              </h3>

              <p>

                Browse hotels, homestays,
                guest houses and dharamshalas.

              </p>

            </Link>

            <Link
              to="/guide"
              className="explore-card"
            >

              <FiMapPin />

              <h3>

                Travel Guides

              </h3>

              <p>

                Plan your Mahakal Darshan
                and Simhastha journey.

              </p>

            </Link>

            <Link
              to="/simhastha-2028"
              className="explore-card"
            >

              <FiStar />

              <h3>

                Simhastha 2028

              </h3>

              <p>

                Explore preparations,
                updates and important information.

              </p>

            </Link>

          </div>

        </div>

      </section>

      {/* Final CTA */}

      <section className="bottom-cta">

        <div className="stay-container">

          <div className="bottom-card">

            <h2>

              We Look Forward to Partnering With You

            </h2>

            <p>

              Thank you once again for choosing
              MySimhastha. Our partnership team
              will be in touch shortly.

            </p>

            <div className="hero-buttons">

              <Link
                to="/"
                className="btn-primary"
              >

                Go to Homepage

              </Link>

              <Link
                to="/stays"
                className="btn-secondary"
              >

                Explore Stays

                <FiArrowRight />

              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
    </>

  );

}
