import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import "../styles/news.css";

function NewsPage({ setSelectedNews }) {
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
      <div className="news-header">
        <h1>Latest News & Updates</h1>
      </div>

      <div className="news-grid">
        {news.map((item) => (
          <article className="news-card" key={item.id}>
            
            {item.image_url && (
  <div className="news-image-wrap">
  <img
    src={item.image_url || "https://cokhwroeblaykgyicmgq.supabase.co/storage/v1/object/public/News_mysimhastha/default-news.webp"}
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

  <h2 className="news-title">
    {item.title}
  </h2>

  {item.summary && (
  <p className="news-excerpt">
    {item.summary}
  </p>
)}

  <button
  className="news-readmore"
  onClick={() => {
    setSelectedNews?.(item);
    navigate("/news-details");
  }}
>
  See full News →
</button>

</div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default NewsPage;