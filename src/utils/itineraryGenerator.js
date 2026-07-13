// src/utils/itineraryGenerator.js

import oneDay from "../ai/itinerary/1day.json";
import twoDay from "../ai/itinerary/2day.json";
import threeDay from "../ai/itinerary/3day.json";

const templates = {
  1: oneDay,
  2: twoDay,
  3: threeDay,
};

export function generateItinerary(tripData) {
  const {
    days = 1,
    adults = 1,
    children = 0,
    seniors = 0,
    budget = 5000,
    transport = "Train",
    origin = "",
    hotel = false,
    parking = false,
    interests = [],
    language = "English",
  } = tripData;

  // Select template
  let template;

  if (days === 1) {
    template = structuredClone(templates[1]);
  } else if (days === 2) {
    template = structuredClone(templates[2]);
  } else {
    template = structuredClone(templates[3]);
  }

  // ---------- Personalization ----------

  template.summary = {
    ...template.summary,
    adults,
    children,
    seniors,
    budget,
    transport,
    origin,
    language,
  };

  // Add Hotel Recommendation
  if (hotel) {
    template.recommendations.unshift({
      type: "hotel",
      title: "Book Hotel Near Mahakaleshwar Temple",
      description:
        "Choose accommodation within 2–3 km of Mahakaleshwar Temple for easy access.",
    });
  }

  // Parking
  if (parking) {
    template.recommendations.push({
      type: "parking",
      title: "Parking Recommended",
      description:
        "Use official parking areas near Mahakal Lok or designated Simhastha parking zones.",
    });
  }

  // Senior Citizens
  if (seniors > 0) {
    template.recommendations.push({
      type: "senior",
      title: "Senior Citizen Tips",
      description:
        "Plan rest breaks, avoid long walking routes, and use e-rickshaws where available.",
    });
  }

  // Children
  if (children > 0) {
    template.recommendations.push({
      type: "children",
      title: "Traveling with Children",
      description:
        "Carry water, snacks, hats, and schedule frequent breaks during temple visits.",
    });
  }

  // Interests
  interests.forEach((interest) => {
    switch (interest.toLowerCase()) {
      case "photography":
        template.recommendations.push({
          type: "photography",
          title: "Photography Tip",
          description:
            "Visit Ram Ghat during sunrise and Mahakal Lok after sunset for the best photos.",
        });
        break;

      case "food":
        template.recommendations.push({
          type: "food",
          title: "Food Recommendation",
          description:
            "Try authentic Ujjain poha, kachori, sabudana khichdi, and local sweets.",
        });
        break;

      case "shopping":
        template.recommendations.push({
          type: "shopping",
          title: "Shopping",
          description:
            "Visit local markets for Rudraksha malas, religious books, idols, and souvenirs.",
        });
        break;

      case "spiritual":
      case "spiritual experience":
        template.recommendations.push({
          type: "spiritual",
          title: "Spiritual Experience",
          description:
            "Spend peaceful time at Ram Ghat during evening aarti and meditate at Sandipani Ashram.",
        });
        break;

      default:
        break;
    }
  });

  // Budget Category
  if (budget <= 3000) {
    template.budgetCategory = "Budget";
  } else if (budget <= 8000) {
    template.budgetCategory = "Standard";
  } else if (budget <= 15000) {
    template.budgetCategory = "Comfort";
  } else {
    template.budgetCategory = "Premium";
  }

  // Transport Tips
  switch (transport.toLowerCase()) {
    case "train":
      template.travelTip =
        "Arrive at Ujjain Junction Railway Station. Auto-rickshaws and taxis are readily available.";
      break;

    case "bus":
      template.travelTip =
        "The Nanakheda Bus Stand is well connected to the city. Local transport is easily available.";
      break;

    case "car":
      template.travelTip =
        "Expect heavy traffic during Simhastha. Use official parking areas and start early.";
      break;

    case "flight":
      template.travelTip =
        "The nearest airport is Devi Ahilyabai Holkar Airport, Indore (IDR).";
      break;

    default:
      template.travelTip = "";
  }

  // Statistics
  template.statistics = {
    totalDays: days,
    totalTravelers: adults + children + seniors,
    adults,
    children,
    seniors,
    estimatedBudget: budget,
  };

  return template;
}