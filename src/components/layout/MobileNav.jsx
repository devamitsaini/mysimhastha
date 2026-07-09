import "../../styles/MobileNav.css";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  Calendar,
  Bed,
  MapPin,
  LifeBuoy,
} from "lucide-react";
import { useTranslation } from "react-i18next";

function MobileNav({ page }) {
  const navigate = useNavigate();
  const location = useLocation();
  const nav = (path) => {
  navigate(path);
  window.scrollTo(0, 0);
};
  const { t } = useTranslation();
  if (location.pathname.startsWith("/stays") || location.pathname.startsWith("/list-your-property")) {
  return null;
}
  return (
    <nav className="mobile-nav">
      <button
        className={page === "home" ? "active" : ""}
        onClick={() => nav("/")}
      >
        <Home size={22} />
        <span>{t("home")}</span>
      </button>

      <button
        className={page === "snan-calendar" ? "active" : ""}
        onClick={() => nav("/snan-calendar")}
      >
        <Calendar size={22} />
        <span>{t("snan")}</span>
      </button>

      <button
        className={page === "hotels" ? "active" : ""}
        onClick={() => nav("/hotels")}
      >
        <Bed size={22} />
        <span>{t("stay")}</span>
      </button>

      <button
        onClick={() => nav("/simhastha-2028")}
      >
        <MapPin size={22} />
        <span>{t("map")}</span>
      </button>

      <button
  onClick={() => nav("/missing-persons")}
>
  <LifeBuoy size={22} />
  <span>Help</span>
</button>
    </nav>
  );
}

export default MobileNav;