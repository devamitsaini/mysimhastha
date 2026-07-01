import { Helmet } from "react-helmet-async";
import "../styles/guides.css";
import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { toast } from "react-toastify";
import { Link, NavLink } from "react-router-dom";
import { FiCopy } from "react-icons/fi";
import {
  FaWhatsapp,
  FaFacebookF,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";

export default function BhasmaartiGuideEn () {

const canonicalUrl =
  "https://mysimhastha.com/guide/bhasma-arti";

const heroImage =
  "https://mysimhastha.com/images/bhasma-arti.webp";

const pinterestImage =
  "https://mysimhastha.com/images/bhasma-arti.webp";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Mahakal Bhasma Aarti?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mahakal Bhasma Aarti is the sacred early morning ritual performed daily at Shri Mahakaleshwar Jyotirlinga Temple in Ujjain where Lord Shiva is worshipped with sacred ash (Bhasma).",
        },
      },
      {
        "@type": "Question",
        name: "How can I book Mahakal Bhasma Aarti?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Devotees can book Bhasma Aarti through the official Mahakaleshwar Temple website, subject to availability and temple guidelines.",
        },
      },
      {
        "@type": "Question",
        name: "Is Bhasma Aarti free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Entry for Bhasma Aarti is generally free, although prior registration may be required.",
        },
      },
      {
        "@type": "Question",
        name: "What is the dress code for Bhasma Aarti?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traditional Indian attire is recommended. Visitors should always follow the latest dress code issued by the temple administration.",
        },
      },
      {
        "@type": "Question",
        name: "Can women attend Bhasma Aarti?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Women are allowed to attend the Bhasma Aarti while following the temple's entry and dress code guidelines.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://mysimhastha.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Guides",
        item: "https://mysimhastha.com/guides",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Mahakal Bhasma Aarti Guide",
        item: canonicalUrl,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Mahakal Bhasma Aarti Guide 2026: Booking, Timings, Dress Code & Entry Rules",
    description:
      "Complete Mahakal Bhasma Aarti Guide with booking process, timings, dress code, reporting time, required documents, temple rules, and visitor tips.",
    image: heroImage,

    author: {
      "@type": "Organization",
      name: "MySimhastha",
    },

    publisher: {
      "@type": "Organization",
      name: "MySimhastha",
      logo: {
        "@type": "ImageObject",
        url: "https://mysimhastha.com/logo.png",
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },

    datePublished: "2026-06-30",
    dateModified: "2026-06-30",

    inLanguage: "en",

    keywords:
      "Mahakal Bhasma Aarti, Mahakaleshwar Temple, Bhasma Aarti Booking, Ujjain, Bhasma Aarti Timings, Dress Code",
  };

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("Link copied!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Unable to copy link.");
    }
  };


  const shareTitle =
  "Mahakal Bhasma Aarti Guide 2026: Booking, Timings, Dress Code & Entry Rules";
  const shareUrl = encodeURIComponent(window.location.href);

  const handleFeedback = async (helpful) => {
    const { data, error } = await supabase
      .from("guide_feedback")
      .insert([{ guide_slug: "bhasma-arti", helpful }])
      .select();

    if (error) {
      console.error(error);
      toast.error(error.message);
      return;
    }

    setSubmitted(true);
    toast.success("Thank you for your feedback ❤️");
  };

  return (
    <>
      <Helmet>
  <title>
    Mahakal Bhasma Aarti Guide 2026: Booking, Timings, Dress Code &
    Entry Rules
  </title>

  <meta
    name="description"
    content="Complete Mahakal Bhasma Aarti Guide 2026. Learn about online booking, timings, dress code, reporting time, documents required, temple rules, and important visitor tips."
  />

  <meta
    name="keywords"
    content="Mahakal Bhasma Aarti, Bhasma Aarti Booking, Mahakal Bhasma Aarti Timings, Mahakaleshwar Temple, Ujjain, Bhasma Aarti Dress Code, Entry Rules"
  />

  <meta
    name="robots"
    content="index,follow,max-image-preview:large"
  />

  <meta
    name="author"
    content="MySimhastha"
  />

  <meta
    name="publisher"
    content="MySimhastha"
  />

  <meta
    name="language"
    content="English"
  />

  <link
    rel="canonical"
    href={canonicalUrl}
  />

  <link
    rel="alternate"
    hrefLang="en"
    href={canonicalUrl}
  />

  <link
    rel="alternate"
    hrefLang="hi"
    href="https://mysimhastha.com/hi/guide/bhasma-aarti"
  />

  <link
    rel="alternate"
    hrefLang="x-default"
    href={canonicalUrl}
  />

  {/* Open Graph */}

  <meta
    property="og:type"
    content="article"
  />

  <meta
    property="og:site_name"
    content="MySimhastha"
  />

  <meta
    property="og:title"
    content="Mahakal Bhasma Aarti Guide 2026"
  />

  <meta
    property="og:description"
    content="Complete guide to Mahakal Bhasma Aarti including booking process, timings, dress code, documents, entry rules and FAQs."
  />

  <meta
    property="og:url"
    content={canonicalUrl}
  />

  <meta
    property="og:image"
    content={heroImage}
  />

  <meta
    property="og:image:width"
    content="1200"
  />

  <meta
    property="og:image:height"
    content="630"
  />

  <meta
    property="og:image:type"
    content="image/webp"
  />

  <meta
    property="og:image:alt"
    content="Mahakal Bhasma Aarti at Mahakaleshwar Temple"
  />

  {/* Twitter */}

  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <meta
    name="twitter:title"
    content="Mahakal Bhasma Aarti Guide 2026"
  />

  <meta
    name="twitter:description"
    content="Complete Bhasma Aarti Guide with booking, timings, dress code and temple rules."
  />

  <meta
    name="twitter:image"
    content={heroImage}
  />

  {/* Pinterest */}

  <meta
    name="pinterest-rich-pin"
    content="true"
  />

  <meta
    property="article:published_time"
    content="2026-06-30"
  />

  <meta
    property="article:modified_time"
    content="2026-06-30"
  />

  <script type="application/ld+json">
    {JSON.stringify(faqSchema)}
  </script>

  <script type="application/ld+json">
    {JSON.stringify(breadcrumbSchema)}
  </script>

  <script type="application/ld+json">
    {JSON.stringify(articleSchema)}
  </script>
</Helmet>

      <section className="simhastha-guide">
  <div className="container">
    <article id="top" className="guide-article">

      {/* HEADER */}
      <header className="guide-header">
        <h1>
          Mahakal Bhasma Aarti Guide: Complete Booking, Timings,
          Dress Code & Entry Rules
        </h1>

        <figure className="guide-figure">
          <img
            src={heroImage}
            alt="Mahakal Bhasma Aarti at Mahakaleshwar Temple"
            className="guide-image"
            loading="eager"
            width="800"
            height="500"
            decoding="async"
          />

          <figcaption>
            Mahakal Bhasma Aarti at Shri Mahakaleshwar Jyotirlinga,
            Ujjain
          </figcaption>
        </figure>

        <p className="guide-meta">
  Last Updated: June 30, 2026 |
  By MySimhastha Editorial Team |
  Reading Time: 12 min
</p>
      </header>

      {/* LANGUAGE SWITCHER */}

       <div className="language-switcher">
              <NavLink to="/guide/bhasma-arti">English</NavLink>
              <NavLink to="/hi/guide/bhasma-arti">हिन्दी</NavLink>
            </div>

<div className="share-title">
  Share this Guide
</div>

<div className="share-buttons">

  <a
    className="share-btn whatsapp"
    href={`https://wa.me/?text=${encodeURIComponent(
      `${shareTitle}\n${window.location.href}`
    )}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaWhatsapp size={18} />
    <span>WhatsApp</span>
  </a>

  <a
    className="share-btn facebook"
    href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebookF size={18} />
    <span>Facebook</span>
  </a>

  <a
    className="share-btn twitter"
    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareTitle
    )}&url=${shareUrl}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaXTwitter size={18} />
    <span>X</span>
  </a>

  <a
    className="share-btn pinterest"
    href={`https://pinterest.com/pin/create/button/?url=${shareUrl}&media=${encodeURIComponent(
      pinterestImage
    )}&description=${encodeURIComponent(
      shareTitle
    )}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaPinterestP size={18} />
    <span>Pinterest</span>
  </a>

  <button
    className="share-btn copy-btn"
    onClick={copyLink}
    type="button"
  >
    <FiCopy size={18} />
    <span>{copied ? "Copied!" : "Copy Guide Link"}</span>
  </button>

</div>


      <section className="guide-section">
        <h2>Quick Answer</h2>
        <div className="guide-highlight">
          <p>Bhasmaarti is the most revered daily ritual at Mahakaleshwar Temple, performed at approximately 4:00-5:00 AM. This sacred ceremony involves applying sacred ash to the Shiva Lingam and is open to all devotees on a first-come, first-served basis with approximately 400-500 available seats. Booking is free and can be done online through the temple website or offline at the temple counter. Arrive 30-45 minutes early, wear clean modest clothes, and prepare for a deeply spiritual experience that typically lasts 30 minutes to 1 hour.</p>
        </div>
      </section>

      <section className="guide-section">
        <h2>Quick Facts</h2>
        <div className="quick-facts">
          <div className="quick-fact-card">
            <span className="quick-fact-label">Timing</span>
            <div className="quick-fact-value">4:00 AM - 5:00 AM Daily</div>
          </div>
          <div className="quick-fact-card">
            <span className="quick-fact-label">Available Seats</span>
            <div className="quick-fact-value">~400-500 per day</div>
          </div>
          <div className="quick-fact-card">
            <span className="quick-fact-label">Booking Cost</span>
            <div className="quick-fact-value">FREE</div>
          </div>
          <div className="quick-fact-card">
            <span className="quick-fact-label">Duration</span>
            <div className="quick-fact-value">30 minutes - 1 hour</div>
          </div>
          <div className="quick-fact-card">
            <span className="quick-fact-label">Days Open</span>
            <div className="quick-fact-value">365 days/year</div>
          </div>
          <div className="quick-fact-card">
            <span className="quick-fact-label">Best Time to Visit</span>
            <div className="quick-fact-value">4:00-4:45 AM (Least Crowd)</div>
          </div>
        </div>
      </section>

      <section className="guide-section">
        <h2>Key Takeaways</h2>
        <ul className="key-takeaways">
          <li>Bhasmaarti is the first and most important daily ritual at Mahakaleshwar Temple, performed in early morning hours (4:00-5:00 AM)</li>
          <li>Booking is essential as only 400-500 devotees can participate daily; it's completely free of cost</li>
          <li>Online booking through the temple website guarantees a confirmed seat; offline booking is also available on a first-come, first-served basis</li>
          <li>Arrive 30-45 minutes before the scheduled time with proper documentation for smooth check-in</li>
          <li>Wear clean, modest, traditional clothing (dhoti, kurta, saree) and remove footwear before entering</li>
          <li>The ritual itself lasts 30-60 minutes, providing an intensely spiritual experience with minimal crowds</li>
          <li>Photography and mobile phones are typically not allowed during the actual ritual to maintain sanctity</li>
          <li>Participation includes receiving sacred ash (bhasma) as prasad blessing from the priests</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>Table of Contents</h2>
        <nav className="table-of-contents">
          <ul>
            <li><a href="#what-is-Bhasmaarti">What is Bhasmaarti?</a></li>
            <li><a href="#spiritual-significance">Spiritual Significance and Benefits</a></li>
            <li><a href="#timing-schedule">Timing and Schedule</a></li>
            <li><a href="#booking-process">Complete Booking Process</a></li>
            <li><a href="#cost-charges">Cost and Charges</a></li>
            <li><a href="#eligibility-requirements">Eligibility and Requirements</a></li>
            <li><a href="#dress-code">Dress Code and Etiquette</a></li>
            <li><a href="#procedure-protocol">What to Expect - Ritual Procedure</a></li>
            <li><a href="#insider-tips">Insider Tips and Recommendations</a></li>
            <li><a href="#booking-mistakes">Common Booking Mistakes to Avoid</a></li>
            <li><a href="#faqs">Frequently Asked Questions</a></li>
          </ul>
        </nav>
      </section>

      <section id="what-is-Bhasmaarti" className="guide-section">
        <h2>What is Bhasmaarti? Understanding the Sacred Ritual</h2>
        <p>Bhasmaarti, also spelled as Bhasma Aarti, is the most sacred and revered daily ritual performed at the Mahakaleshwar Temple in Ujjain, Madhya Pradesh. The word "Bhasma" means sacred ash or powder, and "Aarti" refers to a ceremonial offering of light and reverence to a deity. Combined, Bhasmaarti represents a unique ritual where sacred ash is ceremonially applied to the Shiva Lingam during the early morning hours, typically between 4:00 and 5:00 AM.</p>

        <p>This ancient ritual is believed to be one of the oldest continuously performed ceremonies in India, dating back several centuries. Unlike other rituals at major temples across India, Bhasmaarti stands unique because it involves the direct application of sacred ash that has been collected from the previous night's worship and fire offerings. The ritual is performed by senior priests (Mahants) who have inherited this responsibility through generations, maintaining the authenticity and sanctity of the ceremony.</p>

        <p>The Bhasmaarti ritual is not merely a religious ceremony; it's considered a profound spiritual experience that connects devotees directly with Lord Shiva (Mahakal). The early morning timing is deliberately chosen as this period, known as "Brahma Muhurta" in Hindu philosophy, is considered the most auspicious time for spiritual practices and divine communication. During Bhasmaarti, the temple remains relatively calm and serene, allowing for undisturbed worship and meditation.</p>

        <div className="guide-info-box info">
          <h3>Sacred Timing: Brahma Muhurta</h3>
          <p>Brahma Muhurta is the period 48 minutes before sunrise, considered the most auspicious time in Hindu philosophy. This is when Bhasmaarti is performed, aligning the ritual with cosmic spiritual energies. The early morning freshness, minimal noise, and tranquility enhance the spiritual impact of the experience.</p>
        </div>
      </section>

      <section id="spiritual-significance" className="guide-section">
        <h2>Spiritual Significance and Benefits of Bhasmaarti</h2>
        <p>Bhasmaarti holds profound spiritual significance in Hindu philosophy and practice. The sacred ash (bhasma) itself symbolizes several important spiritual concepts. In Hindu tradition, ash represents the ultimate transformation - it is what remains after the complete burning away of ego, desires, and illusions. By applying bhasma from Lord Shiva's worship to devotees, the priests symbolically transfer the blessings of spiritual purification.</p>

        <p>The ritual is believed to have multiple spiritual benefits:</p>

        <div className="guide-list">
          <ul>
            <li><strong>Spiritual Purification:</strong> Participation in Bhasmaarti is believed to cleanse the soul of sins and negative karmic impressions accumulated through past actions.</li>
            <li><strong>Divine Connection:</strong> The ritual provides a direct connection with Lord Shiva's cosmic energy, facilitating personal spiritual growth and enlightenment.</li>
            <li><strong>Mental Peace:</strong> The serene early morning environment and the meditative nature of the ritual induce deep peace and tranquility in the mind.</li>
            <li><strong>Health and Wellness:</strong> Many devotees report improved physical and mental health, relief from stress, anxiety, and various ailments after regular Bhasmaarti participation.</li>
            <li><strong>Blessing and Protection:</strong> The bhasma applied during the ritual is considered a direct blessing from Lord Shiva, believed to provide protection and guidance in life.</li>
            <li><strong>Fulfillment of Desires:</strong> Sincere participation with devotion is believed to help in fulfilling legitimate desires and aspirations.</li>
            <li><strong>Moksha and Liberation:</strong> Devotees consider Bhasmaarti a significant step towards spiritual liberation (moksha) and the ultimate union with the divine.</li>
          </ul>
        </div>

        <p>Beyond the metaphysical aspects, the ritual creates an environment of collective consciousness. Hundreds of devotees gathered in the temple during Bhasmaarti create a powerful positive energy field. The combination of prayers, Sanskrit chants, and the sacred fire rituals amplifies the spiritual vibrations, making it one of the most transformative experiences in Hindu spiritual practice.</p>
      </section>

      <section id="timing-schedule" className="guide-section">
        <h2>Bhasmaarti Timing and Schedule - When to Arrive</h2>
        <p>Understanding the exact timing of Bhasmaarti is crucial for planning your visit and ensuring you don't miss this sacred ritual. The timing varies slightly throughout the year due to seasonal changes in sunrise times.</p>

        <div className="guide-table-wrapper">
          <table className="guide-table">
            <thead>
              <tr>
                <th>Season</th>
                <th>Approximate Timing</th>
                <th>Best Arrival Time</th>
                <th>Sunrise Time (Approximate)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Winter (Dec-Feb)</td>
                <td>4:30 AM - 5:15 AM</td>
                <td>3:45 AM - 4:00 AM</td>
                <td>6:30-7:00 AM</td>
              </tr>
              <tr>
                <td>Spring (Mar-May)</td>
                <td>4:00 AM - 4:45 AM</td>
                <td>3:15 AM - 3:30 AM</td>
                <td>5:30-6:00 AM</td>
              </tr>
              <tr>
                <td>Summer (Jun-Aug)</td>
                <td>4:00 AM - 4:30 AM</td>
                <td>3:15 AM - 3:30 AM</td>
                <td>5:15-5:45 AM</td>
              </tr>
              <tr>
                <td>Autumn (Sep-Nov)</td>
                <td>4:15 AM - 5:00 AM</td>
                <td>3:30 AM - 3:45 AM</td>
                <td>5:45-6:30 AM</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Important Note:</strong> Always arrive 30-45 minutes before the scheduled Bhasmaarti time. This allows sufficient time for security checks, verification of your booking, and settling into your assigned seat in the ritual area. The temple gates open at 4:00 AM, and devotees are processed in an orderly manner based on their booking confirmations.</p>

        <p>The ritual itself typically lasts between 30 minutes to 1 hour, depending on the number of priests participating and the procedural elements included on that particular day. During special occasions or important Hindu festivals, additional ceremonial elements may extend the duration.</p>
      </section>

      <section id="booking-process" className="guide-section">
        <h2>Complete Step-by-Step Bhasmaarti Booking Process</h2>
        <p>Booking your Bhasmaarti slot is straightforward and can be done either online or offline. We recommend online booking as it guarantees your seat in advance and eliminates uncertainty.</p>

        <div className="guide-list">
          <h3>Online Booking Steps:</h3>
          <ol>
            <li>Visit the official Mahakaleshwar Temple website: <strong>www.mahakaleshwar.org</strong></li>
            <li>Navigate to the "Bhasmaarti Booking" or "Darshan Booking" section from the main menu</li>
            <li>Click on "Online Booking" and select your preferred date from the calendar (availability shown in real-time)</li>
            <li>Choose the time slot - typically there's only one or two sessions daily (morning session 4:00-5:30 AM)</li>
            <li>Fill in your personal details:
              <ul>
                <li>Full Name (as per ID proof)</li>
                <li>Mobile Number (for booking confirmation and updates)</li>
                <li>Email Address (booking details sent here)</li>
                <li>Date of Birth</li>
                <li>Number of People (maximum usually 6-8 per booking)</li>
              </ul>
            </li>
            <li>Provide details for each person joining:
              <ul>
                <li>Full Name</li>
                <li>Age/Date of Birth</li>
                <li>Relationship (self, family member, friend, etc.)</li>
              </ul>
            </li>
            <li>Confirm the booking details and submit</li>
            <li>You'll receive a Booking Confirmation Number instantly</li>
            <li>Save your confirmation number and booking reference (you'll need this at the temple)</li>
            <li>Receive confirmation SMS and email with all details including:
              <ul>
                <li>Date and Time of Bhasmaarti</li>
                <li>Your Booking ID</li>
                <li>Names of all participants</li>
                <li>Temple contact numbers</li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="guide-info-box warning">
          <h3>Offline Booking at Temple Counter</h3>
          <p>If you prefer offline booking or are unable to book online, visit the temple counter from 6:00 AM to 10:00 PM daily. Offline bookings for future dates are subject to seat availability. For the same-day booking, arrive at the temple by 3:30 AM to secure your spot. Offline booking is done on a first-come, first-served basis and may not guarantee a seat on peak days or during festivals.</p>
        </div>
      </section>

      <section id="cost-charges" className="guide-section">
        <h2>Bhasmaarti Cost, Charges, and Payment Options</h2>
        <p>One of the greatest aspects of Bhasmaarti is that it is completely free. There are no booking fees, no entry charges, and no hidden costs associated with participating in this sacred ritual. The temple is maintained through donations and the generosity of devotees, not through charging for darshan.</p>

        <div className="guide-table-wrapper">
          <table className="guide-table">
            <thead>
              <tr>
                <th>Item/Service</th>
                <th>Cost</th>
                <th>Mandatory/Optional</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bhasmaarti Booking</td>
                <td>FREE</td>
                <td>Mandatory to book, not paid</td>
              </tr>
              <tr>
                <td>Darshan Participation</td>
                <td>FREE</td>
                <td>Mandatory (part of ritual)</td>
              </tr>
              <tr>
                <td>Temple Entry</td>
                <td>FREE</td>
                <td>Mandatory</td>
              </tr>
              <tr>
                <td>Prasad (Blessed Food)</td>
                <td>FREE</td>
                <td>Optional but provided</td>
              </tr>
              <tr>
                <td>Flower Offerings</td>
                <td>₹51-501</td>
                <td>Optional</td>
              </tr>
              <tr>
                <td>Donations to Temple</td>
                <td>Any Amount</td>
                <td>Optional</td>
              </tr>
              <tr>
                <td>Ritual by Priests</td>
                <td>₹101-1001</td>
                <td>Optional</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Optional Expenses You May Incur:</strong></p>
        <ul>
          <li><strong>Flower offerings:</strong> ₹51-501 (roses, marigolds, or special flower combinations)</li>
          <li><strong>Temple donations:</strong> Any amount you wish to contribute</li>
          <li><strong>Ritual sponsorship:</strong> ₹101-1001 to sponsor a full aarti or ritual in your or your family's name</li>
          <li><strong>Prasad/Blessed food:</strong> Usually free, but additional prasad items can be purchased</li>
          <li><strong>Photography permissions:</strong> Some temples charge for professional photography</li>
        </ul>

        <p>All expenses beyond the basic participation are entirely voluntary. Many devotees visit with just their devotion and participate fully free of charge. The bhasma (sacred ash) received as blessing during the ritual comes at no cost.</p>

        <div className="guide-info-box info">
          <h3>Payment Accepted</h3>
          <p>While basic Bhasmaarti participation is free, if you choose optional services: Payment accepted through cash, online transfer, UPI (Google Pay, PhonePe, Paytm), and temple donation boxes. Digital payment receipts are issued for all donations above ₹100.</p>
        </div>
      </section>

      <section id="eligibility-requirements" className="guide-section">
        <h2>Eligibility Criteria and Entry Requirements</h2>
        <p>Bhasmaarti is open to all sincere devotees regardless of caste, creed, or nationality. However, there are some eligibility criteria and documentation requirements:</p>

        <div className="guide-info-box success">
          <h3>Who Can Participate in Bhasmaarti?</h3>
          <p><strong>Eligible:</strong> All devotees of Lord Shiva, persons with sincere spiritual interests, Indians and international visitors, people of all ages (infants to elderly), people with disabilities (special provisions available), families with children.</p>
        </div>

        <div className="guide-info-box warning">
          <h3>Entry Restrictions</h3>
          <p><strong>Not Eligible:</strong> Persons under the influence of alcohol or drugs, people in severely intoxicated state, persons with infectious diseases, pregnant women in advanced stages (medical restrictions), persons with serious mobility issues (consult temple authorities beforehand for assistance), those who are disruptive or disrespectful.</p>
        </div>

        <p><strong>Required Documentation:</strong></p>
        <ul>
          <li>Government-issued valid ID proof (Passport, Aadhar, Voter ID, Driver's License) - mandatory for all adults</li>
          <li>Booking confirmation number or receipt (if booked online)</li>
          <li>Contact number for verification (provided during booking)</li>
          <li>Children can participate with guardian's ID proof; no separate ID required for children below 18</li>
        </ul>

        <p><strong>Health and Safety Requirements:</strong></p>
        <ul>
          <li>Must be in good physical health to wake up early (4:00-5:00 AM) and stand for 30-60 minutes</li>
          <li>If suffering from respiratory issues or severe allergies, consult doctors before participating (early morning air and incense may affect)</li>
          <li>Pregnant women should consult their doctors; participation is possible but recommended only if cleared by medical professionals</li>
          <li>Persons with serious disabilities can request assistance from temple staff</li>
        </ul>
      </section>

      <section id="dress-code" className="guide-section">
        <h2>Dress Code and Temple Etiquette for Bhasmaarti</h2>
        <p>Respecting the sanctity of the temple through appropriate dress and behavior is an important aspect of the Bhasmaarti experience. The dress code is designed to maintain the spiritual atmosphere and show respect to Lord Shiva.</p>

        <div className="guide-info-box success">
          <h3>Recommended Dress Code</h3>
          <p><strong>For Men:</strong> Dhoti (traditional Indian skirt), Kurta with Dhoti, traditional shirt with traditional pants, clean cotton shirt with trousers, or formal attire. If unable to wear traditional clothes, at least wear clean, modest clothes.</p>
          <p><strong>For Women:</strong> Saree (most traditional and respectful), Salwar Kameez (traditional outfit), Kurti with pants, Dupatta or scarf to cover shoulders. Long skirts or long dresses are acceptable if modest.</p>
          <p><strong>General:</strong> Clothes should be clean, not torn or faded. Avoid synthetic or shiny materials if possible; natural fabrics like cotton are preferred. Neutral or traditional colors (white, cream, saffron, maroon) are recommended.</p>
        </div>

        <div className="guide-info-box warning">
          <h3>Dress Code Violations - Avoid These</h3>
          <p>Do NOT wear: Shorts or half-pants, sleeveless shirts or tank tops for men, sleeveless blouses or low-cut tops for women, tight or transparent clothing, formal Western attire (suits, ties), flip-flops or street shoes inside (they must be removed at entry), hats or caps (must be removed in sanctum), leather items (belts are usually okay but best avoided inside sanctum), sunglasses or dark glasses inside temple.</p>
        </div>

        <p><strong>Footwear Guidelines:</strong> All footwear must be removed before entering the temple premises. Designated shoe racks and lockers are provided at the entrance. Some devotees wear socks during winter for warmth and cleanliness. If you have foot hygiene concerns, wear clean socks and sandals that can be quickly removed.</p>

        <p><strong>Accessories and Personal Items:</strong></p>
        <ul>
          <li>Simple, minimal jewelry is acceptable and encouraged</li>
          <li>Avoid heavy, loud, or flashy jewelry</li>
          <li>Gold and silver sacred jewelry (rudraksha, mala beads) are considered auspicious</li>
          <li>Avoid carrying large bags; carry minimal personal items (ID, booking confirmation, wallet)</li>
          <li>Mobile phones should be on silent mode; photography usually not allowed during ritual</li>
        </ul>

        <div className="guide-info-box info">
          <h3>Temple Etiquette Rules</h3>
          <p>Maintain silence and speak softly, bow with respect when entering the main sanctum, never turn your back to the deity, sit respectfully in assigned areas, participate attentively in chants and prayers, receive blessings and prasad with respect, avoid pointing fingers at the deity, maintain cleanliness - don't spit or litter, follow the instructions of priests and temple staff, respect other devotees' space and privacy, express gratitude to priests and volunteers.</p>
        </div>
      </section>

      <section id="procedure-protocol" className="guide-section">
        <h2>What to Expect: The Complete Bhasmaarti Ritual Procedure</h2>
        <p>Understanding what happens during Bhasmaarti helps you prepare mentally and spiritually for the experience. Here's a detailed breakdown of the ritual procedure:</p>

        <div className="guide-list">
          <h3>Pre-Ritual (30 minutes before):</h3>
          <ol>
            <li>Gates open at 4:00 AM; security personnel check bookings and IDs</li>
            <li>Devotees are guided to designated waiting areas by volunteer staff</li>
            <li>Shoes and heavy bags are deposited at designated areas</li>
            <li>Devotees move to the ritual hall and sit in assigned areas</li>
            <li>Temple bells ring, creating a serene and spiritual atmosphere</li>
            <li>Final prayers and meditation as everyone settles in</li>
          </ol>
        </div>

        <div className="guide-list">
          <h3>The Bhasmaarti Ritual (Main Ceremony):</h3>
          <ol>
            <li><strong>Opening Invocation:</strong> Senior priests begin with Sanskrit mantras invoking Lord Shiva's presence and blessings</li>
            <li><strong>Ritual Preparation:</strong> Priests prepare the sacred ash (bhasma) collected from previous night's worship and ceremonial fires</li>
            <li><strong>Lingam Preparation:</strong> The Shiva Lingam is carefully cleaned and prepared for the ritual</li>
            <li><strong>Bhasma Application:</strong> With sacred chants, the senior priest applies bhasma to the Lingam in specific patterns and directions</li>
            <li><strong>Devotional Chanting:</strong> Priests lead devotees in Sanskrit chants and mantras praising Lord Shiva</li>
            <li><strong>Aarti Performance:</strong> Ceremonial lighting of lamps (aarti) with incense, creating a spiritual atmosphere</li>
            <li><strong>Bell Ringing:</strong> Temple bells ring rhythmically, creating vibrations believed to be spiritually elevating</li>
            <li><strong>Individual Blessings:</strong> Priests individually place bhasma on devotees' foreheads as a blessing</li>
            <li><strong>Prasad Distribution:</strong> Blessed food (usually sweets and fruits) is distributed to all participants</li>
            <li><strong>Closing Prayers:</strong> Concluding mantras and gratitude expressions to Lord Shiva</li>
          </ol>
        </div>

        <div className="guide-list">
          <h3>Post-Ritual (After Main Ceremony):</h3>
          <ol>
            <li>Devotees gradually exit the ritual area in an orderly manner</li>
            <li>Priests are usually available for additional blessings and consultations</li>
            <li>Devotees collect their shoes and belongings</li>
            <li>Optional: Offer donations and purchase flowers if desired</li>
            <li>Collect prasad packets if available</li>
            <li>Take photographs outside the sanctum (as per temple rules)</li>
            <li>Explore other temple areas if time permits</li>
          </ol>
        </div>

        <p><strong>Duration and Timeline:</strong> The entire experience, from entry to exit, typically takes 1.5 to 2 hours. The actual ritual lasts 30-60 minutes. Arriving early (30-45 minutes before) is important for security checks and settling in. Post-ritual interactions and departures may add 20-30 minutes.</p>

        <div className="guide-info-box info">
          <h3>Sensory Experience During Bhasmaarti</h3>
          <p><strong>Sights:</strong> Golden lamps, glowing face of Mahakal idol, sacred ash being applied, hundreds of devotees with closed eyes in devotion</p>
          <p><strong>Sounds:</strong> Sanskrit mantras chanted in rhythmic patterns, ringing of temple bells, soft devotional music</p>
          <p><strong>Smells:</strong> Fragrant incense, floral scents from offerings, purifying effects of sacred smoke</p>
          <p><strong>Feelings:</strong> Spiritual elevation, peace, connection with the divine, part of a sacred collective experience</p>
        </div>
      </section>

      <section id="insider-tips" className="guide-section">
        <h2>Insider Tips and Recommendations for Best Bhasmaarti Experience</h2>

        <div className="guide-list">
          <h3>Planning and Preparation Tips:</h3>
          <ul>
            <li><strong>Book in Advance:</strong> Online booking 7-15 days ahead ensures guaranteed seats and better planning</li>
            <li><strong>Avoid Crowds:</strong> First 2-3 days of any month usually have fewer crowds; avoid Mondays and weekends for smaller groups</li>
            <li><strong>Seasonal Timing:</strong> Winter (Nov-Feb) has comfortable early morning temperatures; summer is hot even early morning</li>
            <li><strong>Festival Caution:</strong> During Shivaratri, Sawan month, and other festivals, expect 3-5 times normal crowds</li>
            <li><strong>Weather Check:</strong> Check weather forecast; avoid rainy/stormy days if possible</li>
            <li><strong>Travel Arrangement:</strong> Arrange taxi/vehicle in advance as few autos available at 4:00 AM</li>
            <li><strong>Accommodation:</strong> If visiting from out of town, book hotel near temple for convenience</li>
            <li><strong>Sleep Schedule:</strong> Adjust sleep schedule 2-3 days before to manage early wake-up easily</li>
          </ul>
        </div>

        <div className="guide-list">
          <h3>At the Temple:</h3>
          <ul>
            <li><strong>Arrive 45 Minutes Early:</strong> This is crucial for security checks and seat assignment without rush</li>
            <li><strong>Carry Valid ID:</strong> Always carry government-issued ID; no exceptions at security checks</li>
            <li><strong>Carry Booking Confirmation:</strong> Have your booking number and confirmation screenshot readily accessible</li>
            <li><strong>Wear Comfortable Clothes:</strong> You'll be sitting for extended periods; avoid tight or uncomfortable clothing</li>
            <li><strong>Use Restrooms Before Ritual:</strong> Limited restroom access once ritual area is sealed</li>
            <li><strong>Bring Light Shawl:</strong> Early morning can be cool; a light shawl helps</li>
            <li><strong>Minimal Belongings:</strong> Carry only essentials; lockers available for shoes</li>
            <li><strong>Stay Hydrated:</strong> Carry a small water bottle; drinking water available at temple</li>
          </ul>
        </div>

        <div className="guide-list">
          <h3>During the Ritual:</h3>
          <ul>
            <li><strong>Maintain Silence:</strong> Complete silence during the ritual enhances spiritual experience</li>
            <li><strong>Close Your Eyes:</strong> Internal focus is more important than visual observation</li>
            <li><strong>Participate in Chanting:</strong> Even if you don't know Sanskrit, repeating mantras aids spiritual absorption</li>
            <li><strong>Feel the Energy:</strong> Sense the collective spiritual energy of hundreds of devotees</li>
            <li><strong>Receive Blessings Respectfully:</strong> When priest places bhasma on your forehead, accept with hands together in prayer</li>
            <li><strong>Don't Rush:</strong> Even if given a chance to leave early, complete the entire ritual for full experience</li>
            <li><strong>Avoid Distractions:</strong> Keep mobile phone completely off, not just silent</li>
            <li><strong>Accept Prasad Gratefully:</strong> Consume or preserve prasad with reverence</li>
          </ul>
        </div>

        <div className="guide-list">
          <h3>Post-Ritual Care:</h3>
          <ul>
            <li><strong>Don't Wash Bhasma Immediately:</strong> Keep the sacred ash on forehead for at least 2-3 hours for spiritual benefits</li>
            <li><strong>Preserve Prasad:</strong> Consume prasad within a few hours; store in airtight containers if keeping longer</li>
            <li><strong>Rest if Needed:</strong> Early morning wake-up may cause fatigue; rest in afternoon</li>
            <li><strong>Journaling:</strong> Write down your spiritual experience and feelings while fresh</li>
            <li><strong>Share Experience:</strong> Sharing positive experiences strengthens community bonds</li>
            <li><strong>Plan Next Visit:</strong> Most devotees feel inspired to return; plan future dates</li>
          </ul>
        </div>
      </section>

      <section id="booking-mistakes" className="guide-section">
        <h2>Common Booking Mistakes to Avoid</h2>

        <div className="guide-info-box warning">
          <h3>Mistake #1: Not Arriving Early Enough</h3>
          <p><strong>The Problem:</strong> Many devotees arrive just 5-10 minutes before the ritual, expecting quick entry. This causes stress, rushing through security, and missing preliminary prayers.</p>
          <p><strong>The Solution:</strong> Always arrive 45 minutes before scheduled time. This allows comfortable security processing and mental preparation.</p>
        </div>

        <div className="guide-info-box warning">
          <h3>Mistake #2: Forgetting ID Proof</h3>
          <p><strong>The Problem:</strong> Many devotees arrive without valid ID, expecting verbal confirmation of booking. Temple security won't allow entry without government-issued ID.</p>
          <p><strong>The Solution:</strong> Always carry valid passport, Aadhar, or Voter ID. This is mandatory and non-negotiable.</p>
        </div>

        <div className="guide-info-box warning">
          <h3>Mistake #3: Booking During Peak Times Without Planning</h3>
          <p><strong>The Problem:</strong> Booking during Shivaratri, Sawan, or major festivals expecting reasonable crowds. Wait times extend to 2-3 hours.</p>
          <p><strong>The Solution:</strong> For comfortable experience, avoid festival times if possible. If visiting during festivals, book multiple days in advance.</p>
        </div>

        <div className="guide-info-box warning">
          <h3>Mistake #4: Inappropriate Dress and Appearance</h3>
          <p><strong>The Problem:</strong> Wearing shorts, sleeveless shirts, or flip-flops. Temple staff may deny entry or ask for changes.</p>
          <p><strong>The Solution:</strong> Follow the dress code strictly. Wear clean, modest, traditional clothes. Remove footwear at entry.</p>
        </div>

        <div className="guide-info-box warning">
          <h3>Mistake #5: Expecting Photography During Ritual</h3>
          <p><strong>The Problem:</strong> Bringing cameras or expecting to use mobile phones during the ritual. This violates sanctity rules.</p>
          <p><strong>The Solution:</strong> Accept the no-photography rule during ritual. Photographs are only allowed in certain temple areas and after ritual concludes.</p>
        </div>

        <div className="guide-info-box warning">
          <h3>Mistake #6: Booking Under Wrong Date or Name</h3>
          <p><strong>The Problem:</strong> Entering wrong date during online booking or booking under wrong name. Causes mismatch during verification.</p>
          <p><strong>The Solution:</strong> Double-check all booking details before submission. Verify name matches your ID proof exactly.</p>
        </div>

        <div className="guide-info-box warning">
          <h3>Mistake #7: Bringing Unnecessary Items</h3>
          <p><strong>The Problem:</strong> Carrying large bags, multiple wallets, or valuables. Risk of loss or theft, and difficulty managing belongings.</p>
          <p><strong>The Solution:</strong> Carry minimal items: ID, booking confirmation, and essential wallet. Use temple lockers for shoes and bags.</p>
        </div>

        <div className="guide-info-box warning">
          <h3>Mistake #8: Not Confirming Booking Status Before Arrival</h3>
          <p><strong>The Problem:</strong> Assuming booking is confirmed but never checking the confirmation email or status. Reaching temple only to find no confirmed booking.</p>
          <p><strong>The Solution:</strong> After online booking, check confirmation email immediately. Call temple 24 hours before to confirm your slot.</p>
        </div>

        <div className="guide-info-box warning">
          <h3>Mistake #9: Traveling with Non-Serious Visitors</h3>
          <p><strong>The Problem:</strong> Bringing people who are just accompanying you without genuine interest. This affects their behavior and group dynamics.</p>
          <p><strong>The Solution:</strong> Encourage only sincere devotees to join. Explain the importance and what to expect beforehand.</p>
        </div>

        <div className="guide-info-box warning">
          <h3>Mistake #10: Not Reading Terms and Cancellation Policy</h3>
          <p><strong>The Problem:</strong> Booking without understanding cancellation rules. Finding out too late that cancellations aren't allowed 48 hours before.</p>
          <p><strong>The Solution:</strong> Carefully read all terms before booking. Understand the cancellation and rescheduling policies completely.</p>
        </div>
      </section>

      <section className="guide-section">
        <h2>Official Resources and Contact Information</h2>
        <div className="official-links">
          <ul>
            <li>
              <a href="https://www.mahakaleshwar.org" target="_blank" rel="noopener noreferrer">
                Official Mahakaleshwar Temple Website ↗
              </a>
              <p className="resource-description">Complete information about Bhasmaarti, temple timings, booking system, and all temple services.</p>
            </li>
            <li>
              <a href="https://www.mahakaleshwar.org/booking" target="_blank" rel="noopener noreferrer">
                Mahakaleshwar Online Booking Portal ↗
              </a>
              <p className="resource-description">Direct link to Bhasmaarti and darshan booking system.</p>
            </li>
            <li>
              <a href="tel:+917342550563">
                Temple Main Line: +91-734-2550563 ↗
              </a>
              <p className="resource-description">Call for booking confirmations, queries, and general information.</p>
            </li>
            <li>
              <a href="tel:+917342559277">
                Temple Secondary Line: +91-734-2559277 ↗
              </a>
              <p className="resource-description">Alternative contact number for darshan arrangements and special requests.</p>
            </li>
            <li>
              <a href="tel:18002331008">
                Toll-Free Helpline: 1-800-233-1008 ↗
              </a>
              <p className="resource-description">Toll-free number for queries from any region of India.</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="faqs" className="guide-section">
        <h2>Frequently Asked Questions About Bhasmaarti</h2>

        <div className="faq-item">
          <h3>Q. Can children participate in Bhasmaarti?</h3>
          <p>A. Yes, children of all ages can participate in Bhasmaarti. However, consider their ability to wake up early (4:00 AM) and sit quietly for 30-60 minutes. Children above 5 years usually manage well. Infants and toddlers may find it challenging due to early timing and need to maintain silence. Bring light snacks if needed. Children benefit spiritually from the experience and often remember it for life.</p>
        </div>



        <div className="faq-item">
          <h3>Q. Can I bring my family for Bhasmaarti?</h3>
          <p>A. Yes, families are welcome and encouraged to participate together in Bhasmaarti. The experience is often deeply bonding for families. However, ensure all family members are genuinely interested and capable of early morning wake-up. Typically, one online booking can accommodate 6-8 family members. Group bookings for larger families may require multiple bookings or special arrangements.</p>
        </div>

        <div className="faq-item">
          <h3>Q. What if I can't attend on my booked date?</h3>
          <p>A. Most temples have a cancellation policy. You can usually cancel and reschedule up to 48 hours before the scheduled date. To cancel or modify: Log into your booking portal, click "Manage Booking," and select cancel/reschedule, or call the temple directly. Note that some strict cancellation policies don't allow changes within 48 hours, so check terms during booking.</p>
        </div>

        <div className="faq-item">
          <h3>Q. Is parking available near the temple?</h3>
          <p>A. Yes, there's paid parking available at Mahakal Lok (temple complex). Parking is about ₹30-50 for 24 hours. With the 4:00 AM early morning timing, many visitors prefer auto-rickshaws or taxis instead. Arrange pre-booked taxi or hotel pickup for hassle-free arrival.</p>
        </div>

        <div className="faq-item">
          <h3>Q. What's the best time of year to visit for Bhasmaarti?</h3>
          <p>A. Early spring (March-April) and autumn (September-October) offer pleasant early morning weather. Winter (December-February) is also good but can be quite cool. Summer (May-August) is hot even early morning. Avoid monsoon (July-September) due to rain. Festival months (Shivaratri in Feb-Mar and Sawan in Jul-Aug) have massive crowds; visit these only if you enjoy crowds and festive atmosphere.</p>
        </div>

        <div className="faq-item">
          <h3>Q. Can I eat before Bhasmaarti?</h3>
          <p>A. Light eating is fine, but many devotees prefer fasting or eating only fruits/milk before Bhasmaarti as a spiritual practice. Avoid heavy meals 2-3 hours before. Some devotees eat after prasad is distributed during the ritual. Follow your comfort and beliefs; there's no strict rule against eating beforehand.</p>
        </div>

        <div className="faq-item">
          <h3>Q. What if I have mobility issues or physical disabilities?</h3>
          <p>A. The temple provides special assistance for people with disabilities. Contact the temple beforehand (24-48 hours before visit) to inform about your needs. Temple staff arranges wheelchair access, reserved seating, and assistance during darshan. Mention disability details during online booking in the "Special Requirements" field.</p>
        </div>

        <div className="faq-item">
          <h3>Q. How long should I stay after receiving bhasma on my forehead?</h3>
          <p>A. Ideally, keep the bhasma on your forehead for at least 2-3 hours after the ritual for maximum spiritual benefits. Many devotees keep it the entire day. Some even sleep with it overnight. However, if absolutely necessary, you can wash it after 1-2 hours. The longer you keep it, the stronger the spiritual connection is believed to be.</p>
        </div>

        <div className="faq-item">
          <h3>Q. Can I book for someone else?</h3>
          <p>A. Yes, you can book for family members or others, but you must provide their actual names and contact details. The person whose name is on the booking may need to present their ID for verification at the temple. Ensure the person's name in booking matches their ID proof exactly to avoid entry issues.</p>
        </div>

        <div className="faq-item">
          <h3>Q. Is there any dress code violation penalty?</h3>
          <p>A. If you arrive in inappropriate clothing, temple staff will politely request you to change or provide appropriate covering (dupatta/shawl). There's no monetary penalty, but you may not be allowed to enter the ritual area if dress violates temple rules. To avoid this, strictly follow the dress code as mentioned in our guide.</p>
        </div>

        <div className="faq-item">
          <h3>Q. Can I record or take photos during Bhasmaarti?</h3>
          <p>A. Photography and recording are generally not allowed during the actual Bhasmaarti ritual to maintain sanctity and prevent distractions. Some temples allow photos in outer areas after the ritual concludes. Check specific temple rules or ask permission from priests. Videos of rituals are sometimes available from the temple's official channels.</p>
        </div>
      </section>

      <section className="guide-section">
        <h2>Related Guides and Further Reading</h2>
        <div className="related-guides-grid">
          <Link to="/guide/mahakal-darshan" className="related-guide-card">
            <div className="related-guide-content">
              <h3>Mahakal Darshan: Complete Temple Guide</h3>
              <p>Comprehensive guide to Mahakaleshwar Temple darshan - VIP bookings, general darshan, temple timings, and complete visitor information.</p>
            </div>
          </Link>

          <Link to="/guide/ujjain-pilgrimage" className="related-guide-card">
            <div className="related-guide-content">
              <h3>Ujjain Pilgrimage Guide 2026</h3>
              <p>Complete guide to Ujjain's 5 major temples, pilgrimage routes, accommodation, and spiritual significance for devotees.</p>
            </div>
          </Link>

          <Link to="/guide/simhastha-2028" className="related-guide-card">
            <div className="related-guide-content">
              <h3>Simhastha Kumbh Mela 2028</h3>
              <p>Everything about Simhastha Kumbh Mela 2028 in Ujjain - dates, rituals, accommodation, transportation, and planning guide.</p>
            </div>
          </Link>

          <Link to="/guide/mahakal-shahi-sawari" className="related-guide-card">
            <div className="related-guide-content">
              <h3>Mahakal Shahi Sawari: Temple Procession</h3>
              <p>Complete guide to Mahakal Shahi Sawari - the grand weekly procession of Lord Shiva through Ujjain city.</p>
            </div>
          </Link>

        </div>
      </section>

      <section className="guide-share">
        <div className="share-title">
          🙏 Share this Guide with Fellow Devotees
        </div>

        <div className="share-buttons">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(shareTitle)}%20${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn whatsapp"
            aria-label="Share on WhatsApp"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>

          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn facebook"
            aria-label="Share on Facebook"
          >
            <FaFacebookF />
            <span>Facebook</span>
          </a>

          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn twitter"
            aria-label="Share on X"
          >
            <FaXTwitter />
            <span>X</span>
          </a>

          <a
            href={`https://pinterest.com/pin/create/button/?url=${shareUrl}&media=https://mysimhastha.com/images/bhasma-arti.webp&description=${encodeURIComponent(shareTitle)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn pinterest"
            aria-label="Share on Pinterest"
          >
            <FaPinterestP />
            <span>Pinterest</span>
          </a>

          <button
            type="button"
            onClick={copyLink}
            className="share-btn copy-btn"
            aria-label="Copy Link"
          >
            <FiCopy />
            <span>{copied ? "Copied!" : "Copy Link"}</span>
          </button>
        </div>
      </section>

      <section className="guide-section feedback-section">
        <h2>Was this guide helpful?</h2>
       <div className="feedback-buttons">
  <button
    onClick={() => handleFeedback(true)}
    disabled={submitted}
    className="feedback-btn yes"
    aria-label="This guide was helpful"
  >
    👍 Yes, Very Helpful!
  </button>

  <button
    onClick={() => handleFeedback(false)}
    disabled={submitted}
    className="feedback-btn no"
    aria-label="This guide needs improvement"
  >
    👎 Needs Improvement
  </button>
</div>

</section>
{/* STAY CONNECTED */}
{/* STAY CONNECTED */}
<div className="guide-box">
  <h2>Stay Connected with MySimhastha</h2>

  <p>
    Planning to attend the sacred Mahakal Bhasma Aarti? MySimhastha brings you the latest Bhasma Aarti updates, booking guides, Mahakal Darshan information, temple timings, travel tips, accommodation options, and everything you need for a hassle-free pilgrimage to Ujjain.
  </p>

  <div className="social-links">
    <p>
      🔸 Website:
      <a
        href="https://mysimhastha.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        MySimhastha.com
      </a>
    </p>

    <p>
      🔸 Instagram:
      <a
        href="https://instagram.com/mysimhastha"
        target="_blank"
        rel="noopener noreferrer"
      >
        @mysimhastha
      </a>
    </p>

    <p>
      🔸 Facebook:
      <a
        href="https://facebook.com/mysimhastha"
        target="_blank"
        rel="noopener noreferrer"
      >
        MySimhastha Facebook Page
      </a>
    </p>

    <p>
      🔸 Reddit Community:
      <a
        href="https://reddit.com/r/Simhastha2028"
        target="_blank"
        rel="noopener noreferrer"
      >
        r/Simhastha2028
      </a>
    </p>
  </div>

  <br />

  <h3>Explore More</h3>

  <ul>
    <li>
      <Link to="/guide/mahakal-darshan">
        Mahakal Darshan Complete Guide
      </Link>
    </li>

    <li>
      <Link to="/guide/simhastha-2028">
        Simhastha 2028 Complete Guide
      </Link>
    </li>

    <li>
      <Link to="/hotels">
        Hotels Near Mahakaleshwar Temple
      </Link>
    </li>

    <li>
      <Link to="/news">
        Latest Mahakal & Ujjain News
      </Link>
    </li>

    <li>
      <Link to="/blog">
        Ujjain Travel Guides & Pilgrimage Tips
      </Link>
    </li>
  </ul>

  <p>
    Whether you're attending Mahakal Bhasma Aarti for the first time or planning another spiritual visit, MySimhastha provides trusted information, practical travel advice, temple updates, and local insights to make your pilgrimage smooth and memorable.
  </p>

  <p>
    This guide is available in both English and हिन्दी, helping devotees from India and around the world plan their Mahakal Bhasma Aarti experience with confidence.
  </p>
</div>

<h2>Official Resources</h2>

<ul className="official-links">
  <li>
    <a
      href="https://shrimahakaleshwar.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Official Mahakaleshwar Temple Website ↗
    </a>
  </li>

  <li>
    <a
      href="https://www.mptourism.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Madhya Pradesh Tourism ↗
    </a>
  </li>

  <li>
    <a
      href="https://www.irctc.co.in/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Book Train Tickets on IRCTC ↗
    </a>
  </li>
</ul>

<div className="back-top">
  <a href="#top">↑ Back to Top</a>
</div>
</article>
</div>
</section>

</>
);
}