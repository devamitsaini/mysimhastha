import React from "react";
import { FaMapSigns, FaQuestionCircle, FaListOl, FaMapMarkerAlt, FaClock, FaUsers, FaWallet, FaBus, FaHotel, FaLanguage, FaCheckCircle } from "react-icons/fa";
import AITripPlanner from "../../components/home/AITripPlanner/AITripPlanner";
import { SEO, SchemaProvider } from "../../seo";
import "./TripPlanner.css";

const TripPlanner = () => {
  return (
    <>
      <SEO
        title="Plan Your Simhastha Journey | AI Trip Planner"
        description="Create a personalized pilgrimage itinerary for Ujjain Simhastha 2028. Our AI-powered trip planner helps you design the perfect spiritual journey based on your preferences, budget, and interests."
        canonical="https://www.mysimhastha.com/trip-planner"
      />

      <SchemaProvider
        type="howto"
        data={{
          title: "Plan Your Simhastha Journey",
          description: "Create a personalized pilgrimage itinerary for Ujjain Simhastha 2028. Our AI-powered trip planner helps you design the perfect spiritual journey based on your preferences, budget, and interests.",
          url: "https://www.mysimhastha.com/trip-planner",
          published: "2026-01-01",
          modified: new Date().toISOString().split('T')[0],
          breadcrumbs: [
            { label: "Home", url: "https://www.mysimhastha.com" },
            { label: "Trip Planner", url: "https://www.mysimhastha.com/trip-planner" },
          ],
          howTo: {
            name: "How to Plan Your Simhastha Pilgrimage",
            description: "Step-by-step guide to planning your spiritual journey to Ujjain for Simhastha 2028 using our AI-powered trip planner.",
            step: [
              {
                name: "Enter Trip Details",
                text: "Provide your departure city, arrival date, and duration of stay in Ujjain.",
              },
              {
                name: "Add Travelers",
                text: "Specify the number of adults, children, and senior citizens traveling with you.",
              },
              {
                name: "Choose Budget & Stay",
                text: "Select your budget range and hotel preferences for a comfortable stay.",
              },
              {
                name: "Select Transport",
                text: "Choose your preferred mode of transport - Train, Flight, Car, Bus, or Bike.",
              },
              {
                name: "Pick Interests",
                text: "Select activities and places you're interested in - temples, ghats, museums, and more.",
              },
              {
                name: "Get Itinerary",
                text: "Review your personalized day-by-day itinerary with timings, tips, and recommendations.",
              },
            ],
          },
        }}
      />

    <div className="trip-planner-page">
     
      {/* AI Trip Planner Section */}
      <section className="tp-planner-section">
        <div className="container">
          <AITripPlanner />
        </div>
      </section>

      {/* How to Use Section */}
      <section className="tp-how-to-use">
        <div className="container">
          <h2>How to Use AI Trip Planner</h2>
          <p className="section-subtitle">
            Follow these simple steps to create your personalized pilgrimage itinerary
          </p>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="step-number">1</div>
              <h3>Enter Trip Details</h3>
              <p>
                Provide your departure city, arrival date, and duration of stay in Ujjain.
              </p>
            </div>

            <div className="step-card">
              <div className="step-icon">
                <FaUsers />
              </div>
              <div className="step-number">2</div>
              <h3>Add Travelers</h3>
              <p>
                Specify the number of adults, children, and senior citizens traveling with you.
              </p>
            </div>

            <div className="step-card">
              <div className="step-icon">
                <FaWallet />
              </div>
              <div className="step-number">3</div>
              <h3>Choose Budget & Stay</h3>
              <p>
                Select your budget range and hotel preferences for a comfortable stay.
              </p>
            </div>

            <div className="step-card">
              <div className="step-icon">
                <FaBus />
              </div>
              <div className="step-number">4</div>
              <h3>Select Transport</h3>
              <p>
                Choose your preferred mode of transport - Train, Flight, Car, Bus, or Bike.
              </p>
            </div>

            <div className="step-card">
              <div className="step-icon">
                <FaMapSigns />
              </div>
              <div className="step-number">5</div>
              <h3>Pick Interests</h3>
              <p>
                Select activities and places you're interested in - temples, ghats, museums, and more.
              </p>
            </div>

            <div className="step-card">
              <div className="step-icon">
                <FaCheckCircle />
              </div>
              <div className="step-number">6</div>
              <h3>Get Itinerary</h3>
              <p>
                Review your personalized day-by-day itinerary with timings, tips, and recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="tp-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about planning your Simhastha pilgrimage
          </p>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>What is Simhastha?</h3>
              <p>
                Simhastha is one of the four Kumbh Mela festivals held in Ujjain, Madhya Pradesh.
                It occurs every 12 years when the planet Jupiter enters the Leo zodiac sign.
                The next Simhastha is scheduled for 2028, attracting millions of devotees from around the world.
              </p>
            </div>

            <div className="faq-item">
              <h3>How does the AI Trip Planner work?</h3>
              <p>
                Our AI Trip Planner uses your preferences - budget, duration, interests, and travel style -
                to generate a personalized day-by-day itinerary. It includes temple visit timings,
                meal recommendations, travel tips, and important information for a smooth pilgrimage.
              </p>
            </div>

            <div className="faq-item">
              <h3>Is the trip planner free to use?</h3>
              <p>
                Yes! The AI Trip Planner is completely free. Simply fill in your details and preferences,
                and get a comprehensive pilgrimage itinerary instantly.
              </p>
            </div>

            <div className="faq-item">
              <h3>What are the must-visit places in Ujjain?</h3>
              <p>
                Key attractions include Mahakal Temple (one of the 12 Jyotirlingas), Ram Ghat,
                Kal Bhairav Temple, Mahakal Lok Museum, and Bade Ganesh Temple.
                The city also has numerous other temples and spiritual sites.
              </p>
            </div>

            <div className="faq-item">
              <h3>When is the best time to visit Ujjain?</h3>
              <p>
                The best time to visit Ujjain is from October to March when the weather is pleasant.
                However, during Simhastha 2028, the city will be bustling with devotees,
                offering a unique spiritual experience.
              </p>
            </div>

            <div className="faq-item">
              <h3>How many days should I plan for the pilgrimage?</h3>
              <p>
                We recommend at least 2-3 days for a comfortable pilgrimage experience.
                This allows time for major temple visits, participation in aartis,
                and exploring the spiritual atmosphere of the city.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do I need to book hotels in advance?</h3>
              <p>
                Yes, especially during Simhastha when there's a huge influx of devotees.
                We recommend booking hotels 3-6 months in advance. Our trip planner can suggest
                accommodations based on your budget and preferences.
              </p>
            </div>

            <div className="faq-item">
              <h3>What should I carry for the pilgrimage?</h3>
              <p>
                Essential items include comfortable shoes, water bottle, ID proof,
                camera, light snacks, and modest clothing. During summer, carry sunscreen and hats.
                For winter, bring warm clothes as mornings and evenings can be chilly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Geo Section */}
      <section className="tp-geo-section">
        <div className="container">
          <h2>Plan Your Pilgrimage to Ujjain</h2>
          <p className="section-subtitle">
            Everything you need to know about visiting the holy city of Ujjain
          </p>

          <div className="geo-content">
            <div className="geo-card">
              <div className="geo-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Location & Connectivity</h3>
              <p>
                Ujjain is located in Madhya Pradesh, India, on the banks of the Shipra River.
                It's well-connected by road, rail, and air. The nearest airport is in Indore (55 km).
                Ujjain Junction railway station connects to major cities across India.
              </p>
            </div>

            <div className="geo-card">
              <div className="geo-icon">
                <FaClock />
              </div>
              <h3>Best Time to Visit</h3>
              <p>
                October to March offers the most pleasant weather for temple visits.
                Early mornings (5-7 AM) and evenings (5-7 PM) are ideal for darshans
                to avoid crowds and extreme temperatures. Simhastha 2028 will be a
                once-in-a-lifetime spiritual experience.
              </p>
            </div>

            <div className="geo-card">
              <div className="geo-icon">
                <FaHotel />
              </div>
              <h3>Accommodation Options</h3>
              <p>
                Ujjain offers a wide range of accommodations from budget guesthouses
                to luxury hotels. During Simhastha, book well in advance. Options include
                dharamshalas, budget hotels, mid-range accommodations, and premium resorts.
              </p>
            </div>

            <div className="geo-card">
              <div className="geo-icon">
                <FaLanguage />
              </div>
              <h3>Language & Culture</h3>
              <p>
                Hindi and Malwi are the primary languages spoken. English is understood
                in major hotels and tourist areas. The city has a rich spiritual heritage
                with deep roots in Hindu traditions and culture.
              </p>
            </div>

            <div className="geo-card">
              <div className="geo-icon">
                <FaWallet />
              </div>
              <h3>Budget Planning</h3>
              <p>
                Budget for a 2-3 day pilgrimage can range from ₹3,000 to ₹20,000+ depending on
                accommodation and travel preferences. Our AI planner helps you optimize your
                budget while ensuring a comfortable spiritual journey.
              </p>
            </div>

            <div className="geo-card">
              <div className="geo-icon">
                <FaCheckCircle />
              </div>
              <h3>Travel Tips</h3>
              <p>
                Carry valid ID proof, dress modestly for temple visits, stay hydrated,
                and keep cash for offerings. Book train/flight tickets in advance during Simhastha.
                Follow temple rules and respect local customs and traditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="tp-cta">
        <div className="container">
          <h2>Ready to Plan Your Spiritual Journey?</h2>
          <p>
            Use our AI Trip Planner above to create your personalized Simhastha 2028 itinerary
          </p>
        </div>
      </section>
    </div>
    </>
  );
};

export default TripPlanner;