import { Helmet } from "react-helmet-async";
import "../styles/simhastha-guide.css";

export default function SimhasthaGuide() {
  return (
    <>
      <Helmet>
        <title>
          Simhastha 2028 Ujjain Complete Guide | MySimhastha
        </title>

        <meta
          name="description"
          content="Complete guide to Simhastha 2028 in Ujjain including dates, Shahi Snan, Mahakaleshwar Temple, travel information, accommodation and FAQs."
        />
      </Helmet>

      <section className="simhastha-guide">
        <div className="container">

          {/* HEADER */}
          <div className="guide-header">
            <h1>Simhastha 2028 Ujjain Complete Guide</h1>
          </div>

          {/* QUICK SUMMARY */}
          <div className="guide-highlight">
            <p>
              <strong>Quick Summary:</strong> Simhastha 2028 is the upcoming
              Ujjain Kumbh Mela and is expected to attract millions of
              devotees from across India and the world to the sacred
              Shipra River for Shahi Snan, Mahakaleshwar darshan,
              and spiritual rituals.
            </p>
          </div>

          {/* TABLE OF CONTENTS */}
          <div className="guide-box">
            <h3>Contents</h3>

            <ul>
              <li>
                <a href="#what-is-simhastha">
                  What is Simhastha?
                </a>
              </li>

              <li>
                <a href="#history-of-simhastha">
                  History of Simhastha
                </a>
              </li>

  
            </ul>
          </div>

          {/* WHAT IS SIMHASTHA */}
          <div
            className="guide-section"
            id="what-is-simhastha"
          >
            <h2>What is Simhastha?</h2>

            <p>
              Simhastha, also known as the Ujjain Kumbh Mela,
              is one of the largest religious gatherings in
              the world. The Kumbh Mela rotates between
              Prayagraj, Haridwar, Nashik, and Ujjain.
              The event held in Ujjain is known as Simhastha.
            </p>

            <p>
              The festival takes place approximately every
              12 years when Jupiter enters Leo (Simha Rashi).
              Millions of devotees gather on the banks of
              the sacred Shipra River for holy bathing,
              religious ceremonies, and spiritual practices.
            </p>
          </div>

          {/* HISTORY */}
          <div
            className="guide-section"
            id="history-of-simhastha"
          >
            <h2>History of Simhastha</h2>

            <p>
              The history of Simhastha is linked to the
              ancient Hindu legend of Samudra Manthan
              (Churning of the Ocean). According to mythology,
              drops of Amrit (nectar of immortality) fell
              at four sacred locations in India—Prayagraj,
              Haridwar, Nashik, and Ujjain.
            </p>

            <p>
              Ujjain became one of the four holy Kumbh
              locations because of its spiritual significance
              and the sacred Shipra River. The festival is
              known as Simhastha because it takes place when
              Jupiter enters Leo (Simha Rashi), an auspicious
              planetary alignment that occurs approximately
              every 12 years.
            </p>

            <p>
              Over the centuries, Simhastha has evolved into
              one of the largest spiritual gatherings in the
              world, attracting saints, akharas, devotees,
              and pilgrims from across India and beyond.
            </p>
          </div>

            
        </div>
      </section>
    </>
  );
}