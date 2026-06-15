import React, { useEffect, useState } from "react";
import { client } from "../sanity";

function NewsPage() {

  const [news, setNews] = useState([]);

  useEffect(() => {

    client.fetch(`
      *[_type=="news"] | order(publishedAt desc){
        _id,
        title,
        publishedAt,
        category,
        mainImage{
          asset->{
            url
          }
        }
      }
    `)
    .then((data) => {
      setNews(data);
    });

  }, []);

  return (
    <div className="news-page">

      <h1>Latest News & Updates</h1>

      <div className="news-grid">

        {news.map((item) => (

          <div
            className="news-card"
            key={item._id}
          >

            {item.mainImage?.asset?.url && (

              <img
                src={item.mainImage.asset.url}
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