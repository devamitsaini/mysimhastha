import React, { useState } from "react";


function AboutPage() {

  const [contactForm, setContactForm] = useState({
  name: "",
  email: "",
  message: "",
});

const [formStatus, setFormStatus] = useState("");

  const handleContactSubmit = async (e) => {
  e.preventDefault();

  if (!contactForm.name || !contactForm.email || !contactForm.message) {
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
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,

        subject: "New Contact Us Message",

        name: contactForm.name,
        email: contactForm.email,
        message: contactForm.message,
      }),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      setFormStatus("success");

      setContactForm({
        name: "",
        email: "",
        message: "",
      });

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
            MySimhastha is a dedicated platform created to help pilgrims,
            devotees, tourists and visitors access reliable information
            related to Simhastha 2028 in Ujjain.
          </p>

          <p>
            Our mission is to provide updates, accommodation information,
            darshan guidance, travel assistance, snan schedules and spiritual
            resources for visitors.
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
            Ujjain is one of the seven sacred cities of Hinduism and home to
            the famous Mahakaleshwar Jyotirlinga. It has been an important
            spiritual and cultural center for thousands of years.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="about-section">
  <div className="container">

<h2>Frequently Asked Questions About Simhastha 2028</h2>

<div className="faq-item">
  <h3>What is Simhastha 2028?</h3>
  <p>
    Simhastha 2028 is the upcoming Kumbh Mela of Ujjain, one of the
    largest religious gatherings in the world. Millions of devotees,
    saints, and pilgrims are expected to visit Ujjain during the event.
  </p>
</div>

<div className="faq-item">
  <h3>When will Simhastha 2028 take place?</h3>
  <p>
    Simhastha Kumbh Mela 2028 will be held in Ujjain, Madhya Pradesh, from 27 March 2028 to 27 May 2028. This sacred gathering on the banks of the Shipra River is one of the largest religious events in the world and is expected to attract millions of devotees, saints, Akharas, and pilgrims from India and abroad.
  </p>
</div>

<div className="faq-item">
  <h3>What is the significance of Shahi Snan?</h3>
  <p>
    Shahi Snan is the most important ritual of Simhastha, where Akharas,
    saints, and Naga Sadhus participate in ceremonial processions and
    take a sacred bath in the Shipra River.
  </p>
</div>

<div className="faq-item">
  <h3>Why is Ujjain important in Hinduism?</h3>
  <p>
    Ujjain is one of the seven sacred cities of Hinduism and is home
    to the famous Mahakaleshwar Jyotirlinga. The city has been an
    important spiritual and cultural center for thousands of years.
  </p>
</div>

<div className="faq-item">
  <h3>How can I reach Ujjain during Simhastha 2028?</h3>
  <p>
    Ujjain can be reached by train, road, and air. The nearest airport
    is Devi Ahilya Bai Holkar Airport in Indore, located approximately
    55 km from Ujjain.
  </p>
</div>

<div className="faq-item">
  <h3>How can I book hotels for Simhastha 2028?</h3>
  <p>
    Accommodation options include hotels, guest houses, dharamshalas,
    tent cities, and government-approved camps. Early booking is
    recommended due to high demand during Simhastha.
  </p>
</div>

<div className="faq-item">
  <h3>Can I watch Mahakal Darshan online?</h3>
  <p>
    Yes. Live Darshan and temple-related information may be available
    through official temple sources and approved streaming services.
  </p>
</div>

<div className="faq-item">
  <h3>Is MySimhastha an official government website?</h3>
  <p>
    No. MySimhastha is an independent informational platform created
    to help pilgrims and visitors. We are not affiliated with, operated
    by, or endorsed by the Government of India, the Government of
    Madhya Pradesh, the Ujjain administration, or any official Simhastha
    authority. Visitors should verify important announcements, schedules,
    and regulations through official government sources.
  </p>
</div>

  </div>
</section>


      {/* CONTACT */}
      <section className="about-section">
        <div className="container">
          <h2>Contact Us</h2>

          <form className="contact-form" onSubmit={handleContactSubmit}>
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
    rows="5"
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
    type="submit"
    className="btn btn-primary"
    disabled={formStatus === "loading"}
  >
    {formStatus === "loading"
      ? "Sending..."
      : "Send Message"}
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
            width="100%"
            height="450"
            style={{
              border: 0,
              borderRadius: "16px",
            }}
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

    </div>
  );
}

export default AboutPage;