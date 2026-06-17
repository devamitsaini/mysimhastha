import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import "../styles/news.css";

function NewsPage({ setPage, setSelectedNews }) {
  const [news, setNews] = useState([]);

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
      <div className="news-header">
        <h1>Latest News & Updates</h1>
      </div>

      <div className="news-grid">
        {news.map((item) => (
          <article className="news-card" key={item.id}>
            
            {item.image_url && (
  <div className="news-image-wrap">

    <span className="news-tag">
      {item.category}
    </span>

    <img
      src={item.image_url}
      alt={item.title}
      className="news-image"
      loading="lazy"
      decoding="async"
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

  <h2 className="news-title">
    {item.title}
  </h2>

  {item.content && (
    <p className="news-excerpt">
      {item.content}
    </p>
  )}

  <button
  className="news-readmore"
  onClick={() => {
    setSelectedNews?.(item);
    setPage?.("news-details");
  }}
>
  पूरी खबर जानिए →
</button>

</div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default NewsPage;