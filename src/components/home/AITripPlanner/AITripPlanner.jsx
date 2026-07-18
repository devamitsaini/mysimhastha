import React, { useState } from "react";
import {
  FaArrowRight,
  FaArrowLeft,
  FaCalendarAlt,
  FaMapMarkedAlt,
  FaUsers,
  FaWallet,
  FaTrain,
  FaPlane,
  FaCar,
  FaBus,
  FaMotorcycle,
  FaHotel,
  FaParking,
  FaLanguage,
  FaWheelchair,
  FaMapSigns,
} from "react-icons/fa";

import "./AITripPlanner.css";

const TOTAL_STEPS = 6;

const AITripPlanner = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [tripResult, setTripResult] = useState(null);

  const [form, setForm] = useState({
    from: "",
    arrivalDate: "",
    arrivalTime: "",
    departureTime: "",
    duration: 2,
    adults: 2,
    children: 0,
    seniors: 0,
    budget: "5000-10000",
    hotelRequired: true,
    hotelCategory: "Standard",
    transport: "Train",
    language: "English",
    purpose: "Mahakal Darshan",
    pace: "Balanced",
    parking: false,
    wheelchair: false,
    elderFriendly: false,
    interests: [],
  });

  const [errors, setErrors] = useState({});

  const progress = (step / TOTAL_STEPS) * 100;

  const validateCityName = (value) => {
    // Reject crypto addresses (starts with 0x and contains only hex characters)
    if (value.startsWith("0x") || /^[0-9a-fA-F]+$/.test(value)) {
      return "Please enter a valid city name";
    }
    // Reject if too short or contains numbers/special characters
    if (value.length < 2) {
      return "City name must be at least 2 characters";
    }
    if (!/^[a-zA-Z\s\-']+$/.test(value)) {
      return "City name should only contain letters, spaces, hyphens, and apostrophes";
    }
    return null;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Validate city name field
    if (name === "from") {
      const error = validateCityName(value);
      setErrors((prev) => ({
        ...prev,
        from: error,
      }));
    }
    
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNumber = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: Math.max(0, Number(value)),
    }));
  };

  const toggleInterest = (interest) => {
    const exists = form.interests.includes(interest);
    if (exists) {
      setForm({
        ...form,
        interests: form.interests.filter((i) => i !== interest),
      });
    } else {
      setForm({
        ...form,
        interests: [...form.interests, interest],
      });
    }
  };

  const nextStep = () => {
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const canContinue = () => {
    switch (step) {
      case 1:
        return form.from !== "" && form.arrivalDate !== "" && !errors.from;
      case 2:
        return form.adults > 0;
      default:
        return true;
    }
  };

  const generateTrip = () => {
    setLoading(true);

    // Simulate AI generation with timeout
    setTimeout(() => {
      setLoading(false);
      setGenerated(true);
      
      // Generate detailed itinerary based on user preferences
      const itinerary = generateDetailedItinerary(form);
      setTripResult(itinerary);
    }, 2000);
  };

  const generateDetailedItinerary = (formData) => {
    const days = [];
    const interests = formData.interests.length > 0 ? formData.interests : ["Mahakal Darshan", "Temple Tour"];
    
    // Generate day-by-day itinerary
    for (let day = 1; day <= formData.duration; day++) {
      const dayPlan = {
        day: day,
        title: day === 1 ? "Arrival & Sacred Beginnings" : day === formData.duration ? "Final Darshan & Departure" : `Deep Spiritual Exploration`,
        activities: [],
        meals: [],
        tips: []
      };

      // Morning activities
      if (day === 1) {
        dayPlan.activities.push({
          time: "06:00 AM",
          title: "Arrival & Check-in",
          description: `Arrive in Ujjain from ${formData.from || "your location"}. Check-in at hotel and freshen up.`,
          icon: "🏨"
        });
        
        if (formData.hotelRequired) {
          dayPlan.activities.push({
            time: "07:00 AM",
            title: "Hotel Check-in & Rest",
            description: `${formData.hotelCategory} category hotel. Take rest and prepare for darshan.`,
            icon: "🛏️"
          });
        }
      }

      // Add activities based on interests
      if (interests.includes("Mahakal Darshan")) {
        dayPlan.activities.push({
          time: day === 1 ? "09:00 AM" : "05:30 AM",
          title: "Mahakal Temple Darshan",
          description: day === 1 
            ? "First darshan at Mahakal Temple. Experience the divine energy of one of the 12 Jyotirlingas."
            : "Early morning darshan to avoid crowds. Participate in aarti if scheduled.",
          icon: "🕉️"
        });
      }

      if (interests.includes("Bhasma Aarti")) {
        dayPlan.activities.push({
          time: "04:00 AM",
          title: "Bhasma Aarti",
          description: "Witness the sacred Bhasma Aarti ceremony. Prior booking required. Arrive 1 hour early.",
          icon: "🔥"
        });
      }

      if (interests.includes("Mahakal Lok")) {
        dayPlan.activities.push({
          time: "11:00 AM",
          title: "Mahakal Lok Museum",
          description: "Explore the museum showcasing the history and culture of Mahakal. Audio guide available.",
          icon: "🏛️"
        });
      }

      if (interests.includes("Ram Ghat")) {
        dayPlan.activities.push({
          time: "06:00 PM",
          title: "Ram Ghat Aarti",
          description: "Evening aarti at Ram Ghat on the banks of Shipra River. Mesmerizing experience with thousands of devotees.",
          icon: "🌅"
        });
      }

      if (interests.includes("Kal Bhairav")) {
        dayPlan.activities.push({
          time: "08:00 AM",
          title: "Kal Bhairav Temple",
          description: "Visit Kal Bhairav Temple for blessings. Known for unique offerings and divine protection.",
          icon: "🔱"
        });
      }

      if (interests.includes("Shopping")) {
        dayPlan.activities.push({
          time: "12:00 PM",
          title: "Local Market Shopping",
          description: "Shop for religious items, souvenirs, and local handicrafts near the temple area.",
          icon: "🛍️"
        });
      }

      if (interests.includes("Photography")) {
        dayPlan.activities.push({
          time: "05:00 PM",
          title: "Photography Session",
          description: "Capture the beauty of Ujjain's temples and ghats. Best lighting during golden hour.",
          icon: "📸"
        });
      }

      if (interests.includes("Food")) {
        dayPlan.activities.push({
          time: "01:00 PM",
          title: "Local Cuisine Experience",
          description: "Try authentic Malwa cuisine - poha, jalebi, and traditional thali at local restaurants.",
          icon: "🍽️"
        });
      }

      if (interests.includes("Spiritual Experience")) {
        dayPlan.activities.push({
          time: "10:00 AM",
          title: "Meditation & Spiritual Discourse",
          description: "Attend spiritual satsang or meditation session. Experience inner peace and divine connection.",
          icon: "🧘"
        });
      }

      // Add meals
      dayPlan.meals.push(
        { time: "07:00 AM", type: "Breakfast", description: "Light vegetarian breakfast at hotel" },
        { time: "01:00 PM", type: "Lunch", description: "Traditional thali at local restaurant" },
        { time: "08:00 PM", type: "Dinner", description: "Dinner and rest" }
      );

      // Add tips
      if (day === 1) {
        dayPlan.tips.push("Carry valid ID proof for temple entry");
        dayPlan.tips.push("Wear comfortable, modest clothing");
        dayPlan.tips.push("Keep cash for offerings and shopping");
      }
      
      if (day === formData.duration) {
        dayPlan.tips.push("Check-out by 11 AM");
        dayPlan.tips.push("Keep luggage in hotel cloakroom if needed");
      }

      days.push(dayPlan);
    }

    // Transportation details
    const transportDetails = {
      "Train": { icon: "🚂", description: "Book train tickets in advance. Ujjain Junction is well-connected.", tips: ["Check train schedule", "Pre-book Tatkal if needed"] },
      "Flight": { icon: "✈️", description: "Nearest airport is Devi Ahilya Bai Holkar Airport, Indore (55 km).", tips: ["Book cab from airport", "Allow 2 hours travel time"] },
      "Car": { icon: "🚗", description: "Road trip via NH52. Good road conditions from major cities.", tips: ["Plan rest stops", "Check vehicle condition"] },
      "Bus": { icon: "🚌", description: "MSRTC buses available from Indore and other cities.", tips: ["Book in advance", "Choose AC Volvo for comfort"] },
      "Bike": { icon: "🏍️", description: "Scenic route for bike enthusiasts. Ensure safety gear.", tips: ["Wear helmet", "Plan fuel stops", "Check weather"] }
    };

    // Budget breakdown
    const budgetBreakdown = {
      "0-3000": { accommodation: "Budget guesthouse", food: "Economy meals", transport: "Public transport", activities: "Essential darshans only" },
      "3000-5000": { accommodation: "Standard hotel", food: "Local restaurants", transport: "Mix of auto & taxi", activities: "Major temples & ghats" },
      "5000-10000": { accommodation: "Good hotel with amenities", food: "Variety of dining options", transport: "Private taxi for major trips", activities: "All major attractions" },
      "10000-20000": { accommodation: "Premium hotel", food: "Multi-cuisine restaurants", transport: "Dedicated cab", activities: "Complete tour with guide" },
      "20000+": { accommodation: "Luxury resort/hotel", food: "Fine dining experiences", transport: "Private luxury vehicle", activities: "VIP darshan & exclusive experiences" }
    };

    return {
      overview: {
        duration: formData.duration,
        travelers: `${formData.adults} Adult(s), ${formData.children} Children, ${formData.seniors} Senior(s)`,
        transport: transportDetails[formData.transport] || transportDetails["Train"],
        budget: budgetBreakdown[formData.budget] || budgetBreakdown["5000-10000"],
        language: formData.language,
        pace: formData.pace,
        specialRequirements: []
      },
      days: days,
      recommendations: {
        bestTimeToVisit: "October to March (pleasant weather)",
        whatToCarry: "Comfortable shoes, water bottle, camera, ID proof",
        safetyTips: "Keep valuables safe, follow temple rules, stay hydrated",
        emergencyContacts: "Tourist Helpline: 1363, Temple Office: +91-734-1234567"
      }
    };
  };

  return (
    <section className="trip-planner">
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">AI TRIP PLANNER</span>
          <h2>Plan Your Ujjain Journeyy</h2>
          <p>
            Create a personalized pilgrimage itinerary based on your travel
            style, budget, duration and interests.
          </p>
        </div>

        <div className="planner-wrapper">
          <div className="planner-form">
            <div className="planner-progress">
              <div className="planner-progress-top">
                <span>
                  Step {step} of {TOTAL_STEPS}
                </span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="planner-progress-bar">
                <div
                  className="planner-progress-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* ===========================
                  STEP 1
            =========================== */}
            {step === 1 && (
              <>
                <h3 className="planner-step-title">Trip Information</h3>
                <p className="planner-step-desc">
                  Tell us about your upcoming pilgrimage.
                </p>

                <div className="planner-field">
                  <label>
                    <FaMapMarkedAlt />
                    Travelling From
                  </label>
                  <input
                    type="text"
                    name="from"
                    placeholder="Delhi, Mumbai, Indore..."
                    value={form.from}
                    onChange={handleInputChange}
                    className={errors.from ? "error-input" : ""}
                  />
                  {errors.from && (
                    <span className="error-message">{errors.from}</span>
                  )}
                </div>

                <div className="planner-field">
                  <label>
                    <FaCalendarAlt />
                    Arrival Date
                  </label>
                  <input
                    type="date"
                    name="arrivalDate"
                    value={form.arrivalDate}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="planner-field">
                  <label>Arrival Time</label>
                  <input
                    type="time"
                    name="arrivalTime"
                    value={form.arrivalTime}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="planner-field">
                  <label>Departure Time</label>
                  <input
                    type="time"
                    name="departureTime"
                    value={form.departureTime}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="planner-field">
                  <label>Duration</label>
                  <select
                    name="duration"
                    value={form.duration}
                    onChange={handleInputChange}
                  >
                    <option value={1}>1 Day</option>
                    <option value={2}>2 Days</option>
                    <option value={3}>3 Days</option>
                    <option value={4}>4 Days</option>
                    <option value={5}>5 Days</option>
                  </select>
                </div>
              </>
            )}

            {/* ===========================
                  STEP 2
            =========================== */}
            {step === 2 && (
              <>
                <h3 className="planner-step-title">Travelers</h3>
                <p className="planner-step-desc">
                  Who are travelling with you?
                </p>

                <div className="planner-field">
                  <label>
                    <FaUsers />
                    Adults
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={form.adults}
                    onChange={(e) => handleNumber("adults", e.target.value)}
                  />
                </div>

                <div className="planner-field">
                  <label>Children</label>
                  <input
                    type="number"
                    min="0"
                    value={form.children}
                    onChange={(e) => handleNumber("children", e.target.value)}
                  />
                </div>

                <div className="planner-field">
                  <label>Senior Citizens</label>
                  <input
                    type="number"
                    min="0"
                    value={form.seniors}
                    onChange={(e) => handleNumber("seniors", e.target.value)}
                  />
                </div>
              </>
            )}

            {/* ===========================
                  STEP 3
            =========================== */}
            {step === 3 && (
              <>
                <h3 className="planner-step-title">Budget & Stay</h3>
                <p className="planner-step-desc">
                  Choose your travel budget.
                </p>

                <div className="planner-field">
                  <label>
                    <FaWallet />
                    Budget
                  </label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleInputChange}
                  >
                    <option value="0-3000">Below ₹3000</option>
                    <option value="3000-5000">₹3000 - ₹5000</option>
                    <option value="5000-10000">₹5000 - ₹10000</option>
                    <option value="10000-20000">₹10000 - ₹20000</option>
                    <option value="20000+">Above ₹20000</option>
                  </select>
                </div>

                <div className="planner-field">
                  <label>Need Hotel?</label>
                  <select
                    name="hotelRequired"
                    value={String(form.hotelRequired)}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        hotelRequired: e.target.value === "true",
                      })
                    }
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>

                {form.hotelRequired && (
                  <div className="planner-field">
                    <label>
                      <FaHotel />
                      Hotel Category
                    </label>
                    <select
                      name="hotelCategory"
                      value={form.hotelCategory}
                      onChange={handleInputChange}
                    >
                      <option>Budget</option>
                      <option>Standard</option>
                      <option>Premium</option>
                      <option>Luxury</option>
                    </select>
                  </div>
                )}
              </>
            )}

            {/* ===========================
                  STEP 4
            =========================== */}
            {step === 4 && (
              <>
                <h3 className="planner-step-title">Travel Preferences</h3>
                <p className="planner-step-desc">
                  Select how you'll travel to Ujjain.
                </p>

                <div className="transport-grid">
                  {[
                    { label: "Train", icon: <FaTrain /> },
                    { label: "Flight", icon: <FaPlane /> },
                    { label: "Car", icon: <FaCar /> },
                    { label: "Bus", icon: <FaBus /> },
                    { label: "Bike", icon: <FaMotorcycle /> },
                  ].map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      className={
                        form.transport === item.label ? "active" : ""
                      }
                      onClick={() =>
                        setForm({
                          ...form,
                          transport: item.label,
                        })
                      }
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="planner-field">
                  <label>Trip Purpose</label>
                  <select
                    name="purpose"
                    value={form.purpose}
                    onChange={handleInputChange}
                  >
                    <option>Mahakal Darshan</option>
                    <option>Bhasma Aarti</option>
                    <option>Temple Tour</option>
                    <option>Simhastha 2028</option>
                    <option>Tourism</option>
                  </select>
                </div>
              </>
            )}

            {/* ===========================
                  STEP 5
            =========================== */}
            {step === 5 && (
              <>
                <h3 className="planner-step-title">Interests</h3>
                <p className="planner-step-desc">
                  Choose everything you're interested in.
                </p>

                <div className="interest-grid">
                  {[
                    "Mahakal Darshan",
                    "Bhasma Aarti",
                    "Mahakal Lok",
                    "Temple Tour",
                    "Ram Ghat",
                    "Kal Bhairav",
                    "Shopping",
                    "Photography",
                    "Food",
                    "Spiritual Experience",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={
                        form.interests.includes(item)
                          ? "interest-chip active"
                          : "interest-chip"
                      }
                      onClick={() => toggleInterest(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* ===========================
                  STEP 6
            =========================== */}
            {step === 6 && (
              <>
                <h3 className="planner-step-title">Final Preferences</h3>
                <p className="planner-step-desc">
                  Help us personalize your trip.
                </p>

                <div className="planner-field">
                  <label>
                    <FaLanguage />
                    Preferred Language
                  </label>
                  <select
                    name="language"
                    value={form.language}
                    onChange={handleInputChange}
                  >
                    <option>English</option>
                    <option>Hindi</option>
                  </select>
                </div>

                <div className="planner-field">
                  <label>Travel Pace</label>
                  <select
                    name="pace"
                    value={form.pace}
                    onChange={handleInputChange}
                  >
                    <option>Relaxed</option>
                    <option>Balanced</option>
                    <option>Fast</option>
                  </select>
                </div>

                <div className="planner-checkbox">
                  <label>
                    <input
                      type="checkbox"
                      name="parking"
                      checked={form.parking}
                      onChange={handleInputChange}
                    />
                    <FaParking />
                    Need Parking
                  </label>
                </div>

                <div className="planner-checkbox">
                  <label>
                    <input
                      type="checkbox"
                      name="wheelchair"
                      checked={form.wheelchair}
                      onChange={handleInputChange}
                    />
                    <FaWheelchair />
                    Wheelchair Required
                  </label>
                </div>

                <div className="planner-checkbox">
                  <label>
                    <input
                      type="checkbox"
                      name="elderFriendly"
                      checked={form.elderFriendly}
                      onChange={handleInputChange}
                    />
                    Elder Friendly Route
                  </label>
                </div>
              </>
            )}

            {/* ===========================
                  Navigation Buttons
            =========================== */}
            <div className="planner-navigation">
              {step > 1 && (
                <button
                  type="button"
                  className="planner-back-btn"
                  onClick={previousStep}
                >
                  <FaArrowLeft />
                  Previous
                </button>
              )}

              {step < TOTAL_STEPS ? (
                <button
                  type="button"
                  className="planner-next-btn"
                  onClick={nextStep}
                  disabled={!canContinue()}
                >
                  Next
                  <FaArrowRight />
                </button>
              ) : (
                <button
                  type="button"
                  className="generate-btn"
                  onClick={generateTrip}
                >
                  Generate My Journey
                  <FaArrowRight />
                </button>
              )}
            </div>
          </div>

          {/* ===========================
                RIGHT PANEL
          =========================== */}
          <div className="planner-result">
            {loading ? (
              <div className="planner-loading">
                <div className="loading-spinner"></div>
                <h3>Generating Your Journey</h3>
                <p>Our AI is creating your personalized pilgrimage itinerary...</p>
              </div>
            ) : !generated ? (
              <div className="planner-placeholder">
                <FaMapSigns />
                <h3>Your Personalized Journey</h3>
                <p>
                  Complete all the steps and click
                  <strong> Generate My Journey </strong>
                  to receive your personalized pilgrimage itinerary.
                </p>
              </div>
            ) : (
              <div className="result-content">
                <div className="result-header">
                  <span className="result-tag">Personalized Journey</span>
                  <h3>{tripResult.overview.duration} Day Spiritual Journey</h3>
                  <p>{tripResult.overview.travelers}</p>
                </div>

                <div className="result-overview">
                  <div className="overview-item">
                    <span className="overview-label">Transport</span>
                    <span className="overview-value">{tripResult.overview.transport.icon} {tripResult.overview.transport.description}</span>
                  </div>
                  <div className="overview-item">
                    <span className="overview-label">Budget</span>
                    <span className="overview-value">{tripResult.overview.budget.accommodation} | {tripResult.overview.budget.activities}</span>
                  </div>
                  <div className="overview-item">
                    <span className="overview-label">Pace</span>
                    <span className="overview-value">{tripResult.overview.pace}</span>
                  </div>
                </div>

                <div className="result-days">
                  <h4>Day-by-Day Itinerary</h4>
                  {tripResult.days.map((day) => (
                    <div key={day.day} className="day-card">
                      <div className="day-header">
                        <span className="day-number">Day {day.day}</span>
                        <span className="day-title">{day.title}</span>
                      </div>
                      
                      <div className="day-activities">
                        {day.activities.map((activity, idx) => (
                          <div key={idx} className="activity-item">
                            <span className="activity-time">{activity.time}</span>
                            <div className="activity-content">
                              <div className="activity-header">
                                <span className="activity-icon">{activity.icon}</span>
                                <span className="activity-title">{activity.title}</span>
                              </div>
                              <p className="activity-desc">{activity.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {day.tips.length > 0 && (
                        <div className="day-tips">
                          <strong>Tips:</strong>
                          <ul>
                            {day.tips.map((tip, idx) => (
                              <li key={idx}>{tip}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="result-recommendations">
                  <h4>Important Information</h4>
                  <div className="recommendation-grid">
                    <div className="recommendation-item">
                      <strong>Best Time:</strong>
                      <p>{tripResult.recommendations.bestTimeToVisit}</p>
                    </div>
                    <div className="recommendation-item">
                      <strong>What to Carry:</strong>
                      <p>{tripResult.recommendations.whatToCarry}</p>
                    </div>
                    <div className="recommendation-item">
                      <strong>Safety Tips:</strong>
                      <p>{tripResult.recommendations.safetyTips}</p>
                    </div>
                    <div className="recommendation-item">
                      <strong>Emergency:</strong>
                      <p>{tripResult.recommendations.emergencyContacts}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITripPlanner;