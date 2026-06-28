import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import ShareButtons from "../components/guides/ShareButtons";

function BlogDetailsPage() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("slug", slug)
      .single();

    if (!error) {
      setBlog(data);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div
        style={{
          padding: "120px 20px",
          textAlign: "center",
        }}
      >
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!blog) {
    return (
      <div
        style={{
          padding: "120px 20px",
          textAlign: "center",
        }}
      >
        <h2>Blog not found</h2>

        <button
          className="blog-btn"
          onClick={() => navigate("/blog")}
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#fff",
        padding: "30px",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0,0,0,.08)",
        maxWidth: "1000px",
        margin: "120px auto",
      }}
    >
      {blog.image_url && (
        <img
          src={blog.image_url}
          alt={blog.title}
          style={{
            width: "100%",
            maxHeight: "450px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "20px",
          }}
        />
      )}

      <h1>{blog.title}</h1>

      <p
        style={{
          color: "#777",
          marginBottom: "20px",
        }}
      >
        {new Date(blog.created_at).toLocaleDateString()}
      </p>
          <ShareButtons
    title={blog.title}
    image={blog.image_url}
/>
      <div
  className="blog-content"
  style={{ whiteSpace: "pre-line" }}
>
  {blog.content}
</div>
    </div>
  );
}

export default BlogDetailsPage;