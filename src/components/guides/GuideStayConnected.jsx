import { Link } from "react-router-dom";

export default function GuideStayConnected({
  intro,
  exploreLinks = [],
  closing,
  languageNote,
}) {
  return (
    <>
      <div className="guide-box">
        <h2>Stay Connected with MySimhastha</h2>

        <p>{intro}</p>

        <div className="social-links">
          <p>
            🔸 Website:
            <a
              href="https://mysimhastha.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              MySimhastha.com
            </a>
          </p>

          <p>
            🔸 Instagram:
            <a
              href="https://instagram.com/mysimhastha"
              target="_blank"
              rel="noopener noreferrer"
            >
              @mysimhastha
            </a>
          </p>

          <p>
            🔸 Facebook:
            <a
              href="https://facebook.com/mysimhastha"
              target="_blank"
              rel="noopener noreferrer"
            >
              MySimhastha Facebook Page
            </a>
          </p>

          <p>
            🔸 Reddit Community:
            <a
              href="https://reddit.com/r/Simhastha2028"
              target="_blank"
              rel="noopener noreferrer"
            >
              r/Simhastha2028
            </a>
          </p>
        </div>

        <br />

        <h3>Explore More</h3>

        <ul>
          {exploreLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <p>{closing}</p>

        <p>{languageNote}</p>
      </div>

      <div className="back-top">
        <a href="#top">↑ Back to Top</a>
      </div>
    </>
  );
}