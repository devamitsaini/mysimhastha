export const SNAN_DATES = [
  { name:"First Shahi Snan", nameHi:"प्रथम शाही स्नान", day:22, month:"APR", weekday:"Tuesday", tithi:"Chaitra Shukla Purnima", shahi:true },
  { name:"Akshaya Tritiya", nameHi:"अक्षय तृतीया", day:6, month:"MAY", weekday:"Monday", tithi:"Vaishakha Shukla Tritiya", shahi:false },
  { name:"Second Shahi Snan", nameHi:"द्वितीय शाही स्नान", day:11, month:"MAY", weekday:"Saturday", tithi:"Vaishakha Shukla Ashtami", shahi:true },
  { name:"Narasimha Chaturdashi", nameHi:"नरसिंह चतुर्दशी", day:19, month:"MAY", weekday:"Sunday", tithi:"Vaishakha Shukla Chaturdashi", shahi:false },
  { name:"Third Shahi Snan", nameHi:"तृतीय शाही स्नान", day:20, month:"MAY", weekday:"Monday", tithi:"Vaishakha Shukla Purnima", shahi:true },
  { name:"Ganga Dussehra", nameHi:"गंगा दशहरा स्नान", day:3, month:"JUN", weekday:"Tuesday", tithi:"Jyeshtha Shukla Dashami", shahi:false },
  { name:"Nirjala Ekadashi", nameHi:"निर्जला एकादशी", day:11, month:"JUN", weekday:"Wednesday", tithi:"Jyeshtha Shukla Ekadashi", shahi:false },
  { name:"Fourth Shahi Snan", nameHi:"चतुर्थ शाही स्नान", day:18, month:"JUN", weekday:"Wednesday", tithi:"Jyeshtha Shukla Purnima", shahi:true },
];

export const DARSHAN_FEEDS = [
  { name:"Mahakaleshwar Jyotirlinga", nameHi:"महाकालेश्वर ज्योतिर्लिंग", videoId:"Kwjzg0aJGsk", icon:"🕉️", aartis:[{n:"Bhasma Aarti",t:"4:00 AM"},{n:"Naivedya Bhog",t:"7:30 AM"},{n:"Mahaabhog",t:"10:30 AM"},{n:"Sandhya Aarti",t:"5:30 PM"},{n:"Shayan Aarti",t:"10:30 PM"}], free:true, color:"#3D0C00" },
  { name:"Ram Ghat – River Shipra", nameHi:"राम घाट · शिप्रा नदी", videoId:"Ujjain2", icon:"🌊", aartis:[{n:"Morning Aarti",t:"6:00 AM"},{n:"Madhyan Aarti",t:"12:00 PM"},{n:"Sandhya Aarti",t:"7:00 PM"},{n:"Maha Aarti",t:"7:30 PM"}], free:true, color:"#001830" },
  { name:"Harsiddhi Mata Mandir", nameHi:"हरसिद्धि माता मंदिर", videoId:"Ujjain3", icon:"🌺", aartis:[{n:"Mangala Aarti",t:"5:30 AM"},{n:"Rajbhog",t:"11:30 AM"},{n:"Sandhya Aarti",t:"6:30 PM"},{n:"Shayan Aarti",t:"9:30 PM"}], free:true, color:"#2D0020" },
  { name:"Kal Bhairav Mandir", nameHi:"काल भैरव मंदिर", videoId:"Ujjain4", icon:"🔱", aartis:[{n:"Panchamrit Abhishek",t:"6:00 AM"},{n:"Madhyan Aarti",t:"12:00 PM"},{n:"Shringaar Aarti",t:"6:00 PM"},{n:"Tantrik Aarti",t:"8:00 PM"}], free:true, color:"#0D0D2D" },
  { name:"Shahi Snan – HD Stream", nameHi:"शाही स्नान · HD प्रसारण", videoId:"Ujjain5", icon:"🏆", aartis:[{n:"Apr 13 – Chaitra Purnima",t:"4:00 AM"},{n:"May 12 – Vaishakh Amavasya",t:"3:30 AM"},{n:"May 26 – Vaishakh Purnima",t:"4:00 AM"},{n:"Jun 10 – Jyeshtha Amavasya",t:"3:00 AM"}], free:false, color:"#1C1000" },
  { name:"Mangalnath Temple", nameHi:"मंगलनाथ मंदिर", videoId:"Ujjain6", icon:"⭐", aartis:[{n:"Mangala Aarti",t:"5:00 AM"},{n:"Madhyan",t:"12:00 PM"},{n:"Sandhya Aarti",t:"7:00 PM"},{n:"Special Tuesday",t:"Weekly"}], free:true, color:"#001A0D" },
];
export const heritageList = [
  {
    emoji: "👑",
    era: "57 BCE",
    name: "King Vikramaditya",
    desc: "Legendary ruler of Ujjain whose kingdom became a center of learning and culture."
  },
  {
    emoji: "🔭",
    era: "1733 AD",
    name: "Vedh Shala",
    desc: "Ancient astronomical observatory built by Maharaja Jai Singh II."
  },
  {
    emoji: "📚",
    era: "Ancient India",
    name: "Sandipani Ashram",
    desc: "The gurukul where Lord Krishna, Balarama and Sudama studied."
  },
  {
    emoji: "🕉️",
    era: "Ancient Heritage",
    name: "Mahakaleshwar",
    desc: "One of the twelve sacred Jyotirlingas of Lord Shiva."
  }
];
export const HOTELS_DATA = [
  {
    id: 1,
    name: "Hotel Mahakal Palace",
    type: "Hotel",
    price: "₹3,500/night",
    location: "Near Mahakal Temple, Ujjain",
    phone: "+91 73400 xxxxx",
    rating: 4.5,
    tier: "Premium",
    desc: "Luxury hotel with temple views and modern amenities.",
    featured: true,
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80"
  },
  {
    id: 2,
    name: "Shivam Residency",
    type: "Hotel",
    price: "₹2,800/night",
    location: "Ram Ghat Road, Ujjain",
    phone: "+91 73400 xxxxx",
    rating: 4.3,
    tier: "Comfort",
    desc: "Comfortable stay near Ram Ghat with family-friendly rooms.",
    featured: false,
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80"
  },
  {
    id: 3,
    name: "Hotel Rudraksh",
    type: "Hotel",
    price: "₹2,200/night",
    location: "Freeganj, Ujjain",
    phone: "+91 73400 xxxxx",
    rating: 4.2,
    tier: "Standard",
    desc: "Clean rooms and convenient access to major temples.",
    featured: false,
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80"
  },
  {
    id: 4,
    name: "Mahakal Inn",
    type: "Hotel",
    price: "₹1,900/night",
    location: "Near Harsiddhi Temple",
    phone: "+91 73400 xxxxx",
    rating: 4.1,
    tier: "Budget",
    desc: "Affordable accommodation for pilgrims.",
    featured: false,
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80"
  },
  {
    id: 5,
    name: "Hotel Kalpataru",
    type: "Hotel",
    price: "₹4,200/night",
    location: "Mahakal Corridor",
    phone: "+91 73400 xxxxx",
    rating: 4.7,
    tier: "Premium",
    desc: "Elegant rooms with premium facilities and dining.",
    featured: true,
    img: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80"
  },
  {
    id: 6,
    name: "Shipra View Hotel",
    type: "Hotel",
    price: "₹3,000/night",
    location: "Near Ram Ghat",
    phone: "+91 73400 xxxxx",
    rating: 4.4,
    tier: "Comfort",
    desc: "Beautiful views and easy access to bathing ghats.",
    featured: false,
    img: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=600&q=80"
  },
  {
    id: 7,
    name: "Ujjain Heritage Stay",
    type: "Hotel",
    price: "₹2,600/night",
    location: "Old City, Ujjain",
    phone: "+91 73400 xxxxx",
    rating: 4.3,
    tier: "Heritage",
    desc: "Traditional Malwa-style hospitality and decor.",
    featured: false,
    img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80"
  }
];

export const MISSING_DATA = [
  { id:1, name:"Rajesh Kumar Sharma", age:"65 • Male", desc:"Wearing white dhoti and saffron kurta. Has a walking stick. Grey hair, thin build.", location:"Ram Ghat, Ujjain", date:"2025-05-15", contact:"", reporter:"Amit Sharma", status:"missing" },
  { id:2, name:"Sunita Devi", age:"58 • Female", desc:"Wearing green saree with gold border. Medium build, wears glasses.", location:"Mahakal Temple Queue", date:"2025-05-14", contact:"", reporter:"Ravi Patel", status:"missing" },
  { id:3, name:"Aryan (Child)", age:"8 • Male", desc:"Wearing blue t-shirt and black shorts. Short hair, fair complexion.", location:"Kumbh Mela Ground Zone 2", date:"2025-05-16", contact:"", reporter:"Priya Singh", status:"missing" },
  { id:4, name:"Mohammad Iqbal", age:"45 • Male", desc:"Wearing brown pants and white shirt. Tall, beard, carries a blue bag.", location:"Ujjain Bus Stand", date:"2025-05-15", contact:"", reporter:"Fatima Begum", status:"missing" },
];

export const NEWS_DATA = [
  { id:1, tag:"OFFICIAL", date:"28 Nov", title:"Shahi Snan Dates Officially Confirmed for 2028", desc:"All 4 Shahi Snan dates confirmed by the Simhastha 2028 Organizing Committee, Government of Madhya Pradesh.", img:"https://images.indianexpress.com/2016/05/ujjain-mahakmb-759.jpg?w=1200" },
  { id:2, tag:"INFRASTRUCTURE", date:"15 Nov", title:"₹3,200 Crore Allocated for Simhastha Development", desc:"The Government of MP allocates massive funds for new ghats, roads, sanitation facilities, and crowd management systems.", img:"https://i.ytimg.com/vi/J_99RvBKjFM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCuKcg7AXST2Db7mwSotew7O7MlWA" },
  { id:3, tag:"AKHADA", date:"02 Nov", title:"All 13 Akhadas Confirm Participation for 2028", desc:"Camp locations along Shipra banks finalized. Historic participation with new Kinnar Akhada included.", img:"https://posterimage.amarujala.com/1URVxCv.0000000.jpg?w=414&dpr=1.0&q=80" },
  { id:4, tag:"RAILWAY", date:"20 Oct", title:"Railways Announce 6× Trains to Ujjain", desc:"Direct trains from Mumbai, Delhi, Ahmedabad, Hyderabad and Bangalore increased 6-fold during the Simhastha period.", img:"https://st.indiarailinfo.com/kjfdsuiemjvcya24/0/6/1/7/3278617/0/screenshot201804070043591437555.jpg" },
];

export const GALLERY_IMAGES = [
  { url:"https://static.india.com/wp-content/uploads/2018/08/ujjain-kumbh-mela-7.jpg?impolicy=Medium_Widthonly&w=700", cap:"Ujjain Skyline at Dusk", wide:true },
  { url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxgL9yaKlpFOD0JAoLvfb4L9NMIPXUJNKWw&s", cap:"Mahakaleshwar Temple" },
  { url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyUrR1AicQFZHgUOKazTuixSAn9wGANKkKwA&s", cap:"Ram Ghat Snan" },
  { url:"https://www.ujjaindarshan.com/wp-content/uploads/2025/04/19.jpg", cap:"Evening Aarti Ceremony", wide:false },
  { url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrGTGuIAvMiDv1sZsTqEEtaOGqp07716iODw&s", cap:"Mela Ground Aerial View" },
  { url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ZwP59b0YTX5yYed3qdZ76jHbfbj86jg2tQ&s", cap:"Devotion & Prayer" },
];

export const KUMBH_YEARS = [
  { year:"2016", city:"Ujjain", type:"Simhastha", note:"40 million+ pilgrims" },
  { year:"2019", city:"Prayagraj", type:"Kumbh Mela", note:"240 million+ visitors" },
  { year:"2021", city:"Haridwar", type:"Kumbh Mela", note:"Held amid pandemic precautions" },
  { year:"2025", city:"Prayagraj", type:"Maha Kumbh", note:"Largest spiritual gathering" },
  { year:"2028", city:"Ujjain", type:"Simhastha", note:"Upcoming — Be There!", active:true },
];

export const PLACE_BG = {
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

export const HERITAGE_BG = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIGA6YVeZOwsa94vhL_FIGK5CWxh7XdtTdJw&s",
  "https://images.news18.com/ibnkhabar/uploads/2023/11/3689083_HYP_0_FEATUREIMG_20231106_190647.jpg?im=FitAndFill,width=1200,height=1200",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEnftc4nCk3XIRuOzc0f34JEzeRu_KPOXaZQ&s",
  "https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_Ujjain_tv_destination_img_2_l_791_1055.jpg",
  "https://static.india.com/wp-content/uploads/2018/08/ujjain-kumbh-mela-7.jpg?impolicy=Medium_Widthonly&w=700",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyUrR1AicQFZHgUOKazTuixSAn9wGANKkKwA&s",
];

export const TITHIS_HI = ["प्रतिपदा","द्वितीया","तृतीया","चतुर्थी","पंचमी","षष्ठी","सप्तमी","अष्टमी","नवमी","दशमी","एकादशी","द्वादशी","त्रयोदशी","चतुर्दशी","पूर्णिमा"];
export const TITHIS_EN = ["Pratipada","Dwitiya","Tritiya","Chaturthi","Panchami","Shashthi","Saptami","Ashtami","Navami","Dashami","Ekadashi","Dwadashi","Trayodashi","Chaturdashi","Purnima"];
export const MASA_HI = ["चैत्र","वैशाख","ज्येष्ठ","आषाढ़","श्रावण","भाद्रपद","आश्विन","कार्तिक","मार्गशीर्ष","पौष","माघ","फाल्गुन"];
export const GREG_MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
export const VAARS_EN = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
export const VAARS_HI = ["रविवार","सोमवार","मंगलवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"];
export const NAKSHATRAS = ["Ashwini","Bharani","Krittika","Rohini","Mrigashira","Ardra","Punarvasu","Pushya","Ashlesha","Magha","Purva Phalguni","Uttara Phalguni","Hasta"];
export const FESTIVALS = {"6-5":"Jyeshtha Purnima","6-1":"Nirjala Ekadashi","5-12":"Vaishakh Amavasya","5-26":"Vaishakh Purnima","4-13":"Chaitra Purnima"};

export const CULTURE_DATA = [
  {
    img: "https://www.pansnovens.com/blog/wp-content/uploads/2019/07/kapa-prashad.jpg",
    tag: "Food",
    name: "Prasad & Local Cuisine",
    desc: "Poha-jalebi, bhutte ki kees, sabudana khichdi and traditional Malwa delicacies.",
    btn: "Food Map →",
    page: "food-map"
  },

  {
    img: "https://www.mptourism.com/web/image/catalog/Blog-2025/folk-dance-of-mp.webp",
    tag: "Performing Arts",
    name: "Cultural Events & Performances",
    desc: "Classical music, folk dance, Ram Leela and Kavi Sammelan throughout Simhastha.",
    btn: "View Calendar →",
    page: "events"
  },

  {
    img: "https://new.vedikpuja.com/public//temple-images/temple-1706342994.webp",
    tag: "Evening Ritual",
    name: "Shipra River Aarti",
    desc: "Witness thousands of diyas illuminating the sacred Shipra River every evening.",
    btn: "Watch Live →",
    page: "live-darshan"
  },

  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL9oQ5a1zSFtPpuFlAkQw_RZDrzU5xl-B-eA&s",
    tag: "Wellness",
    name: "Yoga & Ayurveda Camps",
    desc: "Join yoga sessions, meditation retreats and Ayurveda wellness camps.",
    btn: "Find Camp →",
    page: "wellness"
  }
];