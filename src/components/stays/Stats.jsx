import {
  FiShield,
  FiStar,
  FiHome,
} from "react-icons/fi";
import "./Stats.css";

const Stats = () => {
  return (
    <div className="hero-stats">

      <div className="hero-stat-card">

        <div className="hero-stat-icon">
          <FiShield />
        </div>

        <div>
          <h3>120+</h3>
          <p>Verified Stays</p>
        </div>

      </div>

      <div className="hero-stat-card">

        <div className="hero-stat-icon">
          <FiStar />
        </div>

        <div>
          <h3>4.3</h3>
          <p>Average Rating</p>
        </div>

      </div>

      <div className="hero-stat-card">

        <div className="hero-stat-icon">
          <FiHome />
        </div>

        <div>
          <h3>120+</h3>
          <p>Verified Properties</p>
        </div>

      </div>

    </div>
  );
};

export default Stats;