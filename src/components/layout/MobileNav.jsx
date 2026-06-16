import "../../styles/MobileNav.css";
import {
  Home,
  Calendar,
  Bed,
  MapPin,
  Menu,
} from "lucide-react";
import { useTranslation } from "react-i18next";

function MobileNav({ page, setPage, setDrawerOpen }) {
  const { t } = useTranslation();
  return (
    <nav className="mobile-nav">
      <button
        className={page === "home" ? "active" : ""}
        onClick={() => setPage("home")}
      >
        <Home size={22} />
        <span>{t("home")}</span>
      </button>

      <button
        className={page === "snan-calendar" ? "active" : ""}
        onClick={() => setPage("snan-calendar")}
      >
        <Calendar size={22} />
        <span>{t("snan")}</span>
      </button>

      <button
        className={page === "hotels" ? "active" : ""}
        onClick={() => setPage("hotels")}
      >
        <Bed size={22} />
        <span>{t("stay")}</span>
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
        <span>{t("map")}</span>
      </button>

      <button onClick={() => setDrawerOpen(true)}>
        <Menu size={22} />
        <span>{t("all")}</span>
      </button>
    </nav>
  );
}

export default MobileNav;