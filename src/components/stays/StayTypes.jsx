import {
  FiHome,
  FiGrid,
} from "react-icons/fi";
import { GiTempleGate, GiMeditation } from "react-icons/gi";
import "./StayTypes.css";

const stayTypes = [
  {
    icon: <FiHome />,
    title: "Hotels",
    count: "45+ Stays",
  },
  {
    icon: <GiTempleGate />,
    title: "Dharamshalas",
    count: "35+ Stays",
  },
  {
    icon: <GiMeditation />,
    title: "Ashrams",
    count: "25+ Stays",
  },
  {
    icon: <FiGrid />,
    title: "Guest Houses",
    count: "15+ Stays",
  },
];

const StayTypes = () => {
  return (
    <section className="stay-types-section">

      <div className="container">

        <div className="section-header">

          <h2>Browse by Stay Type</h2>

          <button className="view-all-btn">
    View All Stays
</button>

        </div>

        <div className="stay-types-grid">

          {stayTypes.map((item) => (
            <div
              className="stay-type-card"
              key={item.title}
            >
              <div className="stay-type-icon">
                {item.icon}
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.count}</p>
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default StayTypes;