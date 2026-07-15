import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import "../styles/blog.css";
import { useNavigate } from "react-router-dom";
import { SEO, SchemaProvider } from "../seo";

function BlogPage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) {
        setPosts(data || []);
      }

      setLoading(false);
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <SEO
        title="Ujjain Travel Guides & Pilgrimage Articles | MySimhastha Blog"
        description="Read in-depth travel guides, pilgrimage articles, Sawan 2026 updates, and Simhastha preparation tips. Expert advice for your Ujjain spiritual journey."
        canonical="https://www.mysimhastha.com/blog"
        ogTitle="Ujjain Travel Guides & Pilgrimage Articles | MySimhastha Blog"
        ogDescription="Read in-depth travel guides, pilgrimage articles, Sawan 2026 updates, and Simhastha preparation tips. Expert advice for your Ujjain spiritual journey."
        twitterTitle="Ujjain Travel Guides & Pilgrimage Articles | MySimhastha Blog"
        twitterDescription="Read in-depth travel guides, pilgrimage articles, Sawan 2026 updates, and Simhastha preparation tips. Expert advice for your Ujjain spiritual journey."
      />

      <SchemaProvider
        type="collection"
        data={{
          title: "Ujjain Travel Guides & Pilgrimage Articles | MySimhastha Blog",
          description: "Read in-depth travel guides, pilgrimage articles, Sawan 2026 updates, and Simhastha preparation tips. Expert advice for your Ujjain spiritual journey.",
          url: "https://www.mysimhastha.com/blog",
          about: "Ujjain Travel Guides & Pilgrimage Articles",
          items: posts.map((post) => ({
            name: post.title || "Untitled Post",
            description: post.excerpt,
            url: `https://www.mysimhastha.com/blog/${post.slug}`,
            image: post.image_url,
          })),
        }}
      />

      <div className="blog-page">
      <h1>Ujjain Travel Guides & Pilgrimage Articles</h1>

      <p className="blog-subtitle">
        Expert travel guides, pilgrimage tips, Sawan 2026 updates, and Simhastha preparation articles.
      </p>

      {loading && (
        <div className="blog-status-message">
          Loading blogs...
        </div>
      )}

      {!loading && posts.length === 0 && (
        <div className="blog-status-message">
          No blogs available.
        </div>
      )}

      {posts.map((post) => (
        <div className="blog-card" key={post.id}>
          {post.image_url && (
            <img
              src={post.image_url}
              alt={post.title}
              className="blog-image"
              loading="lazy"
            />
          )}

          <div className="blog-info">
            <h2>{post.title || "Untitled Post"}</h2>

            <p className="blog-date">
              {new Date(post.created_at).toLocaleDateString("en-GB")}
            </p>

            {post.excerpt && (
              <p className="blog-excerpt">
                {post.excerpt}
              </p>
            )}

            <button
              className="blog-btn"
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              Read More →
            </button>
          </div>
        </div>
      ))}
      </div>
    </>
  );
}

export default BlogPage;