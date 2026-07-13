const Parser = require("rss-parser");

const parser = new Parser();

async function test() {
  const feed = await parser.parseURL(
    "https://timesofindia.indiatimes.com/rssfeeds/-2128936835.cms"
  );

  ("Feed:", feed.title);

  feed.items.slice(0, 5).forEach((item, index) => {
    ("\n");
    (index + 1, item.title);
    (item.link);
  });
}

test();