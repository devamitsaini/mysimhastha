import React from 'react';
import { useNavigate } from "react-router-dom";
import { SEO, SchemaProvider } from "../seo";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <>
      <SEO
        title="404 - Page Not Found | MySimhastha"
        description="The page you are looking for does not exist or has been moved. Return to the MySimhastha homepage for information about Simhastha 2028, Ujjain temples, and pilgrimage guides."
        canonical="https://www.mysimhastha.com/404"
      />

      <SchemaProvider
        type="webpage"
        data={{
          title: "404 - Page Not Found",
          description: "The page you are looking for does not exist or has been moved.",
          url: "https://www.mysimhastha.com/404",
        }}
      />

      <div className="page-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80vh", textAlign: "center" }}>
        <div className="container">
          <div style={{ fontSize: "80px", marginBottom: "16px" }}></div>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "48px", color: "var(--deep)" }}>404</h1>

          <p style={{ color: "var(--muted)", marginBottom: "32px" }}>The page you are looking for does not exist or has been moved.</p>
          
          <button
            className="btn btn-primary btn-lg"
            onClick={() => navigate("/")}
          >
            Back to Home→
          </button>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;