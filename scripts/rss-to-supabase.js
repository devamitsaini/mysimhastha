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

const parser = new Parser();

const supabase = createClient(
  process.env.SUPABASE_URL || process.env.REACT_APP_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

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
"shipra"
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
"bjp"
];

const feeds = [
"https://news.google.com/rss/search?q=%22Mahakal%22",
"https://news.google.com/rss/search?q=%22Mahakaleshwar%22",
"https://news.google.com/rss/search?q=%22Simhastha%22",
"https://news.google.com/rss/search?q=%22Simhastha%202028%22",
"https://news.google.com/rss/search?q=%22Kumbh%20Mela%22",
"https://news.google.com/rss/search?q=%22Shahi%20Snan%22",
"https://news.google.com/rss/search?q=%22Shipra%20River%22",
"https://news.google.com/rss/search?q=%22Mahakal%20Lok%22"
];

async function generateAISummary(title, snippet) {
try {
const prompt = `
You are writing a news summary for MySimhastha.

Write a detailed summary of 120-180 words.

Rules:
- Explain what the headline is about.
- Explain the likely context based on the headline.
- Explain why the news may matter.
- Use simple English.
- Keep it informative and readable.
- Do not use bullet points.
- Write at least 3 paragraphs.
- Return only the summary.

Headline:
${title}

News Snippet:
${snippet}
`;


const result =
  await model.generateContent(prompt);

return result.response
  .text()
  .trim();


} catch (err) {
  console.log(
    "Gemini Error:",
    err.message
  );

  return snippet || title;
}
}


function createSlug(title) {
return title
.toLowerCase()
.replace(/[^\w\s-]/g, "")
.replace(/\s+/g, "-")
.replace(/-+/g, "-")
.substring(0, 100);
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
console.log("=================================");
console.log("Starting RSS Import");
console.log("=================================");


for (const feedUrl of feeds) {
  console.log("\n=================================");
  console.log("Reading Feed:");
  console.log(feedUrl);

  let feed;

  try {
    feed = await parser.parseURL(feedUrl);
  } catch (err) {
    console.log("Feed Error:", err.message);
    continue;
  }

  console.log(`Found ${feed.items.length} items`);

  for (const item of feed.items) {
    const title = item.title || "";

    const text = title.toLowerCase();
    const isBad = badKeywords.some(
      (keyword) =>
        text.includes(
          keyword.toLowerCase()
        )
    );

    if (isBad) {
      console.log(
        "Rejected:",
        title
      );
      continue;
    }

    const matched = keywords.some(
      (keyword) =>
        text.includes(
          keyword.toLowerCase()
        )
    );

    if (!matched) {
      continue;
    }

    console.log(
      "\n---------------------------------"
    );
    console.log(
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
      .eq("slug", slug)
      .limit(1);

    if (checkError) {
      console.log(
        "DB Check Error:",
        checkError.message
      );
      continue;
    }

    if (
      existing &&
      existing.length > 0
    ) {
      console.log(
        "Already Exists"
      );
      continue;
    }
    const imageUrl = await getImage(item.link);

const finalImage =
  imageUrl ||
  "https://cokhwroeblaykgyicmgq.supabase.co/storage/v1/object/public/News_mysimhastha/default-news.webp";


    if (imageUrl) {
      console.log(
        "Image Found"
      );
    } else {
      console.log(
        "No Image Found"
      );
    }

  const snippet =
  item.contentSnippet ||
  item.summary ||
  item.content ||
  "";

let summary =
  await generateAISummary(
    title,
    snippet
  );

if (!summary || summary.trim().length < 30) {
  summary = snippet || title;
}

    console.log(
      "Summary Generated"
    );

    const {
      error: insertError
    } = await supabase
      .from("news")
      .insert({
  title,
  summary,
  category: "RSS News",
  image_url: finalImage,
  slug,
  source_url: item.link
});

    if (insertError) {
      console.log(
        "Insert Error:",
        insertError.message
      );
    } else {
      console.log(
        "Inserted Successfully"
      );
    }
  }
}

console.log("\n=================================");
console.log("RSS Import Complete");
console.log("=================================");


} catch (err) {
  console.error(
    "Fatal Error:",
    err
  );
}
}

importRSS();
