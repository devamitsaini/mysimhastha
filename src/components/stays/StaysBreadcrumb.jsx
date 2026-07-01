import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { generateBreadcrumbSchema } from "../../schema/staysSchema";

/**
 * Breadcrumb Navigation Component
 * Displays hierarchical path and generates schema for SEO
 */
const StaysBreadcrumb = ({ items = [] }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <>
      <nav
        className="stays-breadcrumb"
        aria-label="Breadcrumb navigation"
      >
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <span className="stays-breadcrumb-separator" aria-hidden="true">
                <ChevronRight size={16} />
              </span>
            )}
            {item.path ? (
              <Link
                to={item.path}
                className="stays-breadcrumb-link"
                aria-current={index === items.length - 1 ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ) : (
              <span className="stays-breadcrumb-current">{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </nav>

      {/* Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(items)),
        }}
      />
    </>
  );
};

export default React.memo(StaysBreadcrumb);
