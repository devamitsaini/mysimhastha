require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);


const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash"
});

const Parser = require("rss-parser");
const axios = require("axios");
const cheerio = require("cheerio");
const { createClient } = require("@supabase/supabase-js");

const parser = new Parser({
  timeout: 15000,
  headers: {
    "User-Agent": "Mozilla/5.0"
  }
});

const supabase = createClient(
  process.env.SUPABASE_URL || process.env.REACT_APP_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

console.log("========== ENV ==========");
console.log("SUPABASE_URL:", !!process.env.SUPABASE_URL);
console.log("REACT_APP_SUPABASE_URL:", !!process.env.REACT_APP_SUPABASE_URL);
console.log("SUPABASE_SERVICE_KEY:", !!process.env.SUPABASE_SERVICE_KEY);
console.log("GEMINI_API_KEY:", !!process.env.GEMINI_API_KEY);
console.log("=========================");

const keywords = [
"mahakal",
"mahakaleshwar",
"mahakal lok",
"mahakallok",
"bhasma aarti",
"bhasmaarti",
"simhastha",
"simhastha 2028",
"kumbh",
"shahi snan",
"shipra",

// Hindi
"महाकाल",
"महाकालेश्वर",
"सिंहस्थ",
"भस्म",
"उज्जैन",
"क्षिप्रा"
];

const badKeywords = [
"bajaj",
"pulsar",
"movie",
"film",
"actor",
"actress",
"cricket",
"ipl",
"share market",
"stock",
"sensex",
"nifty",
"election",
"assembly",
"congress",
"bjp",
"ranveer",
"allahbadia",
"birthday",
"girlfriend",
"photos",
"viral",
"actor",
"actress",
"celebrity",
"youtube",
"minister",
"education minister",
"politics",
"political",
"tmc",
"congress",
"statement",
"remark",
"controversy"
];

const englishFeeds = [
  "https://news.google.com/rss/search?q=%22Mahakal%22",
  "https://news.google.com/rss/search?q=%22Mahakaleshwar%22",
  "https://news.google.com/rss/search?q=%22Simhastha%22",
  "https://news.google.com/rss/search?q=%22Simhastha%202028%22"
];

const hindiFeeds = [
  encodeURI("https://news.google.com/rss/search?q=महाकाल"),
  encodeURI("https://news.google.com/rss/search?q=महाकालेश्वर"),
  encodeURI("https://news.google.com/rss/search?q=सिंहस्थ"),
  encodeURI("https://news.google.com/rss/search?q=भस्म आरती"),
  encodeURI("https://news.google.com/rss/search?q=उज्जैन"),
  encodeURI("https://news.google.com/rss/search?q=भस्म आरती महाकाल"),
  encodeURI("https://news.google.com/rss/search?q=उज्जैन महाकाल")
];

const feeds = [
  ...englishFeeds,
  ...hindiFeeds
];

async function generateAISummary(title, snippet) {
try {
  const isHindi =
  /[\u0900-\u097F]/.test(title);

const languageInstruction =
  isHindi
    ? "Write the summary in simple Hindi using Devanagari script."
    : "Write the summary in English.";
const prompt = `
You are an editor for MySimhastha, a website focused on Mahakal Temple, Ujjain and Simhastha 2028.

Write a news summary between 120 and 180 words.

Structure:

Paragraph 1:

* What happened?
* Where did it happen?
* Who is involved?

Paragraph 2:

* Why is this important?
* What is the background or context?

Paragraph 3:

* How does this affect devotees, pilgrims, tourists or visitors?

${languageInstruction}

Mention Ujjain, Mahakal Temple or Simhastha whenever relevant.
Do not repeat the headline.
Do not use bullet points.
Do not speculate.
Return only the summary.

Headline:
${title}

Available Information:
${snippet}

`;



const result =
  await model.generateContent(prompt);

return result.response
  .text()
  .trim();


} catch (err) {
  (
    "Gemini Error:",
    err.message
  );

  return "";
}
}

function cleanTitle(title) {
  return title
    .replace(/\s*-\s*Times of India$/i, "")
    .replace(/\s*-\s*India Today$/i, "")
    .replace(/\s*-\s*News18$/i, "")
    .replace(/\s*-\s*Bhaskar English$/i, "")
    .replace(/\s*-\s*Mshale$/i, "")
    .replace(/\s*-\s*Swarajyamag$/i, "")
    .replace(/\s*-\s*Kanak News Odisha$/i, "")
    .replace(/@\w+/g, "")
    .replace(/\|\s*@.*$/i, "")
    .replace(/\|\s*[^|]{0,50}\s*$/i, "")
    .replace(/\s+/g, " ")
    .replace(/\s*-\s*The Economic Times$/i, "")
    .replace(/\s*-\s*Zee News$/i, "")
    .replace(/\s*-\s*Dainik Bhaskar$/i, "")
    .replace(/\s*-\s*Patrika News$/i, "")
    .replace(/\s*-\s*Amar Ujala$/i, "")
    .replace(/\s*-\s*ABP News$/i, "")
    .trim();
}

function createSlug(title) {
  return title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .substring(0, 120);
}

async function getImage(link) {
  try {
    const { data } = await axios.get(link, {
      timeout: 15000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
      }
    });

    const $ = cheerio.load(data);

    const image =
      $('meta[property="og:image"]').attr("content") ||
      $('meta[name="twitter:image"]').attr("content") ||
      "";

    // Reject Google News placeholder images
    if (
      image.includes("googleusercontent.com") ||
      image.includes("gstatic.com")
    ) {
      return "";
    }

    return image;
  } catch (err) {
    return "";
  }
}

async function importRSS() {
try {

console.log("\n=================================");
console.log("Starting RSS Import");
console.log("=================================\n");


for (const feedUrl of feeds) {

  console.log("\nFetching Feed:");
console.log(feedUrl);

  let feed;

  try {
    console.log("Connecting to Google RSS...");

const response = await axios.get(feedUrl, {
  timeout: 15000,
  headers: {
    "User-Agent": "Mozilla/5.0"
  }
});

console.log("RSS Downloaded");

feed = await parser.parseString(response.data);

console.log("RSS Parsed");
  } catch (err) {
    ("Feed Error:", err.message);
    continue;
  }

  console.log(`Found ${feed.items.length} items`);

  for (const item of feed.items.slice(0, 5)) {
    const rawTitle = item.title || "";
    const title = cleanTitle(rawTitle);
    let category = "Ujjain News";

const titleLower = title.toLowerCase();

if (
  titleLower.includes("simhastha") ||
  titleLower.includes("kumbh") ||
  titleLower.includes("shahi snan") ||
  title.includes("सिंहस्थ")
) {
  category = "Simhastha News";
}
else if (
  titleLower.includes("bhasma") ||
  titleLower.includes("mahakal") ||
  titleLower.includes("mahakaleshwar") ||
  title.includes("महाकाल") ||
  title.includes("महाकालेश्वर") ||
  title.includes("भस्म")
) {
  category = "Mahakal News";
}
else if (
  titleLower.includes("shipra") ||
  title.includes("क्षिप्रा")
) {
  category = "Shipra News";
}

    const combinedText = (
  title +
  " " +
  (item.contentSnippet || "")
).toLowerCase();

const locationKeywords = [
  "ujjain",
  "mahakal",
  "mahakaleshwar",
  "mahakal lok",
  "simhastha",
  "shipra",
  "महाकाल",
  "सिंहस्थ",
  "भस्म",
  "उज्जैन",
  "महाकालेश्वर",
  "क्षिप्रा"
];

const isLocationRelevant =
  locationKeywords.some(keyword =>
    combinedText.includes(keyword.toLowerCase())
  );

if (!isLocationRelevant) {
  ("Not Ujjain Related");
  continue;
}

const text = title.toLowerCase();

const isBad = badKeywords.some(
  keyword =>
    text.includes(keyword.toLowerCase())
);

if (isBad) {
  ("Rejected:", title);
  continue;
}

const matched = keywords.some(
  keyword =>
    text.includes(keyword.toLowerCase()) ||
    title.includes(keyword)
);

if (!matched) {
  continue;
}

    (
      "\n---------------------------------"
    );
    (
      "Relevant:",
      title
    );

    const slug =
      createSlug(title);

const {
  data: existing,
  error: checkError
} = await supabase
  .from("news")
  .select("id")
  .eq("source_url", item.link)
  .limit(1);

    if (checkError) {
      (
        "DB Check Error:",
        checkError.message
      );
      continue;
    }

    if (
      existing &&
      existing.length > 0
    ) {
      (
        "Already Exists"
      );
      continue;
    }
    const imageUrl = await getImage(item.link);

const finalImage =
  imageUrl ||
  "https://cokhwroeblaykgyicmgq.supabase.co/storage/v1/object/public/News_mysimhastha/default-news.webp";


    if (imageUrl) {
      (
        "Image Found"
      );
    } else {
      (
        "No Image Found"
      );
    }

("LINK:", item.link);

const snippet =
  item.contentSnippet ||
  item.summary ||
  "";

("\n======================");
("TITLE:", title);
("CONTENT LENGTH:", snippet.length);
("SNIPPET:");
(snippet.substring(0, 500));
("======================\n");

if (!snippet || snippet.length < 40) {
  ("Snippet too short");
  continue;
}

let summary =
  await generateAISummary(
    title,
    snippet
  );

  await new Promise(resolve =>
  setTimeout(resolve, 1500)
);

let topic = "Ujjain";

if (
  titleLower.includes("simhastha") ||
  titleLower.includes("kumbh") ||
  titleLower.includes("shahi snan") ||
  title.includes("सिंहस्थ")
) {
  topic = "Simhastha";
}
else if (
  titleLower.includes("shipra") ||
  title.includes("क्षिप्रा")
) {
  topic = "Shipra";
}
else if (
  titleLower.includes("bhasma") ||
  titleLower.includes("mahakal") ||
  titleLower.includes("mahakaleshwar") ||
  title.includes("महाकाल") ||
  title.includes("महाकालेश्वर") ||
  title.includes("भस्म")
) {
  topic = "Mahakal";
}
else if (
  title.includes("उज्जैन") ||
  titleLower.includes("ujjain")
) {
  topic = "Ujjain";
}

("SUMMARY LENGTH:", summary.length);
(summary);

if (!summary || summary.trim().length < 50) {
  
  ("Gemini failed, skipping");
  continue;
}

    (
      "Summary Generated"
    );

    const {
      error: insertError
    } = await supabase
      .from("news")
      .insert({
  title,
  summary,
  category,
  image_url: finalImage,
  slug,
  source_url: item.link,

  location: "Ujjain",
  topic,
  published_at: item.pubDate
});

    if (insertError) {
      (
        "Insert Error:",
        insertError.message
      );
    } else {
      (
        "Inserted Successfully"
      );
    }
  }
}

("\n=================================");
("RSS Import Complete");
("=================================");


} catch (err) {
  console.error(
    "Fatal Error:",
    err
  );
}
}

importRSS();
