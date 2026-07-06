const fs = require("fs");
const path = require("path");

const filesToFix = [
  "src/guides/en/UjjainToOmkareshwarGuide.jsx",
  "src/guides/hi/UjjainToOmkareshwarGuide.jsx",
  "src/guides/hi/MahakalVisitMistakes.jsx",
  "src/guides/en/Bhasmaarti.jsx",
  "src/guides/hi/Bhasmaarti.jsx",
  "src/guides/hi/Sawan2026Dates.jsx",
];

let totalFixed = 0;

filesToFix.forEach((filePath) => {
  const fullPath = path.resolve(filePath);
  if (!fs.existsSync(fullPath)) {
    console.log("SKIP (not found):", filePath);
    return;
  }

  let content = fs.readFileSync(fullPath, "utf8");
  const original = content;

  // Replace bare <table className="guide-table"> with wrapped version
  // Only if not already preceded by <div className="table-wrapper">
  content = content.replace(
    /(?<!<div className="table-wrapper">\s*)<table className="guide-table">/g,
    '<div className="table-wrapper">\n        <table className="guide-table">'
  );

  // Replace bare </table> with wrapped closing, only if not already followed by </div>
  content = content.replace(/<\/table>(?!\s*<\/div>)/g, "</table>\n      </div>");

  if (content !== original) {
    fs.writeFileSync(fullPath, content, "utf8");
    const count = (content.match(/<div className="table-wrapper">/g) || []).length;
    totalFixed += count;
    console.log("FIXED:", filePath, "-", count, "tables wrapped");
  } else {
    console.log("NO CHANGE:", filePath);
  }
});

console.log("\nTotal tables wrapped:", totalFixed);