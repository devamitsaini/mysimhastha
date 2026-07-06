import GuideSEO from "../../components/guides/GuideSEO";
import GuideBreadcrumb from "../../components/guides/GuideBreadcrumb";
import GuideHero from "../../components/guides/GuideHero";
import GuideLanguageSwitcher from "../../components/guides/GuideLanguageSwitcher";
import GuideQuickAnswer from "../../components/guides/GuideQuickAnswer";
import GuideQuickFacts from "../../components/guides/GuideQuickFacts";
import GuideKeyTakeaways from "../../components/guides/GuideKeyTakeaways";
import GuideTableOfContents from "../../components/guides/GuideTableOfContents";
import GuideSection from "../../components/guides/GuideSection";
import GuideFAQ from "../../components/guides/GuideFAQ";
import GuideRelatedGuides from "../../components/guides/GuideRelatedGuides";
import GuideOfficialResources from "../../components/guides/GuideOfficialResources";
import ShareButtons from "../../components/guides/ShareButtons";
import GuideRenderer from "../../components/guides/GuideRenderer";
import { Link } from "react-router-dom";

import "../styles/guides.css";

const guide = {
  language: "en",

  slug: "kumbh-locations",

  title:
    "Where is Kumbh Mela Held? All 4 Kumbh Mela Locations in India Explained: Where is Simhastha Held?",

  author: "MySimhastha Editorial Team",

  updated: "30 June 2026",

  readingTime: "12 min",

  hero: {
    title:
      "Where is Kumbh Mela Held? All 4 Kumbh Mela Locations in India Explained",

    description:
      "Discover where Kumbh Mela is celebrated in India, why Simhastha is held only in Ujjain, and learn about the four sacred Kumbh locations.",

    image:
      "kumbh-locations.webp",

    imageAlt:
      "Map showing the four Kumbh Mela locations in India",

    caption:
      "The four sacred Kumbh Mela locations in India."
  },

  seo: {

    title:
      "Kumbh Mela Locations | Where is Simhastha Held? Complete Guide",

    description:
      "Discover all four Kumbh Mela locations in India and understand why Simhastha is celebrated only in Ujjain. Complete guide with maps, rivers, history and FAQs.",

    keywords:
      "kumbh mela locations, where is simhastha held, simhastha kaha kaha lagta hai, kumbh mela places in india, ujjain kumbh, kumbh locations"

  },
    quickAnswer:
    "Kumbh Mela is celebrated at four sacred locations in India—Ujjain, Prayagraj, Haridwar and Nashik. However, Simhastha is celebrated only in Ujjain because it takes place when Jupiter (Brihaspati) enters Leo (Simha Rashi). This unique planetary alignment gives Ujjain's Kumbh the name Simhastha.",

      quickFacts: [

    {
      label: "Total Locations",
      value: "4"
    },

    {
      label: "Simhastha",
      value: "Ujjain"
    },

    {
      label: "Holy River",
      value: "Shipra"
    },

    {
      label: "Next Simhastha",
      value: "2028"
    },

    {
      label: "Frequency",
      value: "Every 12 Years"
    },

    {
      label: "Country",
      value: "India"
    }

  ],
    keyTakeaways: [

    "Simhastha is celebrated only in Ujjain.",

    "India has four official Kumbh Mela locations.",

    "Ujjain's Kumbh is called Simhastha because Jupiter enters Leo (Simha Rashi).",

    "Each Kumbh location is associated with a sacred river.",

    "Millions of pilgrims visit every Kumbh Mela."

  ],
    tableOfContents: [

  {
    id: "what-is-kumbh",
    title: "What is Kumbh Mela?"
  },

  {
    id: "samudra-manthan",
    title: "Origin of Kumbh Mela"
  },

  {
    id: "kumbh-locations",
    title: "Where is Kumbh Mela Held?"
  },

  {
    id: "four-locations",
    title: "Four Kumbh Locations"
  },

  {
    id: "why-four-locations",
    title: "Why Only Four Locations?"
  },

  {
    id: "why-simhastha",
    title: "Why Only Ujjain is Simhastha?"
  },

  {
    id: "difference",
    title: "Kumbh vs Simhastha"
  },

  {
    id: "unesco",
    title: "UNESCO Recognition"
  },

  {
    id: "travel-tips",
    title: "Travel Tips"
  },

  {
    id: "faq",
    title: "FAQs"
  }

],
    sections: [

    {
      id: "what-is-kumbh",

      title: "What is Kumbh Mela?",

      content: [
        "Kumbh Mela is the world's largest peaceful religious gathering, where millions of Hindu devotees, saints, and pilgrims come together to take a sacred bath in holy rivers. It is celebrated according to ancient Hindu traditions and astrological calculations described in sacred scriptures.",

        "The word 'Kumbh' means 'pot' or 'pitcher'. According to Hindu mythology, during the Samudra Manthan (Churning of the Ocean), gods and demons fought over the pot of Amrit (nectar of immortality). During this struggle, drops of nectar fell at four sacred places in India, which later became the Kumbh Mela locations.",

        "Today, Kumbh Mela is recognized globally for its spiritual significance, cultural heritage, and enormous gathering of devotees. UNESCO has also recognized Kumbh Mela as an Intangible Cultural Heritage of Humanity."
      ]
    },

    {
      id: "kumbh-locations",

      title: "Where is Kumbh Mela Held?",

      content: [
        "Kumbh Mela is celebrated at four sacred locations across India. Each location is associated with a holy river and specific planetary alignments.",

        "These four cities are Ujjain (Madhya Pradesh), Prayagraj (Uttar Pradesh), Haridwar (Uttarakhand), and Nashik (Maharashtra).",

        "Among these four, only Ujjain hosts Simhastha, which is the name given to the Kumbh Mela celebrated when Jupiter enters Leo (Simha Rashi)."
      ]
    },

    {
      id: "four-locations",

      title: "The Four Kumbh Mela Locations",

      subtitle:
        "Each city has its own unique religious importance and astrological significance.",

      content: [

        "Ujjain, Madhya Pradesh – Simhastha is celebrated on the banks of the sacred Shipra River. The city is home to the Mahakaleshwar Jyotirlinga, making it one of the holiest pilgrimage destinations in India.",

        "Prayagraj, Uttar Pradesh – Kumbh Mela takes place at the Triveni Sangam, where the Ganga, Yamuna, and the mythical Saraswati rivers meet. It is considered one of Hinduism's most sacred confluences.",

        "Haridwar, Uttarakhand – Devotees gather on the banks of the River Ganga, especially at Har Ki Pauri, to take a holy dip believed to cleanse sins and bring spiritual merit.",

        "Nashik, Maharashtra – The Kumbh Mela is celebrated along the Godavari River, particularly around Ram Kund, one of the city's most revered pilgrimage sites."
      ]
    },
        {
      id: "simhastha",

      title: "Why is Ujjain's Kumbh Called Simhastha?",

      content: [

        "The word 'Simhastha' comes from 'Simha', which means Leo. Ujjain's Kumbh Mela is called Simhastha because it is celebrated when Jupiter (Brihaspati) enters the zodiac sign Leo (Simha Rashi).",

        "This unique astrological event does not occur at the other three Kumbh locations, making Simhastha exclusive to Ujjain.",

        "The combination of the sacred Shipra River, Mahakaleshwar Jyotirlinga, and this planetary alignment makes Simhastha one of the most significant Hindu festivals."
      ]
    },

    {
      id: "difference",

      title: "Difference Between Kumbh Mela and Simhastha",

      subtitle:
        "Many people use these terms interchangeably, but they are not exactly the same.",

      content: [

        "Kumbh Mela is the broader festival celebrated at four sacred locations in India.",

        "Simhastha specifically refers to the Kumbh Mela held in Ujjain when Jupiter enters Leo (Simha Rashi).",

        "Therefore, every Simhastha is a Kumbh Mela, but not every Kumbh Mela is called Simhastha."
      ]
    },
{
  id: "samudra-manthan",

  title: "The Story Behind Kumbh Mela: Samudra Manthan",

  content: [

    "According to Hindu mythology, Kumbh Mela traces its origin to the Samudra Manthan (Churning of the Ocean). During this event, the Devas (gods) and Asuras (demons) churned the cosmic ocean to obtain Amrit, the nectar of immortality.",

    "As Lord Dhanvantari emerged with the sacred Kumbh (pot) of Amrit, a fierce battle broke out between the Devas and Asuras. During the struggle, four drops of nectar are believed to have fallen on Earth at Prayagraj, Haridwar, Ujjain and Nashik.",

    "These four places became the sacred locations where Kumbh Mela is celebrated today."

  ]

},

{
  id: "why-four-locations",

  title: "Why is Kumbh Mela Celebrated Only at Four Locations?",

  content: [

    "According to Hindu tradition, the four Kumbh Mela locations represent the places where drops of Amrit fell during the Samudra Manthan.",

    "Each city also has a unique astrological alignment that determines when the festival is celebrated."

  ]

},

{
  id: "why-simhastha",

  title: "Why is Only Ujjain's Kumbh Called Simhastha?",

  content: [

    "The word Simhastha comes from Simha (Leo).",

    "Ujjain's Kumbh is celebrated when Jupiter enters Leo (Simha Rashi), making it unique among all four Kumbh Melas.",

    "This special planetary alignment is why only the Ujjain festival is called Simhastha."

  ]

},

{
  id: "unesco",

  title: "UNESCO Recognition",

  content: [

    "Kumbh Mela has been inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity.",

    "It is recognised for preserving India's spiritual traditions, cultural heritage and community participation."

  ]

},

{
  id: "timeline",

  title: "Kumbh Mela Timeline",

  content: [

    "Haridwar hosts Kumbh Mela on the banks of the Ganga River.",

    "Prayagraj hosts Kumbh at the Triveni Sangam.",

    "Nashik celebrates Kumbh on the Godavari River.",

    "Ujjain celebrates Simhastha on the Shipra River."

  ]

},

{
  id: "holy-rivers",

  title: "Importance of the Sacred Rivers",

  content: [

    "Each Kumbh location is associated with a sacred river believed to purify the soul.",

    "The Shipra, Ganga, Triveni Sangam and Godavari hold immense religious importance in Hinduism."

  ]

},

{
  id: "millions",

  title: "Why Do Millions Attend Kumbh Mela?",

  content: [

    "Devotees believe bathing during Kumbh Mela helps attain spiritual merit and inner purification.",

    "The festival is also an opportunity to attend religious discourses, visit temples and experience India's spiritual traditions."

  ]

},

{
  id: "first-time",

  title: "First-Time Visitor Guide",

  content: [

    "Book hotels several months in advance.",

    "Carry a valid government ID.",

    "Follow official schedules.",

    "Use authorised transport services.",

    "Stay hydrated and wear comfortable clothing."

  ]

},

{
  id: "myths",

  title: "Common Myths and Facts",

  content: [

    "Myth: Simhastha is celebrated in all four cities.",

    "Fact: Simhastha is celebrated only in Ujjain.",

    "Myth: Every Kumbh Mela is called Simhastha.",

    "Fact: Only Ujjain's Kumbh is known as Simhastha."

  ]

}
  ],
  
  
faq: [

  {
    question: "Where is Simhastha held?",
    answer:
      "Simhastha is held only in Ujjain, Madhya Pradesh, on the banks of the sacred Shipra River."
  },

  {
    question: "How many Kumbh Mela locations are there in India?",
    answer:
      "There are four official Kumbh Mela locations in India: Ujjain, Prayagraj, Haridwar and Nashik."
  },

  {
    question: "What are the four Kumbh Mela locations?",
    answer:
      "The four Kumbh Mela locations are Ujjain (Madhya Pradesh), Prayagraj (Uttar Pradesh), Haridwar (Uttarakhand), and Nashik (Maharashtra). Each is associated with a sacred river and unique astrological alignment."
  },

  {
    question: "Why is Ujjain's Kumbh called Simhastha?",
    answer:
      "Ujjain's Kumbh is called Simhastha because it is celebrated when Jupiter (Brihaspati) enters Leo (Simha Rashi), making it unique among all Kumbh Melas."
  },

  {
    question: "Is Simhastha celebrated in all four cities?",
    answer:
      "No. Simhastha is celebrated only in Ujjain. The other three cities celebrate Kumbh Mela under different astrological combinations."
  },

  {
    question: "What is the difference between Kumbh Mela and Simhastha?",
    answer:
      "Kumbh Mela is the broader Hindu pilgrimage celebrated at four locations in India. Simhastha specifically refers to the Kumbh Mela held in Ujjain when Jupiter enters Leo (Simha Rashi)."
  },

  {
    question: "When is the next Simhastha in Ujjain?",
    answer:
      "The next Simhastha is scheduled to be held in Ujjain in 2028."
  },

  {
    question: "Which river is associated with Simhastha?",
    answer:
      "Simhastha is celebrated on the banks of the sacred Shipra River in Ujjain."
  },

  {
    question: "Why are only four places selected for Kumbh Mela?",
    answer:
"According to Hindu mythology, drops of Amrit (nectar of immortality) fell at four locations during the Samudra Manthan—Prayagraj, Haridwar, Nashik, and Ujjain. These became the four official Kumbh Mela sites."
  },

  {
    question: "Which Kumbh Mela is the largest?",
    answer:
"Prayagraj generally attracts the largest number of pilgrims, especially during Maha Kumbh, making it one of the world's largest religious gatherings."
  },

  {
    question: "How often is Kumbh Mela celebrated?",
    answer:
      "Each Kumbh Mela location hosts the festival approximately once every 12 years, following specific planetary alignments."
  },

  {
    question: "Can anyone attend Kumbh Mela?",
    answer:
      "Yes. Kumbh Mela is open to everyone regardless of nationality or religion. Visitors are expected to respect local customs, traditions and security guidelines."
  },

  {
    question: "Is there an entry fee for Kumbh Mela?",
    answer:
      "No. Entry to Kumbh Mela is free. However, accommodation, transportation and certain special services may involve charges."
  },

  {
    question: "What is the Shahi Snan?",
    answer:
      "Shahi Snan (Royal Bath) is the most important ritual of Kumbh Mela. During this ceremony, Akharas and Naga Sadhus lead grand processions before taking the holy dip in the sacred river." 
  },

  {
    question: "Who are the Naga Sadhus?",
    answer:
      "Naga Sadhus are Hindu ascetics known for their austere lifestyle and deep spiritual practices. They are among the main attractions of every Kumbh Mela and traditionally lead the Shahi Snan processions." 
  },

  {
    question: "What is the best time to visit Kumbh Mela?",
    answer:
      "The best time is during the major bathing dates announced by the organizers. Visitors should also consider crowd levels, accommodation availability and weather while planning their trip."
  },

  {
    question: "How many days does Kumbh Mela last?",
    answer:
      "Depending on the location and astrological calendar, Kumbh Mela generally lasts between one and three months."
  },

  {
    question: "Why do millions of people take a holy dip during Kumbh Mela?",
    answer:
      "Devotees believe that bathing in the sacred river during the auspicious planetary alignment helps purify the soul, wash away sins and bring spiritual merit." 
  },

  {
    question: "What should first-time visitors know before attending Kumbh Mela?",
    answer:
      "Plan accommodation well in advance, use official transport and information channels, follow crowd management instructions, carry essentials, and be prepared for very large crowds, especially on major bathing days."
  },

  {
    question: "Is Simhastha the same as Maha Kumbh?",
    answer:
      "No. Simhastha refers specifically to the Kumbh Mela held in Ujjain, while Maha Kumbh is traditionally associated with Prayagraj after a longer astrological cycle. Both are major Hindu pilgrimage festivals but occur under different traditions and timings."
  }

],
relatedGuides: [

  {

    title: "Simhastha 2028 Guide",

    description:
      "Everything about Simhastha 2028, important dates, bathing schedule and travel planning.",

    image: "simhastha-2028.webp",

    url: "/guide/simhastha-2028"

  },

  {

    title: "Mahakal Darshan Guide",

    description:
      "Darshan timings, VIP entry, tickets and temple rules.",

    image: "mahakal-darshan.webp",

    url: "/guide/mahakal-darshan"

  },

  {

    title: "Mahakal Bhasma Aarti",

    description:
      "Complete booking process, dress code and timings.",

    image: "bhasma-arti.webp",

    url: "/guide/bhasma-arti"

  },

  {

    title: "Sawan 2026 Guide",

    description:
      "Complete guide to Sawan celebrations in Ujjain.",

    image: "sawan-2026.webp",

    url: "/guide/sawan-2026"

  }

],

labels: {
  relatedGuides: "Related Guides",
  officialResources: "Official Resources"
},
officialResources: [

  {

    title: "Shri Mahakaleshwar Temple",

    url: "https://shrimahakaleshwar.com/"

  },

  {

    title: "Madhya Pradesh Tourism",

    url: "https://www.mptourism.com/"

  },

  {

    title: "IRCTC",

    url: "https://www.irctc.co.in/"

  }

]
};
export default function KumbhLocations() {
  return (
    <>
      <GuideSEO
        title={guide.seo.title}
        description={guide.seo.description}
        slug={guide.slug}
        image={`/images/${guide.hero.image}`}
        lang={guide.language}
        keywords={guide.seo.keywords}
        published="2026-06-30"
        modified="2026-06-30"
      />

      <main className="simhastha-guide">
  <div className="container">


        <GuideHero guide={guide} />

        <GuideLanguageSwitcher guide={guide} />

        <ShareButtons
          title={guide.hero.title}
          image={`/images/${guide.hero.image}`}
          language={guide.language}
        />

        <GuideQuickAnswer guide={guide} />

        <GuideQuickFacts guide={guide} />

        <GuideKeyTakeaways guide={guide} />

        <GuideTableOfContents guide={guide} />

        {guide.sections.map((section) => (
          <GuideSection
            key={section.id}
            section={section}
          />
        ))}

        

        <GuideFAQ guide={guide} />

        <GuideRelatedGuides guide={guide} />

        <GuideOfficialResources guide={guide} />

        <ShareButtons
          title={guide.hero.title}
          image={`/images/${guide.hero.image}`}
          language={guide.language}
        />
        </div>
      </main>
      {/* STAY CONNECTED */}
<div className="guide-box">
  <h2>Stay Connected with MySimhastha</h2>

  <p>
    Planning to visit one of the four sacred Kumbh Mela locations or preparing
    for Simhastha 2028 in Ujjain? Stay connected with MySimhastha for the latest
    updates, travel guides, temple information, accommodation tips, pilgrimage
    planning, and important announcements to make your spiritual journey
    seamless.
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
      <Link to="/guide/simhastha-2028">
        Simhastha 2028 Complete Guide
      </Link>
    </li>

    <li>
      <Link to="/guide/mahakal-darshan">
        Mahakal Darshan Guide
      </Link>
    </li>

    <li>
      <Link to="/guide/bhasma-arti">
        Mahakal Bhasma Aarti Guide
      </Link>
    </li>

    <li>
      <Link to="/hotels">
        Hotels Near Mahakal Temple
      </Link>
    </li>

    <li>
      <Link to="/news">
        Latest Simhastha & Temple News
      </Link>
    </li>

    <li>
      <Link to="/blog">
        Ujjain Travel Guides & Pilgrimage Stories
      </Link>
    </li>
  </ul>

  <p>
    Whether you're planning to attend Simhastha in Ujjain, explore the four
    sacred Kumbh Mela locations, or learn about Hindu pilgrimage traditions,
    MySimhastha provides trusted travel guides, festival updates, temple
    information, accommodation recommendations, and practical tips for devotees
    from India and around the world.
  </p>

  <p>
    Content is available in both <strong>English</strong> and <strong>हिन्दी</strong>
    to help pilgrims easily plan their Kumbh Mela and Simhastha journey.
  </p>
</div>



<div className="back-top">
  <a href="#top">
    ↑ Back to Top
  </a>
</div>
    </>
  );
}