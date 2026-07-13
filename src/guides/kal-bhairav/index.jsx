import GuidePage from "../../components/guides-v3/GuidePage.jsx";

import guide from "./guide.en.js";
import guideHi from "./guide.hi.js";
import seo from "./seo.en.js";
import seoHi from "./seo.hi.js";

export default function KalBhairavTempleGuide() {
  return (
    <GuidePage
      guide={guide}
      guideHi={guideHi}
      seo={seo}
      seoHi={seoHi}
    />
  );
}
