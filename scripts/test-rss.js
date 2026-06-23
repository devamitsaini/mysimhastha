const Parser = require("rss-parser");

const parser = new Parser();

async function test() {
  const feed = await parser.parseURL(
    "https://timesofindia.indiatimes.com/rssfeeds/-2128936835.cms"
  );

  console.log("Feed:", feed.title);

  feed.items.slice(0, 5).forEach((item, index) => {
    console.log("\n");
    console.log(index + 1, item.title);
    console.log(item.link);
  });
}

test();