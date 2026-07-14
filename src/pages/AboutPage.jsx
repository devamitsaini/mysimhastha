import React, { useState } from "react";
import { SEO, SchemaProvider } from "../seo";
import "../styles/AboutPage.css";

const ABOUT_FAQS = [
  {
    question: "What is Simhastha 2028?",
    answer: "Simhastha 2028 is the upcoming Kumbh Mela of Ujjain, one of the largest religious gatherings in the world. Millions of devotees, saints, and pilgrims are expected to visit Ujjain during the event."
  },
  {
    question: "When will Simhastha 2028 take place?",
    answer: "Simhastha Kumbh Mela 2028 will be held in Ujjain, Madhya Pradesh, from 27 March 2028 to 27 May 2028. Millions of devotees, saints, Akharas, and pilgrims are expected to participate."
  },
  {
    question: "What is the significance of Shahi Snan?",
    answer: "Shahi Snan is the most important ritual of Simhastha, where Akharas, saints, and Naga Sadhus participate in ceremonial processions and take a sacred bath in the Shipra River."
  },
  {
    question: "Why is Ujjain important in Hinduism?",
    answer: "Ujjain is one of the seven sacred cities of Hinduism and is home to the Mahakaleshwar Jyotirlinga. The city has been an important spiritual and cultural center for thousands of years."
  },
  {
    question: "How can I reach Ujjain during Simhastha 2028?",
    answer: "Ujjain can be reached by train, road, and air. The nearest airport is Devi Ahilya Bai Holkar Airport in Indore, approximately 55 kilometers from Ujjain."
  },
  {
    question: "How can I book hotels for Simhastha 2028?",
    answer: "Accommodation options include hotels, guest houses, dharamshalas, tent cities, and government-approved camps. Early booking is recommended due to high demand during Simhastha."
  },
  {
    question: "Can I watch Mahakal Darshan online?",
    answer: "Yes. Live Darshan and temple-related information may be available through official temple sources and approved streaming services."
  },
  {
    question: "Is MySimhastha an official government website?",
    answer: "No. MySimhastha is an independent informational platform created to help pilgrims and visitors. It is not affiliated with, operated by, or endorsed by the Government of India, the Government of Madhya Pradesh, the Ujjain administration, or any official Simhastha authority."
  }
];

function AboutPage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    const lastSubmit = localStorage.getItem("contact_submit");

    if (lastSubmit && Date.now() - Number(lastSubmit) < 60000) {
      alert("Please wait 1 minute before sending another message.");
      return;
    }

    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      alert("Please fill all fields.");
      return;
    }

    if (contactForm.name.length > 100) {
      alert("Name is too long.");
      return;
    }

    if (contactForm.message.length > 2000) {
      alert("Message is too long.");
      return;
    }

    setFormStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY,
          subject: "New Contact Us Message",
          name: contactForm.name,
          email: contactForm.email,
          message: contactForm.message,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        localStorage.setItem("contact_submit", Date.now());
        setFormStatus("success");
        setContactForm({ name: "", email: "", message: "" });
        alert("✅ Message sent successfully!");
      } else {
        setFormStatus("error");
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setFormStatus("error");
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <SEO
        title="About MySimhastha | Simhastha 2028 Guide & Pilgrimage Information"
        description="Learn about MySimhastha — the complete guide to Simhastha 2028, Mahakaleshwar Temple, Ujjain pilgrimage, accommodation, travel and spiritual tourism."
        canonical="https://www.mysimhastha.com/about"
      />

      <SchemaProvider
        type="guide"
        data={{
          title: "About MySimhastha",
          description: "The complete guide to Simhastha 2028, Ujjain pilgrimage, Mahakaleshwar Temple, accommodation, travel and spiritual experiences.",
          url: "https://www.mysimhastha.com/about",
          image: "https://www.mysimhastha.com/logo.png",
          articleSection: "About",
          about: "Simhastha",
          faqs: ABOUT_FAQS,
        }}
      />

      <div className="about-page">
        {/* HERO */}
        <section className="about-hero">
          <div className="about-overlay"></div>
          <div className="container about-hero-content">
            <h1>About MySimhastha</h1>
            <p>
              The complete guide to Simhastha 2028, Ujjain pilgrimage,
              Mahakaleshwar Temple, accommodation, travel and spiritual experiences.
            </p>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="about-section">
          <div className="container">
            <h2>Who We Are</h2>
            <p>
              MySimhastha: An independent informative portal for Simhastha 2028, Mahakaleshwar Temple, Ujjain travel, accommodation, pilgrimage, & spiritual tourism.
            </p>
            <p>
              Our goal is to help pilgrims, devotees, tourist and visitor with resourceful information required by any individual planning to visit Ujjain at one place.
            </p>
          </div>
        </section>

        {/* WHY WE CREATED MYSIMHASTHA */}
        <section className="about-section">
          <div className="container">
            <h2>Why We Created MySimhastha</h2>
            <p>
              Planning a pilgrimage to Ujjain often requires searching across
              multiple websites, social media pages, videos, and unofficial sources.
              Information about accommodation, darshan, travel, parking, and
              Simhastha schedules can be difficult to find in one place.
            </p>
            <p>
              MySimhastha was created to simplify this experience and provide
              pilgrims, devotees, tourists, and visitors with a centralized source
              of information related to Simhastha 2028, Mahakaleshwar Temple,
              Ujjain travel, accommodation, and spiritual tourism.
            </p>
          </div>
        </section>

        {/* WHAT IS SIMHASTHA */}
        <section className="about-section">
          <div className="container">
            <h2>What is Simhastha 2028?</h2>
            <p>
              Simhastha 2028 is the upcoming Kumbh gathering in Ujjain held on
              the sacred banks of the Shipra River. Millions of devotees are
              expected to visit Ujjain during this spiritual festival.
            </p>
            <p>
              The event is closely associated with Lord Mahakaleshwar, Sanatan
              Dharma, ancient traditions and the Akharas that participate in the
              Shahi Snan processions.
            </p>
          </div>
        </section>

        {/* WHAT MAKES US DIFFERENT */}
        <section className="about-section">
          <div className="container">
            <h2>What Makes MySimhastha Different</h2>
            <div className="about-grid">
              <div className="about-card">📅 Simhastha Updates</div>
              <div className="about-card">🛕 Mahakal Resources</div>
              <div className="about-card">🏨 Accommodation Information</div>
              <div className="about-card">📍 Ujjain Travel Guides</div>
              <div className="about-card">📡 Live Darshan Resources</div>
              <div className="about-card">🚨 Pilgrim Assistance</div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="about-section">
          <div className="container">
            <h2>What You'll Find Here</h2>
            <div className="about-grid">
              <div className="about-card">🛕 Temple Information</div>
              <div className="about-card">📅 Snan Calendar</div>
              <div className="about-card">🏨 Hotels & Stay</div>
              <div className="about-card">🚆 Travel Guidance</div>
              <div className="about-card">📡 Live Darshan</div>
              <div className="about-card">📍 Ujjain Guide</div>
            </div>
          </div>
        </section>

        {/* ABOUT UJJAIN */}
        <section className="about-section">
          <div className="container">
            <h2>About Ujjain</h2>
            <p>
              Ujjain, among the seven holiest cities of India in Hinduism is the abode of the renowned Mahakaleshwar Jyotirlinga, considered to be a prime center of religion and culture since antiquity.
            </p>
            <p>
              Simhastha takes place in the city, one of the four holy Kumbh Melas in which millions of pilgrims, saints and visitors from around India and the rest of the world.
            </p>
          </div>
        </section>

        {/* EDITORIAL POLICY */}
        <section className="about-section">
          <div className="container">
            <h2>Editorial Policy</h2>
            <p>
              We strive to provide accurate, regularly updated, and useful
              information related to Simhastha 2028, Mahakaleshwar Temple,
              Ujjain travel, accommodation, and pilgrimage planning.
            </p>
            <p>
              Information may change over time. Visitors should verify important
              announcements, event schedules, government notifications, and
              regulations through official authorities before making travel decisions.
            </p>
            <p>Last Updated: June 2026</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="about-section">
          <div className="container">
            <h2>Frequently Asked Questions About Simhastha 2028</h2>
            {ABOUT_FAQS.map((faq, i) => (
              <div className="faq-item" key={i}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="about-section">
          <div className="container">
            <h2>Contact Us</h2>
            <p>
              Have a question, correction, hotel listing, partnership inquiry, or feedback?
              We welcome contributions from pilgrims, travelers, local businesses,
              and members of the Ujjain community.
            </p>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={formStatus === "loading"}
              >
                {formStatus === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </section>

        {/* GOOGLE MAP */}
        <section className="about-section">
          <div className="container">
            <h2>Location</h2>
            <iframe
              title="Ujjain Map"
              src="https://www.google.com/maps?q=Ujjain&output=embed"
              className="about-map"
              loading="lazy"
            />
          </div>
        </section>

        {/* MISSION */}
        <section id="our-mission" className="about-section">
          <div className="container">
            <h2>Our Mission</h2>
            <p>
              To become the most trusted online resource for Simhastha 2028 and
              help every pilgrim plan a smooth and meaningful journey to Ujjain.
            </p>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="about-section">
          <div className="container">
            <h2>Disclaimer</h2>
            <p>
              MySimhastha is an independent informational platform created to
              assist pilgrims and visitors. We are not affiliated with,
              operated by, endorsed by, or officially connected to the
              Government of India, Government of Madhya Pradesh,
              Ujjain District Administration, Mahakaleshwar Temple Management
              Committee, or any official Simhastha authority.
            </p>
            <p>
              Official announcements, schedules, regulations, and event-related
              information should always be verified through official government
              and administrative sources.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutPage;