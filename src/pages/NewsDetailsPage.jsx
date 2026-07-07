  import React, { useEffect, useState } from "react";
  import { Link, useNavigate, useParams } from "react-router-dom";
  import { Helmet } from "react-helmet-async";
  import { supabase } from "../lib/supabase";
  import ShareButtons from "../components/guides/ShareButtons";
  import Breadcrumb from "../components/layout/Breadcrumb";
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
      <div style={{ padding: "120px", textAlign: "center" }}>
        <h2>Loading...</h2>
      </div>
    );
  }
  
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
        <>
    <Helmet>
      
      <meta
    name="description"
    content={news.summary?.slice(0, 160)}
  />

  <link
    rel="canonical"
    href={`https://www.mysimhastha.com/news/${news.slug}`}
  />
      <title>{news.title} | MySimhastha News</title>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: news.title,
          datePublished: news.created_at,
          image: news.image_url,
          description: news.summary,
          author: {
            "@type": "Organization",
            name: "MySimhastha"
          },
          publisher: {
    "@type": "Organization",
    name: "MySimhastha",
    logo: {
      "@type": "ImageObject",
      url: "https://www.mysimhastha.com/logo.png"
    }
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://www.mysimhastha.com/news/${news.slug}`
  }
        })}
      </script>
    </Helmet>

    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px"
      }}
    ></div>
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