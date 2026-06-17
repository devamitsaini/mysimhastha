import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function NewsPage() {

  const [news, setNews] = useState([]);

  useEffect(() => {
  const fetchNews = async () => {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .order("created_at", { ascending: false });

    console.log("NEWS DATA:", data);
    console.log("NEWS ERROR:", error);

    if (!error) {
      setNews(data || []);
    }
  };

  fetchNews();
}, []);

  return (
    <div className="news-page">

      <h1>Latest News & Updates</h1>

      <div className="news-grid">

        {news.map((item) => (

          <div
            className="news-card"
            key={item.id}
          >

            {item.image_url && (
  <img
    src={item.image_url}
    alt={item.title}
    className="news-image"
  />
)}

            <div className="news-body">

              <span className="news-tag">
                {item.category}
              </span>

              <h3>
                {item.title}
              </h3>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default NewsPage;