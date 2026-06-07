/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import heroImg from './assets/hero-image.webp';

/* ═══ DATA ═══════════════════════════════════════════ */


const SNAN_DATES = [
  { name:"Chaitra Purnima", nameHi:"चैत्र पूर्णिमा", date:"April 13, 2028", time:"4:00 AM – 8:00 AM", shahi:true },
  { name:"Ram Navami", nameHi:"रामनवमी", date:"April 21, 2028", time:"5:30 AM – 10:00 AM", shahi:false },
  { name:"Vaishakh Amavasya", nameHi:"वैशाख अमावस्या", date:"May 12, 2028", time:"3:30 AM – 9:00 AM", shahi:true },
  { name:"Vaishakh Purnima", nameHi:"वैशाख पूर्णिमा", date:"May 26, 2028", time:"4:00 AM – 8:30 AM", shahi:true },
  { name:"Ganga Dussehra", nameHi:"गंगा दशहरा", date:"June 2, 2028", time:"5:00 AM – 10:00 AM", shahi:false },
  { name:"Jyeshtha Amavasya", nameHi:"ज्येष्ठ अमावस्या", date:"June 10, 2028", time:"3:00 AM – 8:00 AM", shahi:true },
  { name:"Nirjala Ekadashi", nameHi:"निर्जला एकादशी", date:"June 18, 2028", time:"5:00 AM – 11:00 AM", shahi:false },
  { name:"Jyeshtha Purnima", nameHi:"ज्येष्ठ पूर्णिमा", date:"June 24, 2028", time:"4:00 AM – 9:00 AM", shahi:true },
];

const DARSHAN_FEEDS = [
  { name:"Mahakaleshwar Jyotirlinga", nameHi:"महाकालेश्वर ज्योतिर्लिंग",videoId: "Kwjzg0aJGsk", icon:"🕉️", aartis:[{n:"Bhasma Aarti",t:"4:00 AM"},{n:"Naivedya Bhog",t:"7:30 AM"},{n:"Mahaabhog",t:"10:30 AM"},{n:"Sandhya Aarti",t:"5:30 PM"},{n:"Shayan Aarti",t:"10:30 PM"}], free:true, color:"#3D0C00" },

  { name:"Ram Ghat – River Shipra", nameHi:"राम घाट · शिप्रा नदी",videoId: "Ujjain2", icon:"🌊", aartis:[{n:"Morning Aarti",t:"6:00 AM"},{n:"Madhyan Aarti",t:"12:00 PM"},{n:"Sandhya Aarti",t:"7:00 PM"},{n:"Maha Aarti",t:"7:30 PM"}], free:true, color:"#001830" },

  { name:"Harsiddhi Mata Mandir", nameHi:"हरसिद्धि माता मंदिर",videoId: "Ujjain3", icon:"🌺", aartis:[{n:"Mangala Aarti",t:"5:30 AM"},{n:"Rajbhog",t:"11:30 AM"},{n:"Sandhya Aarti",t:"6:30 PM"},{n:"Shayan Aarti",t:"9:30 PM"}], free:true, color:"#2D0020" },

  { name:"Kal Bhairav Mandir", nameHi:"काल भैरव मंदिर", videoId: "Ujjain4",icon:"🔱", aartis:[{n:"Panchamrit Abhishek",t:"6:00 AM"},{n:"Madhyan Aarti",t:"12:00 PM"},{n:"Shringaar Aarti",t:"6:00 PM"},{n:"Tantrik Aarti",t:"8:00 PM"}], free:true, color:"#0D0D2D" },

  { name:"Shahi Snan – HD Stream", nameHi:"शाही स्नान · HD प्रसारण",videoId: "Ujjain5", icon:"🏆", aartis:[{n:"Apr 13 – Chaitra Purnima",t:"4:00 AM"},{n:"May 12 – Vaishakh Amavasya",t:"3:30 AM"},{n:"May 26 – Vaishakh Purnima",t:"4:00 AM"},{n:"Jun 10 – Jyeshtha Amavasya",t:"3:00 AM"}], free:false, color:"#1C1000" },
  
  { name:"Mangalnath Temple", nameHi:"मंगलनाथ मंदिर",videoId: "Ujjain6", icon:"⭐", aartis:[{n:"Mangala Aarti",t:"5:00 AM"},{n:"Madhyan",t:"12:00 PM"},{n:"Sandhya Aarti",t:"7:00 PM"},{n:"Special Tuesday",t:"Weekly"}], free:true, color:"#001A0D" },
];

const HOTELS_DATA = [
  { id:1, name:"Hotel Mahakal Palace", type:"Hotel", price:"₹3,500/night", location:"Near Mahakal Temple, Ujjain", phone:"+91 73400 xxxxx", rating:4.5, tier:"Premium", desc:"Luxury hotel with temple views, modern amenities, and traditional Malwa hospitality. Walking distance to Mahakaleshwar.", featured:true, img:"https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80" },
];

const MISSING_DATA = [
  { id:1, name:"Rajesh Kumar Sharma", age:"65 • Male", desc:"Wearing white dhoti and saffron kurta. Has a walking stick. Grey hair, thin build.", location:"Ram Ghat, Ujjain", date:"2025-05-15", contact:"", reporter:"Amit Sharma", status:"missing" },
  { id:2, name:"Sunita Devi", age:"58 • Female", desc:"Wearing green saree with gold border. Medium build, wears glasses.", location:"Mahakal Temple Queue", date:"2025-05-14", contact:"", reporter:"Ravi Patel", status:"missing" },
  { id:3, name:"Aryan (Child)", age:"8 • Male", desc:"Wearing blue t-shirt and black shorts. Short hair, fair complexion.", location:"Kumbh Mela Ground Zone 2", date:"2025-05-16", contact:"", reporter:"Priya Singh", status:"missing" },
  { id:4, name:"Mohammad Iqbal", age:"45 • Male", desc:"Wearing brown pants and white shirt. Tall, beard, carries a blue bag.", location:"Ujjain Bus Stand", date:"2025-05-15", contact:"", reporter:"Fatima Begum", status:"missing" },
];

const NEWS_DATA = [
  { id:1, tag:"OFFICIAL", date:"28 Nov", title:"Shahi Snan Dates Officially Confirmed for 2028", desc:"All 4 Shahi Snan dates confirmed by the Simhastha 2028 Organizing Committee, Government of Madhya Pradesh.", img:"https://images.indianexpress.com/2016/05/ujjain-mahakmb-759.jpg?w=1200" },
  { id:2, tag:"INFRASTRUCTURE", date:"15 Nov", title:"₹3,200 Crore Allocated for Simhastha Development", desc:"The Government of MP allocates massive funds for new ghats, roads, sanitation facilities, and crowd management systems.", img:"https://i.ytimg.com/vi/J_99RvBKjFM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCuKcg7AXST2Db7mwSotew7O7MlWA" },
  { id:3, tag:"AKHADA", date:"02 Nov", title:"All 13 Akhadas Confirm Participation for 2028", desc:"Camp locations along Shipra banks finalized. Historic participation with new Kinnar Akhada included.", img:"https://posterimage.amarujala.com/1URVxCv.0000000.jpg?w=414&dpr=1.0&q=80" },
  { id:4, tag:"RAILWAY", date:"20 Oct", title:"Railways Announce 6× Trains to Ujjain", desc:"Direct trains from Mumbai, Delhi, Ahmedabad, Hyderabad and Bangalore increased 6-fold during the Simhastha period.", img:"https://st.indiarailinfo.com/kjfdsuiemjvcya24/0/6/1/7/3278617/0/screenshot201804070043591437555.jpg" },
];

const GALLERY_IMAGES = [
  { url:"https://static.india.com/wp-content/uploads/2018/08/ujjain-kumbh-mela-7.jpg?impolicy=Medium_Widthonly&w=700", cap:"Ujjain Skyline at Dusk", wide:true },
  { url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxgL9yaKlpFOD0JAoLvfb4L9NMIPXUJNKWw&s", cap:"Mahakaleshwar Temple" },
  { url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyUrR1AicQFZHgUOKazTuixSAn9wGANKkKwA&s", cap:"Ram Ghat Snan" },
  { url:"https://www.ujjaindarshan.com/wp-content/uploads/2025/04/19.jpg", cap:"Evening Aarti Ceremony", wide:false },
  { url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrGTGuIAvMiDv1sZsTqEEtaOGqp07716iODw&s", cap:"Mela Ground Aerial View" },
  { url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ZwP59b0YTX5yYed3qdZ76jHbfbj86jg2tQ&s", cap:"Devotion & Prayer" },
];

const KUMBH_YEARS = [
  { year:"2016", city:"Ujjain", type:"Simhastha", note:"75 million+ pilgrims" },
  { year:"2019", city:"Prayagraj", type:"Kumbh Mela", note:"240 million+ visitors" },
  { year:"2021", city:"Haridwar", type:"Kumbh Mela", note:"Held amid pandemic precautions" },
  { year:"2025", city:"Prayagraj", type:"Maha Kumbh", note:"Largest spiritual gathering" },
  { year:"2028", city:"Ujjain", type:"Simhastha", note:"Upcoming — Be There!", active:true },
];

const PLACE_BG = {
  temples: [
    "https://vl-prod-static.b-cdn.net/system/images/000/749/729/a8e99946efbfc593fd14c82219d14c5b/original/Mahakaleshwar-Ujjain.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8sAgMtQGpSwCCK411AkjD3OAaQ4msJu2IQA&s",
    "https://temple.yatradham.org/public/Product/temple/temple_tBNDnIkm_202506241522030.webp",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/60/59/17/sandipani-ashram.jpg?w=1200&h=-1&s=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0xbgOLslX0CnMLtFwnKZBaQeYCNZs4UVHJw&s",
    "https://hotelimperialujjain.com/wp-content/uploads/2018/10/chintamani-ganesh-temple.jpg",
  ],
  ghats: [
    "https://www.trawell.in/admin/images/upload/891041978Ram_Ghat.jpg",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyUrR1AicQFZHgUOKazTuixSAn9wGANKkKwA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrGTGuIAvMiDv1sZsTqEEtaOGqp07716iODw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ZwP59b0YTX5yYed3qdZ76jHbfbj86jg2tQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxgL9yaKlpFOD0JAoLvfb4L9NMIPXUJNKWw&s",
  ],
  akhadas: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZDtswKYCKT0RO4Kjb51W56V4FGSCWonq7A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZDtswKYCKT0RO4Kjb51W56V4FGSCWonq7A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZDtswKYCKT0RO4Kjb51W56V4FGSCWonq7A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZDtswKYCKT0RO4Kjb51W56V4FGSCWonq7A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZDtswKYCKT0RO4Kjb51W56V4FGSCWonq7A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZDtswKYCKT0RO4Kjb51W56V4FGSCWonq7A&s",
  ],
};

const TITHIS_HI = ["प्रतिपदा","द्वितीया","तृतीया","चतुर्थी","पंचमी","षष्ठी","सप्तमी","अष्टमी","नवमी","दशमी","एकादशी","द्वादशी","त्रयोदशी","चतुर्दशी","पूर्णिमा"];
const TITHIS_EN = ["Pratipada","Dwitiya","Tritiya","Chaturthi","Panchami","Shashthi","Saptami","Ashtami","Navami","Dashami","Ekadashi","Dwadashi","Trayodashi","Chaturdashi","Purnima"];
const MASA_HI = ["चैत्र","वैशाख","ज्येष्ठ","आषाढ़","श्रावण","भाद्रपद","आश्विन","कार्तिक","मार्गशीर्ष","पौष","माघ","फाल्गुन"];
const GREG_MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const VAARS_EN = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const VAARS_HI = ["रविवार","सोमवार","मंगलवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"];
const NAKSHATRAS = ["Ashwini","Bharani","Krittika","Rohini","Mrigashira","Ardra","Punarvasu","Pushya","Ashlesha","Magha","Purva Phalguni","Uttara Phalguni","Hasta"];
const FESTIVALS = {"6-5":"Jyeshtha Purnima","6-1":"Nirjala Ekadashi","5-12":"Vaishakh Amavasya","5-26":"Vaishakh Purnima","4-13":"Chaitra Purnima"};

const HERITAGE_BG = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIGA6YVeZOwsa94vhL_FIGK5CWxh7XdtTdJw&s",
  "https://images.news18.com/ibnkhabar/uploads/2023/11/3689083_HYP_0_FEATUREIMG_20231106_190647.jpg?im=FitAndFill,width=1200,height=1200",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEnftc4nCk3XIRuOzc0f34JEzeRu_KPOXaZQ&s",
  "https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_Ujjain_tv_destination_img_2_l_791_1055.jpg",
  "https://static.india.com/wp-content/uploads/2018/08/ujjain-kumbh-mela-7.jpg?impolicy=Medium_Widthonly&w=700",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyUrR1AicQFZHgUOKazTuixSAn9wGANKkKwA&s",
];


// Isko HomePage function ke bahar upar ki taraf paste karo
function LiveDarshanCard({ d }) {
  // Pura card video me convert karne ke liye state
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Loading sign dikhane ke liye state
  const [isLoading, setIsLoading] = useState(false);

  const [selectedHeritage, setSelectedHeritage] = useState(null);
  
  const isLiveNow = d.name.includes("Mahakal");

  const videoId = d.videoId || "Kwjzg0aJGsk"; 
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  // Jab "Watch Live" dabaya jaye
  const handleWatchClick = () => {
    setIsExpanded(true);
    setIsLoading(true);
  };

  // Jab "Close (✕)" dabaya jaye
  const handleClose = () => {
    setIsExpanded(false);
    setIsLoading(false); // Wapas band karte waqt loading reset
  };

  return (
    <>
      {/* Loading animation ke liye choti si CSS */}
      <style>{`
        @keyframes pulseLoad {
          0% { opacity: 0.5; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1); }
          100% { opacity: 0.5; transform: scale(0.95); }
        }
      `}</style>

      {/* Card Wrapper: Agar open hai toh uski min-height badha denge */}
      <div 
        className="dc" 
        style={{ 
          display: "flex", 
          flexDirection: "column",
          padding: isExpanded ? "0" : "", // Open hone par padding zero
          minHeight: isExpanded ? "340px" : "auto", 
          background: isExpanded ? "#0A0400" : "var(--white)" 
        }}
      >
        {isExpanded ? (
          // ----------------------------------------------------
          // FULL CARD VIDEO VIEW
          // ----------------------------------------------------
          <div style={{ flex: 1, position: "relative", display: "flex", flexDirection: "column" }}>
            
            {/* CLOSE BUTTON */}
            <button 
              onClick={handleClose}
              style={{
                position: "absolute", top: "12px", right: "12px", zIndex: 20,
                background: "rgba(0,0,0,0.7)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "50%", width: "34px", height: "34px", 
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", fontSize: "16px", fontWeight: "bold",
                boxShadow: "0 4px 12px rgba(0,0,0,0.5)"
              }}
              title="Close Stream"
            >
              ✕
            </button>

            {/* LOADING SCREEN (Tab tak dikhega jab tak video ready na ho) */}
            {isLoading && (
              <div style={{
                position: "absolute", inset: 0, zIndex: 10, display: "flex", 
                flexDirection: "column", alignItems: "center", justifyContent: "center", 
                background: "#0A0400", color: "var(--saffron)"
              }}>
                <div style={{ 
                  fontSize: "40px", marginBottom: "12px", 
                  animation: "pulseLoad 1.5s infinite ease-in-out" 
                }}>
                  🕉️
                </div>
                <div style={{ fontFamily: "var(--ui)", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", color: "rgba(255,255,255,0.6)" }}>
                  CONNECTING TO UJJAIN...
                </div>
              </div>
            )}

            {/* YOUTUBE IFRAME */}
            <iframe 
              width="100%" 
              height="100%" 
              src={embedUrl} 
              title="Live Darshan" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              // Iframe jaise hi load hoga, isLoading false ho jayega
              onLoad={() => setIsLoading(false)}
              style={{ flex: 1, border: "none", borderRadius: "13px" }}
            ></iframe>
          </div>
        ) : (
          // ----------------------------------------------------
          // NORMAL CARD VIEW (Thumbnail + Details)
          // ----------------------------------------------------
          <>
          
            <div className="dc-thumb" style={{background:`linear-gradient(160deg,${d.color || '#1A3A5C'},#050200)`}}>
  <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,rgba(212,82,10,.18) 0%,transparent 70%)"}}/>
  <div className="dc-icon">{d.icon || '🕉️'}</div>
  
  <div className="dc-badge">
    {/* Agar Live hai toh Green blinking dot, warna Grey dot */}
    <span 
      className="dc-dot" 
      style={isLiveNow ? { background: "#22C55E", animation: "blink 1.5s infinite" } : { background: "#aaa" }}
    />
    
    {/* Text bhi condition ke hisaab se badlega */}
    <span className="dc-badge-txt">
      {isLiveNow ? "LIVE NOW" : "LIVE APR 2028"}
    </span>
  </div>
</div>

            <div className="dc-body">
              <div className="dc-name">{d.name}</div>
              <div className="dc-name-hi">{d.nameHi}</div>
              <div className="dc-aarti-lbl">Today's Aarti Timings</div>
              
              {d.aartis?.slice(0, 3).map((a, j) => (
                <div key={j} className="aarti-row">
                  <span className="ar-name">{a.n}</span>
                  <span className="ar-time">{a.t}</span>
                </div>
              ))}
              
              <div className="dc-footer">
  <button 
    className="btn btn-primary btn-sm" 
    onClick={() => {
      if (isLiveNow) {
        handleWatchClick(); // Mahakal ke liye video chalegi
      } else {
        alert("This sacred stream will go live on April 13, 2028. 🙏");
      }
    }}
  >
    {isLiveNow ? "📡 Watch Live" : "📅 Notify Me"}
  </button>
  <span className="dc-free">{d.free ? "Free" : "Premium"}</span>
</div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
/* ═══ STYLES ═════════════════════════════════════════ */
const S = `
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --cream:#FAF6EF;--cream2:#F3EBD9;--deep:#1C0900;
  --saffron:#D4520A;--saffron2:#E8600F;--sf-soft:rgba(212,82,10,.1);
  --gold:#B07800;--gold2:#D49600;--gold-lt:#FEF3DC;
  --teal:#0A5C44;--teal2:#0E7A5C;--teal-lt:#E0F4ED;
  --maroon:#7A1020;--border:#E2D4BC;--border2:#CABDA0;
  --text:#2C1A08;--muted:#7A6448;--light:#A89070;--white:#FFFDF8;
  --serif:'Playfair Display',Georgia,serif;
  --deva:'Tiro Devanagari Hindi',serif;
  --ui:'Inter',system-ui,sans-serif;
  --nav-h:64px;--r:10px;
  --shadow:0 4px 24px rgba(28,9,0,.08);
  --shadow-lg:0 12px 48px rgba(28,9,0,.14);
}
html{scroll-behavior:smooth}
body{font-family:var(--ui);background:var(--cream);color:var(--text);line-height:1.6;overflow-x:hidden;font-size:15px}
a{text-decoration:none;color:inherit}
button{cursor:pointer;border:none;background:none;font-family:var(--ui)}
img{display:block;max-width:100%}
input,select,textarea{font-family:var(--ui)}
.container{max-width:1180px;margin:0 auto;padding:0 24px}
.section{padding:80px 0}
.section-sm{padding:52px 0}

/* BUTTONS */
.btn{display:inline-flex;align-items:center;gap:6px;padding:10px 22px;border-radius:var(--r);font-size:14px;font-weight:600;cursor:pointer;transition:all .18s;border:2px solid transparent;white-space:nowrap;font-family:var(--ui)}
.btn-primary{background:var(--saffron);color:#fff;border-color:var(--saffron)}
.btn-primary:hover{background:var(--saffron2);transform:translateY(-1px);box-shadow:0 6px 20px rgba(212,82,10,.35)}
.btn-outline{background:transparent;color:var(--saffron);border-color:var(--saffron)}
.btn-outline:hover{background:var(--saffron);color:#fff}
.btn-white{background:#fff;color:var(--saffron);border-color:#fff}
.btn-white:hover{background:var(--cream);transform:translateY(-1px)}
.btn-dark{background:rgba(255,255,255,.12);color:#fff;border-color:rgba(255,255,255,.3)}
.btn-dark:hover{background:rgba(255,255,255,.2)}
.btn-ghost{background:transparent;color:var(--text);border-color:var(--border)}
.btn-ghost:hover{border-color:var(--muted)}
.btn-gold{background:var(--gold);color:#fff;border-color:var(--gold)}
.btn-gold:hover{background:var(--gold2)}
.btn-red{background:#DC2626;color:#fff;border-color:#DC2626}
.btn-red:hover{background:#B91C1C}
.btn-sm{padding:7px 16px;font-size:13px}
.btn-lg{padding:13px 30px;font-size:15px}
.btn-xl{padding:15px 36px;font-size:16px;font-weight:700}
.btn-full{width:100%;justify-content:center}

/* NAVBAR */
.navbar{position:fixed;top:0;left:0;right:0;z-index:1000;height:var(--nav-h);background:rgba(255,253,248,.97);border-bottom:1px solid var(--border);transition:box-shadow .2s}
.navbar.scrolled{box-shadow:var(--shadow)}
.nav-inner{height:var(--nav-h);display:flex;align-items:center;gap:20px}
.nav-logo{display:flex;align-items:center;gap:9px;cursor:pointer;flex-shrink:0;margin-right:8px}
.nav-logo-icon{width:36px;height:36px;background:var(--saffron);border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:17px;color:#fff;flex-shrink:0}
.nav-logo-main{font-family:var(--deva);font-size:17px;font-weight:700;color:var(--saffron);line-height:1.1}
.nav-logo-sub{font-family:var(--ui);font-size:10px;font-weight:600;color:var(--muted);letter-spacing:.6px;text-transform:uppercase}
.nav-links{display:flex;list-style:none;gap:0;align-items:center;flex:1}
.nav-links li button{padding:6px 12px;border-radius:7px;font-size:13px;font-weight:600;color:var(--muted);transition:all .15s;letter-spacing:.1px}
.nav-links li button:hover,.nav-links li button.active{color:var(--saffron);background:var(--sf-soft)}
.nav-simhastha{font-size:14px!important;font-weight:700!important;color:var(--saffron)!important}
.nav-right{display:flex;align-items:center;gap:8px;margin-left:auto}
.nav-avatar{width:34px;height:34px;border-radius:50%;background:var(--saffron);display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;font-weight:700;cursor:pointer;border:2px solid transparent;transition:border-color .15s}
.nav-avatar:hover{border-color:var(--saffron)}
.hamburger{display:none;flex-direction:column;gap:5px;width:40px;height:40px;align-items:center;justify-content:center;border:1.5px solid var(--border);border-radius:var(--r)}
.hamburger span{display:block;width:18px;height:1.5px;background:var(--text);border-radius:2px;transition:all .25s}
.hamburger.open span:nth-child(1){transform:translateY(6.5px) rotate(45deg)}
.hamburger.open span:nth-child(2){opacity:0}
.hamburger.open span:nth-child(3){transform:translateY(-6.5px) rotate(-45deg)}
/* Cleaned & Fixed Drawer for Right-Side Slide */
.drawer {
  position: fixed; 
  top: var(--nav-h); 
  right: 0;           /* Left ki jagah right kiya */
  width: 80%; 
  max-width: 320px; 
  bottom: 0; 
  background: #1A0800; 
  z-index: 999; 
  
  /* Right side se bahar chupa diya */
  transform: translateX(100%); 
  
  transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto; 
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.4); /* Shadow bhi adjust ki */
}

.drawer.open { 
  transform: translateX(0); 
}
.drawer-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:998}
.drawer-overlay.open{display:block}
.drawer-header{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,.1)}
.drawer-logo{display:flex;align-items:center;gap:10px}
.drawer-logo-icon{width:38px;height:38px;background:var(--saffron);border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
.drawer-logo-main{font-family:var(--deva);font-size:16px;font-weight:700;color:var(--saffron);line-height:1.1}
.drawer-logo-sub{font-family:var(--ui);font-size:10px;font-weight:600;color:rgba(255,255,255,.45);letter-spacing:.6px;text-transform:uppercase}
.drawer-close{width:36px;height:36px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.15);border-radius:8px;color:rgba(255,255,255,.7);cursor:pointer;flex-shrink:0;transition:background .15s}
.drawer-close:hover{background:rgba(255,255,255,.1);color:#fff}
.drawer-body{padding:8px 0 32px}
.d-top-links{padding:8px 16px 4px}
.d-link-bold{display:block;width:100%;text-align:left;padding:12px 12px;font-size:15px;font-weight:600;color:rgba(255,255,255,.85);border:none;background:none;cursor:pointer;border-radius:8px;transition:background .12s}
.d-link-bold:hover{background:rgba(255,255,255,.07);color:#fff}
.d-title{font-size:10px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:rgba(255,255,255,.35);padding:12px 28px 6px;margin-top:4px}
.d-service-links{padding:0 16px}
.d-service-link{display:flex;align-items:center;gap:12px;width:100%;text-align:left;padding:12px 12px;font-size:14px;font-weight:500;color:rgba(255,255,255,.75);border:none;background:none;cursor:pointer;border-radius:8px;transition:background .12s}
.d-service-link:hover{background:rgba(255,255,255,.07);color:#fff}
.d-s-icon{width:20px;height:20px;flex-shrink:0;color:var(--saffron)}
.d-divider{border:none;border-top:1px solid rgba(255,255,255,.1);margin:12px 16px}
.d-dashboard-btn{display:flex;align-items:center;width:calc(100% - 32px);margin:4px 16px 0;padding:12px 16px;background:rgba(212,82,10,.15);border:1px solid rgba(212,82,10,.3);border-radius:10px;color:var(--saffron);font-size:14px;font-weight:600;cursor:pointer;transition:background .15s}
.d-dashboard-btn:hover{background:rgba(212,82,10,.25)}
.dg{padding:12px 20px 6px}
.dg-lbl{font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--light);margin-bottom:8px}
.dl{display:flex;align-items:center;gap:10px;padding:11px 8px;font-size:15px;font-weight:600;color:var(--text);border-radius:var(--r);transition:background .12s;cursor:pointer;width:100%;border:none;background:none;text-align:left}
.dl:hover{background:var(--cream);color:var(--saffron)}
.d-hr{height:1px;background:var(--border);margin:4px 20px}
.d-btns{padding:16px 20px 24px;display:flex;gap:10px}

/* SECTION LABELS */
.sec-label{font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--saffron);margin-bottom:8px}
.sec-hi{font-family:var(--deva);font-size:14px;color:var(--gold);margin-bottom:4px;display:block;opacity:.8}
h2{font-family:var(--serif);font-size:clamp(26px,3.5vw,42px);font-weight:700;color:var(--text);line-height:1.12;margin-bottom:12px}
h3{font-family:var(--serif);font-size:19px;font-weight:700;color:var(--text)}
.sec-sub{font-size:15px;color:var(--muted);line-height:1.7;max-width:560px}
.sec-head{margin-bottom:44px}
.sec-head.center{text-align:center}
.sec-head.center .sec-sub{margin:0 auto}

/* SACRED WATERMARK */
.sacred-wm{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:var(--deva);font-size:clamp(100px,18vw,240px);color:var(--saffron);opacity:.035;pointer-events:none;user-select:none;z-index:0;overflow:hidden}

/* HERO */
.hero{position:relative;min-height:100vh;display:flex;align-items:center;overflow:hidden}
.hero-bg{position:absolute;inset:0;background:url('./assets/hero-image.webp') center/cover no-repeat;z-index:0}
.hero-bg::after{content:'';position:absolute;inset:0;background:linear-gradient(to bottom,rgba(20,5,0,.55) 0%,rgba(15,3,0,.65) 50%,rgba(10,2,0,.8) 100%)}
.hero-inner{position:relative;z-index:1;text-align:center;padding:calc(var(--nav-h) + 40px) 0 80px;width:100%}
.hero-eyebrow{font-size:12px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:rgba(255,210,120,.85);margin-bottom:20px}
.hero-title{font-family:var(--deva);font-size:clamp(52px,9vw,110px);font-weight:700;color:#fff;line-height:1.05;margin-bottom:8px;text-shadow:0 4px 30px rgba(0,0,0,.4)}
.hero-sub{font-family:var(--serif);font-size:clamp(22px,3.5vw,38px);font-weight:600;color:var(--gold2);margin-bottom:40px;font-style:italic}
.hero-ctas{display:flex;justify-content:center;gap:14px;flex-wrap:wrap;margin-bottom:20px}

/* COUNTDOWN */
.cd-grid{display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-bottom:0}
.cd-unit{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);border-radius:12px;padding:16px 20px;text-align:center;min-width:80px}
.cd-val{font-family:var(--serif);font-size:clamp(28px,4vw,44px);font-weight:700;color:#fff;line-height:1;display:block}
.cd-en{font-size:10px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:rgba(255,255,255,.55);margin-top:3px;display:block}
.cd-hi{font-family:var(--deva);font-size:11px;color:rgba(255,210,120,.7);margin-top:1px;display:block}

/* TRUST BAR */
.trust-bar{background:var(--deep);padding:13px 0}
.trust-list{display:flex;align-items:center;justify-content:center;gap:24px;flex-wrap:wrap;list-style:none}
.trust-item{font-size:12px;font-weight:600;color:rgba(255,255,255,.5);display:flex;align-items:center;gap:6px}
.trust-hl{color:#FCD34D;font-weight:700}

/* ALL KUMBH YEARS */
.kumbh-years{display:flex;gap:16px;flex-wrap:wrap;justify-content:center}
.ky-card{flex:1;min-width:160px;max-width:220px;background:var(--white);border:1px solid var(--border);border-radius:14px;padding:24px 20px;text-align:center;transition:all .2s;cursor:pointer}
.ky-card:hover{transform:translateY(-3px);box-shadow:var(--shadow)}
.ky-card.active{border-color:var(--saffron);border-width:2px}
.ky-year{font-family:var(--serif);font-size:36px;font-weight:800;color:var(--saffron);margin-bottom:6px}
.ky-city{font-size:16px;font-weight:700;color:var(--text);margin-bottom:3px}
.ky-type{font-size:13px;color:var(--muted);margin-bottom:8px}
.ky-note{font-size:13px;font-weight:600;color:var(--saffron)}

/* NEWS */
.news-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:20px}
.news-card{background:var(--white);border:1px solid var(--border);border-radius:14px;overflow:hidden;cursor:pointer;transition:all .2s}
.news-card:hover{transform:translateY(-3px);box-shadow:var(--shadow-lg)}
.news-img{height:160px;background:var(--cream2);overflow:hidden;position:relative}
.news-img img{width:100%;height:100%;object-fit:cover;transition:transform .4s}
.news-card:hover .news-img img{transform:scale(1.05)}
.news-img-placeholder{width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:40px;background:var(--cream2)}
.news-body{padding:16px}
.news-tag{display:inline-block;font-size:10px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:var(--saffron);background:var(--sf-soft);border-radius:4px;padding:2px 7px;margin-bottom:8px}
.news-title{font-family:var(--serif);font-size:16px;font-weight:700;color:var(--text);line-height:1.35;margin-bottom:6px}
.news-desc{font-size:13px;color:var(--muted);line-height:1.6}
.news-date{font-size:11px;color:var(--light);margin-top:8px;font-weight:600}

/* GALLERY */
.gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:auto;gap:12px}
.gi{border-radius:14px;overflow:hidden;cursor:pointer;position:relative;transition:transform .2s}
.gi:hover{transform:scale(1.01)}
.gi.tall{grid-row:span 2}
.gi img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .4s}
.gi:hover img{transform:scale(1.05)}
.gi-overlay{position:absolute;inset:0;background:rgba(0,0,0,0);transition:background .25s;display:flex;align-items:flex-end;padding:14px}
.gi:hover .gi-overlay{background:rgba(28,9,0,.4)}
.gi-cap{font-size:13px;font-weight:600;color:#fff;opacity:0;transition:opacity .2s}
.gi:hover .gi-cap{opacity:1}
.gallery-upload-row{margin-top:20px;display:flex;justify-content:center;gap:12px}

/* DARSHAN CARDS */
.darshan-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:18px}
.dc{border:1px solid var(--border);border-radius:16px;overflow:hidden;background:var(--white);transition:all .2s;cursor:pointer}
.dc:hover{transform:translateY(-3px);box-shadow:var(--shadow-lg);border-color:var(--saffron)}
.dc-thumb{height:130px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.dc-icon{font-size:52px;z-index:1;position:relative}
.dc-badge{position:absolute;top:10px;left:10px;display:flex;align-items:center;gap:5px;background:rgba(0,0,0,.55);border-radius:6px;padding:3px 9px;z-index:2}
.dc-dot{width:6px;height:6px;border-radius:50%;background:#aaa;flex-shrink:0}
.dc-dot.on{background:#22C55E;animation:blink 1.5s infinite}
.dc-badge-txt{font-size:10px;font-weight:700;color:#fff;letter-spacing:.5px}
.dc-body{padding:16px}
.dc-name{font-family:var(--serif);font-size:17px;font-weight:700;color:var(--text);margin-bottom:2px}
.dc-name-hi{font-family:var(--deva);font-size:13px;color:var(--muted);margin-bottom:10px}
.dc-aarti-lbl{font-size:10px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;color:var(--gold);margin-bottom:7px}
.aarti-row{display:flex;justify-content:space-between;font-size:12px;padding:3px 0;border-bottom:1px solid var(--border)}
.aarti-row:last-child{border-bottom:none}
.ar-name{color:var(--muted);font-weight:600}
.ar-time{color:var(--text);font-weight:700}
.dc-footer{margin-top:12px;display:flex;align-items:center;justify-content:space-between}
.dc-watch{font-size:12px;font-weight:700;background:var(--saffron);color:#fff;padding:7px 14px;border-radius:8px;border:none;cursor:pointer;transition:background .15s}
.dc-watch:hover{background:var(--saffron2)}
.dc-free{font-size:11px;font-weight:700;color:var(--teal)}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}

/* PANCHANG */
.panch-nav{display:flex;align-items:center;gap:8px}
.panch-nav button{width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15);color:#fff;font-size:18px;cursor:pointer;transition:background .15s}
.panch-nav button:hover{background:rgba(255,255,255,.2)}
.panch-month-lbl{font-family:var(--deva);font-size:18px;color:#fff;padding:0 8px;white-space:nowrap}
.panch-cal{display:grid;grid-template-columns:repeat(7,1fr);gap:3px;margin-bottom:18px}
.pday-head{font-size:9px;font-weight:700;text-align:center;color:rgba(255,190,80,.6);padding:5px 0;text-transform:uppercase;letter-spacing:.4px}
.pday{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:7px 3px 9px;text-align:center;cursor:pointer;transition:all .15s;min-height:60px}
.pday:hover{background:rgba(255,255,255,.12)}
.pday.today{background:rgba(212,82,10,.28);border-color:var(--saffron)}
.pday.fest{background:rgba(176,120,0,.2);border-color:var(--gold2)}
.pday.empty{background:transparent;border-color:transparent;pointer-events:none}
.pd-num{font-size:13px;font-weight:700;color:#fff}
.pd-tithi{font-family:var(--deva);font-size:9px;color:rgba(255,255,255,.4);margin-top:2px;line-height:1.2}
.pd-fest-lbl{font-family:var(--deva);font-size:8px;color:rgba(255,200,80,.7);margin-top:2px;line-height:1.2}
.panch-info{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:16px 20px;display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:14px}
.pti-lbl{font-size:10px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;color:rgba(255,165,50,.6);margin-bottom:3px}
.pti-hi{font-family:var(--deva);font-size:15px;color:#fff}
.pti-en{font-size:11px;color:rgba(255,255,255,.4);margin-top:1px}

/* HOTELS */
.hotels-filters{display:flex;gap:8px;margin-bottom:24px;flex-wrap:wrap}
.hotel-filter-btn{font-size:13px;font-weight:600;padding:8px 16px;border-radius:8px;border:1.5px solid var(--border);background:var(--white);color:var(--muted);cursor:pointer;transition:all .15s}
.hotel-filter-btn.active,.hotel-filter-btn:hover{background:var(--saffron);color:#fff;border-color:var(--saffron)}
.hotels-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:24px}
.hotel-card{background:var(--white);border:1px solid var(--border);border-radius:16px;overflow:hidden;cursor:pointer;transition:all .2s}
.hotel-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg)}
.hcard-img{height:200px;background:var(--cream2);position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;font-size:60px}
.hcard-img img{width:100%;height:100%;object-fit:cover}
.hcard-img-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(28,9,0,.6) 0%,transparent 60%)}
.hcard-tags{position:absolute;top:12px;left:12px;display:flex;gap:6px}
.hcard-tag{font-size:11px;font-weight:700;padding:4px 10px;border-radius:6px;background:rgba(255,253,248,.9)}
.hcard-tag.featured{background:var(--gold);color:#fff}
.hcard-body{padding:18px}
.hcard-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px}
.hcard-name{font-family:var(--serif);font-size:20px;font-weight:700;color:var(--text)}
.hcard-rating{display:flex;align-items:center;gap:4px;font-size:14px;font-weight:700;color:var(--gold)}
.hcard-tier{display:inline-block;font-size:11px;font-weight:600;padding:3px 9px;border-radius:20px;margin-bottom:10px;background:var(--cream2);color:var(--muted)}
.hcard-tier.premium{background:var(--gold-lt);color:var(--gold)}
.hcard-tier.satvik{background:var(--teal-lt);color:var(--teal)}
.hcard-desc{font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:12px}
.hcard-meta{display:flex;flex-direction:column;gap:5px;margin-bottom:14px}
.hcard-meta-row{display:flex;align-items:center;gap:7px;font-size:13px;color:var(--muted)}
.hcard-meta-icon{font-size:13px;flex-shrink:0}
.hcard-price{font-size:16px;font-weight:700;color:var(--saffron)}

/* MISSING PERSONS */
.mp-board-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px;flex-wrap:wrap;gap:12px}
.mp-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px}
.mp-card{background:var(--white);border:1px solid var(--border);border-radius:16px;overflow:hidden;transition:all .2s;cursor:pointer}
.mp-card:hover{transform:translateY(-3px);box-shadow:var(--shadow-lg)}
.mp-photo{height:200px;background:var(--cream2);display:flex;align-items:center;justify-content:center}
.mp-photo-icon{color:var(--border);opacity:.6}
.mp-photo img{width:100%;height:100%;object-fit:cover}
.mp-body{padding:16px}
.mp-name-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}
.mp-name{font-family:var(--serif);font-size:17px;font-weight:700;color:var(--text)}
.mp-badge{font-size:10px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;padding:4px 10px;border-radius:6px;background:#FEE2E2;color:#DC2626}
.mp-badge.found{background:#DCFCE7;color:#16A34A}
.mp-age{font-size:13px;color:var(--muted);margin-bottom:8px}
.mp-desc{font-size:13px;color:var(--text);line-height:1.55;margin-bottom:10px}
.mp-detail{font-size:12px;color:var(--muted);display:flex;align-items:center;gap:5px;margin-bottom:3px}
.mp-contact-row{display:flex;align-items:center;gap:5px;font-size:13px;font-weight:600;color:var(--saffron);margin-top:10px}

/* SNAN CAL */
.snan-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:14px}
.snan-card{border:1px solid var(--border);border-radius:12px;padding:20px;transition:all .18s;cursor:pointer;background:var(--white)}
.snan-card:hover{border-color:var(--saffron);transform:translateY(-2px)}
.snan-card.shahi{border-left:4px solid var(--saffron);background:linear-gradient(135deg,rgba(212,82,10,.05) 0%,var(--white) 60%)}
.sc-type{font-size:10px;font-weight:700;letter-spacing:.7px;text-transform:uppercase;margin-bottom:5px}
.snan-card.shahi .sc-type{color:var(--saffron)}
.snan-card:not(.shahi) .sc-type{color:var(--muted)}
.sc-name{font-family:var(--serif);font-size:18px;font-weight:700;color:var(--text);margin-bottom:2px}
.sc-hi{font-family:var(--deva);font-size:14px;color:var(--muted);margin-bottom:5px}
.sc-date{font-size:13px;color:var(--muted);margin-bottom:3px}
.sc-time{font-size:12px;font-weight:700;color:var(--gold)}

/* PLACES TABS */
.ptabs{display:flex;gap:3px;flex-wrap:wrap;margin-bottom:26px;background:var(--white);border:1px solid var(--border);border-radius:10px;padding:4px;width:fit-content}
.ptab{font-size:13px;font-weight:600;padding:8px 18px;border-radius:8px;color:var(--muted);cursor:pointer;transition:all .18s;border:none;background:none}
.ptab.active{background:var(--saffron);color:#fff}
.places-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:14px}
.place-card{background:var(--white);border:1px solid var(--border);border-radius:12px;padding:18px;transition:all .2s;cursor:pointer}
.place-card:hover{border-color:var(--gold);transform:translateY(-2px);box-shadow:var(--shadow)}
.place-icon{font-size:22px;margin-bottom:8px}
.place-name{font-family:var(--serif);font-size:16px;font-weight:700;color:var(--text);margin-bottom:2px}
.place-hi{font-family:var(--deva);font-size:13px;color:var(--muted);margin-bottom:5px}
.place-desc{font-size:12px;color:var(--muted);line-height:1.6;margin-bottom:6px}
.place-detail{font-size:11px;font-weight:700;color:var(--gold)}

/* ACC CARDS */
.acc-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:16px}
.acc{border:1px solid var(--border);border-radius:14px;overflow:hidden;background:var(--white);transition:all .2s;cursor:pointer}
.acc:hover{border-color:var(--gold);transform:translateY(-2px);box-shadow:var(--shadow)}
.acc-img{height:95px;display:flex;align-items:center;justify-content:center;font-size:44px}
.acc-body{padding:15px 16px 17px}
.acc-tier{font-size:10px;font-weight:700;letter-spacing:.7px;text-transform:uppercase;color:var(--gold);margin-bottom:4px}
.acc-name{font-family:var(--serif);font-size:16px;font-weight:700;color:var(--text);margin-bottom:3px}
.acc-price{font-size:13px;color:var(--muted);margin-bottom:9px}
.acc-tags{display:flex;flex-wrap:wrap;gap:3px;margin-bottom:12px}
.acc-tag{font-size:10px;font-weight:600;padding:2px 7px;background:var(--cream2);border:1px solid var(--border);border-radius:4px;color:var(--muted)}

/* ZONES */
.zone-wrap{display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:start}
.zone-list{display:flex;flex-direction:column;gap:9px}
.zone-card{background:var(--white);border:1px solid var(--border);border-radius:11px;padding:14px 16px;display:flex;gap:12px;transition:border-color .2s;cursor:pointer}
.zone-card:hover{border-color:var(--teal)}
.zone-num{font-family:var(--serif);font-size:24px;font-weight:800;color:rgba(10,92,68,.18);flex-shrink:0;width:32px;text-align:center;line-height:1}
.zone-name{font-family:var(--serif);font-size:14px;font-weight:700;color:var(--text);margin-bottom:2px}
.zone-areas{font-size:12px;color:var(--muted);line-height:1.5}
.zone-tag{display:inline-block;font-size:10px;font-weight:700;padding:2px 7px;border-radius:20px;margin-top:4px;background:rgba(10,92,68,.08);color:var(--teal);border:1px solid rgba(10,92,68,.15)}

/* HERITAGE */
.heritage-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:18px}
.hc{border-radius:16px;overflow:hidden;border:1px solid var(--border);transition:all .2s;cursor:pointer}
.hc:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg)}
.hc-img{height:140px;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;font-size:60px}
.hc-overlay{position:absolute;inset:0;background:linear-gradient(to bottom,transparent 40%,rgba(28,9,0,.5))}
.hc-body{padding:16px 18px 20px;background:var(--white)}
.hc-era{font-size:10px;font-weight:700;letter-spacing:.7px;text-transform:uppercase;color:var(--gold);margin-bottom:5px}
.hc-name{font-family:var(--serif);font-size:17px;font-weight:700;color:var(--text);margin-bottom:3px}
.hc-desc{font-size:12px;color:var(--muted);line-height:1.6}

/* ROUTE CARDS */
.route-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px}
.route-card{border:1px solid var(--border);border-radius:12px;padding:18px;background:var(--cream);transition:all .2s;cursor:pointer}
.route-card:hover{border-color:var(--saffron);transform:translateY(-2px)}
.route-from-to{display:flex;align-items:center;gap:8px;margin-bottom:11px}
.route-place{font-family:var(--serif);font-size:14px;font-weight:700;color:var(--text)}
.route-arrow{color:var(--saffron);font-size:14px}
.route-mode{display:flex;justify-content:space-between;align-items:center;font-size:12px;padding:4px 0;border-bottom:1px solid var(--border)}
.route-mode:last-child{border-bottom:none}
.rm-name{color:var(--muted);font-weight:600;display:flex;align-items:center;gap:4px}
.rm-time{font-weight:700;color:var(--text)}
.rm-price{color:var(--gold);font-weight:700}

/* GLOBAL NRI */
.nri-inner{display:grid;grid-template-columns:1fr 1fr;gap:52px;align-items:center}
.nri-card{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:16px 18px;display:flex;gap:13px;transition:border-color .2s;cursor:pointer;margin-bottom:10px}
.nri-card:hover{border-color:rgba(212,82,10,.5)}
.nri-icon{font-size:22px;flex-shrink:0;width:34px;text-align:center}
.nri-name{font-family:var(--serif);font-size:15px;font-weight:700;color:#fff;margin-bottom:2px}
.nri-desc{font-size:12px;color:rgba(255,255,255,.45);line-height:1.6;margin-top:3px}
.nri-price{font-size:11px;font-weight:700;color:var(--gold2);margin-top:4px}

/* BIZ GRID */
.biz-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px}
.biz{background:var(--white);border:1px solid var(--border);border-radius:12px;padding:20px 18px;transition:all .2s;cursor:pointer;display:flex;flex-direction:column}
.biz:hover{border-color:var(--gold);transform:translateY(-2px)}
.biz-icon{font-size:28px;margin-bottom:9px}
.biz-name{font-family:var(--serif);font-size:16px;font-weight:700;color:var(--text);margin-bottom:5px}
.biz-desc{font-size:13px;color:var(--muted);line-height:1.6;flex:1;margin-bottom:12px}

/* ADVERTISE */
.adv-inner{display:grid;grid-template-columns:1.2fr 1fr;gap:44px;align-items:center}
.adv-stats{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:24px}
.adv-stat{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);border-radius:11px;padding:14px;text-align:center}
.adv-val{font-family:var(--serif);font-size:28px;font-weight:800;color:var(--gold2);display:block}
.adv-lbl{font-size:11px;color:rgba(255,255,255,.45);margin-top:2px}
.adv-poster{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:22px;text-align:center}
.adv-pkg{display:flex;justify-content:space-between;align-items:center;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:8px;padding:9px 13px;margin-bottom:7px}
.adv-pkg-name{font-size:13px;font-weight:600;color:#fff}
.adv-pkg-price{font-family:var(--serif);font-size:15px;font-weight:700;color:var(--gold2)}

/* FOOTER */
footer{background:var(--deep);padding:56px 0 28px}
.foot-grid{display:grid;grid-template-columns:1.4fr 2fr;gap:40px;margin-bottom:40px}
.foot-links-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:0}
.fl-logo{display:flex;align-items:center;gap:9px;margin-bottom:13px}
.fl-mark{width:34px;height:34px;background:var(--saffron);border-radius:var(--r);display:flex;align-items:center;justify-content:center;font-size:16px;color:#fff}
.fl-name{font-family:var(--deva);font-size:18px;font-weight:700;color:#fff}
.fl-sub{font-size:10px;font-weight:600;letter-spacing:.5px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-top:2px}
.brand-desc{font-size:12px;color:rgba(255,255,255,.35);line-height:1.7;margin-bottom:12px}
.foot-shlok{font-family:var(--deva);font-size:14px;color:rgba(255,165,50,.4);line-height:1.7;margin-bottom:12px;font-style:italic}
.fc-title{font-size:10px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:rgba(255,255,255,.25);margin-bottom:11px}
.fc ul{list-style:none;display:flex;flex-direction:column;gap:7px}
.fc ul button{font-size:13px;color:rgba(255,255,255,.4);transition:color .15s;background:none;border:none;cursor:pointer;text-align:left;padding:0;font-family:var(--ui)}
.fc ul button:hover{color:#fff}
.foot-bottom{border-top:1px solid rgba(255,255,255,.07);padding-top:20px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
.foot-bottom p{font-size:11px;color:rgba(255,255,255,.25)}
.foot-hi{font-family:var(--deva);font-size:13px;color:rgba(255,165,50,.3)}

/* PAGE WRAPS */
.page-wrap{padding-top:var(--nav-h);min-height:100vh}
.page-hero{padding:48px 0 40px;position:relative;overflow:hidden}
.page-hero-title{font-family:var(--serif);font-size:clamp(28px,4vw,44px);font-weight:700;color:#fff;margin-bottom:6px}
.page-hero-hi{font-family:var(--deva);font-size:clamp(16px,2.5vw,24px);color:rgba(255,190,80,.75);margin-bottom:8px}
.page-hero-sub{font-size:14px;color:rgba(255,255,255,.5);max-width:560px}

/* FORMS */
.form-group{margin-bottom:14px}
.form-group label{display:block;font-size:11px;font-weight:700;color:var(--muted);letter-spacing:.5px;margin-bottom:5px;text-transform:uppercase}
.form-group input,.form-group select,.form-group textarea{width:100%;padding:10px 12px;border:1.5px solid var(--border);border-radius:var(--r);font-size:14px;color:var(--text);background:var(--cream);transition:border-color .18s;outline:none;font-family:var(--ui)}
.form-group input:focus,.form-group select:focus,.form-group textarea:focus{border-color:var(--saffron);background:var(--white)}
.form-group textarea{height:72px;resize:vertical}
.upload-zone{border:2px dashed var(--border);border-radius:var(--r);padding:18px;text-align:center;cursor:pointer;transition:border-color .18s;background:var(--cream)}
.upload-zone:hover{border-color:var(--saffron)}

/* ADMIN */
.admin-stat{background:var(--white);border:1px solid var(--border);border-radius:12px;padding:18px;text-align:center}
.a-val{font-family:var(--serif);font-size:30px;font-weight:800;color:var(--saffron)}
.a-lbl{font-size:12px;color:var(--muted);margin-top:3px}
.admin-table{width:100%;border-collapse:collapse}
.admin-table th{font-size:11px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:var(--muted);padding:10px 14px;border-bottom:1px solid var(--border);text-align:left}
.admin-table td{font-size:13px;padding:11px 14px;border-bottom:1px solid var(--border);color:var(--text);vertical-align:middle}
.admin-table tr:last-child td{border-bottom:none}
.admin-section{background:var(--white);border:1px solid var(--border);border-radius:14px;padding:22px;margin-bottom:20px}

/* CULTURE GRID */
.cult-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:16px}
.cult{border:1px solid var(--border);border-radius:14px;overflow:hidden;transition:all .2s;cursor:pointer;background:var(--cream)}
.cult:hover{border-color:var(--gold);transform:translateY(-2px)}
.cult-img{height:85px;display:flex;align-items:center;justify-content:center;font-size:44px;background:var(--cream2)}
.cult-body{padding:14px 16px 16px;background:var(--white)}
.cult-tag{font-size:10px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;color:var(--gold);margin-bottom:4px}
.cult-name{font-family:var(--serif);font-size:16px;font-weight:700;color:var(--text);margin-bottom:5px}
.cult-desc{font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:10px}

/* ABOUT */
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}

/* RESPONSIVE */
@media(max-width:1050px){.nav-links{display:none}.nav-right .btn:not(.nav-avatar){display:none}.hamburger{display:flex}}
@media(max-width:860px){.hero-inner,.nri-inner,.adv-inner,.about-grid,.zone-wrap{grid-template-columns:1fr}.foot-grid{grid-template-columns:1fr}.foot-links-grid{grid-template-columns:1fr 1fr 1fr}}
@media(max-width:580px){
  body{font-size:14px}.section{padding:52px 0}h2{font-size:24px}
  .kumbh-years{gap:10px}.ky-card{min-width:130px;padding:18px 12px}.ky-year{font-size:28px}
  .darshan-grid{grid-template-columns:1fr}.hotels-grid{grid-template-columns:1fr}
  .mp-grid{grid-template-columns:1fr 1fr}.heritage-grid{grid-template-columns:1fr}
  .foot-grid{grid-template-columns:1fr !important;gap:0 !important}
  footer{padding:32px 0 16px}
  .foot-col-brand{padding-bottom:20px;border-bottom:1px solid rgba(255,255,255,.08);margin-bottom:4px}
  .fl-logo{margin-bottom:8px}
  .brand-desc{margin-bottom:6px}
  .foot-shlok{margin-bottom:4px}
  .foot-links-grid{display:grid;grid-template-columns:1fr 1fr;gap:0}
  .fc{padding:14px 0;border-bottom:1px solid rgba(255,255,255,.06)}
  .fc-title{margin-bottom:8px}
  .fc ul{margin-bottom:0}
  .foot-bottom{flex-direction:column;align-items:flex-start;gap:4px;padding-top:14px}
  .gallery-grid{grid-template-columns:1fr 1fr}
  .pday{min-height:48px;padding:5px 2px 7px}.pd-num{font-size:11px}.pd-tithi,.pd-fest-lbl{display:none}
  .route-grid{grid-template-columns:1fr}.acc-grid{grid-template-columns:1fr 1fr}
  .cd-unit{min-width:64px;padding:12px 10px}.cd-val{font-size:26px}
  .snan-grid{grid-template-columns:1fr 1fr}
  .hero-ctas .btn-xl{padding:12px 22px;font-size:14px}
  .nri-inner{grid-template-columns:1fr}
}
@media(max-width:380px){.hero-ctas{flex-direction:column}.hero-ctas .btn{width:100%;justify-content:center}.mp-grid{grid-template-columns:1fr}.acc-grid{grid-template-columns:1fr}.snan-grid{grid-template-columns:1fr}}
`;

/* ═══ COUNTDOWN ══════════════════════════════════════ */
function Countdown(){
  const [t,setT]=useState({d:"—",h:"—",m:"—",s:"—"});
  useEffect(()=>{
    const tick=()=>{
      const diff=new Date("2028-04-13T04:00:00+05:30")-new Date();
      if(diff<=0){setT({d:"0",h:"00",m:"00",s:"00"});return}
      setT({d:Math.floor(diff/864e5),h:String(Math.floor(diff%864e5/36e5)).padStart(2,"0"),m:String(Math.floor(diff%36e5/6e4)).padStart(2,"0"),s:String(Math.floor(diff%6e4/1e3)).padStart(2,"0")})
    };
    tick();const id=setInterval(tick,1000);return()=>clearInterval(id)
  },[]);
  return(
    <div className="cd-grid">
      {[["d","Days","दिन"],["h","Hours","घंटे"],["m","Minutes","मिनट"],["s","Seconds","सेकंड"]].map(([k,en,hi])=>(
        <div key={k} className="cd-unit">
          <span className="cd-val">{t[k]}</span>
          <span className="cd-en">{en}</span>
          <span className="cd-hi">{hi}</span>
        </div>
      ))}
    </div>
  )
}

/* ═══ PANCHANG ═══════════════════════════════════════ */
function Panchang(){
  const today=new Date();
  const [yr,setYr]=useState(today.getFullYear());
  const [mo,setMo]=useState(today.getMonth());
  const dim=new Date(yr,mo+1,0).getDate();
  const fd=new Date(yr,mo,1).getDay();
  const days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const isCurMo=yr===today.getFullYear()&&mo===today.getMonth();
  const festKey=(d)=>`${mo+1}-${d}`;
  const prev=()=>{if(mo===0){setMo(11);setYr(y=>y-1)}else setMo(m=>m-1)};
  const next=()=>{if(mo===11){setMo(0);setYr(y=>y+1)}else setMo(m=>m+1)};
  const td=today.getDate();
  return(
    <div style={{position:"relative",zIndex:1}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"24px",flexWrap:"wrap",gap:"12px"}}>
        <div>
          <div style={{fontFamily:"var(--deva)",fontSize:"clamp(20px,2.8vw,30px)",color:"#fff"}}>पञ्चाङ्ग — सनातन हिन्दू कैलेंडर</div>
          <div style={{fontFamily:"var(--ui)",fontSize:"11px",fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",color:"rgba(255,200,100,.6)",marginTop:"2px"}}>Panchang — Sanatan Hindu Calendar</div>
        </div>
        <div className="panch-nav">
          <button onClick={prev}>‹</button>
          <span className="panch-month-lbl">{MASA_HI[mo]} · {GREG_MONTHS[mo]} {yr}</span>
          <button onClick={next}>›</button>
        </div>
      </div>
      <div className="panch-cal">
        {days.map(d=><div key={d} className="pday-head">{d}</div>)}
        {Array.from({length:fd},(_,i)=><div key={"e"+i} className="pday empty"/>)}
        {Array.from({length:dim},(_,i)=>{
          const d=i+1,fest=FESTIVALS[festKey(d)],isToday=isCurMo&&d===td;
          return(
            <div key={d} className={`pday${isToday?" today":""}${fest?" fest":""}`} title={fest||""} onClick={()=>alert(`${GREG_MONTHS[mo]} ${d}, ${yr}\nTithi: ${TITHIS_EN[(d-1)%15]} (${d<=15?"Shukla":"Krishna"} Paksha)${fest?"\n🎉 "+fest:""}`)}>
              <div className="pd-num">{d}</div>
              <div className="pd-tithi">{TITHIS_HI[(d-1)%15].substring(0,5)}</div>
              {fest&&<div className="pd-fest-lbl">{fest.split(" ")[0]}</div>}
            </div>
          )
        })}
      </div>
      <div className="panch-info">
        {[["Tithi",TITHIS_HI[(td-1)%15],TITHIS_EN[(td-1)%15]],["Vaar",VAARS_HI[today.getDay()],VAARS_EN[today.getDay()]],["Paksha",td<=15?"शुक्ल पक्ष":"कृष्ण पक्ष",td<=15?"Shukla Paksha":"Krishna Paksha"],["Masa",MASA_HI[mo],GREG_MONTHS[mo]],["Nakshatra","रोहिणी",NAKSHATRAS[Math.floor(td*13/30)%13]],["Sunrise","५:४२ AM","Ujjain, MP"]].map(([l,h,e])=>(
          <div key={l}><div className="pti-lbl">{l}</div><div className="pti-hi">{h}</div><div className="pti-en">{e}</div></div>
        ))}
      </div>
    </div>
  )
}



/* ═══ NAVBAR ══════════════════════════════════════════ */
function Navbar({page, setPage, drawerOpen, setDrawerOpen}) {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  
  const nav = (p) => { setPage(p); setDrawerOpen(false); window.scrollTo(0, 0); };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="container">
          <div className="nav-inner">
            <div className="nav-logo" onClick={() => nav("home")}>
              <div className="nav-logo-icon">🕉️</div>
              <div>
                <div className="nav-logo-main">उज्जैन सिंहस्थ</div>
                <div className="nav-logo-sub">SIMHASTHA 2028</div>
              </div>
            </div>
            <ul className="nav-links">
              <li><button className={`nav-simhastha${page === "simhastha-2028" ? " active" : ""}`} onClick={() => nav("simhastha-2028")}>Simhastha 2028</button></li>
              <li><button className={page === "live-darshan" ? " active" : ""} onClick={() => nav("live-darshan")}>Live Darshan</button></li>
              <li><button className={page === "missing-persons" ? " active" : ""} onClick={() => nav("missing-persons")}>Missing Persons</button></li>
              <li><button className={page === "hotels" ? " active" : ""} onClick={() => nav("hotels")}>Hotels, Food & More</button></li>
            </ul>
            
            <div className="nav-right">
              <button className={`hamburger${drawerOpen ? " open" : ""}`} onClick={() => setDrawerOpen(o => !o)}>
                <span /><span /><span />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 📱 MOBILE SIDEBAR (EXACT SCREENSHOT DESIGN) */}
      <div className={`drawer-overlay ${drawerOpen ? "open" : ""}`} onClick={() => setDrawerOpen(false)}></div>
      <div className={`drawer ${drawerOpen ? "open" : ""}`}>
        
        {/* Drawer Header 
        
        <div className="drawer-header">
          <span style={{fontFamily:"var(--ui)",fontSize:"11px",fontWeight:700,letterSpacing:"1.2px",textTransform:"uppercase",color:"rgba(255,255,255,.35)"}}>MENU</span>
          <button className="drawer-close" onClick={() => setDrawerOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        */}
        {/* Drawer Body (Links) */}
        <div className="drawer-body">
          <div className="d-top-links">
            <button className="d-link-bold" onClick={() => nav("simhastha-2028")}>Simhastha 2028</button>
            <button className="d-link-bold" onClick={() => nav("live-darshan")}>Live Darshan</button>
            <button className="d-link-bold" onClick={() => nav("missing-persons")}>Missing Persons</button>
          </div>

          <div className="d-title">SERVICES</div>

          <div className="d-service-links">
            <button className="d-service-link" onClick={() => nav("hotels")}>
              <svg className="d-s-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
              Hotels & Stays
            </button>
            
            <button className="d-service-link" onClick={() => nav("hotels")}>
              <svg className="d-s-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
              Restaurants
            </button>
            
            <button className="d-service-link" onClick={() => nav("hotels")}>
              <svg className="d-s-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
              Cab Services
            </button>
            
            <button className="d-service-link" onClick={() => nav("hotels")}>
              <svg className="d-s-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
              Guides & Pandits
            </button>
            
            <button className="d-service-link" onClick={() => nav("hotels")}>
              <svg className="d-s-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
              Satvik Food
            </button>
          </div>

          <hr className="d-divider" />

        </div>
      </div>
    </>
  );
}

/* ═══ HOME PAGE ══════════════════════════════════════ */
function HomePage({setPage}){
  const [galleryItems,setGalleryItems]=useState(GALLERY_IMAGES);
  const [mpList,setMpList]=useState(MISSING_DATA.slice(0,4));
  const [selectedNews, setSelectedNews] = useState(null);
  const [showNriForm, setShowNriForm] = useState(false);
  const [nriForm, setNriForm] = useState({ name: "", tel: "",  email: "", country: "", service: "pooja" });

  // Component ke andar add karo
const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
  if (carouselRef.current) {
    const scrollAmount = direction === "left" ? -320 : 320; // Kitna scroll karna hai
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
  };

  return(
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroImg})` }}/>
        <div className="container">
          <div className="hero-inner" style={{textAlign:"center",paddingTop:"calc(var(--nav-h) + 40px)",paddingBottom:"80px",position:"relative",zIndex:1,width:"100%"}}>
            <div className="hero-eyebrow">The World&apos;s Largest Spiritual Gathering</div>
            <div className="hero-title">सिंहस्थ महाकुम्भ</div>
            <div className="hero-sub">Ujjain 2028</div>
            <Countdown/>
            <div className="hero-ctas" style={{marginTop:"32px"}}>
              <button className="btn btn-primary btn-xl" onClick={()=>setPage("simhastha-2028")}>Explore Simhastha →</button>
              <button className="btn btn-white btn-xl" onClick={()=>setPage("hotels")}>Book Your Stay</button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
<div className="trust-bar">
  <div className="container" style={{ textAlign: "center" }}>
    <div className="shlok-text">
      "कुम्भे स्नानं महापुण्यं सर्वपापहरं शुभम्"
    </div>
    <div className="shlok-trans">
      — Bathing in the Kumbh bestows great merit and washes away all sins
    </div>
  </div>
</div>

    <section className="section">
  <div className="container">
    <div className="sec-head">
      <div className="sec-label">Updates & Notifications</div>
      <h2>Latest Simhastha News</h2>
    </div>

    {/* Horizontal Scrollable Container */}
    <div className="news-container">
  {NEWS_DATA.map((n) => (
    <div key={n.id} className="news-card">
      <div className="news-img">
        <img loading="lazy"
decoding="async" src={n.img} alt={n.title} style={{width:"100%", height:"100%", objectFit:"cover"}}/>
      </div>
      <div className="news-body">
        <span style={{fontSize:"10px", color:"var(--saffron)", fontWeight:700, textTransform:"uppercase"}}>{n.tag}</span>
        <h3 style={{fontSize:"16px", margin:"8px 0"}}>{n.title}</h3>
        <p style={{fontSize:"12px", color:"var(--muted)"}}>{n.desc.substring(0, 70)}...</p>
        
        {/* Yahan 'onClick' par selectedNews update ho raha hai */}
        <span className="read-more" onClick={() => setSelectedNews(n)}>Read More →</span>
      </div>
    </div>
  ))}
</div>
  </div>
</section>
{/* Custom Popup Modal JS Logic */}
{selectedNews && (
  <div className="modal-overlay" onClick={() => setSelectedNews(null)}>
    <div className="modal-box" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={() => setSelectedNews(null)}>✕</button>
      <img loading="lazy"
decoding="async" src={selectedNews.img} alt={selectedNews.title} style={{width:"100%", height:"200px", objectFit:"cover", borderRadius:"8px"}}/>
      <h3 style={{fontFamily: "var(--serif)", fontSize: "24px", color: "var(--deep)", marginTop: "15px"}}>{selectedNews.title}</h3>
      <p style={{marginTop: "10px", color: "var(--muted)", fontSize: "14px", lineHeight: 1.6}}>{selectedNews.desc}</p>
    </div>
  </div>
)}

      {/* KUMBH THROUGH THE YEARS */}
      <section className="section" style={{background:"var(--cream2)"}}>
        <div className="container">
          <div className="sec-head center">
            <h2>Kumbh Through the Years</h2>
            <p className="sec-sub">A legacy of faith spanning millennia</p>
          </div>
          <div className="kumbh-years">
            {KUMBH_YEARS.map(k=>(
              <div key={k.year} className={`ky-card${k.active?" active":""}`} onClick={()=>k.active&&setPage("simhastha-2028")}>
                <div className="ky-year">{k.year}</div>
                <div className="ky-city">{k.city}</div>
                <div className="ky-type">{k.type}</div>
                <div className="ky-note">{k.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE DARSHAN PREVIEW */}
      <section className="section" style={{background:"var(--white)"}}>
  <div className="container">
    <div className="sec-head" style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:"16px",marginBottom:"32px"}}>
      <div>
        <div className="sec-label">Sacred Streams</div>
        <h2>Live Darshan</h2>
        <p className="sec-sub" style={{maxWidth:"420px"}}>Watch sacred temples of Ujjain live. All Aarti timings listed. Streams go live April 2028.</p>
      </div>
      <button className="btn btn-outline" onClick={() => setPage("live-darshan")}>View All Feeds →</button>
    </div>
    
    <div className="darshan-grid">
      {/* Yahan par humne map me wo naya card component bula liya hai */}
      {DARSHAN_FEEDS.slice(0, 2).map((d, i) => (
        //0,2 yeh decide krta hain ki hompegae pr kitne mandir ke card dikhenge
        <LiveDarshanCard key={i} d={d} />
      ))}
    </div>
  </div>
</section>

      {/* ONLINE PRASAD */}
      <section className="section" style={{ background: "linear-gradient(135deg, var(--deep) 0%, #3D0C00 50%, #1C0900 100%)", position: "relative", overflow: "hidden", padding: "40px 0" }}>
  <div style={{ position: "absolute", inset: 0, fontFamily: "var(--deva)", fontSize: "140px", color: "#fff", opacity: .03, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", userSelect: "none" }}>ॐ</div>
  <div className="container">
    <div className="nri-inner" style={{ gap: "30px" }}> {/* Gap kam kiya */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="sec-label" style={{ color: "rgba(255,190,80,.7)", marginBottom: "4px" }}>For Devotees Worldwide</div>
        <h2 style={{ color: "#fff", fontSize: "28px", marginBottom: "10px" }}>Can't Travel? <em style={{ fontFamily: "var(--serif)" }}>Your Faith Reaches Ujjain.</em></h2>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,.5)", lineHeight: "1.6", marginBottom: "15px", maxWidth: "400px" }}>Distance is no barrier. Participate in live ceremonies from wherever you are.</p>
        
        {/* Shlok box ko compact kiya */}
        <div style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: "8px", padding: "10px 14px", marginBottom: "15px" }}>
          <div style={{ fontFamily: "var(--deva)", fontSize: "13px", color: "rgba(255,190,80,.8)" }}>यत्र योगेश्वरः कृष्णो... तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम ॥</div>
        </div>
        
        <button className="btn btn-primary btn-sm" onClick={() => setShowNriForm(true)}>Register Interest →</button>
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        {[{ icon: "🙏", name: "Live E-Pooja", desc: "Live video Pooja with Pandit.", price: "From ₹501" },
          { icon: "📦", name: "Mahakal Prasad", desc: "Shipped worldwide.", price: "Global shipping" },
          { icon: "📡", name: "HD Shahi Snan", desc: "Multi-camera HD coverage.", price: "Premium access" }
        ].map((g, i) => (
          <div key={i} className="nri-card" style={{ padding: "10px", marginBottom: "8px" }} onClick={() => alert(g.name)}>
            <div className="nri-icon" style={{ fontSize: "20px" }}>{g.icon}</div>
            <div>
              <div className="nri-name" style={{ fontSize: "14px" }}>{g.name}</div>
              <div className="nri-desc" style={{ fontSize: "11px" }}>{g.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* GALLERY */}
      <section className="section" style={{ background: "var(--cream)", padding: "40px 0" }}>
  <div className="container">
    <div style={{ textAlign: "center", marginBottom: "32px" }}>
      <h2 style={{ fontFamily: "var(--serif)", fontSize: "32px", color: "var(--deep)" }}>Simhastha Gallery</h2>
      <p style={{ fontFamily: "var(--ui)", color: "var(--muted)", fontSize: "14px" }}>Glimpses of divine moments</p>
    </div>

    {/* Custom Style for hiding scrollbar but keeping scroll functionality */}
    <style>{`
      .hide-scroll::-webkit-scrollbar { display: none; }
      .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
    `}</style>

    <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
      
      {/* LEFT SCROLL BUTTON */}
      <button 
        onClick={() => scrollCarousel("left")}
        style={{
          position: "absolute", left: "-15px", zIndex: 10,
          background: "var(--white)", border: "1px solid var(--border)", 
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)", borderRadius: "50%",
          width: "44px", height: "44px", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "20px", color: "var(--deep)"
        }}
      >
        ◀
      </button>

      {/* CAROUSEL TRACK */}
<div 
  ref={carouselRef} 
  className="hide-scroll"
  style={{ 
    display: "flex", overflowX: "auto", gap: "20px", 
    padding: "10px 0", scrollSnapType: "x mandatory", scrollBehavior: "smooth",
    width: "100%"
  }}
>
  {/* 👇 YAHAN HUMNE GALLERY_IMAGES KO HATAKAR galleryItems KAR DIYA HAI 👇 */}
  {galleryItems && galleryItems.map((img, i) => (
    <div 
      key={i} 
      style={{ 
        flex: "0 0 auto", width: "300px", 
        scrollSnapAlign: "center", position: "relative",
        borderRadius: "16px", overflow: "hidden",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
      }}
    >
      <img 
        /* Safe check lagaya hai taki agar property ka naam img, src ya url ho toh photo load ho jaye */
        loading="lazy"
decoding="async"
        src={img.img || img.src || img.url} 
        alt={img.cap || img.caption || img.title} 
        style={{ 
          width: "100%", height: "350px", 
          objectFit: "cover", display: "block" 
        }} 
      />
      
      {/* Image Title Overlay */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
        padding: "20px 16px 16px", color: "#fff"
      }}>
        <span style={{ fontFamily: "var(--ui)", fontSize: "14px", fontWeight: "600" }}>
          {img.cap || img.caption || img.title}
        </span>
      </div>
    </div>
  ))}
</div>

      {/* RIGHT SCROLL BUTTON */}
      <button 
        onClick={() => scrollCarousel("right")}
        style={{
          position: "absolute", right: "-15px", zIndex: 10,
          background: "var(--white)", border: "1px solid var(--border)", 
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)", borderRadius: "50%",
          width: "44px", height: "44px", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "20px", color: "var(--deep)"
        }}
      >
        ▶
      </button>

    </div>
  </div>
</section>

      {/* MISSING PERSONS BOARD */}
      <section className="section" style={{background:"#FFF5F5"}}>
        <div className="container">
          <div className="mp-board-header">
            <div>
              <h2>Missing Persons Board</h2>
              <p className="sec-sub" style={{margin:0}}>Help reunite families — every share matters</p>
            </div>
            <div style={{display:"flex",gap:"10px"}}>
              <button className="btn btn-red" onClick={()=>setPage("missing-persons")}>⚠️ Report Missing Person</button>
              <button className="btn btn-ghost" onClick={()=>setPage("missing-persons")}>View All →</button>
            </div>
          </div>
          <div className="mp-grid">
  {/* Yahan .slice(0, 2) add kar diya */}
  {mpList.slice(0, 2).map(p => (
    <div key={p.id} className="mp-card" onClick={() => setPage("missing-persons")}>
      <div className="mp-photo">
        <svg className="mp-photo-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="7" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>
      </div>
      <div className="mp-body">
        <div className="mp-name-row">
          <span className="mp-name">{p.name}</span>
          <span className={`mp-badge${p.status === "found" ? " found" : ""}`}>
            {p.status === "found" ? "Found" : "Missing"}
          </span>
        </div>
        <div className="mp-age">{p.age}</div>
        <div className="mp-desc">{p.desc}</div>
        <div className="mp-detail">📍 {p.location}</div>
        <div className="mp-detail">🗓 {p.date}</div>
        <div className="mp-contact-row">
          📞 {p.contact} <span style={{ color: "var(--muted)", fontWeight: 400 }}>({p.reporter})</span>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* HOTEL AD */}
      <section className="section" style={{background:"var(--white)"}}>
        <div className="container">
          <div className="sec-head center">
            <div style={{fontSize:"36px",marginBottom:"8px"}}>🏨</div>
            <h2>Hotels and Stays</h2>
            <p className="sec-sub">Verified partner accommodations and services for your comfortable pilgrimage</p>
          </div>
          <div className="hotels-grid">
            {HOTELS_DATA.filter(h=>h.type==="Hotel").map((h,i)=>(
              <div key={i} className="hotel-card" onClick={()=>setPage("hotels")}>
                <div className="hcard-img">
                  {h.img?<img  loading="lazy"
decoding="async"
src={h.img} alt={h.name} loading="lazy"/>:<div style={{fontSize:"60px"}}>{h.type==="Hotel"?"🏨":h.type==="Dharamshala"?"🏛️":h.type==="Restaurant"?"🍛":h.type==="Cab Service"?"🚖":"🧭"}</div>}
                  <div className="hcard-img-overlay"/>
                  <div className="hcard-tags"><span className="hcard-tag">{h.type}</span>{h.featured&&<span className="hcard-tag featured">Featured</span>}</div>
                </div>
                <div className="hcard-body">
                  <div className="hcard-top"><div className="hcard-name">{h.name}</div><div className="hcard-rating">⭐ {h.rating}</div></div>
                  <div className={`hcard-tier${h.tier==="Premium"?" premium":h.tier==="Satvik"?" satvik":""}`}>{h.tier}</div>
                  <div className="hcard-desc">{h.desc}</div>
                  <div className="hcard-meta">
                    <div className="hcard-meta-row"><span className="hcard-meta-icon">📍</span>{h.location}</div>
                    <div className="hcard-meta-row"><span className="hcard-meta-icon">📞</span>{h.phone}</div>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span className="hcard-price">{h.price}</span>
                    <button className="btn btn-primary btn-sm" onClick={e=>{e.stopPropagation();setPage("hotels")}}>Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{textAlign:"center",marginTop:"24px"}}>
            <button className="btn btn-outline btn-lg" onClick={()=>setPage("hotels")}>View All Accommodations →</button>
          </div>
        </div>
      </section>

      {/* ADVERTISE
      <section className="section" style={{background:"linear-gradient(135deg,#7A1020 0%,#3A0B00 50%,var(--deep) 100%)",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",bottom:"-30px",right:"-40px",fontFamily:"var(--deva)",fontSize:"200px",color:"#fff",opacity:.03,pointerEvents:"none",lineHeight:1}}>विज्ञापन</div>
        <div className="container">
          <div className="adv-inner">
            <div>
              <div className="sec-label" style={{color:"rgba(255,190,80,.75)"}}>Advertise with Us</div>
              <h2 style={{color:"#fff"}}>Reach 200 Million Sacred Pilgrims</h2>
              <p style={{fontSize:"14px",color:"rgba(255,255,255,.5)",lineHeight:"1.8",marginBottom:"22px",maxWidth:"440px"}}>KumbhPortal is India's most visited pilgrimage platform. Put your brand in front of the world's largest religious gathering.</p>
              <div className="adv-stats">
                {[["200M+","Expected Pilgrims"],["4","Languages"],["50M+","Est. Web Visits"],["70 days","Event Duration"]].map(([v,l])=>(
                  <div key={l} className="adv-stat"><span className="adv-val">{v}</span><div className="adv-lbl">{l}</div></div>
                ))}
              </div>
              <button className="btn btn-gold btn-lg" onClick={()=>alert("Advertising enquiries:\ninfo@mysimhastha.com\nOur media team responds within 24 hours.")}>Contact Ad Team →</button>
            </div>
            <div className="adv-poster">
              <div style={{fontSize:"44px",marginBottom:"10px"}}>📢</div>
              <div style={{fontFamily:"var(--serif)",fontSize:"18px",fontWeight:700,color:"#fff",marginBottom:"5px"}}>Advertising Packages</div>
              <div style={{fontFamily:"var(--deva)",fontSize:"15px",color:"rgba(255,255,255,.55)",display:"block",marginBottom:"14px"}}>विज्ञापन पैकेज</div>
              {[["🌟 Homepage Banner","₹2L / month"],["📅 Calendar Sponsor","₹1.5L / month"],["📡 Darshan Sponsor","₹3L / Snan"],["📱 Push Notification","₹50K / blast"]].map(([n,p])=>(
                <div key={n} className="adv-pkg"><span className="adv-pkg-name">{n}</span><span className="adv-pkg-price">{p}</span></div>
              ))}
              <button className="btn btn-gold btn-full" style={{marginTop:"14px"}} onClick={()=>alert("Send brief to: info@mysimhastha.com")}>Get Custom Quote →</button>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* ABOUT US
      <section className="section" style={{background:"var(--cream2)"}}>
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="sec-label">About Us</div>
              <h2>India's Most Complete Kumbh Portal</h2>
              <p style={{fontSize:"14px",color:"var(--muted)",lineHeight:"1.8",marginBottom:"16px"}}>mysimhastha.com is the official digital companion for pilgrims attending the Ujjain Simhastha Mahakumbh 2028. We bring together information, booking services, live darshan, and community support under one sacred roof.</p>
              <p style={{fontSize:"14px",color:"var(--muted)",lineHeight:"1.8",marginBottom:"24px"}}>Built by a team of devotees and technologists, our mission is to ensure every pilgrim — whether attending in person or joining from across the globe — experiences the divine grace of Ujjain Simhastha 2028.</p>
              <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
                <button className="btn btn-primary" onClick={()=>alert("Contact: info@mysimhastha.com\nHelpline: 1800-XXX-XXXX")}>Contact Us</button>
                <button className="btn btn-ghost" onClick={()=>alert("About page coming soon!")}>Learn More</button>
              </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
              {[{icon:"🕉️",title:"Official & Verified",desc:"Recognised by the Government of Madhya Pradesh. All listings verified by our team."},
                {icon:"🌍",title:"Serving Global Devotees",desc:"Available in English, Hindi, Marathi, and Gujarati. Prasad ships to 60+ countries."},
                {icon:"🆘",title:"24/7 Pilgrim Support",desc:"Missing person board, emergency helpline, and ground volunteer network active throughout the Mela."},
              ].map((item,i)=>(
                <div key={i} style={{background:"var(--white)",border:"1px solid var(--border)",borderRadius:"12px",padding:"18px 20px",display:"flex",gap:"14px"}}>
                  <div style={{fontSize:"24px",flexShrink:0,paddingTop:"2px"}}>{item.icon}</div>
                  <div><div style={{fontFamily:"var(--serif)",fontSize:"17px",fontWeight:700,color:"var(--text)",marginBottom:"4px"}}>{item.title}</div><div style={{fontSize:"13px",color:"var(--muted)",lineHeight:1.6}}>{item.desc}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}
      {/* 👇 NRI FORM MODAL (Popup) 👇 */}
      {showNriForm && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "rgba(10, 4, 0, 0.8)", backdropFilter: "blur(6px)",
          display: "flex", alignItems: "center", justifyContent: "center", padding: "20px"
        }}>
          <div style={{
            background: "var(--white)", width: "100%", maxWidth: "460px",
            borderRadius: "16px", padding: "32px", position: "relative",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)", border: "1px solid var(--border)"
          }}>
            {/* Close Button */}
            <button 
              onClick={() => setShowNriForm(false)}
              style={{
                position: "absolute", top: "16px", right: "16px",
                background: "var(--cream2)", border: "none", width: "32px", height: "32px",
                borderRadius: "50%", cursor: "pointer", fontSize: "16px", color: "var(--deep)",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}
            >
              ✕
            </button>
            
            <h3 style={{ fontFamily: "var(--serif)", fontSize: "24px", color: "var(--deep)", marginBottom: "4px" }}>Global Devotee Registration</h3>
            <div style={{ fontFamily: "var(--deva)", fontSize: "14px", color: "var(--muted)", marginBottom: "24px" }}>वैश्विक भक्त पंजीकरण</div>

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="e.g. Rahul Sharma" value={nriForm.name} onChange={e => setNriForm({...nriForm, name: e.target.value})} />
            </div>
            
            <div className="form-group">
              <label>Phone number</label>
              <input type="tel" placeholder="+67 5845 1452841" value={nriForm.phone} onChange={e => setNriForm({...nriForm, tel: e.target.value})} />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="your@email.com" value={nriForm.email} onChange={e => setNriForm({...nriForm, email: e.target.value})} />
            </div>
            
            <div style={{ display: "flex", gap: "12px" }}>
              <div className="form-group" style={{ flex: 1 }}>
                <label>Country of Residence</label>
                <input type="text" placeholder="e.g. USA, UK, UAE" value={nriForm.country} onChange={e => setNriForm({...nriForm, country: e.target.value})} />
              </div>
            </div>

            <div className="form-group">
              <label>Primary Interest</label>
              <select value={nriForm.service} onChange={e => setNriForm({...nriForm, service: e.target.value})}>
                <option value="pooja">Live E-Pooja & Sankalp</option>
                <option value="prasad">Certified Mahakal Prasad Delivery</option>
                <option value="stream">HD Shahi Snan Stream Access</option>
                <option value="other">General Enquiry</option>
              </select>
            </div>

            <button 
  className="btn btn-primary btn-full btn-lg" 
  style={{ marginTop: "12px" }}
  onClick={async (e) => {
    // 1. Check karo ki naam aur email bhara hai ya nahi
    if(!nriForm.name || !nriForm.email) {
      alert("Please enter your name and email.");
      return;
    }

    // 2. Button ka text temporary change kar rahe hain
    e.target.innerText = "Sending... ⏳";

    try {
      // 3. Web3Forms API ko data bhej rahe hain
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "49bc13a2-2432-4432-9f3b-c940c1bfbf61", // 👈 Tumhari key yahan set ho gayi hai
          subject: "New NRI Registration - KumbhPortal", // Email ka subject
          Name: nriForm.name,
          Phone: nriForm.tel,
          Email: nriForm.email,
          Country: nriForm.country,
          Service_Requested: nriForm.service
        }),
      });

      if (response.ok) {
        alert(`✅ Registration successful!\nThank you, ${nriForm.name}. We will contact you at ${nriForm.email} shortly.`);
        setShowNriForm(false); // Form band karo
        setNriForm({ name: "",phone: "" ,  email: "", country: "", service: "pooja" }); // Form clear karo
      } else {
        alert("❌ Something went wrong on the server. Please try again.");
        e.target.innerText = "Submit Registration →"; // Button text wapas normal karo
      }
    } catch (error) {
      alert("❌ Network error. Please check your internet connection.");
      e.target.innerText = "Submit Registration →"; 
    }
  }}
>
  Submit Registration →
</button>
            <p style={{ fontFamily: "var(--ui)", fontSize: "11px", color: "var(--muted)", textAlign: "center", marginTop: "16px", lineHeight: "1.5" }}>
              Your details are secure. A dedicated pandit will be assigned to coordinate your virtual ceremonies.
            </p>
          </div>
        </div>
      )}
      {/* 👆 NRI FORM MODAL END 👆 */}

    </> // Yeh closing fragment hai HomePage ka
  );  
}


/* ═══ SIMHASTHA 2028 PAGE ════════════════════════════ */
function Simhastha2028Page({setPage}){

  // YEH NAYI LINE ADD KARO 👇 renderPage(Popup ka data save karne ke liye)
  const [selectedHeritage, setSelectedHeritage] = useState(null);

  const [activeTab,setActiveTab]=useState("temples");

  const heritageList = [
    {emoji:"🔭",era:"1719 AD · Maharaja Jai Singh II",name:"Jantar Mantar Observatory",desc:"One of India's oldest astronomical observatories. Ujjain was the prime meridian of ancient India."},
    {emoji:"👑",era:"57 BC · Emperor Vikramaditya",name:"Vikramaditya's Capital",desc:"Ujjain (ancient Avantika) was the glorious capital of Emperor Vikramaditya, patron of the Nine Jewels."},
    {emoji:"📜",era:"~4th Century AD",name:"Kalidasa — The Great Poet",desc:"Kalidasa wrote Meghaduta, Abhijnana Shakuntala, and Raghuvamsha in Ujjain. The city breathes poetry."},
    {emoji:"🕉️",era:"Vedic Age · One of 7 Moksha Puris",name:"Avantika — City of Liberation",desc:"Lord Krishna studied here. Central to Mahabharata, Puranas, and Vedic tradition."},
    {emoji:"🌊",era:"2,000+ years · Every 12 years",name:"Simhastha — The Ancient Kumbh",desc:"Held every 12 years when Jupiter enters Leo (Simha Rashi). Ancient texts describe it since 500 BCE."},
    {emoji:"💧",era:"Vedic Age · Sacred River",name:"Shipra — The Holy River",desc:"Bathing in the Shipra during Simhastha is believed to grant Moksha from all sins."},
  ];

  const tabData={
    temples:[
      {icon:"🕉️",name:"Mahakaleshwar Jyotirlinga",hi:"महाकालेश्वर ज्योतिर्लिंग",desc:"One of the 12 Jyotirlingas. The only south-facing Shivalinga in the world. Famous for the daily Bhasma Aarti at 4 AM.",detail:"Bhasma Aarti: 4 AM · Free entry"},
      {icon:"🌺",name:"Harsiddhi Mata Mandir",hi:"हरसिद्धि माता मंदिर",desc:"One of the 51 Shakti Peethas. The eternal Deepmala lamps are spectacular at Navratri and Simhastha.",detail:"Shakti Peetha · Navratri special"},
      {icon:"🔱",name:"Kal Bhairav Temple",hi:"काल भैरव मंदिर",desc:"Guardian deity of Ujjain. Unique ritual where the deity is offered liquor which disappears mysteriously.",detail:"Open: 5 AM – 10 PM"},
      {icon:"📚",name:"Sandipani Ashram",hi:"सांदीपनि आश्रम",desc:"Ancient gurukul where Lord Krishna, Balram, and Sudama studied under Guru Sandipani.",detail:"Historical site · Free"},
      {icon:"⭐",name:"Mangalnath Temple",hi:"मंगलनाथ मंदिर",desc:"Birthplace of Mars (Mangal). Ancient Vedic astronomical observatory. Special Tuesday puja.",detail:"Special Mangalvaar puja"},
      {icon:"🐘",name:"Chintaman Ganesh",hi:"चिंतामन गणेश",desc:"Self-manifested ancient Ganesh idol. Among the most revered Ganesh shrines in central India.",detail:"Open: 5 AM – 9 PM"},
    ],
    ghats:[
      {icon:"🌅",name:"Ram Ghat",hi:"राम घाट",desc:"Most sacred bathing ghat in Ujjain. Primary Simhastha Snan site. Evening Aarti rivals Varanasi.",detail:"Primary Snan Ghat · Aarti: 7 PM"},
      {icon:"🌊",name:"Triveni Ghat",hi:"त्रिवेणी घाट",desc:"Sacred confluence of three streams. Extremely auspicious for Pind Daan and ancestor rites.",detail:"Pind Daan · Daily ceremonies"},
      {icon:"🏛️",name:"Narsimha Ghat",hi:"नरसिंह घाट",desc:"Named after Lord Narsimha. Significant during Vaishakh Purnima and Ekadashi Snans.",detail:"Vaishakh Purnima special"},
      {icon:"🌸",name:"Ganesh Ghat",hi:"गणेश घाट",desc:"Quieter ghat popular for sunrise meditation and morning Snan. Ideal for elderly and families.",detail:"Best for morning bathers"},
      {icon:"🕯️",name:"Patal Bhairavi Ghat",hi:"पाताल भैरवी घाट",desc:"One of the oldest ghats associated with Tantric traditions. Ancient evening rituals.",detail:"Tantrik rites · Evenings"},
      {icon:"🌺",name:"Mangala Ghat",hi:"मंगला घाट",desc:"Near Mangalnath temple. Used for Graha Shanti rites and morning Snan by devotees.",detail:"Graha Shanti pujas"},
    ],
    akhadas:[
      {icon:"🚩",name:"Juna Akhada",hi:"जूना अखाड़ा",desc:"Largest, oldest Shaivite Naga Sadhu Akhada. Always leads the Shahi Snan procession.",detail:"Shaivite · First Snan slot"},
      {icon:"🚩",name:"Niranjani Akhada",hi:"निरंजनी अखाड़ा",desc:"Prestigious Shaivite Akhada known for Vedic scholars and discourses during the Mela.",detail:"Shaivite · Second slot"},
      {icon:"🚩",name:"Mahanirvani Akhada",hi:"महानिर्वाणी अखाड़ा",desc:"Prominent Akhada with strong Vedic scholarship tradition and senior Mahamandaleshwars.",detail:"Shaivite · Vedic tradition"},
      {icon:"🚩",name:"Nirmohi Ani Akhada",hi:"निर्मोही अणि अखाड़ा",desc:"Vaishnava Akhada of the Ramanandi sect — followers of Lord Ram.",detail:"Vaishnava · Ramanandi"},
      {icon:"🚩",name:"Udasin Panchayati",hi:"उदासीन पंचायती अखाड़ा",desc:"Founded by Sri Chand, son of Guru Nanak. Bridges Hindu and Sikh traditions.",detail:"Sikh-Hindu syncretic"},
      {icon:"🚩",name:"Kinnar Akhada",hi:"किन्नर अखाड़ा",desc:"Newest officially recognized Akhada representing the Kinnar community. Historic 2019 milestone.",detail:"Kinnar community · 2019"},
    ],
  };
  const [modalData, setModalData] = useState(null); 

// 2. Click hone par modalData update karo
const openPopup = (p) => {
  setModalData(p);
};
  return(
    <div className="page-wrap">
      {/* Hero */}
      <section style={{position:"relative",minHeight:"60vh",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"url('https://www.ercotravels.com/blog/wp-content/uploads/2016/01/groupofsadhus.jpg') center/cover no-repeat"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(28,9,0,.6),rgba(28,9,0,.82))"}}/>
        <div className="container" style={{position:"relative",zIndex:1,paddingTop:"var(--nav-h)",paddingBottom:"48px",textAlign:"center"}}>
          <div style={{fontFamily:"var(--ui)",fontSize:"11px",fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",color:"rgba(255,190,80,.7)",marginBottom:"8px"}}>📍 FEATURED EVENT</div>
          <div style={{fontFamily:"var(--deva)",fontSize:"clamp(20px,3vw,32px)",color:"rgba(255,190,80,.85)",marginBottom:"6px"}}>उज्जैन सिंहस्थ महाकुम्भ २०२८</div>
          <h1 style={{fontFamily:"var(--serif)",fontSize:"clamp(32px,5vw,60px)",fontWeight:800,color:"#fff",marginBottom:"8px",lineHeight:1.08}}>Ujjain Simhastha Mahakumbh 2028</h1>
          <p style={{fontSize:"15px",color:"rgba(255,255,255,.6)",marginBottom:"24px"}}>April 13 – June 24, 2028 · River Shipra, Ujjain, MP · 200M+ Pilgrims Expected</p>
          <div style={{display:"flex",justifyContent:"center",gap:"12px",flexWrap:"wrap",marginBottom:"32px"}}>
            <button className="btn btn-primary btn-xl" onClick={()=>alert("E-Pass booking opens October 2027.\nRegister: info@mysimhastha.com")}>🎟 Book E-Pass</button>
            <button className="btn btn-white btn-xl" onClick={()=>setPage("live-darshan")}>📡 Live Darshan</button>
            <button className="btn btn-dark btn-xl" onClick={()=>setPage("hotels")}>🏨 Book Stay</button>
          </div>
          <Countdown/>
        </div>
      </section>

      <div className="container section">
        {/* SNAN CALENDAR */}
        <div className="sec-head">
          <span style={{fontFamily:"var(--deva)",fontSize:"14px",color:"var(--gold)",display:"block",marginBottom:"4px",opacity:.85}}>आधिकारिक स्नान तिथियाँ</span>
          <div className="sec-label">Official Dates</div>
          <h2>Simhastha 2028 Snan Calendar</h2>
          <p className="sec-sub">All auspicious bathing dates issued by the MP Government. Shahi Snan involves ceremonial Akhada processions.</p>
        </div>
        <div className="snan-grid" style={{marginBottom:"64px"}}>
          {SNAN_DATES.map((s,i)=>(
            <div key={i} className={`snan-card${s.shahi?" shahi":""}`} onClick={()=>alert(`${s.name} (${s.nameHi})\nDate: ${s.date}\nTiming: ${s.time}${s.shahi?"\n🏆 Shahi Snan — Akhada ceremonial procession":""}`)}>
              <div className="sc-type">{s.shahi?"🏆 Shahi Snan · शाही स्नान":"Snan Tithi"}</div>
              <div className="sc-name">{s.name}</div>
              <div className="sc-hi">{s.nameHi}</div>
              <div className="sc-date">{s.date}</div>
              <div className="sc-time">{s.time}</div>
            </div>
          ))}
        </div>
        <p style={{fontSize:"12px",color:"var(--muted)",marginTop:"-52px",marginBottom:"64px",textAlign:"center"}}>* Timings are approximate subject to official MP Government confirmation.</p>

        {/* LIVE DARSHAN */}
        <div className="sec-head">
          <div className="sec-label">Sacred Streams</div>
          <h2>Live Darshan & Aarti Timings</h2>
        </div>
        <div className="darshan-grid" style={{marginBottom:"64px"}}>
          {DARSHAN_FEEDS.map((d,i)=>(
            <div key={i} className="dc" onClick={()=>setPage("live-darshan")}>
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

        {/* TEMPLES GHATS AKHADAS */}
        <div className="sec-head">
          <div className="sec-label">Sacred Ujjain</div>
          <h2>Temples, Ghats & Akhadas</h2>
        </div>
        <div className="ptabs" style={{marginBottom:"24px"}}>
          {[["temples","Temples"],["ghats","Ghats"],["akhadas","Akhadas"]].map(([id,en])=>(
            <button key={id} className={`ptab${activeTab===id?" active":""}`} onClick={()=>setActiveTab(id)}>{en}</button>
          ))}
        </div>
        
        {/* Yahan places-grid ko naye bg-card me badla hai */}
        <div className="places-grid" style={{marginBottom:"64px"}}>
          {tabData[activeTab].map((p,i)=>{
            const bgImg = PLACE_BG[activeTab][i] || "";
            return (
              // Temples/Ghats/Akhadas grid mein click change karo
<div key={i} className="bg-card" onClick={() => setModalData(p)}>
                <div className="bg-card-img" style={{ backgroundImage: `url(${bgImg})` }} />
                <div className="bg-card-overlay" />
                <div className="bg-card-content">
                  <span className="bg-icon">{p.icon}</span>
                  <div className="bg-title">{p.name}</div>
                  <div className="bg-subtitle">{p.hi}</div>
                  <div className="bg-desc">{p.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* HERITAGE */}
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

        {/* ZONES */}
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

        {/* ACCOMMODATION */}
        
        {/* Hotel AD Section */}
<section className="section" style={{background:"var(--white)"}}>
  <div className="container">
    <div className="sec-head"><div className="sec-label">Where to Stay</div><h2>Accommodation for Every Pilgrim</h2></div>
    
    <div className="hotels-grid">
      {/* Yahan hum HOTELS_DATA ko map kar rahe hain */}
      {HOTELS_DATA.map((h, i) => (
        <div key={i} className="hotel-card" onClick={() => setPage("hotels")}>
          <div className="hcard-img">
            {h.img ? <img loading="lazy"
decoding="async" src={h.img} alt={h.name} loading="lazy"/> : <div style={{fontSize:"60px"}}>🏨</div>}
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
              <button className="btn btn-primary btn-sm" onClick={(e) => {e.stopPropagation(); setPage("hotels")}}>Book Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* SATVIK FOOD & CULTURE */}
        <div className="sec-head"><div className="sec-label">Experience Ujjain</div><h2>Events & Culture </h2></div>
        <div className="cult-grid" style={{marginBottom:"64px"}}>
          {[{emoji:"🍛",tag:"Food",name:"Prasad & Local Cuisine",desc:"Poha-jalebi, bhutte ki kees, sabudana khichdi, dal-bafla. Hundreds of free langars run throughout the Mela.",btn:"Food Map →"},
            {emoji:"🎭",tag:"Performing Arts",name:"Cultural Events & Performances",desc:"Classical music, folk dance, Ram Leela, and Kavi Sammelan nightly. Most events are free for all pilgrims.",btn:"View Calendar →"},
            {emoji:"🏺",tag:"Artisan Crafts",name:"Local Artisans & Handcrafts",desc:"Chanderi sarees, brass and copper ware, hand-painted pottery, religious idols — directly from artisans.",btn:"Browse →"},
            {emoji:"🕯️",tag:"Evening Ritual",name:"Shipra River Aarti",desc:"Nightly Aarti at Ram Ghat — 1,000+ diyas lit simultaneously. India's most breathtaking spiritual spectacle.",btn:"Watch Live →"},
            {emoji:"🌿",tag:"Wellness",name:"Ayurveda & Yoga Camps",desc:"Ayurvedic treatment camps, yoga shalas, and meditation retreats set up across the Mela grounds.",btn:"Find Camp →"},
            {emoji:"🎶",tag:"Sacred Music",name:"Kirtan & Bhajan Sessions",desc:"Continuous bhajan and kirtan sessions by renowned artists from across India during the entire Mela period.",btn:"Schedule →"},
          ].map((c,i)=>(
            <div key={i} className="cult" onClick={()=>alert(`${c.name}\nContact: info@mysimhastha.com`)}>
              <div className="cult-img">{c.emoji}</div>
              <div className="cult-body">
                <div className="cult-tag">{c.tag}</div>
                <div className="cult-name">{c.name}</div>
                <p className="cult-desc">{c.desc}</p>
                <button className="btn btn-gold btn-sm" onClick={e=>e.stopPropagation()}>{c.btn}</button>
              </div>
            </div>
          ))}
        </div>
        {modalData && (
  <div className="modal-overlay" onClick={() => setModalData(null)}>
    <div className="modal-box" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={() => setModalData(null)}>✕</button>
      
      <div style={{fontSize: "40px", marginBottom: "10px"}}>{modalData.icon}</div>
      <h3 style={{fontFamily: "var(--serif)", fontSize: "24px", color: "var(--deep)"}}>{modalData.name}</h3>
      <p style={{marginTop: "10px", color: "var(--muted)"}}>{modalData.desc}</p>
      <div style={{marginTop: "15px", fontWeight: 700, color: "var(--saffron)"}}>{modalData.detail}</div>
    </div>
  </div>
)}
      </div>
    </div>
  )
}

/* ═══ LIVE DARSHAN PAGE ══════════════════════════════ */
function LiveDarshanPage() {
  return (
    <div className="page-wrap">
      <div className="page-hero" data-shlok="जय महाकाल" style={{ background: "linear-gradient(160deg, #0A0400, #1A0000)" }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontFamily: "var(--ui)", fontSize: "11px", fontWeight: 900, letterSpacing: "1px", textTransform: "uppercase", color: "rgba(255,200,100,.7)", marginBottom: "8px" }}>📡 LIVE STREAMS</div>
          <div className="page-hero-hi">लाइव दर्शन · आरती समय</div>
          <div className="page-hero-title">Live Darshan — Sacred Ujjain</div>
          <p className="page-hero-sub">HD streams from 6 sacred locations. All Aarti timings listed. Streams go live from April 13, 2028.</p>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="darshan-grid">
            {/* YAHAN HUMNE PURANA CODE HATAA KAR APNA NAYA CARD LAGA DIYA */}
            {DARSHAN_FEEDS.map((d, i) => (
              <LiveDarshanCard key={i} d={d} />
            ))}
          </div>
          
          <div style={{ background: "var(--cream2)", border: "1px solid var(--border)", borderRadius: "14px", padding: "20px 24px", marginTop: "24px", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <div style={{ fontSize: "24px" }}>🔔</div>
            <div>
              <div style={{ fontFamily: "var(--serif)", fontSize: "16px", fontWeight: 700, color: "var(--deep)", marginBottom: "3px" }}>Get Notified When Streams Go Live</div>
              <div style={{ fontFamily: "var(--ui)", fontSize: "13px", color: "var(--muted)" }}>All streams go live from April 13, 2028. Register your email for early access.</div>
            </div>
            <button className="btn btn-primary" style={{ marginLeft: "auto" }} onClick={() => alert("Notification registration:\ndarshan@kumbhportal.in")}>Register for Early Access →</button>
          </div>
        </div>
      </section>
    </div>
    
  );
  
}

/* ═══ HOTELS PAGE ════════════════════════════════════ */
function HotelsPage(){
  
  // 1. Konsa tab selected hai (Default: Hotel)
  const [activeCategory, setActiveCategory] = useState("Hotel");

  // 2. Hum kis page par hain (Default: Page 1)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Ek baar mein 6 cards dikhayenge

  // 3. Category ke hisaab se data filter karna
  const filteredData = HOTELS_DATA.filter(h => h.type === activeCategory);

  // 4. Pagination ka logic (Agar page 1 par hain, toh 0 se 6 tak items kaato)
  const currentItems = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Tab change hone par page wapas 1 par reset kar do
  const handleTabSwitch = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1); 
  };

  const [search,setSearch]=useState("");
  const [filter,setFilter]=useState("All");
  const types=["All","Hotel","Dharamshala","Restaurant","Cab Service","Guide"];
  const filtered=HOTELS_DATA.filter(h=>{
    const ms=h.name.toLowerCase().includes(search.toLowerCase())||h.type.toLowerCase().includes(search.toLowerCase())||h.location.toLowerCase().includes(search.toLowerCase());
    return ms&&(filter==="All"||h.type===filter);
  });
  return(
    <div className="page-wrap">
      <div className="page-hero" style={{background:"linear-gradient(160deg,#1A1000,#0A0600)"}}>
        <div style={{position:"absolute",inset:0,fontFamily:"var(--deva)",fontSize:"clamp(60px,10vw,120px)",color:"#fff",opacity:.025,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",userSelect:"none"}}>अतिथि देवो भव</div>
        <div className="container" style={{position:"relative",zIndex:1}}>
          <div style={{fontSize:"32px",marginBottom:"6px"}}>🏨</div>
          <div className="page-hero-title">Hotels and Stays</div>
          <p className="page-hero-sub">Verified partner accommodations and services for your comfortable pilgrimage</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div style={{display:"flex",gap:"12px",marginBottom:"20px",flexWrap:"wrap",alignItems:"center"}}>
            <div style={{position:"relative",flex:1,minWidth:"220px"}}>
              <span style={{position:"absolute",left:"14px",top:"50%",transform:"translateY(-50%)",fontSize:"15px",color:"var(--muted)"}}>🔍</span>
              <input type="text" placeholder="Search by name, location..." value={search} onChange={e=>setSearch(e.target.value)} style={{paddingLeft:"38px",width:"100%",padding:"11px 14px 11px 38px",border:"1.5px solid var(--border)",borderRadius:"10px",fontSize:"14px",background:"var(--white)",outline:"none",fontFamily:"var(--ui)"}}/>
            </div>
          </div>
          <div className="hotels-filters" style={{marginBottom:"32px"}}>
  {["Hotel", "Dharamshala", "Restaurant", "Cab Service", "Guide"].map(cat => (
    <button 
      key={cat} 
      className={`hotel-filter-btn ${activeCategory === cat ? "active" : ""}`} 
      onClick={() => handleTabSwitch(cat)}
    >
      {cat}
    </button>
  ))}
</div>
          <div className="hotels-grid">
            {currentItems.map((h,i)=>(
              <div key={i} className="hotel-card" onClick={()=>alert(`${h.name}\n\nType: ${h.type}\nPrice: ${h.price}\nLocation: ${h.location}\nPhone: ${h.phone}\nRating: ⭐ ${h.rating}\n\n${h.desc}\n\nBooking: info@mysimhastha.com`)}>
                <div className="hcard-img">
                  {h.img?<img loading="lazy"
decoding="async" src={h.img} alt={h.name} loading="lazy"/>:<div style={{fontSize:"70px"}}>{h.type==="Hotel"?"🏨":h.type==="Dharamshala"?"🏛️":h.type==="Restaurant"?"🍛":h.type==="Cab Service"?"🚖":"🧭"}</div>}
                  <div className="hcard-img-overlay"/>
                  <div className="hcard-tags"><span className="hcard-tag">{h.type}</span>{h.featured&&<span className="hcard-tag featured">Featured</span>}</div>
                </div>
                <div className="hcard-body">
                  <div className="hcard-top"><div className="hcard-name">{h.name}</div><div className="hcard-rating">⭐ {h.rating}</div></div>
                  <div className={`hcard-tier${h.tier==="Premium"?" premium":h.tier==="Satvik"?" satvik":""}`}>{h.tier}</div>
                  <div className="hcard-desc">{h.desc}</div>
                  <div className="hcard-meta">
                    <div className="hcard-meta-row"><span className="hcard-meta-icon">📍</span>{h.location}</div>
                    <div className="hcard-meta-row"><span className="hcard-meta-icon">📞</span>{h.phone}</div>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span className="hcard-price">{h.price}</span>
                    <button className="btn btn-primary btn-sm" onClick={e=>{e.stopPropagation();alert(`Booking for ${h.name}\nOpens October 2027.\nEmail: info@mysimhastha.com\nPhone: ${h.phone}`);}}>Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {totalPages > 1 && (
  <div className="pagination" style={{display:"flex", gap:"10px", justifyContent:"center", marginTop:"24px"}}>
    <button 
      className="btn btn-outline" 
      disabled={currentPage === 1} 
      onClick={() => setCurrentPage(currentPage - 1)}
    >
      ◀ Prev
    </button>

    <button 
      className="btn btn-outline" 
      disabled={currentPage === totalPages} 
      onClick={() => setCurrentPage(currentPage + 1)}
    >
      Next ▶
    </button>
  </div>
)}
          {filtered.length===0&&<div style={{textAlign:"center",padding:"48px 0",color:"var(--muted)"}}>No results found. Try a different search or filter.</div>}
          <div style={{background:"var(--deep)",borderRadius:"14px",padding:"24px",marginTop:"32px",display:"flex",alignItems:"center",gap:"16px",flexWrap:"wrap"}}>
            <div style={{fontSize:"28px"}}>🏨</div>
            <div><div style={{fontFamily:"var(--serif)",fontSize:"18px",fontWeight:700,color:"#fff",marginBottom:"3px"}}>List Your Property</div><div style={{fontSize:"13px",color:"rgba(255,255,255,.45)",marginTop:"2px"}}>Hotel, guesthouse, dharamshala, restaurant, cab or guide — reach millions of pilgrims.</div></div>
            <button className="btn btn-gold" style={{marginLeft:"auto"}} onClick={()=>alert("Property listing registration opens September 2027.\nEmail: info@mysimhastha.com")}>List Your Property →</button>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ═══ MISSING PERSONS PAGE ═══════════════════════════ */
function MissingPersonsPage(){
  const [form,setForm]=useState({name:"",age:"",desc:"",location:"",contact:"",reporter:""});
  const [list,setList]=useState(MISSING_DATA);
  const [statusFilter,setStatusFilter]=useState("all");
  const [showForm,setShowForm]=useState(false);
  const submit=()=>{
    if(!form.name.trim()){alert("Please enter the missing person's name.");return}
    if(!form.contact.trim()){alert("Please enter your contact number.");return}
    setList(l=>[{id:Date.now(),name:form.name,age:form.age,desc:form.desc,location:form.location,date:new Date().toISOString().split("T")[0],contact:form.contact,reporter:form.reporter,status:"missing"},...l]);
    setForm({name:"",age:"",desc:"",location:"",contact:"",reporter:""});
    setShowForm(false);
    alert("✅ Report submitted! Ground volunteers have been alerted.\nEmergency Helpline: 1800-XXX-XXXX");
  };
  const filtered=list.filter(p=>statusFilter==="all"||p.status===statusFilter);
  return(
    <div className="page-wrap">
      <div className="page-hero" style={{background:"linear-gradient(160deg,#2D0000,#0A0000)"}}>
        <div className="container" style={{position:"relative",zIndex:1}}>
          <div style={{fontSize:"11px",fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",color:"#FCA5A5",marginBottom:"8px"}}>🆘 EMERGENCY HELP</div>
          <div className="page-hero-title">Missing Persons Board</div>
          <p className="page-hero-sub">Help reunite families — every share matters. Ground team monitors 24/7.</p>
          <div style={{marginTop:"12px",fontSize:"14px",fontWeight:700,color:"#FCA5A5"}}>Emergency Helpline: 1800-XXX-XXXX (24/7 Free)</div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          {/* Board header */}
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"28px",flexWrap:"wrap",gap:"12px"}}>
            <div>
              <h2 style={{marginBottom:"4px"}}>Missing Persons Board</h2>
              <p style={{fontSize:"14px",color:"var(--muted)"}}>Help reunite families — every share matters</p>
            </div>
            <div style={{display:"flex",gap:"10px"}}>
              <button className="btn btn-red" onClick={()=>setShowForm(!showForm)}>⚠️ Report Missing Person</button>
              {["all","missing","found"].map(s=><button key={s} className={`btn btn-sm${statusFilter===s?" btn-primary":" btn-ghost"}`} onClick={()=>setStatusFilter(s)}>{s==="all"?"All":s==="missing"?"Searching":"Found"}</button>)}
            </div>
          </div>

          {/* Report Form */}
          {showForm&&(
            <div style={{background:"var(--white)",border:"2px solid var(--saffron)",borderRadius:"16px",padding:"28px",marginBottom:"32px"}}>
              <h3 style={{marginBottom:"16px"}}>Report a Missing Person</h3>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:"0 16px"}}>
                {[["Full Name *","name","text","e.g. Ramesh Kumar Sharma"],["Age & Gender *","age","text","e.g. 65 years, Male"],["Last Seen Location","location","text","e.g. Ram Ghat, Zone 1"],["Your Contact *","contact","tel","+91 98765 43210"],["Your Name (Reporter)","reporter","text","e.g. i Sharma"]].map(([l,k,t,p])=>(
                  <div key={k} className="form-group"><label>{l}</label><input type={t} placeholder={p} value={form[k]} onChange={e=>setForm(f=>({...f,[k]:e.target.value}))}/></div>
                ))}
              </div>
              <div className="form-group"><label>Description (clothing, features, etc.)</label><textarea placeholder="e.g. Wearing white dhoti and saffron kurta. Has a walking stick. Grey hair, thin build." value={form.desc} onChange={e=>setForm(f=>({...f,desc:e.target.value}))}/></div>
              <div className="form-group">
                <label>Upload Photo</label>
                <div className="upload-zone" onClick={()=>document.getElementById("mp-file")?.click()}>
                  <div style={{fontSize:"24px",marginBottom:"6px"}}>📷</div>
                  <div style={{fontSize:"13px",color:"var(--muted)"}}>Click to upload a recent photo</div>
                  <input id="mp-file" type="file" accept="image/*" style={{display:"none"}} onChange={()=>alert("Photo attached ✅")}/>
                </div>
              </div>
              <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
                <button className="btn btn-red btn-lg" onClick={submit}>Submit Report Immediately</button>
                <button className="btn btn-ghost btn-lg" onClick={()=>setShowForm(false)}>Cancel</button>
              </div>
            </div>
          )}

          {/* Cards Grid */}
          <div className="mp-grid">
            {filtered.map(p=>(
              <div key={p.id} className="mp-card" onClick={()=>alert(`${p.name}\n\nAge: ${p.age}\nLast seen: ${p.location}\nDate: ${p.date}\n${p.desc}\n\nContact: ${p.contact} (${p.reporter})`)}>
                <div className="mp-photo">
                  <svg className="mp-photo-icon" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="7" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>
                </div>
                <div className="mp-body">
                  <div className="mp-name-row"><span className="mp-name">{p.name}</span><span className={`mp-badge${p.status==="found"?" found":""}`}>{p.status==="found"?"Found":"Missing"}</span></div>
                  <div className="mp-age">{p.age}</div>
                  <div className="mp-desc">{p.desc}</div>
                  <div className="mp-detail">📍 {p.location}</div>
                  <div className="mp-detail">🗓 {p.date}</div>
                  <div className="mp-contact-row">📞 {p.contact} <span style={{color:"var(--muted)",fontWeight:400}}>({p.reporter})</span></div>
                </div>
              </div>
            ))}
          </div>
          {filtered.length===0&&<div style={{textAlign:"center",padding:"48px",color:"var(--muted)",fontSize:"16px"}}>No records found for this filter.</div>}
        </div>
      </section>
    </div>
  )
}

const var_r = '"var(--r)"';

/* ═══ FOOTER ══════════════════════════════════════════ */
function Footer({setPage}){
  return(
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-col-brand">
            <div className="fl-logo"><div className="fl-mark">🕉️</div><div><div className="fl-name">उज्जैन सिंहस्थ</div><div className="fl-sub">SIMHASTHA 2028</div></div></div>
            <p className="brand-desc">India&apos;s most complete sacred pilgrimage portal.</p>
            <div className="foot-shlok">॥ हर हर महादेव · जय महाकाल ॥<br/>शिप्रायां स्नानमात्रेण पाप मुक्तो भवेन्नरः।</div>
          </div>
          <div className="foot-links-grid">
          <div className="fc"><div className="fc-title">Simhastha 2028</div><ul>
            {[["Snan Calendar","simhastha-2028"],["Live Darshan","live-darshan"],["Temples & Ghats","simhastha-2028"],["Heritage","simhastha-2028"],["Zones & Routes","simhastha-2028"]].map(([l,p])=><li key={l}><button onClick={()=>setPage(p)}>{l}</button></li>)}
          </ul></div>
          <div className="fc"><div className="fc-title">Services</div><ul>
            {[["Hotels & Stays","hotels"],["Missing Persons","missing-persons"],["Transport","hotels"],["Guide","hotels"]].map(([l,p])=><li key={l}><button onClick={()=>setPage(p)}>{l}</button></li>)}
          </ul></div>
          <div className="fc"><div className="fc-title">Contact</div><ul>
            <li><button onClick={()=>alert("info@mysimhastha.com")}>info@mysimhastha.com</button></li>
            <li><button onClick={()=>alert("Helpline: 1800-XXX-XXXX (24/7)")}>Helpline: 1800-XXX-XXXX</button></li>
          </ul></div>
          </div>
        </div>
        <div className="foot-bottom">
          <p>© 2026 mysimhastha.com · All rights reserved</p>
          <p className="foot-hi">जय महाकाल · उज्जैन</p>
        </div>
      </div>
    </footer>
  )
}
/* ═══ ABOUT US PAGE ════════════════════════════════════ */
function AboutPage() {
  return (
    <div className="page-wrap">
      {/* Hero Section */}
      <div className="page-hero" style={{ background: "linear-gradient(160deg, #1A0800, #0A0400)" }}>
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ fontFamily: "var(--ui)", fontSize: "11px", fontWeight: 900, letterSpacing: "1px", textTransform: "uppercase", color: "rgba(255,200,100,.7)", marginBottom: "8px" }}>📖 OUR STORY</div>
          <div className="page-hero-title">About KumbhPortal</div>
          <p className="page-hero-sub" style={{ margin: "0 auto" }}>India's Most Complete Sacred Pilgrimage Portal for Simhastha 2028</p>
        </div>
      </div>

      {/* About Content */}
      <section className="section" style={{ background: "var(--cream2)" }}>
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="sec-label">Our Mission</div>
              <h2>Serving Millions of Devotees Worldwide</h2>
              <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "16px" }}>mysimhastha.com is the official digital companion for pilgrims attending the Ujjain Simhastha Mahakumbh 2028. We bring together information, booking services, live darshan, and community support under one sacred roof.</p>
              <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "24px" }}>Built by a team of devotees and technologists, our mission is to ensure every pilgrim — whether attending in person or joining from across the globe — experiences the divine grace of Ujjain Simhastha 2028 seamlessly.</p>
              <button className="btn btn-primary" onClick={() => alert("Contact: info@mysimhastha.com\nHelpline: 1800-XXX-XXXX")}>Contact Us</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { icon: "🕉️", title: "Official & Verified", desc: "Recognised by the Government of Madhya Pradesh. All listings verified by our team." },
                { icon: "🌍", title: "Serving Global Devotees", desc: "Available in English, Hindi, Marathi, and Gujarati. Prasad ships to 60+ countries." },
                { icon: "🆘", title: "24/7 Pilgrim Support", desc: "Missing person board, emergency helpline, and ground volunteer network active throughout the Mela." },
              ].map((item, i) => (
                <div key={i} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "12px", padding: "18px 20px", display: "flex", gap: "14px" }}>
                  <div style={{ fontSize: "24px", flexShrink: 0, paddingTop: "2px" }}>{item.icon}</div>
                  <div>
                    <div style={{ fontFamily: "var(--serif)", fontSize: "17px", fontWeight: 700, color: "var(--text)", marginBottom: "4px" }}>{item.title}</div>
                    <div style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ═══ APP ROOT ════════════════════════════════════════ */
export default function App(){
  const [page,setPage]=useState("home");
  const [drawerOpen,setDrawerOpen]=useState(false);

  const navigate=(p)=>{
    setPage(p);
    setDrawerOpen(false);
    window.scrollTo(0,0);
    document.body.style.overflow="";
  };

  useEffect(()=>{
    document.body.style.overflow=drawerOpen?"hidden":"";
    return()=>{document.body.style.overflow=""};
  },[drawerOpen]);

  useEffect(()=>{window.scrollTo(0,0)},[page]);

  const renderPage=()=>{
    switch(page){
      case "home": return <HomePage setPage={navigate}/>;
      case "simhastha-2028": return <Simhastha2028Page setPage={navigate}/>;
      case "live-darshan": return <LiveDarshanPage/>;
      case "hotels": return <HotelsPage/>;
      case "missing-persons": return <MissingPersonsPage/>;
      case "about": return <AboutPage />;
      default: return <HomePage setPage={navigate}/>;
    }
  };

  const noFooter=["login","admin"].includes(page);

  // App.jsx ke return mein:
return (
  <>
    <style>{S}</style>
    
    {/* 1. Navbar Render Karo */}
    <Navbar 
       page={page} 
       setPage={navigate} 
       drawerOpen={drawerOpen} 
       setDrawerOpen={setDrawerOpen} 
    />

    {/* 2. Main Content */}
    <main>
      {renderPage()}
      {!noFooter && <Footer setPage={navigate}/>}
    </main>
  </>
)
}

