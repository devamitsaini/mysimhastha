  import React from "react";
  import { useNavigate } from "react-router-dom";

  function NewsDetailsPage({ news }) {
  const navigate = useNavigate();
    if (!news) {
      return (
        <div style={{ padding: "120px 20px", textAlign: "center" }}>
          <h2>News not found</h2>

          <button
            className="news-readmore"
            onClick={() => navigate("/news")}
          >
            Back to News
          </button>
        </div>
      );
    }

    return (
      <div
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        {news.image_url && (
          <img
            src={news.image_url}
            alt={news.title}
            style={{
              width: "100%",
              borderRadius: "16px",
              marginBottom: "20px",
            }}
          />
        )}

        <span className="news-tag">
          {news.category}
        </span>

        <h1>{news.title}</h1>

        <p className="news-date">
          {new Date(news.created_at).toLocaleDateString("hi-IN")}
        </p>


        {news.summary && (
  <div className="news-details-content">
    <p>{news.summary}</p>
  </div>
)}
  </div>
    );
  }

  export default NewsDetailsPage;