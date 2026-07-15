import React, { useState } from "react";
import { SEO, SchemaProvider } from "../seo";
import {
  FaMosque,
  FaHotel,
  FaMap,
  FaCalendar,
  FaCheckCircle,
  FaHandshake,
  FaGlobe,
  FaHeart,
  FaTrain,
  FaSatellite,
  FaNewspaper,
  FaSync,
  FaMapPin,
  FaEdit,
  FaCommentDots,
  FaLandmark,
} from "react-icons/fa";
import "../styles/AboutPage.css";

const ABOUT_FAQS = [
  {
    question: "What is MySimhastha?",
    answer:
      "MySimhastha is an independent pilgrimage and travel information platform that helps devotees, tourists and travelers visiting Ujjain with authentic guides, accommodation information, temple resources and Simhastha updates.",
  },
  {
    question: "Is MySimhastha an official government website?",
    answer:
      "No. MySimhastha is an independent informational platform and is not affiliated with the Government of India, Government of Madhya Pradesh, Ujjain Administration or Mahakaleshwar Temple Management Committee.",
  },
  {
    question: "How is information verified?",
    answer:
      "We verify information using official government notifications, temple announcements, tourism departments, direct communication with hotels and trusted local sources whenever possible.",
  },
  {
    question: "Can hotels list their property?",
    answer:
      "Yes. Hotels, homestays, guest houses, dharamshalas and other accommodation providers can request a listing on MySimhastha.",
  },
  {
    question: "How can I report incorrect information?",
    answer:
      "You can use our contact form to report incorrect information or suggest updates. We review every submission before making changes.",
  },
];

const HIGHLIGHTS = [
  {
    icon: FaMosque,
    title: "Temple Guides",
    desc: "Detailed guides covering history, timings, rituals, dress code, maps and visitor tips.",
  },
  {
    icon: FaHotel,
    title: "Hotels & Stay",
    desc: "Hotels, homestays, guest houses and accommodation options across Ujjain.",
  },
  {
    icon: FaMap,
    title: "Travel Planning",
    desc: "Transport, parking, railway station, airport, itinerary and local travel guidance.",
  },
  {
    icon: FaCalendar,
    title: "Simhastha Updates",
    desc: "Latest news, Shahi Snan schedules, government announcements and event information.",
  },
];

const VALUES = [
  {
    icon: FaCheckCircle,
    title: "Accuracy",
    desc: "We prioritize verified and regularly updated information.",
  },
  {
    icon: FaHandshake,
    title: "Trust",
    desc: "Transparent editorial standards and independent content.",
  },
  {
    icon: FaGlobe,
    title: "Accessibility",
    desc: "Simple and easy-to-understand information for every pilgrim.",
  },
  {
    icon: FaHeart,
    title: "Service",
    desc: "Helping devotees enjoy a smooth and meaningful pilgrimage.",
  },
];

function AboutPage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");
  
  const [openFaq, setOpenFaq] = useState(null);
  
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    const lastSubmit = localStorage.getItem("contact_submit");

    if (lastSubmit && Date.now() - Number(lastSubmit) < 60000) {
      alert("Please wait 1 minute before sending another message.");
      return;
    }

    if (
      !contactForm.name ||
      !contactForm.email ||
      !contactForm.message
    ) {
      alert("Please fill all fields.");
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
          subject: "New Contact Message - MySimhastha",
          ...contactForm,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        localStorage.setItem("contact_submit", Date.now());

        setFormStatus("success");

        setContactForm({
          name: "",
          email: "",
          message: "",
        });

        alert("Message sent successfully.");
      } else {
        setFormStatus("error");
        alert("Unable to send message.");
      }
    } catch (err) {
      console.error(err);
      setFormStatus("error");
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <SEO
        title="About MySimhastha | Our Mission, Editorial Policy & Contact"
        description="Learn about MySimhastha, our mission, editorial standards, contact information and how we help pilgrims visiting Ujjain with trusted travel and temple information."
        canonical="https://www.mysimhastha.com/about"
      />

      <SchemaProvider
        type="about"
        data={{
          title: "About MySimhastha",
          description:
            "Independent pilgrimage and travel information platform for Ujjain and Simhastha.",
          url: "https://www.mysimhastha.com/about",
          image: "https://www.mysimhastha.com/logo.png",
          faqs: ABOUT_FAQS,
        }}
      />

      <div className="about-page">

        {/* ================= HERO ================= */}

        <section className="about-hero">
          <div className="about-overlay"></div>

          <div className="container about-hero-content">

            <span className="about-tag">
              Trusted Pilgrimage Information Platform
            </span>

            <h1>About MySimhastha</h1>

            <p>
              MySimhastha is an independent platform dedicated to helping
              pilgrims, devotees and travelers explore Ujjain with reliable
              information, verified accommodation, temple guides, travel
              resources and Simhastha updates.
            </p>

            <div className="hero-buttons">

              <a href="/guides" className="btn btn-primary">
                Explore Guides
              </a>

              <a href="/contact" className="btn btn-outline">
                Contact Us
              </a>

            </div>

          </div>
        </section>

        {/* ================= WHO WE ARE ================= */}

        <section className="about-section">

          <div className="container">

            <div className="section-heading">

              <span>WHO WE ARE</span>

              <h2>
                Helping Every Pilgrim Experience Ujjain with Confidence
              </h2>

            </div>

            <p>
              Planning a pilgrimage to Ujjain often means searching across
              multiple websites, videos and social media pages to find reliable
              information. MySimhastha brings everything together in one place,
              making it easier for visitors to plan their journey with
              confidence.
            </p>

            <p>
              Whether you are visiting Mahakaleshwar Temple, exploring the
              sacred temples of Ujjain, searching for accommodation or planning
              your Simhastha pilgrimage, our goal is to provide practical,
              accurate and easy-to-understand information.
            </p>

            <div className="highlights-grid">

              {HIGHLIGHTS.map((item, index) => {

                const IconComponent = item.icon;

                return (

                  <div className="highlight-card" key={index}>

                    <div className="highlight-icon">
                      <IconComponent />
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.desc}</p>

                  </div>

                );

              })}

            </div>

          </div>

        </section>

        {/* ================= MISSION ================= */}

        <section className="about-section light">

          <div className="container">

            <div className="two-column">

              <div>

                <h2>Our Mission</h2>

                <p>
                  To become the most trusted digital resource for pilgrims
                  visiting Ujjain by providing verified, comprehensive and
                  regularly updated travel and pilgrimage information.
                </p>

              </div>

              <div>

                <h2>Our Vision</h2>

                <p>
                  We envision a future where every devotee can confidently plan
                  their spiritual journey using one reliable platform covering
                  temples, accommodation, travel and Simhastha updates.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ================= VALUES ================= */}

        <section className="about-section">

          <div className="container">

            <div className="section-heading">

              <span>OUR VALUES</span>

              <h2>What Drives MySimhastha</h2>

            </div>

            <div className="values-grid">

              {VALUES.map((value, index) => {

                const IconComponent = value.icon;

                return (

                  <div className="value-card" key={index}>

                    <div className="value-icon">
                      <IconComponent />
                    </div>

                    <h3>{value.title}</h3>

                    <p>{value.desc}</p>

                  </div>

                );

              })}

            </div>

          </div>

        </section>
                {/* ================= WHAT WE DO ================= */}

        <section className="about-section light">

          <div className="container">

            <div className="section-heading">

              <span>WHAT WE DO</span>

              <h2>Everything You Need for a Smooth Pilgrimage</h2>

              <p>
                MySimhastha brings together trusted information, practical
                resources and local insights to help every visitor experience
                Ujjain with confidence.
              </p>

            </div>

            <div className="services-grid">

              <div className="service-card">
                <div className="service-icon">
                  <FaMosque />
                </div>
                <h3>Temple Guides</h3>
                <p>
                  Complete guides covering history, significance, timings,
                  rituals, dress code, nearby attractions and visitor tips.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <FaHotel />
                </div>
                <h3>Hotels & Homestays</h3>
                <p>
                  Verified accommodation options including hotels, guest
                  houses, homestays, dharamshalas and budget stays.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <FaTrain />
                </div>
                <h3>Travel Information</h3>
                <p>
                  Railway stations, airports, buses, parking, local transport
                  and complete travel planning resources.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <FaCalendar />
                </div>
                <h3>Simhastha Updates</h3>
                <p>
                  Official announcements, important dates, Shahi Snan,
                  government notifications and festival information.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <FaSatellite />
                </div>
                <h3>Live Darshan</h3>
                <p>
                  Access official live darshan resources, temple information
                  and important religious updates.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <FaNewspaper />
                </div>
                <h3>Latest News</h3>
                <p>
                  Stay updated with religious events, local developments,
                  tourism updates and important announcements.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* ================= WHY TRUST US ================= */}

        <section className="about-section">

          <div className="container">

            <div className="section-heading">

              <span>WHY TRUST MYSIMHASTHA</span>

              <h2>Built Around Accuracy, Transparency & Service</h2>

            </div>

            <div className="trust-grid">

              <div className="trust-card">

                <h3>
                  <FaCheckCircle style={{ color: "var(--saffron)" }} /> Independent Platform
                </h3>

                <p>
                  We are an independent information platform created to help
                  pilgrims make informed travel decisions.
                </p>

              </div>

              <div className="trust-card">

                <h3>
                  <FaSync style={{ color: "var(--saffron)" }} /> Regular Updates
                </h3>

                <p>
                  Content is reviewed and updated whenever important
                  announcements, timings or travel information changes.
                </p>

              </div>

              <div className="trust-card">

                <h3>
                  <FaMapPin style={{ color: "var(--saffron)" }} /> Local Knowledge
                </h3>

                <p>
                  Our guides are built around real visitor experiences,
                  practical recommendations and local insights.
                </p>

              </div>

              <div className="trust-card">

                <h3>
                  <FaEdit style={{ color: "var(--saffron)" }} /> Editorial Review
                </h3>

                <p>
                  Information is reviewed before publication and updated when
                  official sources release new information.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ================= EDITORIAL POLICY ================= */}

        <section className="about-section light">

          <div className="container">

            <div className="section-heading">

              <span>EDITORIAL POLICY</span>

              <h2>Our Commitment to Reliable Information</h2>

            </div>

            <div className="editorial-content">

              <p>
                Every article published on MySimhastha is written with the goal
                of providing accurate, useful and easy-to-understand
                information for pilgrims and visitors.
              </p>

              <p>
                We avoid sensational content and strive to present practical
                guidance that genuinely helps travellers planning their visit
                to Ujjain.
              </p>

              <div className="editorial-list">

                <div>✔ Information reviewed before publishing</div>

                <div>✔ Regular updates whenever changes occur</div>

                <div>✔ Transparent corrections when required</div>

                <div>✔ Focus on factual and practical guidance</div>

                <div>✔ Clear distinction between information and opinion</div>

                <div>✔ User feedback helps improve our content</div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= INFORMATION SOURCES ================= */}

        <section className="about-section">

          <div className="container">

            <div className="section-heading">

              <span>OUR SOURCES</span>

              <h2>Where Our Information Comes From</h2>

            </div>

            <div className="sources-grid">

              <div className="source-card">
                <FaLandmark style={{ color: "var(--saffron)", marginBottom: "8px" }} />
                <div>Government Notifications</div>
              </div>

              <div className="source-card">
                <FaMosque style={{ color: "var(--saffron)", marginBottom: "8px" }} />
                <div>Temple Announcements</div>
              </div>

              <div className="source-card">
                <FaGlobe style={{ color: "var(--saffron)", marginBottom: "8px" }} />
                <div>Madhya Pradesh Tourism</div>
              </div>

              <div className="source-card">
                <FaHotel style={{ color: "var(--saffron)", marginBottom: "8px" }} />
                <div>Hotel & Property Owners</div>
              </div>

              <div className="source-card">
                <FaMapPin style={{ color: "var(--saffron)", marginBottom: "8px" }} />
                <div>Local Contributors</div>
              </div>

              <div className="source-card">
                <FaNewspaper style={{ color: "var(--saffron)", marginBottom: "8px" }} />
                <div>Verified Public Information</div>
              </div>

            </div>

          </div>

        </section>

        {/* ================= STATS ================= */}

        <section className="about-section dark">

          <div className="container">

            <div className="stats-grid">

              <div className="stat-card">

                <h2>100+</h2>

                <p>Helpful Guides</p>

              </div>

              <div className="stat-card">

                <h2>20+</h2>

                <p>Major Temples Covered</p>

              </div>

              <div className="stat-card">

                <h2>50+</h2>

                <p>Accommodation Listings</p>

              </div>

              <div className="stat-card">

                <h2>24×7</h2>

                <p>Online Resource</p>

              </div>

            </div>

          </div>

        </section>

        {/* ================= FAQ ================= */}

        <section className="about-section">

          <div className="container">

            <div className="section-heading">

              <span>FAQ</span>

              <h2>Frequently Asked Questions</h2>

            </div>

            <div className="faq-wrapper">

              {ABOUT_FAQS.map((faq, index) => {

                const isOpen = openFaq === index;

                return (

                  <div 

                    className={`faq-card ${isOpen ? 'faq-open' : ''}`} 

                    key={index}

                    onClick={() => toggleFaq(index)}

                    style={{ cursor: 'pointer' }}

                  >

                    <div className="faq-header">

                      <h3>{faq.question}</h3>

                      <span className="faq-icon">{isOpen ? '−' : '+'}</span>

                    </div>

                    {isOpen && (

                      <div className="faq-content">

                        <p>{faq.answer}</p>

                      </div>

                    )}

                  </div>

                );

              })}

            </div>

          </div>

        </section>
                {/* ================= CONTACT ================= */}

        <section className="about-section light">

          <div className="container">

            <div className="section-heading">

              <span>CONTACT US</span>

              <h2>We're Here to Help</h2>

              <p>
                Whether you have a question, found incorrect information,
                want to list your property, collaborate with us or simply
                share feedback, we'd love to hear from you.
              </p>

            </div>

            <div className="contact-grid">

              <div className="contact-info">

                <div className="contact-box">

                  <h3>
                    <FaHotel style={{ color: "var(--saffron)" }} /> Hotel Listings
                  </h3>

                  <p>
                    List your hotel, homestay, guest house or dharamshala on
                    MySimhastha.
                  </p>

                </div>

                <div className="contact-box">

                  <h3>
                    <FaHandshake style={{ color: "var(--saffron)" }} /> Partnerships
                  </h3>

                  <p>
                    Tourism organizations, businesses and local communities can
                    collaborate with us.
                  </p>

                </div>

                <div className="contact-box">

                  <h3>
                    <FaEdit style={{ color: "var(--saffron)" }} /> Corrections
                  </h3>

                  <p>
                    Found outdated or incorrect information? Let us know and
                    we'll review it promptly.
                  </p>

                </div>

                <div className="contact-box">

                  <h3>
                    <FaCommentDots style={{ color: "var(--saffron)" }} /> Feedback
                  </h3>

                  <p>
                    Your suggestions help us improve MySimhastha for millions
                    of future pilgrims.
                  </p>

                </div>

              </div>

              <form
                className="contact-form"
                onSubmit={handleContactSubmit}
              >

                <input
                  type="text"
                  placeholder="Your Name"
                  value={contactForm.name}
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      name: e.target.value,
                    })
                  }
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  value={contactForm.email}
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      email: e.target.value,
                    })
                  }
                />

                <textarea
                  rows="6"
                  placeholder="Your Message"
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      message: e.target.value,
                    })
                  }
                />

                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={formStatus === "loading"}
                >
                  {formStatus === "loading"
                    ? "Sending..."
                    : "Send Message"}
                </button>

              </form>

            </div>

          </div>

        </section>

        {/* ================= GOOGLE MAP ================= */}

        <section className="about-section">

          <div className="container">

            <div className="section-heading">

              <span>LOCATION</span>

              <h2>Serving Pilgrims Visiting Ujjain</h2>

            </div>

            <iframe
              title="Ujjain Map"
              src="https://www.google.com/maps?q=Ujjain,Madhya Pradesh&output=embed"
              className="about-map"
              loading="lazy"
              allowFullScreen
            />

          </div>

        </section>

        {/* ================= CTA ================= */}

        <section className="about-cta">

          <div className="container">

            <h2>
              Begin Your Spiritual Journey with Confidence
            </h2>

            <p>
              Explore trusted temple guides, verified accommodation,
              travel information and everything you need for a smooth
              pilgrimage to Ujjain.
            </p>

            <div className="hero-buttons">

              <a
                href="/guides"
                className="btn btn-primary"
              >
                Explore Guides
              </a>

              <a
                href="/stays"
                className="btn btn-outline"
              >
                Find Hotels
              </a>

            </div>

          </div>

        </section>

        {/* ================= DISCLAIMER ================= */}

        <section className="about-section">

          <div className="container">

            <div className="section-heading">

              <span>DISCLAIMER</span>

              <h2>Important Information</h2>

            </div>

            <div className="disclaimer-box">

              <p>
                MySimhastha is an independent informational platform created
                to assist pilgrims, tourists and visitors planning a journey
                to Ujjain.
              </p>

              <p>
                We are <strong>not affiliated with</strong>, operated by,
                endorsed by or officially connected to the Government of
                India, Government of Madhya Pradesh, Ujjain District
                Administration, Mahakaleshwar Temple Management Committee or
                any official Simhastha authority.
              </p>

              <p>
                Although we strive to keep our information accurate and
                up-to-date, visitors should always verify important
                announcements, temple timings, government notifications,
                accommodation availability and travel regulations through
                official sources before making travel decisions.
              </p>

            </div>

          </div>

        </section>

      </div>

    </>

  );

}

export default AboutPage;