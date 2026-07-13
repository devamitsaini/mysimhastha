const fs = require('fs');

// Fix English Bhasmaarti.jsx - add missing </div> after the table (all occurrences)
let enBhasma = fs.readFileSync('src/guides/en/Bhasmaarti.jsx', 'utf8');
// Fix all occurrences of the table wrapper issue
enBhasma = enBhasma.replace(
  /<\/table>\s*<\/div>\s*<p><strong>Important Note:<\/strong>/,
  '</table>\n        </div>\n        </div>\n\n        <p><strong>Important Note:</strong>'
);
enBhasma = enBhasma.replace(
  /<\/table>\s*<\/div>\s*<p><strong>Optional Expenses You May Incur:<\/strong>/,
  '</table>\n        </div>\n        </div>\n\n        <p><strong>Optional Expenses You May Incur:</strong>'
);
fs.writeFileSync('src/guides/en/Bhasmaarti.jsx', enBhasma);
('Fixed English Bhasmaarti.jsx');

// Fix Hindi Bhasmaarti.jsx - add missing </div> after the table (all occurrences)
let hiBhasma = fs.readFileSync('src/guides/hi/Bhasmaarti.jsx', 'utf8');
hiBhasma = hiBhasma.replace(
  /<\/table>\s*<\/div>\s*<p><strong>महत्वपूर्ण नोट:<\/strong>/,
  '</table>\n        </div>\n        </div>\n\n        <p><strong>महत्वपूर्ण नोट:</strong>'
);
hiBhasma = hiBhasma.replace(
  /<\/table>\s*<\/div>\s*<p><strong>वैकल्पिक खर्चे जो आप कर सकते हैं:<\/strong>/,
  '</table>\n        </div>\n        </div>\n\n        <p><strong>वैकल्पिक खर्चे जो आप कर सकते हैं:</strong>'
);
fs.writeFileSync('src/guides/hi/Bhasmaarti.jsx', hiBhasma);
('Fixed Hindi Bhasmaarti.jsx');

// Fix Hindi MahakalVisitMistakes.jsx - remove extra </div>
let hiMistakes = fs.readFileSync('src/guides/hi/MahakalVisitMistakes.jsx', 'utf8');
hiMistakes = hiMistakes.replace(
  /<\/table>\s*<\/div>\s*<\/section>/,
  '</table>\n      </section>'
);
fs.writeFileSync('src/guides/hi/MahakalVisitMistakes.jsx', hiMistakes);
('Fixed Hindi MahakalVisitMistakes.jsx');

// Fix Hindi Sawan2026Dates.jsx - remove extra </div>
let hiSawan = fs.readFileSync('src/guides/hi/Sawan2026Dates.jsx', 'utf8');
hiSawan = hiSawan.replace(
  /<\/table>\s*<\/div>\s*<\/section>/,
  '</table>\n          </section>'
);
fs.writeFileSync('src/guides/hi/Sawan2026Dates.jsx', hiSawan);
('Fixed Hindi Sawan2026Dates.jsx');

('All files fixed!');