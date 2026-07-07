// Stay types with icons and labels
export const STAY_TYPES = {
  HOTEL: 'Hotel',
  DHARAMSHALA: 'Dharamshala',
  ASHRAM: 'Ashram',
  GUEST_HOUSE: 'Guest House',
  HOMESTAY: 'Homestay',
};

export const STAY_TYPE_OPTIONS = [
  { value: 'Hotel', label: 'Hotel', icon: 'Building2' },
  { value: 'Dharamshala', label: 'Dharamshala', icon: 'Home' },
  { value: 'Ashram', label: 'Ashram', icon: 'Scroll' },
  { value: 'Guest House', label: 'Guest House', icon: 'House' },
  { value: 'Homestay', label: 'Homestay', icon: 'Users' },
];

// Sort options
export const SORT_OPTIONS = [
  { value: 'recommended', label: 'Recommended', icon: 'Star' },
  { value: 'rating', label: 'Highest Rated', icon: 'TrendingUp' },
  { value: 'price_low', label: 'Lowest Price', icon: 'IndianRupee' },
  { value: 'reviews', label: 'Most Reviewed', icon: 'MessageSquare' },
  { value: 'verified', label: 'Verified First', icon: 'CheckCircle' },
];

// Price ranges for filtering
export const PRICE_RANGES = [
  { value: [0, 1000], label: 'Under ₹1,000', min: 0, max: 1000 },
  { value: [1000, 2500], label: '₹1,000 - ₹2,500', min: 1000, max: 2500 },
  { value: [2500, 5000], label: '₹2,500 - ₹5,000', min: 2500, max: 5000 },
  { value: [5000, 10000], label: '₹5,000 - ₹10,000', min: 5000, max: 10000 },
  { value: [10000, Infinity], label: '₹10,000+', min: 10000, max: Infinity },
];

// Rating ranges for filtering
export const RATING_RANGES = [
  { value: 4.5, label: '4.5+', icon: 'Star' },
  { value: 4.0, label: '4.0+', icon: 'Star' },
  { value: 3.5, label: '3.5+', icon: 'Star' },
  { value: 3.0, label: '3.0+', icon: 'Star' },
];

// Popular areas/localities in Ujjain
export const POPULAR_AREAS = [
  'Near Mahakaleshwar Temple',
  'Ram Ghat',
  'Harsingh Ghat',
  'Kal Bhairav',
  'Chintamani Temple',
  'Gadkalika Temple',
  'City Center',
  'Railway Station',
];

// Popular searches (SEO)
export const POPULAR_SEARCHES = [
  'Hotels near Mahakal',
  'Budget Dharamshala',
  'Luxury Stays in Ujjain',
  'Ashrams in Ujjain',
  'Guest Houses near Ram Ghat',
  'Verified Homestay',
  'Stays for Simhastha',
  'Family Accommodation',
];

// Featured collections
export const FEATURED_COLLECTIONS = [
  {
    id: 'near-mahakal',
    title: 'Hotels Near Mahakaleshwar',
    description: 'Best rated stays within 2km of the sacred temple',
    icon: 'MapPin',
    query: { area: 'Near Mahakaleshwar Temple' },
  },
  {
    id: 'budget',
    title: 'Budget Stays',
    description: 'Comfortable accommodation under ₹2,500/night',
    icon: 'Wallet',
    query: { price_max: 2500 },
  },
  {
    id: 'luxury',
    title: 'Luxury Hotels',
    description: 'Premium experience with modern amenities',
    icon: 'Crown',
    query: { price_min: 5000 },
  },
  {
    id: 'ashrams',
    title: 'Ashrams',
    description: 'Spiritual experience and meditation spaces',
    icon: 'Scroll',
    query: { stay_type: 'Ashram' },
  },
  {
    id: 'dharamshalas',
    title: 'Dharamshalas',
    description: 'Traditional lodging for pilgrims',
    icon: 'Home',
    query: { stay_type: 'Dharamshala' },
  },
  {
    id: 'ram-ghat',
    title: 'Near Ram Ghat',
    description: 'Accommodation close to sacred bathing ghats',
    icon: 'Waves',
    query: { area: 'Ram Ghat' },
  },
];

// Mahakaleshwar Temple coordinates (reference point)
export const MAHAKAL_TEMPLE = {
  name: 'Mahakaleshwar Temple',
  latitude: 23.1815,
  longitude: 75.7367,
  address: 'Mahakal Lok, Ujjain, Madhya Pradesh 456010',
};

// Pagination
export const ITEMS_PER_PAGE = 12;
export const FEATURED_STAYS_LIMIT = 6;

// FAQs optimized for SEO
export const FAQS = [
  {
    id: 'best-time',
    question: 'What is the best time to visit Ujjain and book accommodation?',
    answer: 'The best time to visit Ujjain for pilgrimage is during Sawan (July-August) and Shravan month. For Simhastha 2028, book accommodation 4-6 months in advance. Winter months (November-February) offer pleasant weather and fewer crowds. Always book early for major festivals.',
  },
  {
    id: 'near-mahakal',
    question: 'Which are the best hotels near Mahakaleshwar Temple?',
    answer: 'Hotels within 1-2km of Mahakaleshwar Temple offer the most convenient access. Our top rated options include properties with verified status, positive pilgrim reviews, and direct WhatsApp booking. Filter by "Near Mahakaleshwar" to see the closest options.',
  },
  {
    id: 'dharamshala-difference',
    question: 'What is the difference between a Dharamshala and a hotel?',
    answer: 'Dharamshalas are traditional pilgrim hostels offering basic, affordable accommodation focused on spiritual atmosphere. Hotels provide modern amenities and comfort. Ashrams combine spiritual learning with stay. Choose based on your comfort preferences and budget.',
  },
  {
    id: 'simhastha-booking',
    question: 'How do I book accommodation for Simhastha 2028?',
    answer: 'Use our Stays Directory to browse verified properties. Filter by type, price, and location. Click "View Details" to see photos, amenities, and guest reviews. Book directly via WhatsApp, phone, or website links. All properties are verified for authenticity.',
  },
  {
    id: 'budget-options',
    question: 'What are the most budget-friendly stay options?',
    answer: 'Dharamshalas and some ashrams offer the most affordable options (₹300-1,500/night). Budget guest houses range ₹800-2,000/night. All options are verified. Book early for best availability and rates.',
  },
  {
    id: 'verified-stays',
    question: 'What does "Verified" mean for a stay property?',
    answer: 'Verified properties have been personally checked by our team for authenticity, safety, cleanliness, and accurate listing details. We verify phone numbers, photos, and guest reviews to ensure you have reliable, trustworthy information.',
  },
  {
    id: 'contact-directly',
    question: 'Can I contact the stay properties directly?',
    answer: 'Yes! Every listing includes direct phone and WhatsApp links. You can contact properties directly to ask questions, negotiate rates, or make special arrangements. We encourage direct booking for best deals.',
  },
  {
    id: 'cancellation',
    question: 'What are the typical cancellation policies?',
    answer: 'Cancellation policies vary by property. Always discuss terms directly with the stay when booking. Most properties offer flexible cancellation for bookings made well in advance. Confirm all terms before payment.',
  },
  {
    id: 'families-groups',
    question: 'Are there stays suitable for families and large groups?',
    answer: 'Yes! Filter by stay type and price to find family-friendly hotels and guest houses. Many have family rooms, multi-room options, and group discounts. Contact directly to arrange group bookings.',
  },
  {
    id: 'accessibility',
    question: 'Are there wheelchair accessible stays?',
    answer: 'Several verified properties offer wheelchair access and accessibility features. Contact properties directly to confirm specific accessibility needs. We are continuously adding accessibility information to listings.',
  },
];

// Nearby temples for context (added to stay details modal)
export const NEARBY_TEMPLES = [
  { name: 'Mahakaleshwar Temple', distance: '0.0 km', type: 'Main' },
  { name: 'Kal Bhairav Temple', distance: '0.8 km', type: 'Major' },
  { name: 'Chintamani Temple', distance: '1.2 km', type: 'Major' },
  { name: 'Gadkalika Temple', distance: '1.5 km', type: 'Major' },
  { name: 'Gopal Mandir', distance: '0.5 km', type: 'Sacred' },
];

// Nearby ghats
export const NEARBY_GHATS = [
  { name: 'Ram Ghat', distance: '1.2 km' },
  { name: 'Harsingh Ghat', distance: '1.5 km' },
  { name: 'Triveni Ghat', distance: '2.0 km' },
  { name: 'Navlakha Ghat', distance: '2.5 km' },
];

// Breadcrumb paths
export const BREADCRUMB_PATHS = {
  STAYS: [
    { label: 'Home', path: '/' },
    { label: 'Stays in Ujjain', path: '/stays' },
  ],
  STAYS_DETAIL: (name) => [
    { label: 'Home', path: '/' },
    { label: 'Stays in Ujjain', path: '/stays' },
    { label: name, path: null },
  ],
};

// Accessibility
export const KEYBOARD_KEYS = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  TAB: 'Tab',
};

// Animation/Motion
export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
  VERY_SLOW: 800,
};

export const ANIMATION_DELAY = {
  STAGGER: 50,
  MEDIUM: 200,
  LARGE: 400,
};

// SEO metadata
export const PAGE_METADATA = {
  title: 'Find Your Perfect Stay in Ujjain | Hotels, Dharamshalas & Ashrams | MySimhastha',
  description: 'Discover verified hotels, dharamshalas, ashrams and guest houses in Ujjain near Mahakaleshwar Temple. Book pilgrimage accommodation for Simhastha 2028 with direct WhatsApp booking.',
  keywords: 'hotels Ujjain, dharamshala Ujjain, ashram Ujjain, guest house Ujjain, Mahakal hotel, pilgrimage stay, Simhastha accommodation, Ujjain resort',
  ogImage: '/og-stays.jpg',
  canonical: 'https://www.mysimhastha.com/stays',
};

// API/Supabase
export const SUPABASE_TABLES = {
  STAYS: 'stays',
};

export const SUPABASE_LIMITS = {
  INITIAL_LOAD: 50,
  PAGINATION: 12,
  MAX_FEATURED: 6,
};

// Default filters
export const DEFAULT_FILTERS = {
  searchQuery: '',
  area: '',
  stayType: '',
  priceRange: null,
  rating: 0,
  verified: false,
  featured: false,
  sort: 'recommended',
};

// Error messages
export const ERROR_MESSAGES = {
  LOAD_FAILED: 'Unable to load stays. Please refresh and try again.',
  NO_RESULTS: 'No stays found matching your criteria. Try adjusting your filters.',
  NETWORK_ERROR: 'Network error. Please check your connection and try again.',
};

// Success messages
export const SUCCESS_MESSAGES = {
  FILTERS_APPLIED: 'Filters applied',
  FILTERS_RESET: 'Filters reset',
};

// Analytics events
export const ANALYTICS_EVENTS = {
  VIEW_STAYS: 'view_stays',
  FILTER_APPLIED: 'filter_applied',
  SORT_CHANGED: 'sort_changed',
  STAY_VIEWED: 'stay_viewed',
  CONTACT_CLICKED: 'contact_clicked',
  WHATSAPP_CLICKED: 'whatsapp_clicked',
  DIRECTIONS_CLICKED: 'directions_clicked',
};
