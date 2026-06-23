const axios = require("axios");
const cheerio = require("cheerio");

async function test() {
  try {
    const url =
      "https://news.google.com/rss/articles/CBMiowFBVV95cUxQMW1wZld3dFA5QXVvcnVINzZMRHVXMUNpSzVlOWdlN01zSHJjUjlROGF3MEo4eUprWXExYXZjQlJLc0tHdEZmSUFoSDlpQWVKRWpoVDJscnZwUUl6VXpVUi1iUWFYU0VqaGVIUVNyZkZ2c0o4VGY4b2tkRHZrQ0xMX3V3NVFOV096UGhrUWJ6UXZMTWxsYjB1QkpVbWpzQ3BsUVdn0gGjAUFVX3lxTFAxbXBmV3d0UDlBdW9ydUg3NkxEdVcxQ2lLNWU5Z2U3TXNIcmNSOVE4YXcwSjh5SmtZcTFhdmNCUktzS0d0RmZJQWhIOWlBZUpFamhUMmxydnBRSXpVelVSLWJRYVhTRWpoZUhRU3JmRnZzSjhUZjhva2REdmtDTExfdXc1UU5XT3pQaGtRYnpRdkxNbGxiMHVCSlVtanNDcGxRV2c?oc=5";

    const { data } = await axios.get(url, {
      timeout: 15000,
      headers: {
        "User-Agent":
          "Mozilla/5.0"
      }
    });

    const $ = cheerio.load(data);

    const image =
      $('meta[property="og:image"]').attr("content") ||
      $('meta[name="twitter:image"]').attr("content");

    console.log("IMAGE:", image);
  } catch (err) {
    console.error(err.message);
  }
}

test();