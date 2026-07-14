import React, { useState } from "react";
import { SEO, SchemaProvider } from "../seo";
import { FaChevronDown, FaHome, FaCalendarAlt, FaHotel, FaMapMarkerAlt, FaInfoCircle } from "react-icons/fa";
import "../styles/FAQPage.css";

const faqCategories = [
  {
    id: "temple",
    title: "Mahakal Temple",
    icon: <FaHome />,
    faqs: [
      {
        question: "Which area is best to stay near Mahakaleshwar Temple?",
        answer: "The Mahakaleshwar Temple area is ideal for devotees attending Bhasma Aarti. Freeganj and Nanakheda are better for families seeking spacious hotels, parking and quieter surroundings.",
      },
      {
        question: "How can I attend Bhasma Aarti in Ujjain?",
        answer: "Bhasma Aarti requires advance registration on selected dates. Carry a valid ID, follow the dress code and reach the temple well before reporting time.",
      },
      {
        question: "What is the best time to visit Mahakal Temple?",
        answer: "The best time to visit is during Mahashivratri, Shravan month, and early morning or late evening on regular days to avoid crowds.",
      },
      {
        question: "What is the dress code for Mahakal Temple?",
        answer: "Traditional Indian attire is preferred. Avoid shorts, sleeveless clothes and leather items. Remove footwear before entering the temple premises.",
      },
      {
        question: "What are the darshan timings at Mahakal Temple?",
        answer: "Morning darshan: 5:00 AM to 12:00 PM, Evening darshan: 4:00 PM to 10:00 PM. Bhasma Aarti timings vary - check the official schedule.",
      },
      {
        question: "Can I take photos inside the temple?",
        answer: "Photography is restricted inside the sanctum. You can take photos in outer areas and during aarti from designated spots.",
      },
      {
        question: "Are there any entry fees for Mahakal Temple?",
        answer: "No entry fee for general darshan. Special darshan and Bhasma Aarti may have separate charges. Check official website for updates.",
      },
      {
        question: "Is there a facility for wheelchair access?",
        answer: "Limited wheelchair access is available. Contact temple authorities in advance for assistance. Some areas may not be accessible due to temple architecture.",
      },
      {
        question: "Is there a cloakroom facility at the temple?",
        answer: "Yes, cloakroom facilities are available near the temple entrance for storing belongings during darshan.",
      },
      {
        question: "Can I perform puja at Mahakal Temple?",
        answer: "Yes, special puja can be performed by requesting the temple priests. Fees vary based on the type of puja and offerings.",
      },
    ]
  },
  {
    id: "accommodation",
    title: "Hotels & Accommodation",
    icon: <FaHotel />,
    faqs: [
      {
        question: "When should I book hotels during Simhastha?",
        answer: "Book your accommodation at least 3 to 6 months before Simhastha to get better prices and more options near Mahakal Temple.",
      },
      {
        question: "Are budget hotels available near Mahakal Temple?",
        answer: "Yes. Budget hotels, guest houses and dharamshalas are available within walking distance from Mahakal Temple. Prices increase during festivals and weekends.",
      },
      {
        question: "Which hotels provide parking near Mahakal?",
        answer: "Many hotels in Freeganj, Nanakheda and selected properties near Mahakal offer dedicated parking. Always confirm parking availability before booking.",
      },
      {
        question: "What are the accommodation options during Simhastha?",
        answer: "Options include tent cities, dharamshalas, guest houses, and hotels. Book well in advance as options fill up quickly.",
      },
      {
        question: "What are the accommodation options near ghats?",
        answer: "Many guest houses, dharamshalas, and budget hotels are available near Ram Ghat and other ghats. Book in advance during festivals.",
      },
    ]
  },
  {
    id: "travel",
    title: "Travel & Transport",
    icon: <FaMapMarkerAlt />,
    faqs: [
      {
        question: "How far is Ujjain Railway Station from Mahakal Temple?",
        answer: "Mahakaleshwar Temple is approximately 2 to 3 km from Ujjain Junction Railway Station and can be reached within 10–15 minutes by auto or taxi.",
      },
      {
        question: "How to reach Ujjain by train?",
        answer: "Ujjain is well-connected by train. Major trains from Mumbai, Delhi, Bhopal and Indore stop at Ujjain Junction Railway Station.",
      },
      {
        question: "How to reach Ujjain by air?",
        answer: "Nearest airport is Indore (50 km). From there, take a taxi or bus to Ujjain. Ujjain also has a small airstrip for private aircraft.",
      },
      {
        question: "How to reach Ujjain by bus?",
        answer: "Ujjain has a major bus stand with connections to all major cities. Regular buses from Indore, Bhopal, and Ahmedabad are available.",
      },
      {
        question: "How to reach Ujjain from Delhi?",
        answer: "Take a train (12-14 hours), flight to Indore (1 hour) + road (1.5 hours), or direct bus (18-20 hours).",
      },
      {
        question: "How to reach Ujjain from Mumbai?",
        answer: "Take a train (16-18 hours) or flight to Indore (1.5 hours) + road (1.5 hours). Overnight trains are convenient for long-distance travel.",
      },
      {
        question: "How to reach Ujjain from Bhopal?",
        answer: "Bhopal is about 180 km from Ujjain. Take a train (3-4 hours), bus (4-5 hours), or drive via NH52 (3.5 hours).",
      },
      {
        question: "How to reach Ujjain from Indore?",
        answer: "Indore is just 50 km from Ujjain. Take a taxi, bus, or train. The journey takes about 1-1.5 hours by road.",
      },
    ]
  },
  {
    id: "events",
    title: "Festivals & Events",
    icon: <FaCalendarAlt />,
    faqs: [
      {
        question: "What is Simhastha and when is it celebrated?",
        answer: "Simhastha is a grand spiritual gathering held every 12 years when the Sun enters Leo zodiac. The next Simhastha is in 2028.",
      },
      {
        question: "What are the main rituals during Kumbh Mela?",
        answer: "Main rituals include holy dip at Shahi Snan, participating in aartis, visiting temples, and attending spiritual discourses by saints.",
      },
      {
        question: "What is the significance of Bhasma Aarti?",
        answer: "Bhasma Aarti is a unique ritual where Lord Mahakal is worshipped with ash from cremation grounds, symbolizing the cycle of life and death.",
      },
      {
        question: "What is the significance of Kumbh Mela in Ujjain?",
        answer: "Kumbh Mela in Ujjain is held at the confluence of Shipra river. It's believed that taking a holy dip during this time washes away sins.",
      },
      {
        question: "What is the significance of Mahashivratri in Ujjain?",
        answer: "Mahashivratri celebrates Lord Shiva's marriage to Goddess Parvati. Special aartis, pujas, and night-long celebrations are held.",
      },
      {
        question: "Are there any restrictions during Bhasma Aarti?",
        answer: "Yes, only registered devotees can attend. Mobile phones are not allowed inside. Follow the dress code and maintain silence.",
      },
      {
        question: "Is there a dress code for Bhasma Aarti?",
        answer: "Traditional Indian attire is mandatory. Avoid western wear, shorts, and sleeveless clothes. Men should wear dhoti or kurta.",
      },
    ]
  },
  {
    id: "general",
    title: "General Information",
    icon: <FaInfoCircle />,
    faqs: [
      {
        question: "What are the nearby attractions in Ujjain?",
        answer: "Visit Kal Bhairav Temple, Harsiddhi Temple, Shri Ram Ghat, Vikramaditya statue, and take a boat ride on the Shipra river.",
      },
      {
        question: "Is Ujjain safe for tourists?",
        answer: "Ujjain is generally safe for tourists. Follow standard precautions, avoid isolated areas at night, and keep your belongings secure.",
      },
      {
        question: "What food options are available near Mahakal Temple?",
        answer: "Many vegetarian restaurants, street food stalls, and hotel dining options are available. Try the local malpua and sabudana khichdi.",
      },
      {
        question: "How to travel within Ujjain city?",
        answer: "Auto-rickshaws, cycle-rickshaws, and e-rickshaws are readily available. Many temples and ghats are within walking distance.",
      },
      {
        question: "What is the history of Mahakal Temple?",
        answer: "Mahakal Temple is one of the 12 Jyotirlingas, believed to have been established by Lord Vishnu. It has been renovated multiple times over centuries.",
      },
      {
        question: "What are the famous temples in Ujjain?",
        answer: "Mahakaleshwar Temple, Kal Bhairav Temple, Harsiddhi Temple, Chintaman Ganesh Temple, and Sandipani Ashram are prominent.",
      },
      {
        question: "What is the climate in Ujjain?",
        answer: "Ujjain has a tropical climate. Summers are hot (March-May), monsoon brings moderate rainfall (June-September), and winters are pleasant (October-February).",
      },
      {
        question: "What are the local delicacies to try in Ujjain?",
        answer: "Try malpua, sabudana khichdi, dal bafla, and poha. Street food near temples is popular but ensure hygiene.",
      },
      {
        question: "What is the significance of Shipra River in Ujjain?",
        answer: "Shipra River is considered sacred in Hindu mythology. It is believed that taking a dip in its waters during Kumbh Mela washes away sins.",
      },
      {
        question: "What is the significance of Jyotirlinga?",
        answer: "Jyotirlingas are sacred shrines representing Lord Shiva as a pillar of light. Mahakaleshwar is one of the 12 primary Jyotirlingas.",
      },
    ]
  }
];

const flatFaqs = faqCategories.flatMap(cat => cat.faqs);

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("temple");

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const activeCat = faqCategories.find(cat => cat.id === activeCategory);

  return (
    <>
      <SEO
        title="FAQ - Frequently Asked Questions | MySimhastha"
        description="Find answers to 100+ frequently asked questions about Mahakal Temple, Bhasma Aarti, Simhastha, hotels, and traveling to Ujjain."
        canonical="https://www.mysimhastha.com/faq"
      />

      <SchemaProvider
        type="guide"
        data={{
          title: "FAQ - Frequently Asked Questions about Ujjain & Simhastha",
          description: "Find answers to common questions about Mahakal Darshan, Bhasma Aarti, Simhastha, hotels, and traveling to Ujjain.",
          url: "https://www.mysimhastha.com/faq",
          articleSection: "FAQ",
          about: "Ujjain Travel Guide",
          published: "2026-01-01",
          modified: new Date().toISOString().split('T')[0],
          breadcrumbs: [
            { label: "Home", url: "https://www.mysimhastha.com" },
            { label: "FAQ", url: "https://www.mysimhastha.com/faq" },
          ],
          faqs: flatFaqs,
        }}
      />

      <div className="faq-page">
        <div className="container">
          <div className="page-header">
            <span className="section-tag">FAQ</span>
            <h1>Frequently Asked Questions</h1>
            <p>
              Find answers to the most common questions about Mahakal Darshan,
              Bhasma Aarti, Simhastha, hotels, and traveling to Ujjain.
            </p>
          </div>

          <div className="faq-categories">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                className={`faq-category-btn ${activeCategory === category.id ? "active" : ""}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.icon}
                <span>{category.title}</span>
              </button>
            ))}
          </div>

          <div className="faq-wrapper">
            {activeCat && activeCat.faqs.map((faq, index) => (
              <div
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                key={index}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <FaChevronDown />
                </button>

                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;