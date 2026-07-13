import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import "../styles/news.css";

function NewsPage() {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) {
        setNews(data || []);
      } else {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-page">
      <div className="container">
        {/* Header Section */}
        <div className="news-header">
          <span className="sec-label">Latest Updates</span>
          <h1 className="news-title">
            <span className="news-title-main">Latest News & Updates</span>
            <span className="news-title-sub">from Ujjain & Simhastha</span>
          </h1>
          <p className="news-subtitle">
            Stay updated with the latest news, events, and announcements from
            Mahakaleshwar Temple, Simhastha 2028, and Ujjain pilgrimage.
          </p>
        </div>

        {/* News Grid */}
        <div className="news-grid">
          {news.map((item) => (
            <article className="news-card" key={item.id}>
              {item.image_url && (
                <div className="news-image-wrap">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="news-image"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.src = "https://cokhwroeblaykgyicmgq.supabase.co/storage/v1/object/public/News_mysimhastha/default-news.webp";
                    }}
                  />
                </div>
              )}

              <div className="news-body">
                <p className="news-date">
                  {new Date(item.created_at).toLocaleDateString("hi-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>

                <h2 className="news-card-title">
                  {item.title}
                </h2>

                {item.summary && (
                  <p className="news-excerpt">
                    {item.summary}
                  </p>
                )}

                <button
                  className="news-readmore"
                  onClick={() => navigate(`/news/${item.slug}`)}
                >
                  Read Full News →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsPage;