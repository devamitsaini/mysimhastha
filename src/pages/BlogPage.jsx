import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import "../styles/blog.css";
import { useNavigate } from "react-router-dom";

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
    <div className="blog-page">
      <h1>Simhastha Blog</h1>

      <p className="blog-subtitle">
        Latest articles, travel guides and Simhastha updates.
      </p>

      {loading && (
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          Loading blogs...
        </div>
      )}

      {!loading && posts.length === 0 && (
        <div style={{ textAlign: "center", padding: "40px 0" }}>
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
              <p
                style={{
                  color: "#555",
                  lineHeight: "1.7",
                  marginBottom: "20px",
                }}
              >
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
  );
}

export default BlogPage;