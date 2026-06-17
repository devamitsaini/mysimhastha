import React, { useEffect,  useState } from "react";
import { supabase } from "../lib/supabase";
import "../styles/blog.css";

function BlogPage({ setPage, setSelectedBlog }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });

      console.log("BLOG DATA:", data);
      console.log("BLOG ERROR:", error);

      if (!error) {
        setPosts(data || []);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-page">
      <h1>Simhastha Blog</h1>

      <h2>Total Blogs: {posts.length}</h2>

      {posts.map((post) => (
        <div className="blog-card" key={post.id}>
          {post.image_url && (
            <img
              src={post.image_url}
              alt={post.title}
              className="blog-image"
            />
          )}

          <h2>{post.title || "Untitled Post"}</h2>

          <p className="blog-date">
            {new Date(post.created_at).toLocaleDateString()}
          </p>

          <button
            className="blog-btn"
            onClick={() => {
              setSelectedBlog(post);
              setPage("blog-details");
            }}
          >
            Read More →
          </button>
        </div>
      ))}
    </div>
  );
}

export default BlogPage;