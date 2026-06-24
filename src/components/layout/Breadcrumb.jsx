import React from "react";
import { Link, useLocation } from "react-router-dom";

const LABELS = {
  guide: "Guides",
  guides: "Guides",
  "simhastha-2028": "Simhastha 2028",
  "sawan-2026": "Sawan 2026",
  "sawan-2026-dates": "Sawan 2026 Dates",
};

function getBreadcrumbItems(pathname) {
  const segments = pathname.split("/").filter(Boolean);
  const isHindi = segments[0] === "hi";
  const contentSegments = isHindi ? segments.slice(1) : segments;
  const prefix = isHindi ? "/hi" : "";

  return contentSegments.map((segment, index) => {
    const isLast = index === contentSegments.length - 1;
    let url;

    if (segment === "guide" || segment === "guides") {
      url = isHindi ? "/hi/guides" : "/guides";
    } else {
      url = prefix + "/" + contentSegments.slice(0, index + 1).join("/");
    }

    const label =
      LABELS[segment] ||
      segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

    return { url, label, isLast };
  });
}

export default function Breadcrumb() {
  const location = useLocation();

  if (location.pathname === "/") return null;

  const items = getBreadcrumbItems(location.pathname);

  return (
    <div className="breadcrumb-wrap">
      <div className="breadcrumb-inner">
        <Link to="/">Home</Link>

        {items.map(({ url, label, isLast }) => (
          <React.Fragment key={url}>
            <span className="breadcrumb-separator">/</span>

            {isLast ? (
              <span className="breadcrumb-current">{label}</span>
            ) : (
              <Link to={url}>{label}</Link>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
