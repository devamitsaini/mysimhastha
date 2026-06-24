import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();

  if (location.pathname === "/") return null;

  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <div className="breadcrumb-wrap">
      <div className="breadcrumb-inner">

        <Link to="/">Home</Link>

        {paths.map((path, index) => {
          const url =
            "/" + paths.slice(0, index + 1).join("/");

          const label = path.replace(/-/g, " ");

          return (
            <React.Fragment key={url}>
              <span className="breadcrumb-separator">
                /
              </span>

              {index === paths.length - 1 ? (
                <span className="breadcrumb-current">
                  {label}
                </span>
              ) : (
                <Link to={url}>
                  {label}
                </Link>
              )}
            </React.Fragment>
          );
        })}

      </div>
    </div>
  );
}