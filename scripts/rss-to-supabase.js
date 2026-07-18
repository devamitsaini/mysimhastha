require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");
const Parser = require("rss-parser");
const axios = require("axios");
const cheerio = require("cheerio");
const { createClient } = require("@supabase/supabase-js");

// ============================================
// ENVIRONMENT VALIDATION
// ============================================
console.log("========== ENV ==========");

const envErrors = [];
if (!process.env.SUPABASE_URL && !process.env.REACT_APP_SUPABASE_URL) {
  envErrors.push("Missing SUPABASE_URL or REACT_APP_SUPABASE_URL");
}
if (!process.env.SUPABASE_SERVICE_KEY) {
  envErrors.push("Missing SUPABASE_SERVICE_KEY");
}
if (!process.env.GEMINI_API_KEY) {
  envErrors.push("Missing GEMINI_API_KEY");
}

console.log("SUPABASE_URL:", !!process.env.SUPABASE_URL);
console.log("REACT_APP_SUPABASE_URL:", !!process.env.REACT_APP_SUPABASE_URL);
console.log("SUPABASE_SERVICE_KEY:", !!process.env.SUPABASE_SERVICE_KEY);
console.log("GEMINI_API_KEY:", !!process.env.GEMINI_API_KEY);
console.log("=========================");

if (envErrors.length > 0) {
  console.error("\n❌ Environment validation failed:");
  envErrors.forEach(err => console.error("  -", err));
  console.error("\nPlease set the missing variables in your .env file and try again.\n");
  process.exit(1);
}

// ============================================
// CLIENTS
// ============================================
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const supabaseUrl = process.env.SUPABASE_URL || process.env.REACT_APP_SUPABASE_URL;
const supabase = createClient(supabaseUrl, process.env.SUPABASE_SERVICE_KEY);

const parser = new Parser({
  headers: {
    "User-Agent": "Mozilla/5.0"
  }
});

// ============================================
// CONSTANTS
// ============================================
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

// ============================================
// UTILITIES
// ============================================
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function withTimeout(promise, ms, message) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`Timeout: ${message} (${ms}ms)`)), ms)
    )
  ]);
}

async function supabaseWithTimeout(promise, timeoutMs = 10000, operationName = "Supabase") {
  try {
    return await withTimeout(promise, timeoutMs, `${operationName} timed out`);
  } catch (err) {
    console.error(`${operationName} failed:`, err.message);
    throw err;
  }
}

// ============================================
// AI SUMMARY WITH TIMEOUT & RETRY
// ============================================
async function generateAISummary(title, snippet) {
  const GEMINI_TIMEOUT = 30000;

  try {
    const isHindi = /[\u0900-\u097F]/.test(title);
    const languageInstruction = isHindi
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

    const attemptGeneration = async () => {
      return await withTimeout(
        model.generateContent(prompt),
        GEMINI_TIMEOUT,
        "Gemini API"
      );
    };

    let result;
    try {
      result = await attemptGeneration();
    } catch (firstErr) {
      console.warn(`Gemini first attempt failed for "${title}": ${firstErr.message}. Retrying once...`);
      try {
        result = await attemptGeneration();
      } catch (secondErr) {
        console.error(`Gemini retry failed for "${title}": ${secondErr.message}`);
        return "";
      }
    }

    const text = result.response.text().trim();
    return text;

  } catch (err) {
    console.error(`Gemini unexpected error for "${title}":`, err.message);
    return "";
  }
}

// ============================================
// IMAGE SCRAPING
// ============================================
async function getImage(link) {
  try {
    const { data } = await axios.get(link, {
      timeout: 15000,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
      }
    });

    const $ = cheerio.load(data);

    let image =
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
    console.error(`Image scraping failed for ${link}:`, err.message);
    return "";
  }
}

// ============================================
// RSS FETCHING WITH RETRY
// ============================================
async function fetchFeed(feedUrl, maxRetries = 3) {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`[Feed] Fetching (attempt ${attempt}/${maxRetries}): ${feedUrl}`);

      const response = await axios.get(feedUrl, {
        timeout: 15000,
        headers: {
          "User-Agent": "Mozilla/5.0"
        }
      });

      console.log(`[Feed] Downloaded successfully`);

      const feed = await parser.parseString(response.data);
      console.log(`[Feed] Parsed successfully - ${feed.items.length} items`);

      return feed;

    } catch (err) {
      lastError = err;
      console.error(`[Feed] Attempt ${attempt} failed:`, err.message);

      if (attempt < maxRetries) {
        const backoffMs = Math.pow(2, attempt) * 1000;
        console.log(`[Feed] Retrying in ${backoffMs / 1000}s...`);
        await sleep(backoffMs);
      }
    }
  }

  console.error(`[Feed] All ${maxRetries} attempts failed for: ${feedUrl}`);
  throw lastError;
}

// ============================================
// CORE FUNCTIONS
// ============================================
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

// ============================================
// MAIN IMPORT
// ============================================
async function importRSS() {
  try {
    console.log("\n=================================");
    console.log("Starting RSS Import");
    console.log("=================================\n");

    for (const feedUrl of feeds) {
      console.log(`\n[Feed] Processing: ${feedUrl}`);

      let feed;
      try {
        feed = await fetchFeed(feedUrl);
      } catch (err) {
        console.error(`[Feed] Skipping feed due to error: ${err.message}`);
        continue;
      }

      console.log(`\n[Feed] Found ${feed.items.length} items in feed`);

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
        } else if (
          titleLower.includes("bhasma") ||
          titleLower.includes("mahakal") ||
          titleLower.includes("mahakaleshwar") ||
          title.includes("महाकाल") ||
          title.includes("महाकालेश्वर") ||
          title.includes("भस्म")
        ) {
          category = "Mahakal News";
        } else if (
          titleLower.includes("shipra") ||
          title.includes("क्षिप्रा")
        ) {
          category = "Shipra News";
        }

        const combinedText = (title + " " + (item.contentSnippet || "")).toLowerCase();

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

        const isLocationRelevant = locationKeywords.some(keyword =>
          combinedText.includes(keyword.toLowerCase())
        );

        if (!isLocationRelevant) {
          console.log("  Not Ujjain related, skipping");
          continue;
        }

        const text = title.toLowerCase();

        const isBad = badKeywords.some(
          keyword =>
            text.includes(keyword.toLowerCase())
        );

        if (isBad) {
          console.log("  Rejected by bad keywords:", title);
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

        console.log("\n  ---------------------------------");
        console.log("  Relevant article found:", title);

        const slug = createSlug(title);

        // Duplicate check
        let existing;
        try {
          const result = await supabaseWithTimeout(
            supabase
              .from("news")
              .select("id")
              .eq("source_url", item.link)
              .limit(1),
            10000,
            "Duplicate check"
          );
          existing = result.data;
        } catch (err) {
          console.error("  DB check error:", err.message);
          continue;
        }

        if (existing && existing.length > 0) {
          console.log("  Article already exists in DB, skipping");
          continue;
        }

        // Image scraping
        console.log("  Scraping image...");
        const imageUrl = await getImage(item.link);
        const finalImage =
          imageUrl ||
          "https://cokhwroeblaykgyicmgq.supabase.co/storage/v1/object/public/News_mysimhastha/default-news.webp";

        if (imageUrl) {
          console.log("  Image found:", imageUrl);
        } else {
          console.log("  No image found, using default");
        }

        console.log("  Link:", item.link);

        const snippet = item.contentSnippet || item.summary || "";

        console.log("\n  ======================");
        console.log("  Title:", title);
        console.log("  Content length:", snippet.length);
        console.log("  Snippet:", snippet.substring(0, 500));
        console.log("  ======================\n");

        if (!snippet || snippet.length < 40) {
          console.log("  Snippet too short, skipping");
          continue;
        }

        // AI generation
        console.log("  Generating AI summary...");
        const summary = await generateAISummary(title, snippet);

        // Small delay to avoid rate limits
        await sleep(1500);

        console.log("  Summary length:", summary.length);
        if (summary.length > 0) {
          console.log("  Summary preview:", summary.substring(0, 200) + "...");
        }

        if (!summary || summary.trim().length < 50) {
          console.log("  Gemini failed to generate valid summary, skipping");
          continue;
        }

        console.log("  Summary generated successfully");

        // Determine topic
        let topic = "Ujjain";

        if (
          titleLower.includes("simhastha") ||
          titleLower.includes("kumbh") ||
          titleLower.includes("shahi snan") ||
          title.includes("सिंहस्थ")
        ) {
          topic = "Simhastha";
        } else if (
          titleLower.includes("shipra") ||
          title.includes("क्षिप्रा")
        ) {
          topic = "Shipra";
        } else if (
          titleLower.includes("bhasma") ||
          titleLower.includes("mahakal") ||
          titleLower.includes("mahakaleshwar") ||
          title.includes("महाकाल") ||
          title.includes("महाकालेश्वर") ||
          title.includes("भस्म")
        ) {
          topic = "Mahakal";
        } else if (
          title.includes("उज्जैन") ||
          titleLower.includes("ujjain")
        ) {
          topic = "Ujjain";
        }

        // Supabase insert
        console.log("  Inserting into database...");
        try {
          const result = await supabaseWithTimeout(
            supabase
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
              }),
            15000,
            "Supabase insert"
          );

          if (result.error) {
            console.error("  Insert error:", result.error.message);
          } else {
            console.log("  Inserted successfully!");
          }
        } catch (err) {
          console.error("  Insert failed:", err.message);
        }
      }
    }

    console.log("\n=================================");
    console.log("RSS Import Complete");
    console.log("=================================\n");

  } catch (err) {
    console.error("Fatal Error:", err);
  }
}

importRSS();