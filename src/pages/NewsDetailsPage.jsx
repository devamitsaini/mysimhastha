import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";
import ShareButtons from "../components/guides/ShareButtons";
import Breadcrumb from "../components/layout/Breadcrumb";
import { SEO, SchemaProvider } from "../seo";
import "../styles/news.css";

function NewsDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState(null);

  useEffect(() => {
    if (slug) {
      fetchNews();
    }
  }, [slug]);

  const fetchNews = async () => {
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) throw error;

      setNews(data);
    } catch (err) {
      console.error(err);
      setNews(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="news-loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="news-not-found">
        <h2>News not found</h2>
        <button
          className="news-back-btn"
          onClick={() => navigate("/news")}
        >
          Back to News
        </button>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${news.title} | MySimhastha News`}
        description={news.summary?.slice(0, 160)}
        canonical={`https://www.mysimhastha.com/news/${news.slug}`}
        image={news.image_url}
      />

      <SchemaProvider
        type="blog"
        data={{
          title: news.title,
          description: news.summary,
          url: `https://www.mysimhastha.com/news/${news.slug}`,
          image: news.image_url,
          datePublished: news.created_at,
          dateModified: news.updated_at || news.created_at,
          about: "News",
        }}
      />

      <div className="news-details">
        {news.image_url && (
          <img
            src={news.image_url}
            alt={news.title}
            className="news-details-image"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = "https://cokhwroeblaykgyicmgq.supabase.co/storage/v1/object/public/News_mysimhastha/default-news.webp";
            }}
          />
        )}

        <span className="news-tag">
          {news.category}
        </span>

        <h1 className="news-details-title">
          {news.title}
        </h1>

        <p className="news-details-date">
          {new Date(news.created_at).toLocaleDateString("hi-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        <ShareButtons
          title={news.title}
          image={news.image_url}
        />

        <div className="news-facts-box">
          <h3>Quick Facts</h3>

          <ul>
            <li><strong>Location:</strong> Ujjain</li>
            <li><strong>Category:</strong> {news.category}</li>
            <li><strong>Topic:</strong> Mahakal Temple</li>
            <li><strong>Relevance:</strong> Devotees & Pilgrims</li>
          </ul>
        </div>

        {news.summary && (
          <div className="news-details-content">
            {news.summary.split("\n").map((para, index) => (
              para.trim() && (
                <p key={index}>{para}</p>
              )
            ))}
          </div>
        )}

        {news.source_url && (
          <div className="news-source">
            <strong>Source:</strong>{" "}
            <a
              href={news.source_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Original News
            </a>
          </div>
        )}

        <div className="related-guides">
          <h3>Related Guides</h3>

          <ul>
            <li>
              <Link to="/guide/simhastha-2028">
                Simhastha 2028 Guide
              </Link>
            </li>

            <li>
              <Link to="/hotels">
                Hotels Near Mahakal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NewsDetailsPage;