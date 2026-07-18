import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { supabase } from "../../../lib/supabase";
import "./LatestNews.css";

const LatestNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(3);

      if (!error) {
        setNews(data || []);
      } else {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="latest-news">
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">
            LATEST NEWS
          </span>

          <h2>
            Stay Updated With Ujjain
          </h2>

          <p>
            Official announcements, travel advisories,
            temple updates and Simhastha news in one place.
          </p>
        </div>

        <div className="news-grid">
          {news.map((item) => (
            <article className="news-card" key={item.id}>
              {item.image_url && (
                <Link to={`/news/${item.slug}`} className="news-image">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    width="270"
                    height="160"
                    onError={(e) => {
                      e.currentTarget.src = "https://cokhwroeblaykgyicmgq.supabase.co/storage/v1/object/public/News_mysimhastha/default-news.webp";
                    }}
                  />
                  <span className="news-category">{item.category}</span>
                </Link>
              )}

              <div className="news-content">
                <p className="news-date">
                  {new Date(item.created_at).toLocaleDateString("hi-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>

                <h3>
                  <Link to={`/news/${item.slug}`}>{item.title}</Link>
                </h3>

                {item.summary && (
                  <p className="news-excerpt">
                    {item.summary}
                  </p>
                )}

                <Link to={`/news/${item.slug}`} className="news-btn">
                  Read Full Story <FaArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="news-footer">
          <Link
            to="/news"
            className="view-news-btn"
          >
            View All News
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;