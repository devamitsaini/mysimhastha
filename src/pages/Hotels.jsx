import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { 
  Hotel, 
  MapPin, 
  IndianRupee, 
  Star, 
  Shield, 
  BookOpen, 
  Navigation,
  Home,
  UtensilsCrossed,
  Car,
  Users,
  User,
  Baby,
  ParkingCircle,
  Heart,
  Phone,
  Calendar,
  Clock,
  AlertCircle,
  CheckCircle,
  XCircle,
  Lightbulb,
  BookMarked,
  Building2,
  Tent,
  Taxi,
  ShieldCheck,
  HelpCircle,
  ShoppingBag,
  RefreshCw
} from 'lucide-react';
import { HOTELS_DATA } from '../data/simhasthaData';
import '../styles/Hotels.css';


function HotelsPage() {
  const hotelsRef = useRef(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = [
    { name: "All", icon: Home },
    { name: "Hotel", icon: Hotel },
    { name: "Dharamshala", icon: Building2 },
    { name: "Restaurant", icon: UtensilsCrossed },
    { name: "Cab Service", icon: Car },
    { name: "Guide", icon: Navigation }
  ];

  const filtered = HOTELS_DATA.filter(h => {
    const matchesSearch = h.name.toLowerCase().includes(search.toLowerCase()) || 
                          h.type.toLowerCase().includes(search.toLowerCase()) || 
                          h.location.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || h.type === filter;
    return matchesSearch && matchesFilter;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const currentItems = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  
  const handleFilterChange = (cat) => {
    setFilter(cat);
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    hotelsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Structured Data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.mysimhastha.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Hotels in Ujjain",
        "item": "https://www.mysimhastha.com/hotels"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which area is best to stay in Ujjain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best area depends on your priorities. For early morning Bhasma Aarti at Mahakaleshwar Temple, stay within walking distance (500m-1km) of the temple. For families seeking quieter surroundings with better parking, Freeganj and Nanakheda are ideal. Railway Station Road offers convenient transport access, while Dewas Road suits travelers with private vehicles."
        }
      },
      {
        "@type": "Question",
        "name": "How far should I stay from Mahakaleshwar Temple?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Staying within 500m to 1km of Mahakaleshwar Temple is ideal for attending Bhasma Aarti and avoiding festival crowds. However, areas 2-3km away offer better value, easier parking, and quieter surroundings. The choice depends on your itinerary, mobility needs, and whether you're visiting during peak festival seasons."
        }
      },
      {
        "@type": "Question",
        "name": "What is the average hotel price in Ujjain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Budget hotels in Ujjain typically range from ₹800-₹2,000 per night, mid-range options from ₹2,000-₹5,000, and premium hotels from ₹5,000-₹15,000+. During major festivals like Mahashivratri, Shravan, and Simhastha, prices can increase by 50-100% and availability decreases significantly."
        }
      },
      {
        "@type": "Question",
        "name": "When should I book hotels during Simhastha?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For Simhastha, book accommodation 3-6 months in advance. This is one of the world's largest religious gatherings, and hotels reach full occupancy months ahead. Early booking ensures better location, pricing, and accommodation type. Consider flexible cancellation policies and confirm parking and amenities when booking."
        }
      },
      {
        "@type": "Question",
        "name": "Are hotels available near Ujjain Railway Station?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Railway Station Road has multiple budget and mid-range hotels within 1-2km of the station. This area is convenient for travelers arriving by train, with easy access to taxis, auto-rickshaws, and local transport. Properties here typically offer good connectivity to Mahakaleshwar Temple (3-5km)."
        }
      },
      {
        "@type": "Question",
        "name": "Which accommodation is best for families?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Families should prioritize hotels in Freeganj or Nanakheda with spacious rooms, elevators, secure parking, and nearby restaurants. Look for properties with 24/7 reception, room service, and easy access to medical facilities. Avoid extremely budget options near the temple during festivals due to noise and crowd congestion."
        }
      },
      {
        "@type": "Question",
        "name": "Can I find budget accommodation near Mahakal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, budget accommodation (₹800-₹2,000) is available near Mahakaleshwar Temple, including budget hotels, guest houses, and dharamshalas. However, during peak seasons and festivals, availability is limited and prices increase. Book well in advance and verify amenities like hot water, cleanliness, and security."
        }
      },
      {
        "@type": "Question",
        "name": "What facilities should I check before booking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Essential facilities to verify include: 24/7 check-in flexibility, parking availability (especially during festivals), hot water supply, Wi-Fi connectivity, air conditioning or fans, elevator access (for senior citizens), nearby restaurants, cancellation policy, and recent guest reviews on cleanliness and service quality."
        }
      },
      {
        "@type": "Question",
        "name": "Are parking facilities available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Parking availability varies by location and property. Hotels in Freeganj, Nanakheda, and Dewas Road typically offer better parking facilities. During festivals like Simhastha and Mahashivratri, public parking fills up early, so confirm with your hotel about dedicated parking or nearby alternatives. Some properties offer valet parking during peak seasons."
        }
      },
      {
        "@type": "Question",
        "name": "Which area is least crowded in Ujjain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Freeganj and Nanakheda are generally less crowded than the immediate temple vicinity. These areas offer wider roads, better infrastructure, and quieter surroundings while maintaining reasonable access to Mahakaleshwar Temple (2-3km). Dewas Road is also relatively peaceful, especially suitable for travelers with private vehicles."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Ujjain Hotel Guide (2026–2028)",
    "description": "Everything you need to know before choosing accommodation in Ujjain—from the best localities and hotel prices to pilgrimage planning, family travel tips, festival seasons, and expert booking advice.",
    "author": {
      "@type": "Organization",
      "name": "MySimhastha",
      "url": "https://www.mysimhastha.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MySimhastha",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.mysimhastha.com/logo.png"
      }
    },
    "datePublished": "2026-01-01",
    "dateModified": new Date().toISOString().split('T')[0]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Choose the Right Accommodation in Ujjain",
    "description": "A step-by-step guide to selecting the best hotel or accommodation in Ujjain based on your travel purpose, budget, and pilgrimage needs.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Identify Your Travel Purpose",
        "text": "Determine if you're attending Bhasma Aarti, family pilgrimage, festival visit, or solo travel. Each purpose has different accommodation requirements."
      },
      {
        "@type": "HowToStep",
        "name": "Choose the Right Locality",
        "text": "Select an area based on proximity to Mahakaleshwar Temple, parking needs, crowd tolerance, and family comfort. Temple vicinity for early rituals, Freeganj/Nanakheda for families."
      },
      {
        "@type": "HowToStep",
        "name": "Set Your Budget",
        "text": "Budget ₹800-2,000 for basic stays, ₹2,000-5,000 for mid-range comfort, and ₹5,000+ for premium. Add 50-100% buffer for festival seasons."
      },
      {
        "@type": "HowToStep",
        "name": "Check Essential Facilities",
        "text": "Verify parking, hot water, Wi-Fi, AC/fans, elevator, cancellation policy, and recent reviews before booking."
      },
      {
        "@type": "HowToStep",
        "name": "Book in Advance",
        "text": "For normal visits, book 2-4 weeks ahead. For Simhastha or Mahashivratri, book 3-6 months in advance for best options and prices."
      }
    ]
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Accommodation Categories in Ujjain",
    "description": "Different types of accommodation available in Ujjain for pilgrims and travelers",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Budget Hotels",
        "description": "Essential facilities for short stays, ranging from ₹800-₹2,000 per night"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Mid-Range Hotels",
        "description": "Enhanced comfort with parking, restaurants, and family services, ₹2,000-₹5,000 per night"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Premium Hotels",
        "description": "Luxury accommodations with premium amenities, ₹5,000-₹15,000+ per night"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Dharamshalas",
        "description": "Economical pilgrim accommodations, ideal for groups and budget travelers"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Guest Houses",
        "description": "Homely atmosphere with personalized service, suitable for families and extended stays"
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MySimhastha",
    "url": "https://www.mysimhastha.com",
    "logo": "https://www.mysimhastha.com/logo.png",
    "description": "Complete pilgrimage guide for Ujjain Simhastha 2028 - Hotels, Accommodation, Travel Tips, and Temple Information"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MySimhastha",
    "url": "https://www.mysimhastha.com",
    "description": "Complete guide for Ujjain Simhastha 2028 pilgrimage - Hotels, Accommodation, Travel Tips, and Temple Information",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.mysimhastha.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Complete Ujjain Hotel Guide (2026–2028)",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".guide-summary", ".section-summary"]
    }
  };

  return (
    <>
      <Helmet>
        <title>Hotels in Ujjain: Complete Accommodation Guide (2026–2028) | MySimhastha</title>
        <meta
          name="description"
          content="Planning to stay in Ujjain? Discover the best areas to stay, hotel price ranges, travel tips, distance from Mahakaleshwar Temple, seasonal accommodation advice, booking mistakes to avoid, and everything pilgrims need before choosing a hotel."
        />
        <link rel="canonical" href="https://www.mysimhastha.com/hotels" />
        
        <meta property="og:title" content="Hotels in Ujjain: Complete Accommodation Guide (2026–2028) | MySimhastha" />
        <meta property="og:description" content="Discover the best areas to stay, hotel prices, travel tips, and expert booking advice for Ujjain pilgrimage." />
        <meta property="og:url" content="https://www.mysimhastha.com/hotels" />
        <meta property="og:type" content="article" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hotels in Ujjain: Complete Accommodation Guide (2026–2028)" />
        <meta name="twitter:description" content="Everything you need to know before choosing accommodation in Ujjain." />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(itemListSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(speakableSchema)}
        </script>
      </Helmet>

      <div className="page-wrap">
        {/* Hero Section */}
        <div className="page-hero hotels-hero">
          <div className="container">
              <div className="hotels-hero-content">
                
                
                <h1 className="hotels-hero-title">
                  <span className="hotels-hero-title-line1">Find Your Perfect Stay</span>
                  <span className="hotels-hero-title-line2">in the Holy City of Ujjain</span>
                </h1>

                <div className="hotels-hero-divider">
                  <div className="hotels-hero-divider-line"></div>
                  <div className="hotels-hero-divider-icon"><HelpCircle size={20} /></div>
                  <div className="hotels-hero-divider-line"></div>
                </div>

                <p className="hotels-hero-sub">
                  Explore the best hotels, guest houses, and dharamshalas near Mahakal Mandir. 
                  Comfort, convenience & great locations — all within 500m to 3km.
                </p>

              </div>
            </div>
          </div>
        

        {/* Introduction */}
        <section className="section intro-section">
          <div className="container">
            <div className="intro-content">
              <p className="guide-summary">
                Finding the right place to stay in Ujjain is about much more than comparing room prices. Your accommodation can influence temple access, travel time, crowd experience, parking availability, family comfort, and your overall pilgrimage. This comprehensive guide explains the best areas to stay, expected hotel costs, transportation options, seasonal demand, and practical advice to help you confidently plan your visit before browsing available properties.
              </p>
              <div className="intro-meta">
                <div>
                  <span>📅 Last Updated: January 2026</span>
                  <span>•</span>
                  <span>✍️ Published by MySimhastha Team</span>
                  <span>•</span>
                  <span>⏱️ 15 min read</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Best Areas to Stay */}
        <section className="section section-alt">
          <div className="container">
            <div className="sec-head">
              <div className="sec-label">Section 1</div>
              <h2>Best Areas to Stay in Ujjain</h2>
              <p className="sec-sub section-summary">Every locality in Ujjain offers a different experience depending on your travel purpose. Hotels near Mahakaleshwar Temple are ideal for devotees attending early morning Bhasma Aarti, while areas like Freeganj and Nanakheda provide wider roads, better parking, and quieter surroundings for families.</p>
            </div>

            <div className="areas-grid">
              <div className="area-card">
                <div className="area-icon"><Building2 size={40} /></div>
                <h3>Temple Vicinity (500m-1km)</h3>
                <p><strong>Best for:</strong> Devotees attending Bhasma Aarti, solo pilgrims</p>
                <p><strong>Advantages:</strong> Walking distance to Mahakaleshwar Temple, easy access during early morning rituals, immersive pilgrimage experience</p>
                <p><strong>Considerations:</strong> Higher prices, crowded during festivals, limited parking, noise during peak seasons</p>
                <div className="area-price">₹1,500 - ₹5,000+ per night</div>
              </div>

              <div className="area-card">
                <div className="area-icon"><Home size={40} /></div>
                <h3>Freeganj</h3>
                <p><strong>Best for:</strong> Families, senior citizens, extended stays</p>
                <p><strong>Advantages:</strong> Wider roads, better parking, quieter surroundings, good restaurants nearby, 2-3km from temple</p>
                <p><strong>Considerations:</strong> Requires transport to temple, slightly farther from main attractions</p>
                <div className="area-price">₹1,200 - ₹4,000 per night</div>
              </div>

              <div className="area-card">
                <div className="area-icon"><Building2 size={40} /></div>
                <h3>Nanakheda</h3>
                <p><strong>Best for:</strong> Families, group travelers, budget-conscious pilgrims</p>
                <p><strong>Advantages:</strong> Peaceful neighborhood, good parking, affordable options, easy taxi access, 2-3km from temple</p>
                <p><strong>Considerations:</strong> Limited walking-distance temple access, fewer luxury options</p>
                <div className="area-price">₹800 - ₹3,500 per night</div>
              </div>

              <div className="area-card">
                <div className="area-icon"><Navigation size={40} /></div>
                <h3>Railway Station Road</h3>
                <p><strong>Best for:</strong> Arriving by train, short stays, business travelers</p>
                <p><strong>Advantages:</strong> Convenient transport access, budget to mid-range hotels, easy taxi/auto availability, 3-5km from temple</p>
                <p><strong>Considerations:</strong> Noisy area, basic amenities in budget properties, requires transport to temple</p>
                <div className="area-price">₹800 - ₹3,000 per night</div>
              </div>

              <div className="area-card">
                <div className="area-icon"><Car size={40} /></div>
                <h3>Dewas Road</h3>
                <p><strong>Best for:</strong> Travelers with private vehicles, long-distance drivers</p>
                <p><strong>Advantages:</strong> Excellent parking, easy highway access, quieter surroundings, good for road trips, 4-6km from temple</p>
                <p><strong>Considerations:</strong> Requires private vehicle or taxi, limited public transport, farther from temple</p>
                <div className="area-price">₹1,000 - ₹4,500 per night</div>
              </div>

              <div className="area-card">
                <div className="area-icon"><ShoppingBag size={40} /></div>
                <h3>Market Areas (Dawa Bazaar)</h3>
                <p><strong>Best for:</strong> Budget pilgrims, shopping convenience</p>
                <p><strong>Advantages:</strong> Affordable options, close to markets and restaurants, authentic local experience, 1-2km from temple</p>
                <p><strong>Considerations:</strong> Crowded streets, limited parking, noise from market activities</p>
                <div className="area-price">₹600 - ₹2,500 per night</div>
              </div>
            </div>

            <div className="section-cta">
              <a href="/stays" className="btn btn-primary btn-lg">Browse Properties in These Areas →</a>
            </div>
          </div>
        </section>

        {/* Section 2: Hotel Price Guide */}
        <section className="section">
          <div className="container">
            <div className="sec-head">
              <div className="sec-label">Section 2</div>
              <h2>Hotel Price Guide</h2>
              <p className="sec-sub section-summary">Hotel prices in Ujjain vary significantly depending on location, amenities, season, and pilgrimage demand. Understanding typical pricing helps travelers plan realistic budgets and avoid last-minute surprises.</p>
            </div>

            <div className="price-table-wrap">
              <table className="price-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Price Range (Normal Days)</th>
                    <th>Price Range (Festival Season)</th>
                    <th>Typical Amenities</th>
                    <th>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Budget Hotel</strong></td>
                    <td>₹800 - ₹2,000</td>
                    <td>₹1,200 - ₹3,500</td>
                    <td>Basic room, fan/cooler, shared/private bath</td>
                    <td>Solo pilgrims, short stays, budget travelers</td>
                  </tr>
                  <tr>
                    <td><strong>Mid-Range Hotel</strong></td>
                    <td>₹2,000 - ₹5,000</td>
                    <td>₹3,500 - ₹8,000</td>
                    <td>AC, Wi-Fi, parking, restaurant, room service</td>
                    <td>Families, couples, comfortable stays</td>
                  </tr>
                  <tr>
                    <td><strong>Premium Hotel</strong></td>
                    <td>₹5,000 - ₹15,000+</td>
                    <td>₹8,000 - ₹25,000+</td>
                    <td>Luxury amenities, pool, gym, 24/7 service</td>
                    <td>VIP pilgrims, special occasions, luxury seekers</td>
                  </tr>
                  <tr>
                    <td><strong>Dharamshala</strong></td>
                    <td>₹300 - ₹1,000</td>
                    <td>₹500 - ₹1,500</td>
                    <td>Dormitory/private rooms, basic facilities</td>
                    <td>Budget pilgrims, groups, long stays</td>
                  </tr>
                  <tr>
                    <td><strong>Guest House</strong></td>
                    <td>₹1,000 - ₹3,500</td>
                    <td>₹1,500 - ₹5,500</td>
                    <td>Homely atmosphere, kitchen access, family rooms</td>
                    <td>Families, extended stays, home-like comfort</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="price-notes">
              <h4>💡 Festival Season Impact</h4>
              <ul>
                <li><strong>Mahashivratri:</strong> Prices increase 50-100%, book 2-3 months ahead</li>
                <li><strong>Shravan Month:</strong> 30-50% price hike, high demand every Monday</li>
                <li><strong>Simhastha:</strong> 100-200% increase, book 3-6 months in advance</li>
                <li><strong>Kartik Month:</strong> Moderate increase (20-30%), especially during Dev Deepawali</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Choosing the Right Accommodation */}
        <section className="section section-alt">
          <div className="container">
            <div className="sec-head">
              <div className="sec-label">Section 3</div>
              <h2>Choosing the Right Accommodation</h2>
              <p className="sec-sub section-summary">The ideal accommodation depends on your travel purpose rather than simply selecting the lowest price. Understanding your specific needs ensures a comfortable and spiritually fulfilling pilgrimage.</p>
            </div>

            <div className="choice-grid">
              <div className="choice-card">
                <div className="choice-icon"><Users size={48} /></div>
                <h3>For Families</h3>
                <ul>
                  <li>Spacious rooms with extra beds</li>
                  <li>Secure parking facility</li>
                  <li>Elevator access (for senior citizens)</li>
                  <li>Nearby restaurants and room service</li>
                  <li>Quieter neighborhoods (Freeganj, Nanakheda)</li>
                  <li>24/7 reception and security</li>
                </ul>
                <div className="choice-budget">Budget: ₹2,000 - ₹5,000/night</div>
              </div>

              <div className="choice-card">
                <div className="choice-icon"><User size={48} /></div>
                <h3>For Solo Pilgrims</h3>
                <ul>
                  <li>Walking distance to Mahakaleshwar Temple</li>
                  <li>Early check-in flexibility</li>
                  <li>Safe and secure location</li>
                  <li>Basic but clean facilities</li>
                  <li>Proximity to temple for multiple visits</li>
                  <li>Dharamshalas for budget option</li>
                </ul>
                <div className="choice-budget">Budget: ₹800 - ₹3,000/night</div>
              </div>

              <div className="choice-card">
                <div className="choice-icon"><User size={48} /></div>
                <h3>For Senior Citizens</h3>
                <ul>
                  <li>Lift/elevator facility essential</li>
                  <li>Minimal walking requirements</li>
                  <li>Ground floor rooms available</li>
                  <li>Near medical facilities</li>
                  <li>Quiet and peaceful surroundings</li>
                  <li>Room service and assistance</li>
                </ul>
                <div className="choice-budget">Budget: ₹2,500 - ₹6,000/night</div>
              </div>

              <div className="choice-card">
                <div className="choice-icon"><Users size={48} /></div>
                <h3>For Group Travelers</h3>
                <ul>
                  <li>Dharamshalas for economical stays</li>
                  <li>Multiple room booking discounts</li>
                  <li>Common dining areas</li>
                  <li>Group activity spaces</li>
                  <li>Parking for multiple vehicles</li>
                  <li>Kitchen facilities for self-catering</li>
                </ul>
                <div className="choice-budget">Budget: ₹500 - ₹2,500/person</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Distance from Mahakaleshwar Temple */}
        <section className="section">
          <div className="container">
            <div className="sec-head">
              <div className="sec-label">Section 4</div>
              <h2>Distance from Mahakaleshwar Temple</h2>
              <p className="sec-sub section-summary">Staying close to Mahakaleshwar Temple reduces travel time during early morning rituals and heavy festival crowds. Choosing the right balance between proximity and convenience depends on your itinerary and travel preferences.</p>
            </div>

            <div className="distance-guide">
              <div className="distance-item">
                <div className="distance-range">0-500m</div>
                <div className="distance-content">
                  <h3>Walking Distance - Temple Vicinity</h3>
                  <p><strong>Ideal for:</strong> Bhasma Aarti attendees, multiple daily temple visits</p>
                  <p><strong>Pros:</strong> No transport needed, immersive experience, easy for early morning rituals</p>
                  <p><strong>Cons:</strong> Premium pricing (₹2,000-₹8,000), crowded, limited parking, noise during festivals</p>
                  <div className="distance-tip">💡 Book 3-6 months ahead for festival seasons</div>
                </div>
              </div>

              <div className="distance-item">
                <div className="distance-range">500m-1.5km</div>
                <div className="distance-content">
                  <h3>Short Walk - Near Temple</h3>
                  <p><strong>Ideal for:</strong> Regular temple visits, families with children</p>
                  <p><strong>Pros:</strong> 5-10 minute walk, better value than immediate vicinity, easier parking</p>
                  <p><strong>Cons:</strong> Still premium pricing during festivals, walking required in heat/rain</p>
                  <div className="distance-tip">💡 Good balance of convenience and value</div>
                </div>
              </div>

              <div className="distance-item">
                <div className="distance-range">1.5-3km</div>
                <div className="distance-content">
                  <h3>Moderate Distance - Freeganj, Nanakheda</h3>
                  <p><strong>Ideal for:</strong> Families, senior citizens, extended stays</p>
                  <p><strong>Pros:</strong> Better value (₹1,200-₹4,000), quieter, excellent parking, good restaurants</p>
                  <p><strong>Cons:</strong> Requires auto/taxi (₹50-₹150), 10-20 minutes to temple</p>
                  <div className="distance-tip">💡 Best overall choice for most pilgrims</div>
                </div>
              </div>

              <div className="distance-item">
                <div className="distance-range">3-5km</div>
                <div className="distance-content">
                  <h3>Farther but Convenient - Station Road</h3>
                  <p><strong>Ideal for:</strong> Transport convenience, budget travelers</p>
                  <p><strong>Pros:</strong> Budget-friendly (₹800-₹3,000), easy transport access, good connectivity</p>
                  <p><strong>Cons:</strong> 15-25 minutes to temple, requires daily transport arrangement</p>
                  <div className="distance-tip">💡 Perfect for short stays and arrival/departure days</div>
                </div>
              </div>

              <div className="distance-item">
                <div className="distance-range">5km+</div>
                <div className="distance-content">
                  <h3>Outer Areas - Dewas Road</h3>
                  <p><strong>Ideal for:</strong> Private vehicle users, long-distance travelers</p>
                  <p><strong>Pros:</strong> Best value, excellent parking, peaceful, highway access</p>
                  <p><strong>Cons:</strong> Requires private vehicle, 20-30 minutes to temple</p>
                  <div className="distance-tip">💡 Ideal for road trips and car travelers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Seasonal Booking Guide */}
        <section className="section section-alt">
          <div className="container">
            <div className="sec-head">
              <div className="sec-label">Section 5</div>
              <h2>Seasonal Booking Guide</h2>
              <p className="sec-sub section-summary">Accommodation demand in Ujjain changes dramatically throughout the year. Early planning significantly improves accommodation choices and reduces overall travel costs.</p>
            </div>

            <div className="season-grid">
              <div className="season-card normal">
                <div className="season-header">
                  <h3>Normal Days</h3>
                  <div className="season-badge">Best Value</div>
                </div>
                <p><strong>When:</strong> Weekdays (Mon-Thu) outside festival seasons</p>
                <p><strong>Availability:</strong> Excellent, last-minute bookings possible</p>
                <p><strong>Pricing:</strong> Standard rates (best value)</p>
                <p><strong>Crowds:</strong> Minimal, peaceful temple visits</p>
                <div className="season-tip">✅ Book 1-2 weeks in advance for best options</div>
              </div>

              <div className="season-card moderate">
                <div className="season-header">
                  <h3>Weekends & Festivals</h3>
                  <div className="season-badge moderate-badge">Moderate Demand</div>
                </div>
                <p><strong>When:</strong> Weekends, Dev Deepawali, other minor festivals</p>
                <p><strong>Availability:</strong> Good but limited, book 2-4 weeks ahead</p>
                <p><strong>Pricing:</strong> 20-40% above normal</p>
                <p><strong>Crowds:</strong> Moderate, expect some waiting at temples</p>
                <div className="season-tip">⚠️ Confirm booking 1 month in advance</div>
              </div>

              <div className="season-card high">
                <div className="season-header">
                  <h3>Shravan Month</h3>
                  <div className="season-badge high-badge">High Demand</div>
                </div>
                <p><strong>When:</strong> July-August (all Mondays especially busy)</p>
                <p><strong>Availability:</strong> Limited, book 1-2 months ahead</p>
                <p><strong>Pricing:</strong> 30-50% above normal</p>
                <p><strong>Crowds:</strong> High, especially on Mondays and during sawan</p>
                <div className="season-tip">⚠️ Book 2 months in advance for Monday visits</div>
              </div>

              <div className="season-card peak">
                <div className="season-header">
                  <h3>Mahashivratri</h3>
                  <div className="season-badge peak-badge">Peak Season</div>
                </div>
                <p><strong>When:</strong> February-March (annual, date varies)</p>
                <p><strong>Availability:</strong> Very limited, book 2-3 months ahead</p>
                <p><strong>Pricing:</strong> 50-100% above normal</p>
                <p><strong>Crowds:</strong> Extremely high, temple open all night</p>
                <div className="season-tip">🚨 Book 3 months in advance, expect crowds</div>
              </div>

              <div className="season-card peak">
                <div className="season-header">
                  <h3>Simhastha (Kumbh Mela)</h3>
                  <div className="season-badge peak-badge">Extreme Demand</div>
                </div>
                <p><strong>When:</strong> 2028 (once every 12 years)</p>
                <p><strong>Availability:</strong> Extremely limited, book 6-12 months ahead</p>
                <p><strong>Pricing:</strong> 100-200% above normal</p>
                <p><strong>Crowds:</strong> Millions of pilgrims, city transforms</p>
                <div className="season-tip">🚨 Book immediately, consider alternative cities (Indore, Dewas)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Common Booking Mistakes */}
        <section className="section">
          <div className="container">
            <div className="sec-head">
              <div className="sec-label">Section 6</div>
              <h2>Common Booking Mistakes</h2>
              <p className="sec-sub section-summary">Many first-time visitors focus only on room prices while overlooking important factors. Taking time to compare these practical aspects often results in a more comfortable pilgrimage experience.</p>
            </div>

            <div className="mistakes-list">
              <div className="mistake-item">
                <div className="mistake-icon">❌</div>
                <div className="mistake-content">
                  <h3>Focusing Only on Price</h3>
                  <p>The cheapest option may lack essential amenities like hot water, parking, or cleanliness. A slightly higher-priced hotel with better facilities often provides better value, especially during festivals.</p>
                </div>
              </div>

              <div className="mistake-item">
                <div className="mistake-icon">❌</div>
                <div className="mistake-content">
                  <h3>Ignoring Actual Walking Distance</h3>
                  <p>"Near the temple" can mean 500m or 2km. Check actual distance on maps, consider heat, crowds, and your physical ability. During Simhastha, 1km can take 30+ minutes to walk.</p>
                </div>
              </div>

              <div className="mistake-item">
                <div className="mistake-icon">❌</div>
                <div className="mistake-content">
                  <h3>Not Checking Parking Availability</h3>
                  <p>During festivals, public parking fills up by 5 AM. Confirm if your hotel has dedicated parking or valet service. Without parking, you may need to park 1-2km away and walk.</p>
                </div>
              </div>

              <div className="mistake-item">
                <div className="mistake-icon">❌</div>
                <div className="mistake-content">
                  <h3>Overlooking Check-in Timings</h3>
                  <p>Many budget hotels have strict check-in times (12 PM or 2 PM). If you arrive early after a long journey, you may need to wait. Confirm early check-in options and charges.</p>
                </div>
              </div>

              <div className="mistake-item">
                <div className="mistake-icon">❌</div>
                <div className="mistake-content">
                  <h3>Ignoring Cancellation Policies</h3>
                  <p>Festival plans can change. Choose hotels with flexible cancellation policies. Some budget properties offer non-refundable discounts but may not accommodate changes.</p>
                </div>
              </div>

              <div className="mistake-item">
                <div className="mistake-icon">❌</div>
                <div className="mistake-content">
                  <h3>Not Considering Accessibility</h3>
                  <p>For senior citizens or differently-abled travelers, verify elevator availability, ground floor rooms, and wheelchair access. Not all hotels, especially older ones, have these facilities.</p>
                </div>
              </div>

              <div className="mistake-item">
                <div className="mistake-icon">❌</div>
                <div className="mistake-content">
                  <h3>Skipping Recent Reviews</h3>
                  <p>Read recent guest reviews (last 3-6 months) on cleanliness, service quality, and actual condition. Photos on booking sites may be outdated or misleading.</p>
                </div>
              </div>

              <div className="mistake-item">
                <div className="mistake-icon">❌</div>
                <div className="mistake-content">
                  <h3>Last-Minute Festival Bookings</h3>
                  <p>During Mahashivratri or Simhastha, waiting for last-minute deals often results in no availability or inflated prices. Early booking ensures better location, price, and amenities.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Family Accommodation Guide */}
        <section className="section section-alt">
          <div className="container">
            <div className="sec-head">
              <div className="sec-label">Section 7</div>
              <h2>Family Accommodation Guide</h2>
              <p className="sec-sub section-summary">Families visiting Ujjain typically benefit from accommodations offering larger rooms, elevators, secure parking, nearby dining options, and quieter neighborhoods.</p>
            </div>

            <div className="family-guide">
              <div className="family-intro">
                <h3>Essential Facilities for Families</h3>
                <p>When traveling with family, prioritize comfort, safety, and convenience over proximity alone. Here's what to look for:</p>
              </div>

              <div className="family-grid">
                <div className="family-card">
                  <div className="family-icon"><Home size={36} /></div>
                  <h4>Room Configuration</h4>
                  <ul>
                    <li>Extra beds or sofa beds available</li>
                    <li>Adequate space for luggage</li>
                    <li>Separate sleeping areas if possible</li>
                    <li>Child-friendly amenities (cribs, high chairs)</li>
                  </ul>
                </div>

                <div className="family-card">
                  <div className="family-icon"><ParkingCircle size={36} /></div>
                  <h4>Parking & Security</h4>
                  <ul>
                    <li>Secure, covered parking</li>
                    <li>24/7 security personnel</li>
                    <li>CCTV surveillance</li>
                    <li>Safe for children to move around</li>
                  </ul>
                </div>

                <div className="family-card">
                  <div className="family-icon"><UtensilsCrossed size={36} /></div>
                  <h4>Dining Options</h4>
                  <ul>
                    <li>In-house restaurant with variety</li>
                    <li>Nearby family restaurants</li>
                    <li>Room service available</li>
                    <li>Pure vegetarian options</li>
                  </ul>
                </div>

                <div className="family-card">
                  <div className="family-icon"><Heart size={36} /></div>
                  <h4>Medical & Emergency</h4>
                  <ul>
                    <li>Nearby hospitals/clinics</li>
                    <li>First aid at reception</li>
                    <li>Easy ambulance access</li>
                    <li>Pharmacy within walking distance</li>
                  </ul>
                </div>

                <div className="family-card">
                  <div className="family-icon"><Users size={36} /></div>
                  <h4>Accessibility</h4>
                  <ul>
                    <li>Elevator to all floors</li>
                    <li>Ground floor rooms available</li>
                    <li>Ramp access if needed</li>
                    <li>Spacious bathrooms</li>
                  </ul>
                </div>

                <div className="family-card">
                  <div className="family-icon">🧹</div>
                  <h4>Cleanliness & Comfort</h4>
                  <ul>
                    <li>Regular housekeeping</li>
                    <li>Hot water supply</li>
                    <li>Air conditioning/fans</li>
                    <li>Mosquito protection</li>
                  </ul>
                </div>
              </div>

              <div className="family-recommendation">
                <h4>Recommended Areas for Families</h4>
                <div className="family-areas">
                  <div className="family-area">
                    <strong>Freeganj</strong> - Top choice for families with excellent infrastructure
                  </div>
                  <div className="family-area">
                    <strong>Nanakheda</strong> - Peaceful, good value, family-friendly
                  </div>
                  <div className="family-area">
                    <strong>Dewas Road</strong> - Ideal for families with private vehicles
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Simhastha Accommodation Planning */}
        <section className="section">
          <div className="container">
            <div className="sec-head">
              <div className="sec-label">Section 8</div>
              <h2>Simhastha Accommodation Planning</h2>
              <p className="sec-sub section-summary">Simhastha is among the world's largest religious gatherings, attracting millions of pilgrims to Ujjain. Accommodation demand increases substantially, making advance planning essential.</p>
            </div>

            <div className="simhastha-guide">
              <div className="simhastha-timeline">
                <h3>Booking Timeline for Simhastha 2028</h3>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-marker">12+ Months</div>
                    <div className="timeline-content">
                      <h4>Early Planning</h4>
                      <p>Research areas, set budget, decide on accommodation type. Consider alternative cities (Indore, Dewas) as backup.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker">9-12 Months</div>
                    <div className="timeline-content">
                      <h4>Initial Booking</h4>
                      <p>Book premium and mid-range hotels. Confirm cancellation policies. Consider package deals with transport.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker">6-9 Months</div>
                    <div className="timeline-content">
                      <h4>Finalize Stay</h4>
                      <p>Book remaining accommodation. Arrange transport, local guides, and temple visit schedules.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker">3-6 Months</div>
                    <div className="timeline-content">
                      <h4>Confirm Everything</h4>
                      <p>Reconfirm all bookings. Prepare flexible plans for crowd conditions. Arrange backup accommodation.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="simhastha-tips">
                <h3>Essential Simhastha Tips</h3>
                <div className="tips-grid">
                  <div className="tip-card">
                    <div className="tip-icon"><BookMarked size={32} /></div>
                    <h4>Book Early</h4>
                    <p>Hotels fill up 6-12 months in advance. Don't wait for last-minute deals.</p>
                  </div>
                  <div className="tip-card">
                    <div className="tip-icon"><IndianRupee size={32} /></div>
                    <h4>Budget Extra</h4>
                    <p>Prices can be 2-3x normal. Budget ₹5,000-₹15,000+ per night for decent options.</p>
                  </div>
                  <div className="tip-card">
                    <div className="tip-icon"><Hotel size={32} /></div>
                    <h4>Consider Alternatives</h4>
                    <p>Book in Indore (45km) or Dewas (35km) and commute daily. Better value and availability.</p>
                  </div>
                  <div className="tip-card">
                    <div className="tip-icon"><Car size={32} /></div>
                    <h4>Arrange Transport</h4>
                    <p>Public transport will be overwhelmed. Book private cabs or use your own vehicle.</p>
                  </div>
                  <div className="tip-card">
                    <div className="tip-icon"><RefreshCw size={32} /></div>
                    <h4>Flexible Plans</h4>
                    <p>Crowd conditions can change. Keep buffer days and have backup accommodation options.</p>
                  </div>
                  <div className="tip-card">
                    <div className="tip-icon"><Phone size={32} /></div>
                    <h4>Direct Contact</h4>
                    <p>Contact hotels directly for Simhastha packages. They often offer better deals than online platforms.</p>
                  </div>
                </div>
              </div>

              <div className="simhastha-categories">
                <h3>Accommodation Categories During Simhastha</h3>
                <div className="categories-list">
                  <div className="category-item">
                    <strong>Budget (Dharamshalas):</strong> ₹1,000-₹3,000/night - Book 6+ months ahead, basic facilities
                  </div>
                  <div className="category-item">
                    <strong>Mid-Range Hotels:</strong> ₹5,000-₹12,000/night - Good balance of comfort and value
                  </div>
                  <div className="category-item">
                    <strong>Premium Hotels:</strong> ₹12,000-₹30,000+/night - Luxury experience, book 9+ months ahead
                  </div>
                  <div className="category-item">
                    <strong>Temporary Camps:</strong> ₹2,000-₹8,000/night - Special Simhastha arrangements with basic amenities
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Accommodation Checklist */}
        <section className="section section-alt">
          <div className="container">
            <div className="sec-head">
              <div className="sec-label">Section 9</div>
              <h2>Accommodation Checklist</h2>
              <p className="sec-sub section-summary">Before confirming your stay, compare these essential factors to ensure your accommodation matches both your budget and pilgrimage requirements.</p>
            </div>

            <div className="checklist-container">
              <div className="checklist-category">
                <h4>📍 Location & Distance</h4>
                <div className="checklist-items">
                  <label className="checklist-item">
                    <input type="checkbox" />
                    <span>Distance from Mahakaleshwar Temple</span>
                  </label>
                  <label className="checklist-item">
                    <input type="checkbox" />
                    <span>Walking distance feasibility</span>
                  </label>
                  <label className="checklist-item">
                    <input type="checkbox" />
                    <span>Transport connectivity</span>
                  </label>
                  <label className="checklist-item">
                    <input type="checkbox" />
                    <span>Nearby restaurants and shops</span>
                  </label>
                </div>
              </div>

              <div className="checklist-category">
                <h4>🅿️ Parking & Access</h4>
                <div className="checklist-items">
                  <label className="checklist-item">
                    <input type="checkbox" />
                    <span>Parking availability (confirmed)</span>
                  </label>
                  <label className="checklist-item">
                    <input type="checkbox" />
                    <span>Parking security</span>
                  </label>
                  <label className="checklist-item">
                    <input type="checkbox" />
                    <span>Valet service during festivals</span>
                  </label>
                  <label className="checklist-item">
                    <input type="checkbox" />
                    <span>Alternative parking options</span>
                  </label>
                </div>
              </div>

              <div className="checklist-category">
                <h4>🏨 Room Facilities</h4>
                <div className="checklist-items">
                  <label className="checklist-item">
                    <input type="checkbox" />
                    <span>Room capacity (beds/occupancy)</span>
                  </label>
                  <label className="checklist-item">
                    <input type="checkbox" />
                    <span>Hot water supply (24/7 or timed)</span>
                  </label>
                  <label className="checklist-item">
                    <input type="checkbox" />
                    <span>Wi-Fi availability and speed</span>
                  </label>
                  <label className="checklist-item">
                    <input type="checkbox" />
                    <span>Air conditioning or fans</span>
                  </label>
                  <label className="checklist-item">
                    <input type="checkbox" />
                    <span>Cleanliness and hygiene</span>
                  </label>
                </div>
              </div>

              <div className="checklist-category">
                <h4>👨‍👩‍👧‍👦 Family Suitability</h4>
                <div className="checklist-items">
                  <label className="checklist-item">
                    <input type="checkbox" />
                    <span>Elevator/lift access</span>
                  </label>
                  <label className="checklist-item">
                    <input type="checkbox" />
                    <span>Child-friendly amenities</span>
                  </label>
                  <label className="checklist-item">
                    <input type="checkbox" />
                    <span>Quiet surroundings</span>
                  </label>
                  <label className="checklist-item">
                    <input type="checkbox" />
                    <span>Nearby medical facilities</span>
                  </label>
                </div>
              </div>

              <div className="checklist-category">
                <h4>📋 Booking & Policies</h4>
                <div className="checklist-items">
                  <label className="checklist-item">
                    <input type="checkbox" />
                    <span>Cancellation policy clarity</span>
                  </label>
                  <label className="checklist-item">
                    <input type="checkbox" />
                    <span>Check-in/check-out timings</span>
                  </label>
                  <label className="checklist-item">
                    <input type="checkbox" />
                    <span>Early check-in possibility</span>
                  </label>
                  <label className="checklist-item">
                    <input type="checkbox" />
                    <span>Verified guest reviews</span>
                  </label>
                </div>
              </div>

              <div className="checklist-category">
                <h4>⭐ Additional Services</h4>
                <div className="checklist-items">
                  <label className="checklist-item">
                    <input type="checkbox" />
                    <span>Room service availability</span>
                  </label>
                  <label className="checklist-item">
                    <input type="checkbox" />
                    <span>Travel desk/guide services</span>
                  </label>
                  <label className="checklist-item">
                    <input type="checkbox" />
                    <span>Temple visit arrangements</span>
                  </label>
                  <label className="checklist-item">
                    <input type="checkbox" />
                    <span>Laundry services</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Find Your Perfect Stay?</h2>
              <p>Once you've understood the best areas, pricing, travel tips, and accommodation options, the next step is comparing verified properties that match your travel needs. Browse hotels, guest houses, homestays, dharamshalas, and pilgrim accommodations available across Ujjain to find the most suitable stay for your journey.</p>
              <div className="cta-buttons">
                <a href="/stays" className="btn btn-primary btn-xl">Browse All Accommodations →</a>
                <a href="/stays/list?type=hotel" className="btn btn-outline btn-xl">View Hotels Only</a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="section section-alt">
          <div className="container">
            <div className="sec-head center">
              <div className="sec-label">Related Guides</div>
              <h2>Plan Your Complete Pilgrimage</h2>
              <p className="sec-sub">Everything you need for a smooth and spiritually fulfilling visit to Ujjain</p>
            </div>

            <div className="related-guides-grid">
              <a href="/guide/bhasma-aarti" className="guide-card">
                <div className="guide-icon"><HelpCircle size={36} /></div>
                <h4>Bhasma Aarti Guide</h4>
                <p>Timings, booking, and ceremony details</p>
              </a>

              <a href="/guide/how-to-reach-ujjain" className="guide-card">
                <div className="guide-icon"><Navigation size={36} /></div>
                <h4>How to Reach Ujjain</h4>
                <p>By air, train, road, and local transport</p>
              </a>

              <a href="/guide/mahakaleshwar-temple" className="guide-card">
                <div className="guide-icon"><Building2 size={36} /></div>
                <h4>Mahakaleshwar Temple</h4>
                <p>History, timings, and darshan information</p>
              </a>

              <a href="/guide/simhastha-2028" className="guide-card">
                <div className="guide-icon"><Tent size={36} /></div>
                <h4>Simhastha 2028</h4>
                <p>Complete guide to the Kumbh Mela</p>
              </a>

              <a href="/guide/ujjain-local-transport" className="guide-card">
                <div className="guide-icon"><Car size={36} /></div>
                <h4>Local Transport</h4>
                <p>Auto-rickshaws, taxis, and bus services</p>
              </a>

              <a href="/guide/parking-near-mahakal" className="guide-card">
                <div className="guide-icon"><ParkingCircle size={36} /></div>
                <h4>Parking Guide</h4>
                <p>Parking options near temples and areas</p>
              </a>

              <a href="/guide/best-restaurants-in-ujjain" className="guide-card">
                <div className="guide-icon"><UtensilsCrossed size={36} /></div>
                <h4>Best Restaurants</h4>
                <p>Top dining options in Ujjain</p>
              </a>

              <a href="/stays" className="guide-card">
                <div className="guide-icon"><Hotel size={36} /></div>
                <h4>All Accommodations</h4>
                <p>Browse verified hotels and stays</p>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container">
            <div className="sec-head center">
              <div className="sec-label">Frequently Asked Questions</div>
              <h2>Common Questions About Ujjain Hotels</h2>
            </div>

            <div className="faq-list">
              <div className="faq-item">
                <h3>Which area is best to stay in Ujjain?</h3>
                <p>The best area depends on your travel purpose. Pilgrims attending Bhasma Aarti usually prefer staying within walking distance of Mahakaleshwar Temple, while families often choose Freeganj or Nanakheda for quieter surroundings, better parking, and wider roads. Travelers arriving by train may find Railway Station Road more convenient, whereas Dewas Road suits visitors with private vehicles. Consider your itinerary, budget, and transportation before selecting accommodation.</p>
              </div>

              <div className="faq-item">
                <h3>How far should I stay from Mahakaleshwar Temple?</h3>
                <p>If your main purpose is Mahakal Darshan or Bhasma Aarti, staying within 500 metres to 1 kilometre is convenient and reduces travel time. Hotels located 2–3 kilometres away usually offer better prices, larger rooms, and easier parking while remaining easily accessible by auto-rickshaw or taxi. Choose the distance that best matches your schedule and comfort requirements.</p>
              </div>

              <div className="faq-item">
                <h3>What is the average hotel price in Ujjain?</h3>
                <p>Hotel prices vary according to season, location, and amenities. Budget hotels generally start around ₹800–₹2,000 per night, mid-range properties range from ₹2,000–₹5,000, while premium hotels may cost ₹5,000 or more. During Mahashivratri, Shravan, and Simhastha, prices often increase considerably because of high demand, so early booking is recommended.</p>
              </div>

              <div className="faq-item">
                <h3>Can I find hotels under ₹1000 in Ujjain?</h3>
                <p>Yes. Budget hotels, guest houses, and dharamshalas offering rooms below ₹1000 are available, especially away from the immediate Mahakal Temple area. Facilities may be basic, so compare cleanliness, guest reviews, hot water availability, and security before making your booking. Availability is usually lower during festivals and weekends.</p>
              </div>

              <div className="faq-item">
                <h3>When should I book hotels during Simhastha?</h3>
                <p>Accommodation should ideally be booked at least three to six months before Simhastha. Millions of devotees visit Ujjain during this period, causing hotels, guest houses, and dharamshalas to fill quickly. Booking early gives you better prices, more accommodation choices, and greater flexibility regarding room type and location.</p>
              </div>

              <div className="faq-item">
                <h3>Are hotels available near Ujjain Railway Station?</h3>
                <p>Yes. The Railway Station area has several budget and mid-range hotels suitable for pilgrims and tourists arriving by train. These hotels provide convenient access to local transport and can usually reach Mahakaleshwar Temple within a short drive. Many travelers prefer this location because of its transport connectivity and availability of restaurants.</p>
              </div>

              <div className="faq-item">
                <h3>Which hotels are best for families visiting Ujjain?</h3>
                <p>Family travelers should look for hotels with spacious rooms, elevators, parking, nearby restaurants, and 24-hour reception. Areas like Freeganj and Nanakheda are generally quieter and more comfortable than the crowded temple vicinity. If travelling with children or elderly family members, prioritize accessibility, cleanliness, and reliable customer service.</p>
              </div>

              <div className="faq-item">
                <h3>Which hotels are best for senior citizens?</h3>
                <p>Senior citizens should choose hotels offering lift facilities, minimal stairs, comfortable bedding, hot water, nearby transportation, and easy access to Mahakaleshwar Temple. Staying slightly away from extremely crowded streets often provides a quieter and more relaxed experience, especially during religious festivals and weekends.</p>
              </div>

              <div className="faq-item">
                <h3>Which hotels are suitable for solo travellers?</h3>
                <p>Solo travelers generally prefer hotels with verified reviews, secure premises, 24-hour reception, CCTV surveillance, and convenient public transport access. Staying near major roads or popular tourist areas usually provides better connectivity and safety. Always verify reviews and avoid booking unknown properties without sufficient guest feedback.</p>
              </div>

              <div className="faq-item">
                <h3>Which hotels are suitable for couples visiting Ujjain?</h3>
                <p>Many hotels in Ujjain welcome couples who carry valid government-issued photo identification and comply with hotel policies. Before booking, confirm the property's check-in requirements, cancellation policy, parking availability, and guest rules. Reading recent guest reviews can help you choose a comfortable and professionally managed property.</p>
              </div>

              <div className="faq-item">
                <h3>Which hotels are best for group bookings?</h3>
                <p>Large families, pilgrimage groups, and tour operators should consider hotels with multiple room options, dormitories, banquet facilities, and dedicated parking. Booking well in advance usually secures better pricing and ensures rooms remain available during weekends and major religious festivals.</p>
              </div>

              <div className="faq-item">
                <h3>Can I find budget accommodation near Mahakal Temple?</h3>
                <p>Yes. Several budget hotels, guest houses, and dharamshalas operate within walking distance of Mahakaleshwar Temple. These accommodations are popular among pilgrims due to their convenience. During peak seasons, however, rooms sell out quickly, making advance reservations highly advisable.</p>
              </div>

              <div className="faq-item">
                <h3>What facilities should I check before booking a hotel?</h3>
                <p>Before confirming your booking, verify room cleanliness, parking availability, Wi-Fi, hot water, air conditioning, check-in and check-out timings, cancellation policy, nearby restaurants, elevator availability, and recent guest reviews. These factors significantly influence the overall quality of your stay.</p>
              </div>

              <div className="faq-item">
                <h3>Are parking facilities available at hotels in Ujjain?</h3>
                <p>Many hotels provide parking, although availability varies by property and location. Hotels located in Freeganj, Nanakheda, and Dewas Road generally have better parking arrangements than those near Mahakaleshwar Temple. During festivals, confirm parking availability before arrival to avoid inconvenience.</p>
              </div>

              <div className="faq-item">
                <h3>Which area of Ujjain is least crowded for accommodation?</h3>
                <p>Travelers seeking peaceful accommodation usually prefer Freeganj, Nanakheda, or Dewas Road. These areas experience comparatively less congestion than the immediate Mahakal Temple surroundings while still offering convenient access to major attractions, restaurants, and transportation services.</p>
              </div>

            </div>
            <div className="faq-item">
              <h3>How much should I budget for a trip to Ujjain?</h3>
              <p>Your budget depends on your travel style and the season. Budget travelers can comfortably visit Ujjain for ₹1,500–₹3,000 per day, including accommodation, meals, and local transport. Mid-range travelers should plan around ₹3,000–₹6,000 per day, while premium travelers may spend ₹6,000 or more. During Shravan, Mahashivratri, and Simhastha, accommodation prices rise significantly, so booking early helps reduce overall travel expenses.</p>
            </div>

              <div className="faq-item">
                <h3>What is the cheapest time to book hotels in Ujjain?</h3>
                <p>The most affordable hotel rates are generally available during weekdays outside major religious festivals. Avoid peak periods such as Mahashivratri, Shravan Mondays, long weekends, and Simhastha if you're looking for lower prices. Booking your hotel two to four weeks in advance during regular months often provides the best combination of availability and pricing.</p>
              </div>

              <div className="faq-item">
                <h3>Do hotel prices increase during Shravan?</h3>
                <p>Yes. Shravan is one of the busiest pilgrimage seasons in Ujjain, attracting thousands of devotees every Monday and throughout the month. Hotel demand increases considerably, especially near Mahakaleshwar Temple, causing room rates to rise and availability to decrease. Booking several weeks in advance is strongly recommended during this period.</p>
              </div>

              <div className="faq-item">
                <h3>How expensive are hotels during Simhastha?</h3>
                <p>During Simhastha, accommodation demand reaches its highest level as millions of pilgrims visit Ujjain. Hotels, guest houses, dharamshalas, and temporary accommodations are booked months in advance. Prices vary according to location and facilities, but premium locations near major ghats and temples generally experience the highest demand. Early planning is essential to secure suitable accommodation.</p>
              </div>

              <div className="faq-item">
                <h3>Are luxury hotels worth booking in Ujjain?</h3>
                <p>Luxury hotels offer larger rooms, premium amenities, restaurants, dedicated parking, enhanced security, and higher service standards. They are ideal for families, elderly travelers, business visitors, and those seeking a comfortable pilgrimage experience. If your budget allows, premium accommodation can reduce travel stress, particularly during crowded festival seasons.</p>
              </div>

              <div className="faq-item">
                <h3>Should I choose an AC or Non-AC hotel room?</h3>
                <p>During summer months from March to June, air-conditioned rooms provide significantly greater comfort due to high daytime temperatures. During winter, many travelers comfortably choose non-AC rooms. Your decision should consider weather conditions, personal comfort preferences, and overall travel budget.</p>
              </div>

              <div className="faq-item">
                <h3>Can I negotiate hotel prices in Ujjain?</h3>
                <p>Some independent hotels and guest houses may offer discounts for direct bookings, extended stays, or group reservations. However, negotiated prices are generally less common during major festivals and weekends because demand remains high. Comparing multiple properties before booking often helps you find better value.</p>
              </div>

              <div className="faq-item">
                <h3>Are there government accommodations available in Ujjain?</h3>
                <p>Government-operated guest houses and tourism accommodations may be available depending on the season and availability. These properties usually provide basic facilities at reasonable prices but often require advance reservations. During major events, temporary accommodations may also be arranged by local authorities for pilgrims.</p>
              </div>

              <div className="faq-item">
                <h3>Which hotels provide the best value for money?</h3>
                <p>The best value hotels balance price, cleanliness, location, service quality, parking, and guest reviews rather than simply offering the lowest rates. Mid-range hotels in areas such as Freeganj and Nanakheda often provide spacious rooms, reliable amenities, and easier transportation while remaining reasonably priced.</p>
              </div>

              <div className="faq-item">
                <h3>Is breakfast usually included with hotel bookings?</h3>
                <p>Breakfast policies vary between hotels. Some properties include complimentary breakfast in the room tariff, while others charge separately. Before confirming your reservation, check what meals are included, serving times, and whether vegetarian options are available if that is important for your visit.</p>
              </div>

              <div className="faq-item">
                <h3>Which hotels are within walking distance of Mahakal Temple?</h3>
                <p>Several hotels, guest houses, and dharamshalas are located within approximately 500 metres to 1 kilometre of Mahakaleshwar Temple. These accommodations are particularly popular among pilgrims attending early morning rituals. Due to high demand, nearby properties are often booked first during weekends and religious festivals.</p>
              </div>

              <div className="faq-item">
                <h3>Which hotels are best for attending Bhasma Aarti?</h3>
                <p>If you plan to attend Bhasma Aarti, choose accommodation within walking distance of Mahakaleshwar Temple. This minimizes travel time during early morning hours and helps avoid traffic congestion. Verify your Bhasma Aarti booking separately, as hotel proximity does not guarantee entry to the ritual.</p>
              </div>

              <div className="faq-item">
                <h3>Do hotels arrange Bhasma Aarti bookings?</h3>
                <p>Some hotels may assist guests with information regarding the Bhasma Aarti booking process, but official entry permissions are managed through authorized booking systems. Always verify booking procedures using official sources rather than relying solely on third-party promises or unofficial agents.</p>
              </div>

              <div className="faq-item">
                <h3>Which hotels are closest to Mahakal Corridor?</h3>
                <p>Hotels located near Mahakaleshwar Temple generally provide the quickest access to the Mahakal Lok Corridor. Staying nearby allows visitors to explore the corridor comfortably during the morning or evening while reducing travel time, particularly during weekends and festive occasions.</p>
              </div>

              <div className="faq-item">
                <h3>Is it better to stay near Mahakal Temple or in other parts of Ujjain?</h3>
                <p>Staying near Mahakal Temple is ideal for pilgrims attending multiple temple visits or Bhasma Aarti, while accommodations in areas such as Freeganj, Nanakheda, and Dewas Road often provide larger rooms, quieter surroundings, easier parking, and better value. The best choice depends on whether convenience or comfort is your highest priority.</p>
              </div>
              <div className="faq-item">
                <h3>How early should I leave my hotel for Bhasma Aarti?</h3>
                <p>If you have a confirmed Bhasma Aarti booking, it is advisable to leave your hotel well before the reporting time mentioned in your booking instructions. Guests staying within walking distance of Mahakaleshwar Temple usually have a smoother experience, while those staying farther away should consider additional travel time, especially during weekends, Shravan, Mahashivratri, and Simhastha when traffic restrictions and crowds are common.</p>
              </div>

              <div className="faq-item">
                <h3>Which hotels are near Kal Bhairav Temple?</h3>
                <p>Several hotels across central Ujjain provide convenient access to Kal Bhairav Temple by road. Travelers planning to visit multiple temples often choose accommodation near Mahakaleshwar Temple or central city areas, allowing them to easily reach Kal Bhairav, Harsiddhi Temple, Ram Ghat, and other major attractions during the same trip.</p>
              </div>

              <div className="faq-item">
                <h3>Which hotels are near Harsiddhi Temple?</h3>
                <p>Harsiddhi Temple is located close to Mahakaleshwar Temple, making hotels near the temple complex an excellent choice for pilgrims visiting both shrines. Staying nearby allows visitors to comfortably explore the temple area on foot while avoiding repeated transportation during busy pilgrimage seasons.</p>
              </div>

              <div className="faq-item">
                <h3>Which hotels are near Ram Ghat?</h3>
                <p>Ram Ghat is one of Ujjain's most visited spiritual destinations, especially during evening Aarti and religious festivals. Hotels near Mahakaleshwar Temple or the old city generally provide easier access to Ram Ghat. Visitors interested in attending the evening Aarti often prefer accommodation within a short driving or walking distance.</p>
              </div>

              <div className="faq-item">
                <h3>Can I visit Mahakal and Omkareshwar in one trip?</h3>
                <p>Yes. Many pilgrims combine Mahakaleshwar Temple in Ujjain with Omkareshwar Jyotirlinga in a single itinerary. Since Omkareshwar is approximately 140 kilometres away, travelers often spend one or two nights in Ujjain before continuing their journey. Planning accommodation and transport in advance helps make the trip more comfortable.</p>
              </div>

              <div className="faq-item">
                <h3>Which area is considered the safest to stay in Ujjain?</h3>
                <p>Popular localities such as Freeganj, Nanakheda, and the areas around Mahakaleshwar Temple are generally considered safe for tourists. Choosing verified hotels with good guest reviews, CCTV surveillance, 24-hour reception, and proper security arrangements is always recommended, particularly for solo travelers and families.</p>
              </div>

              <div className="faq-item">
                <h3>Where should families stay in Ujjain?</h3>
                <p>Families usually prefer accommodations in Freeganj, Nanakheda, or well-rated hotels near Mahakaleshwar Temple offering spacious rooms, elevators, secure parking, nearby restaurants, and peaceful surroundings. These locations provide a balance between convenience and comfort for travelers with children or elderly family members.</p>
              </div>

              <div className="faq-item">
                <h3>Which hotels are located near Ujjain Bus Stand?</h3>
                <p>Hotels near Nanakheda Bus Stand and Dewas Road provide convenient accommodation for travelers arriving by bus. These areas have good transport connectivity, restaurants, and access to local attractions. Many budget and mid-range hotels are available, making them suitable for both short and extended stays.</p>
              </div>

              <div className="faq-item">
                <h3>Which hotels are available in Freeganj?</h3>
                <p>Freeganj is one of the most popular areas for accommodation in Ujjain because it offers a wide range of budget, mid-range, and premium hotels. The locality has wider roads, shopping areas, restaurants, parking facilities, and convenient access to Mahakaleshwar Temple, making it a preferred choice for many visitors.</p>
              </div>

              <div className="faq-item">
                <h3>Which hotels are located in Nanakheda?</h3>
                <p>Nanakheda has several hotels suitable for families, business travelers, and tourists looking for quieter surroundings. The area provides better road connectivity, comparatively less congestion, and convenient access to the city's major attractions through taxis, auto-rickshaws, and private vehicles.</p>
              </div>

              <div className="faq-item">
                <h3>Which hotels are available on Dewas Road?</h3>
                <p>Dewas Road offers multiple accommodation options for travelers arriving by private vehicles. Hotels in this area often provide spacious parking, larger properties, and comparatively peaceful surroundings. Although located slightly away from Mahakaleshwar Temple, the area remains well connected through local transportation.</p>
              </div>

              <div className="faq-item">
                <h3>Which hotels offer the best parking facilities?</h3>
                <p>Hotels situated in Freeganj, Nanakheda, and Dewas Road generally offer better parking facilities than properties located in the narrow lanes surrounding Mahakaleshwar Temple. If you are traveling by car, always confirm parking availability before booking, especially during major festivals and weekends.</p>
              </div>

              <div className="faq-item">
                <h3>Which area has the best restaurants in Ujjain?</h3>
                <p>Freeganj is widely known for its variety of restaurants, cafés, and family dining options. Hotels located in this area provide convenient access to vegetarian restaurants, local street food, and multi-cuisine establishments. Travelers staying near Mahakaleshwar Temple also have numerous food options within walking distance.</p>
              </div>

              <div className="faq-item">
                <h3>How many days are enough to explore Ujjain?</h3>
                <p>A two-day trip is generally sufficient to visit Mahakaleshwar Temple, Mahakal Lok, Kal Bhairav Temple, Harsiddhi Temple, Ram Ghat, Sandipani Ashram, and other major attractions. Travelers planning to attend Bhasma Aarti or visit Omkareshwar often extend their stay to three or four days for a more relaxed pilgrimage.</p>
              </div>

              <div className="faq-item">
                <h3>Should I book my hotel in advance before visiting Ujjain?</h3>
                <p>Yes. Advance booking is strongly recommended throughout the year and becomes essential during weekends, Shravan, Mahashivratri, long holidays, and Simhastha. Reserving your accommodation early provides better room choices, lower prices, and greater flexibility while reducing the risk of last-minute availability issues.</p>
              </div>
              <div className="faq-item">
                <h3>Can I find hotels after reaching Ujjain without prior booking?</h3>
                <p>Yes, hotels may be available if you arrive without a reservation, especially during regular weekdays. However, availability cannot be guaranteed during weekends, Shravan, Mahashivratri, long holidays, or Simhastha when thousands of pilgrims visit the city. Booking in advance helps secure better room options, preferred locations, and competitive prices while reducing the stress of searching for accommodation after arrival.</p>
              </div>

              <div className="faq-item">
                <h3>What should I check before confirming a hotel booking?</h3>
                <p>Before booking, compare room size, cleanliness, guest reviews, parking availability, check-in and check-out timings, cancellation policy, hot water, Wi-Fi, air conditioning, nearby restaurants, and the hotel's actual distance from Mahakaleshwar Temple. Reading recent guest reviews and checking verified photos can help avoid unpleasant surprises during your stay.</p>
              </div>

              <div className="faq-item">
                <h3>Which cancellation policy is best while booking hotels?</h3>
                <p>If your travel dates are not completely fixed, choose a hotel with free cancellation or flexible modification options. Flexible booking policies are especially useful during monsoon, festival seasons, or long-distance travel where transportation schedules may change unexpectedly. Always read the cancellation terms before making payment.</p>
              </div>

              <div className="faq-item">
                <h3>Are online hotel bookings safe in Ujjain?</h3>
                <p>Yes, online bookings are generally safe when made through trusted travel platforms or directly with verified hotels. Before paying, confirm the hotel's contact details, guest reviews, photographs, location, and cancellation policy. Avoid transferring money to unknown personal accounts or relying on unofficial booking agents.</p>
              </div>

              <div className="faq-item">
                <h3>How can I avoid fake hotel listings?</h3>
                <p>Choose verified hotels with genuine guest reviews, multiple recent photographs, proper contact information, and transparent pricing. Be cautious of properties that ask for full payment through personal accounts or offer unusually low prices without verification. Comparing listings across trusted sources helps reduce the risk of fraudulent bookings.</p>
              </div>

              <div className="faq-item">
                <h3>What documents are required during hotel check-in?</h3>
                <p>Most hotels require every adult guest to present a valid government-issued photo identity card during check-in. Accepted documents commonly include Aadhaar Card, Passport, Driving Licence, or Voter ID. International travelers should carry their passport and any additional documents required under local regulations.</p>
              </div>

              <div className="faq-item">
                <h3>Is early check-in available in hotels?</h3>
                <p>Early check-in depends on room availability and each hotel's policy. Some hotels provide complimentary early check-in if rooms are vacant, while others may charge an additional fee. If you expect to arrive early, contact the hotel in advance to confirm availability and avoid waiting after reaching Ujjain.</p>
              </div>

              <div className="faq-item">
                <h3>Can I extend my hotel stay after check-in?</h3>
                <p>Many hotels allow guests to extend their stay if rooms remain available. During weekends and festival periods, extensions may not always be possible because hotels often reach full occupancy. Inform the hotel as early as possible if you plan to stay longer than originally booked.</p>
              </div>

              <div className="faq-item">
                <h3>Do hotels in Ujjain provide free Wi-Fi?</h3>
                <p>Most mid-range and premium hotels offer complimentary Wi-Fi, while some budget accommodations may provide limited internet access or charge additional fees. If reliable internet is important for work or communication, confirm Wi-Fi availability and speed before finalizing your reservation.</p>
              </div>

              <div className="faq-item">
                <h3>Do hotels provide room service?</h3>
                <p>Room service is commonly available in mid-range and premium hotels, although timings and menu options differ between properties. Budget hotels may have limited food service or partner with nearby restaurants. Checking available dining facilities before booking helps avoid inconvenience during your stay.</p>
              </div>

              <div className="faq-item">
                <h3>Do hotels in Ujjain serve vegetarian food?</h3>
                <p>Yes. Since Ujjain is an important religious city, most hotels either have vegetarian restaurants or are located near restaurants serving vegetarian meals. Many accommodations also provide Jain food on request or guide guests to nearby dining options suitable for pilgrims and families.</p>
              </div>

              <div className="faq-item">
                <h3>Which hotels are wheelchair friendly?</h3>
                <p>Several modern hotels provide wheelchair-accessible entrances, elevators, ramps, and accessible rooms. However, accessibility features vary from one property to another. Travelers with mobility requirements should contact the hotel directly before booking to confirm the availability of suitable facilities.</p>
              </div>

              <div className="faq-item">
                <h3>Do hotels offer 24-hour reception?</h3>
                <p>Many hotels in Ujjain operate a 24-hour front desk, allowing guests to check in late at night or receive assistance whenever needed. Smaller guest houses and budget accommodations may have limited reception hours, so confirm arrival timings with the property before traveling.</p>
              </div>

              <div className="faq-item">
                <h3>Are pet-friendly hotels available in Ujjain?</h3>
                <p>Only a limited number of hotels allow pets, and their policies differ regarding pet size, additional charges, and permitted areas. If you plan to travel with a pet, always contact the hotel before booking to verify its pet policy and any applicable restrictions.</p>
              </div>

              <div className="faq-item">
                <h3>Do hotels provide airport or railway station pickup?</h3>
                <p>Some premium hotels and selected mid-range properties offer pickup and drop services from Ujjain Railway Station or nearby airports upon request. These services may be complimentary or chargeable depending on the property. Confirm availability and pricing with the hotel before your arrival to ensure a smooth transfer.</p>
                           </div>      {/* faq-list */}
            </div>        {/* container */}
          </section>
        </div>

    </>
  );
}

export default HotelsPage;