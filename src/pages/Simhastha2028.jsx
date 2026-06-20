import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
  SNAN_DATES,
  DARSHAN_FEEDS,
  PLACE_BG,
  HERITAGE_BG,
  HOTELS_DATA,
  heritageList,
  CULTURE_DATA
} from '../data/simhasthaData';
import Countdown from '../components/common/Countdown';
import "../styles/simhastha2028.css";

function Simhastha2028Page() {
  const navigate = useNavigate();
  
  const [hotelPage, setHotelPage] = useState(1);
  const hotelsPerPage = 4;
  const totalPages = Math.ceil(HOTELS_DATA.length / hotelsPerPage);
  const [modalData, setModalData] = useState(null);

  const paginatedHotels = HOTELS_DATA.slice(
  (hotelPage - 1) * hotelsPerPage,
  hotelPage * hotelsPerPage
  );
  const [activeTab, setActiveTab] = useState("temples");
  
  const [selectedHeritage, setSelectedHeritage] = useState(null);
  const tabData = {
    temples: [
      { icon: "🕉️", name: "Mahakaleshwar Jyotirlinga", hi: "महाकालेश्वर ज्योतिर्लिंग", desc: "One of the 12 Jyotirlingas. Bhasma Aarti at dawn.", detail: "Bhasma Aarti: 4 AM" },
      { icon: "🌺", name: "Harsiddhi Mata Mandir",     hi: "हरसिद्धि माता मंदिर",    desc: "One of the 51 Shakti Peethas.",        detail: "Shakti Peetha" },
      { icon: "🔱", name: "Kal Bhairav Temple",        hi: "काल भैरव मंदिर",          desc: "Guardian deity of Ujjain.",            detail: "Open: 5 AM – 10 PM" },
      { icon: "📚", name: "Sandipani Ashram",          hi: "सांदीपनि आश्रम",           desc: "Ancient gurukul of Lord Krishna.",    detail: "Historical site" },
      { icon: "⭐", name: "Mangalnath Temple",         hi: "मंगलनाथ मंदिर",            desc: "Birthplace of Mars (Mangal).",         detail: "Special puja" },
      { icon: "🐘", name: "Chintaman Ganesh",          hi: "चिंतामन गणेश",             desc: "Self-manifested ancient idol.",        detail: "Open: 5 AM – 9 PM" },
    ],
    ghats: [
      { icon: "🌅", name: "Ram Ghat",         hi: "राम घाट",         desc: "Primary Simhastha Snan site.",     detail: "Aarti: 7 PM" },
      { icon: "🌊", name: "Triveni Ghat",     hi: "त्रिवेणी घाट",   desc: "Confluence of three streams.",    detail: "Pind Daan" },
      { icon: "🏛️", name: "Narsimha Ghat",    hi: "नरसिंह घाट",     desc: "Significant Snan site.",          detail: "Vaishakh Purnima" },
      { icon: "🌸", name: "Ganesh Ghat",      hi: "गणेश घाट",       desc: "Popular for meditation.",          detail: "Best for mornings" },
      { icon: "🕯️", name: "Patal Bhairavi",   hi: "पाताल भैरवी घाट", desc: "Tantric traditions.",            detail: "Tantrik rites" },
      { icon: "🌺", name: "Mangala Ghat",     hi: "मंगला घाट",       desc: "Used for Graha Shanti.",          detail: "Graha Shanti" },
    ],
    akhadas: [
      { icon: "🚩", name: "Juna Akhada",          hi: "जूना अखाड़ा",          desc: "Largest Shaivite Naga Sadhu Akhada.", detail: "Shaivite" },
      { icon: "🚩", name: "Niranjani Akhada",     hi: "निरंजनी अखाड़ा",     desc: "Prestigious Shaivite Akhada.",         detail: "Shaivite" },
      { icon: "🚩", name: "Mahanirvani Akhada",   hi: "महानिर्वाणी अखाड़ा",  desc: "Strong Vedic scholarship.",           detail: "Shaivite" },
      { icon: "🚩", name: "Nirmohi Ani Akhada",   hi: "निर्मोही अणि अखाड़ा", desc: "Followers of Lord Ram.",             detail: "Vaishnava" },
      { icon: "🚩", name: "Udasin Panchayati",    hi: "उदासीन पंचायती",       desc: "Bridges Hindu and Sikh traditions.", detail: "Sikh-Hindu" },
      { icon: "🚩", name: "Kinnar Akhada",        hi: "किन्नर अखाड़ा",        desc: "Represents Kinnar community.",       detail: "Kinnar" },
    ],
  };

  return (
    <div className="page-wrap">
      {/* HERO */}
      <section style={{ position: "relative", minHeight: "60vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "url('https://www.ercotravels.com/blog/wp-content/uploads/2016/01/groupofsadhus.jpg') center/cover no-repeat" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,rgba(28,9,0,.6),rgba(28,9,0,.82))" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "var(--nav-h)", paddingBottom: "48px", textAlign: "center" }}>
          
          <div style={{ fontFamily: "var(--deva)", fontSize: "clamp(20px,3vw,32px)", color: "rgba(255,190,80,.85)", marginBottom: "6px" }}>उज्जैन सिंहस्थ महाकुम्भ २०२८</div>

          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(32px,5vw,60px)", fontWeight: 800, color: "#fff", marginBottom: "8px", lineHeight: 1.08 }}>Ujjain Simhastha Mahakumbh 2028</h1>
          <br></br>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,.6)", marginBottom: "24px" }}>March 27 – May 27, 2028 · River Shipra, Ujjain, Madhya Pradesh</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginBottom: "32px" }}>
            <button
  className="btn btn-primary btn-xl"
  onClick={() => navigate("/")}
>Plan Your Visit
</button>
            <button className="btn btn-white btn-xl" onClick={() => navigate("/live-darshan")}>Live Darshan</button>
            <button className="btn btn-dark btn-xl" onClick={() => navigate("/hotels")}> Book Stay</button>
          </div>
          <Countdown />
        </div>
      </section>

      {/* SHAHI SNAN CALENDAR */}
      <section id="snan-calendar">

      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="sec-head center">
            <div className="sec-label">Auspicious Bathing Dates</div>
            <h2>Simhastha 2028 Snan Calendar
</h2>
            <p className="sec-sub">All auspicious bathing dates issued by the MP Government. Shahi Snan involves ceremonial Akhada processions.</p>
          </div>

          <div className="snan-grid-new">
            {SNAN_DATES.map((s, i) => (
              <div key={i} className={`snan-card-new${s.shahi ? " shahi" : ""}`}>
                {s.shahi && <div className="snan-badge">SHAHI SNAN</div>}
                <div className="snan-date-block">
                  <div className="snan-day-num">{s.day}</div>
                  <div className="snan-month-weekday">
                    <span className="snan-month">{s.month}</span>
                    <span className="snan-weekday">{s.weekday}</span>
                  </div>
                </div>
                <div className="snan-name">{s.name}</div>
                {s.nameHi && <div className="snan-hi">{s.nameHi}</div>}
                <div className="snan-tithi-pill">{s.tithi}</div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="snan-legend">
            <div className="snan-legend-item">
              <span className="snan-legend-dot shahi" />
              <span>Shahi Snan — Royal bathing procession of all 13 Akharas</span>
            </div>
            <div className="snan-legend-item">
              <span className="snan-legend-dot auspicious" />
              <span>Auspicious bathing tithi</span>
            </div>
          </div>
        </div>
      </section>     
</section>
              {/* LIVE DARSHAN */}
        <div className="sec-head">
          <div className="sec-label">Sacred Streams</div>
          <h2>Live Darshan & Aarti Timings</h2>
        </div>
        <div className="darshan-grid" style={{marginBottom:"64px"}}>
          {DARSHAN_FEEDS.slice(0, 3).map((d,i)=>(
            <div key={i} className="dc" onClick={()=>navigate("/live-darshan")}>
              <div className="dc-thumb" style={{background:`linear-gradient(160deg,${d.color},#050200)`}}>
                <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,rgba(212,82,10,.18) 0%,transparent 70%)"}}/>
                <div className="dc-icon">{d.icon}</div>
                <div className="dc-badge"><span className="dc-dot"/><span className="dc-badge-txt">LIVE APR 2028</span></div>
              </div>
              <div className="dc-body">
                <div className="dc-name">{d.name}</div>
                <div className="dc-name-hi">{d.nameHi}</div>
                <div className="dc-aarti-lbl">Aarti Timings</div>
                {d.aartis.map((a,j)=><div key={j} className="aarti-row"><span className="ar-name">{a.n}</span><span className="ar-time">{a.t}</span></div>)}
                <div className="dc-footer"><button className="dc-watch" style={!d.free?{background:"var(--gold)"}:{}}>📡 {d.free?"Watch Free":"Watch HD"}</button><span className="dc-free">{d.free?"Free":"Premium"}</span></div>
              </div>
            </div>
          ))}
        </div>
        <div className="darshan-cta">
  <button
    className="btn btn-outline"
    onClick={() => navigate("/live-darshan")}
  >
    View All Aartis →
  </button>
</div>

{/* TEMPLES GHATS AKHADAS */}
<section id="temples-ghats">
<div className="sec-head">
  <div className="sec-label">Sacred Ujjain</div>
  <h2>Temples, Ghats & Akhadas</h2>
</div>

<div className="active-tab-label">
  {activeTab === "temples" && "🛕 Sacred Temples"}
  {activeTab === "ghats" && "🌊 Holy Ghats"}
  {activeTab === "akhadas" && "🚩 Sacred Akhadas"}
</div>

<div className="ptabs">
  {[
    ["temples", "Temples"],
    ["ghats", "Ghats"],
    ["akhadas", "Akhadas"],
  ].map(([id, label]) => (
    <button
      key={id}
      className={`ptab${activeTab === id ? " active" : ""}`}
      onClick={() => setActiveTab(id)}
    >
      {label}
    </button>
  ))}
</div>

<div className="places-grid" style={{ marginBottom: "64px" }}>
  {tabData[activeTab].map((p, i) => {
    const bgImg = PLACE_BG[activeTab][i] || "";

    return (
      <div
        key={i}
        className="bg-card"
        onClick={() => setModalData(p)}
      >
        <div
          className="bg-card-img"
          style={{ backgroundImage: `url(${bgImg})` }}
        />

        <div className="bg-card-overlay" />

        <div className="bg-card-content">
          <span className="bg-icon">{p.icon}</span>

          <div className="bg-title">
            {p.name}
          </div>

          <div className="bg-subtitle">
            {p.hi}
          </div>

          <div className="bg-desc">
            {p.desc}
          </div>
        </div>
      </div>
    );
  })}
</div>
 </section>
 
        {/* HERITAGE */}
        <section id="heritage">
        <div className="sec-head">
          <div className="sec-label">Ancient Legacy</div>
          <h2>Heritage of Ujjain</h2>
          <p className="sec-sub">Ujjain is 3,000+ years old — seat of Vikramaditya's empire and eternal city of Mahadev.</p>
        </div>

        {/* Yahan heritage-grid ko naye bg-card me badla hai */}
        <div className="heritage-grid" style={{marginBottom:"64px"}}>
          {heritageList.map((h, i) => {
            const bgImg = HERITAGE_BG ? HERITAGE_BG[i] : ""; 
            return (
              <div key={i} className="bg-card" onClick={() => setSelectedHeritage({...h, bg: bgImg})}>
                <div className="bg-card-img" style={{ backgroundImage: `url(${bgImg})` }} />
                <div className="bg-card-overlay" />
                <div className="bg-card-content">
                  <span className="bg-icon">{h.emoji}</span>
                  <div className="bg-era">{h.era}</div>
                  <div className="bg-title">{h.name}</div>
                  <div className="bg-desc">{h.desc.substring(0,60)}...</div>
                </div>
              </div>
            );
          })}
        </div>


        {/* Heritage Popup Modal (Yahan bahar hona chahiye!) */}
        {selectedHeritage && (
          <div className="modal-overlay" onClick={() => setSelectedHeritage(null)}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedHeritage(null)}>✕</button>
              <div className="modal-img" style={{backgroundImage: `url(${selectedHeritage.bg})`, height: "200px", backgroundSize: "cover"}} />
              <div className="modal-body" style={{padding: "24px"}}>
                <div style={{fontSize:"40px", marginBottom:"10px"}}>{selectedHeritage.emoji}</div>
                <div style={{fontSize:"12px", color:"var(--gold)", fontWeight:700}}>{selectedHeritage.era}</div>
                <h3 style={{fontSize:"24px", marginTop:"4px", marginBottom:"12px"}}>{selectedHeritage.name}</h3>
                <p style={{color:"var(--muted)"}}>{selectedHeritage.desc}</p>
              </div>
            </div>
          </div>
        )}
        </section>

        {/* ZONES */}
        <section id="zones-routes">
        <div className="sec-head">
          <div className="sec-label">Navigation Guide</div>
          <h2>Simhastha Zones & Routes</h2>
        </div>
        <div className="zone-wrap" style={{marginBottom:"64px"}}>
          <div style={{background:"var(--white)",border:"1px solid var(--border)",borderRadius:"16px",padding:"20px",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"320px"}}>
              <rect width="320" height="280" fill="var(--cream)" rx="12"/>
              <path d="M 28 140 Q 76 122 112 146 Q 150 170 188 152 Q 226 134 264 158 Q 292 170 312 162" stroke="rgba(30,90,180,.4)" strokeWidth="13" fill="none" strokeLinecap="round"/>
              <path d="M 28 140 Q 76 122 112 146 Q 150 170 188 152 Q 226 134 264 158 Q 292 170 312 162" stroke="rgba(30,90,180,.12)" strokeWidth="20" fill="none" strokeLinecap="round"/>
              <text x="155" y="136" textAnchor="middle" fontFamily="serif" fontSize="9" fill="rgba(30,90,180,.7)">शिप्रा नदी</text>
              <ellipse cx="112" cy="106" rx="56" ry="30" fill="rgba(212,82,10,.09)" stroke="var(--saffron)" strokeWidth="1.5" strokeDasharray="4,2"/>
              <text x="112" y="100" textAnchor="middle" fontFamily="var(--ui)" fontSize="9" fontWeight="700" fill="var(--saffron)">Z1 · Ram Ghat</text>
              <ellipse cx="188" cy="90" rx="46" ry="26" fill="rgba(176,120,0,.07)" stroke="var(--gold)" strokeWidth="1.5" strokeDasharray="4,2"/>
              <text x="188" y="84" textAnchor="middle" fontFamily="var(--ui)" fontSize="9" fontWeight="700" fill="var(--gold)">Z2 · Mahakal</text>
              <ellipse cx="85" cy="184" rx="52" ry="24" fill="rgba(122,16,32,.06)" stroke="var(--maroon)" strokeWidth="1.5" strokeDasharray="4,2"/>
              <text x="85" y="178" textAnchor="middle" fontFamily="var(--ui)" fontSize="9" fontWeight="700" fill="var(--maroon)">Z3 · Akhadas</text>
              <ellipse cx="218" cy="198" rx="54" ry="24" fill="rgba(10,92,68,.06)" stroke="var(--teal)" strokeWidth="1.5" strokeDasharray="4,2"/>
              <text x="218" y="192" textAnchor="middle" fontFamily="var(--ui)" fontSize="9" fontWeight="700" fill="var(--teal)">Z4 · Tent City</text>
              <ellipse cx="160" cy="242" rx="60" ry="20" fill="rgba(28,9,0,.04)" stroke="var(--muted)" strokeWidth="1" strokeDasharray="4,2" opacity=".6"/>
              <text x="160" y="236" textAnchor="middle" fontFamily="var(--ui)" fontSize="9" fontWeight="700" fill="var(--muted)">Z5 · Bazaar · Z6 · Entry</text>
              <text x="18" y="24" fontFamily="var(--ui)" fontSize="12" fill="var(--muted)" fontWeight="700">N↑</text>
            </svg>
          </div>
          <div className="zone-list">
            {[["Z1","Ram Ghat Zone","Ram Ghat, Triveni Ghat, Mahakaleshwar Temple","Primary Snan"],["Z2","Mahakal Zone","Mahakal Lok, Kal Bhairav, Harsiddhi, Sandipani","Temple Circuit"],["Z3","Akhada Zone","13 Akhada camps along Shipra banks","Akhada Camps"],["Z4","Tent City Zone","Govt tent cities, dharamshalas, camp sites","Accommodation"],["Z5","Mela Bazaar","Food courts, artisan stalls, religious goods","Commerce"],["Z6","Entry & Transit","Bus stands, parking, VVIP entry, shuttles","Arrival"]].map(([n,name,areas,tag])=>(
              <div key={n} className="zone-card" onClick={()=>alert(`Zone ${n}: ${name}\n\n${areas}`)}>
                <div className="zone-num">{n}</div>
                <div><div className="zone-name">{name}</div><div className="zone-areas">{areas}</div><span className="zone-tag">{tag}</span></div>
              </div>
            ))}
          </div>
        </div>

        {/* ROUTES */}
        <div className="sec-head"><div className="sec-label">Getting Here</div><h2>Routes to Ujjain</h2></div>
        <div className="route-grid" style={{marginBottom:"64px"}}>
          {[{from:"Mumbai",modes:[["🚆 Train","11–13 hrs","₹400–1,800"],["✈ Fly + Cab","3 hrs","₹3,500+"],["🚌 Bus","14 hrs","₹600–900"]]},
            {from:"Delhi",modes:[["🚆 Train","12–14 hrs","₹500–2,000"],["✈ Fly + Cab","2.5 hrs","₹4,000+"],["🚌 Bus","16 hrs","₹700–1,200"]]},
            {from:"Ahmedabad",modes:[["🚆 Train","7–9 hrs","₹300–1,200"],["🚗 Drive","7 hrs","₹2,500+"],["🚌 Bus","9 hrs","₹400–700"]]},
            {from:"Indore Airport",modes:[["🚖 Cab","50 min","₹600–900"],["🚌 Shuttle","1 hr","₹100–150"],["🚆 Train","1.5 hrs","₹50–120"]]},
            {from:"Bhopal",modes:[["🚆 Train","2.5 hrs","₹80–350"],["🚗 Drive","2 hrs","₹1,800+"],["🚌 Bus","3 hrs","₹120–200"]]},
            {from:"Ratlam",modes:[["🚆 Train","1.5 hrs","₹50–180"],["🚌 Bus","2 hrs","₹80–120"],["🚗 Drive","1.5 hrs","₹1,200+"]]},
          ].map((r,i)=>(
            <div key={i} className="route-card" onClick={()=>alert(`Routes from ${r.from} to Ujjain:\n${r.modes.map(m=>`${m[0]}: ${m[1]} · ${m[2]}`).join("\n")}`)}>
              <div className="route-from-to"><span className="route-place">{r.from}</span><span className="route-arrow">→</span><span className="route-place">Ujjain</span></div>
              {r.modes.map((m,j)=><div key={j} className="route-mode"><span className="rm-name">{m[0]}</span><span className="rm-time">{m[1]}</span><span className="rm-price">{m[2]}</span></div>)}
            </div>
          ))}
        </div>
        </section>

        {/* ACCOMMODATION */}
        
        {/* Hotel AD Section */}
<section className="section" style={{background:"var(--white)"}}>
  <div className="container">
    <div className="sec-head"><div className="sec-label">Where to Stay</div><h2>Accommodation for Every Pilgrim</h2></div>
    
    <div className="hotels-grid">
      {/* Yahan hum HOTELS_DATA ko map kar rahe hain */}
      {paginatedHotels.map((h, i) => (
        <div key={i} className="hotel-card" onClick={() => navigate("/hotels")}>
          <div className="hcard-img">
            {h.img ? (
  <img
    loading="lazy"
    decoding="async"
    src={h.img}
    alt={h.name}
  />
) : (
  <div style={{ fontSize: "60px" }}>🏨</div>
)}
            <div className="hcard-img-overlay"/>
            <div className="hcard-tags">
              <span className="hcard-tag">{h.type}</span>
              {h.featured && <span className="hcard-tag featured">Featured</span>}
            </div>
          </div>
          <div className="hcard-body">
            <div className="hcard-top">
              <div className="hcard-name">{h.name}</div>
              <div className="hcard-rating">⭐ {h.rating}</div>
            </div>
            <div className={`hcard-tier ${h.tier.toLowerCase()}`}>{h.tier}</div>
            <div className="hcard-desc">{h.desc.substring(0, 80)}...</div>
            <div className="hcard-meta">
              <div className="hcard-meta-row">📍 {h.location}</div>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center", marginTop: "15px"}}>
              <span className="hcard-price">{h.price}</span>
              <button className="btn btn-primary btn-sm" onClick={(e) => {e.stopPropagation(); navigate("/hotels")}}>Book Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="pagination">
  <button
    className="page-btn"
    disabled={hotelPage === 1}
    onClick={() => setHotelPage(hotelPage - 1)}
  >
    ← Prev
  </button>

  {[...Array(totalPages)].map((_, index) => (
    <button
      key={index}
      className={`page-btn ${hotelPage === index + 1 ? "active" : ""}`}
      onClick={() => setHotelPage(index + 1)}
    >
      {index + 1}
    </button>
  ))}

  <button
    className="page-btn"
    disabled={hotelPage === totalPages}
    onClick={() => setHotelPage(hotelPage + 1)}
  >
    Next →
  </button>
</div>
  </div>
</section>

        {/* SATVIK FOOD & CULTURE */}
        <div className="sec-head"><div className="sec-label">Experience Ujjain</div><h2>Events & Culture </h2></div>
        <div className="cult-grid" style={{marginBottom:"64px"}}>
  {CULTURE_DATA.map((c,i)=>(
    <div
      key={i}
      className="cult"
      onClick={() =>
  setModalData({
    name: c.name,
    desc: c.desc,
    detail: "This feature will be live soon."
  })
}
    >
      <div
        className="cult-img"
        style={{
          backgroundImage: `url(${c.img})`
        }}
      />

      <div className="cult-body">
        <div className="cult-tag">{c.tag}</div>
        <div className="cult-name">{c.name}</div>
        <p className="cult-desc">{c.desc}</p>

        <button
  className="btn btn-gold btn-sm"
  onClick={(e) => {
    e.stopPropagation();

    setModalData({
      icon: "🚀",
      name: c.name,
      desc: c.desc,
      detail: "This feature will be live soon."
    });
  }}
>
  {c.btn}
</button>
      </div>
    </div>
  ))}
</div>
       {modalData && (
  <div className="modal-overlay" onClick={() => setModalData(null)}>
    <div className="modal-box" onClick={(e) => e.stopPropagation()}>
      <button
        className="modal-close"
        onClick={() => setModalData(null)}
      >
        ✕
      </button>

      <div style={{ fontSize: "40px", marginBottom: "10px" }}>
        {modalData.icon}
      </div>

      <h3
        style={{
          fontFamily: "var(--serif)",
          fontSize: "24px",
          color: "var(--deep)"
        }}
      >
        {modalData.name}
      </h3>

      <p
        style={{
          marginTop: "10px",
          color: "var(--muted)"
        }}
      >
        {modalData.desc}
      </p>

      <div
        style={{
          marginTop: "15px",
          fontWeight: 700,
          color: "var(--saffron)"
        }}
      >
        {modalData.detail}
      </div>
    </div>
  </div>
)}

</div>
);
}

export default Simhastha2028Page;

