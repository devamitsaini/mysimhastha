import "../../styles/MobileNav.css";
import {
  Home,
  Calendar,
  Bed,
  MapPin,
  Menu,
} from "lucide-react";

function MobileNav({ page, setPage, setDrawerOpen }) {
  return (
    <nav className="mobile-nav">
      <button
        className={page === "home" ? "active" : ""}
        onClick={() => setPage("home")}
      >
        <Home size={22} />
        <span>Home</span>
      </button>

      <button
        className={page === "snan-calendar" ? "active" : ""}
        onClick={() => setPage("snan-calendar")}
      >
        <Calendar size={22} />
        <span>Snan</span>
      </button>

      <button
        className={page === "hotels" ? "active" : ""}
        onClick={() => setPage("hotels")}
      >
        <Bed size={22} />
        <span>Stay</span>
      </button>

      <button
        onClick={() => {
          setPage("simhastha-2028");

          setTimeout(() => {
            document
              .getElementById("zones-routes")
              ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
          }, 300);
        }}
      >
        <MapPin size={22} />
        <span>Map</span>
      </button>

      <button onClick={() => setDrawerOpen(true)}>
        <Menu size={22} />
        <span>All</span>
      </button>
    </nav>
  );
}

export default MobileNav;