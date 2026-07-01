export const getAmenities = (stay) => {
  if (!stay) return [];

  // Future database support
  if (Array.isArray(stay.amenities) && stay.amenities.length > 0) {
    return stay.amenities;
  }

  const type = (stay.stay_type || "").toLowerCase();

  switch (type) {
    case "hotel":
      return [
        "Free WiFi",
        "Parking",
        "Air Conditioning",
        "Restaurant",
        "24×7 Reception",
        "Hot Water",
        "Family Friendly",
        "Room Service",
      ];

    case "dharamshala":
      return [
        "Parking",
        "Temple Nearby",
        "Hot Water",
        "Family Friendly",
        "Budget Stay",
        "Dormitory",
      ];

    case "ashram":
      return [
        "Meditation Hall",
        "Temple Nearby",
        "Vegetarian Food",
        "Parking",
        "Peaceful Environment",
      ];

    case "guest house":
      return [
        "Free WiFi",
        "Parking",
        "Private Rooms",
        "Hot Water",
        "Family Friendly",
      ];

    default:
      return [
        "Free WiFi",
        "Parking",
        "Hot Water",
        "Verified Property",
      ];
  }
};