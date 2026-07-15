import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { SEO, SchemaProvider } from "../seo";
import "../styles/news.css";

function NewsPage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
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

      setLoading(false);
    };

    fetchNews();
  }, []);

  return (
    <>
      <SEO
        title="Latest Ujjain News | Mahakal Temple, Simhastha 2028 & Pilgrimage Updates"
        description="Get the latest Ujjain news, Mahakaleshwar Temple updates, Simhastha 2028 announcements, and pilgrimage travel information. Stay informed with MySimhastha."
        canonical="https://www.mysimhastha.com/news"
        ogTitle="Latest Ujjain News | Mahakal Temple, Simhastha 2028 & Pilgrimage Updates"
        ogDescription="Get the latest Ujjain news, Mahakaleshwar Temple updates, Simhastha 2028 announcements, and pilgrimage travel information. Stay informed with MySimhastha."
        twitterTitle="Latest Ujjain News | Mahakal Temple, Simhastha 2028 & Pilgrimage Updates"
        twitterDescription="Get the latest Ujjain news, Mahakaleshwar Temple updates, Simhastha 2028 announcements, and pilgrimage travel information. Stay informed with MySimhastha."
      />

      <SchemaProvider
        type="collection"
        data={{
          title: "Latest Ujjain News | Mahakal Temple, Simhastha 2028 & Pilgrimage Updates",
          description: "Get the latest Ujjain news, Mahakaleshwar Temple updates, Simhastha 2028 announcements, and pilgrimage travel information. Stay informed with MySimhastha.",
          url: "https://www.mysimhastha.com/news",
          about: "Ujjain News & Pilgrimage Updates",
          items: news.map((item) => ({
            name: item.title || "Untitled News",
            description: item.summary,
            url: `https://www.mysimhastha.com/news/${item.slug}`,
            image: item.image_url,
          })),
        }}
      />

      <div className="news-page">
        <div className="container">
          {/* Header Section */}
          <div className="news-header">
            <span className="sec-label">Latest Updates</span>
            <h1 className="news-title">
              <span className="news-title-main">Latest Ujjain News & Pilgrimage Updates</span>
              <span className="news-title-sub">Mahakaleshwar Temple, Simhastha 2028 & Travel Information</span>
            </h1>
            <p className="news-subtitle">
              Stay informed with the latest news from Ujjain, including Mahakaleshwar Temple announcements, 
              Simhastha 2028 updates, pilgrimage advisories, and travel information for devotees visiting 
              the holy city of Ujjain.
            </p>
          </div>

          {/* News Grid */}
          <div className="news-grid">
            {loading && (
              <div className="news-status-message">
                Loading news...
              </div>
            )}

            {!loading && news.length === 0 && (
              <div className="news-status-message">
                No news available.
              </div>
            )}

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
                    {item.title || "Untitled News"}
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
    </>
  );
}

export default NewsPage;