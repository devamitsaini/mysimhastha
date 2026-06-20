import { useNavigate } from "react-router-dom";
function BlogDetailsPage({ blog }) {
  const navigate = useNavigate();
  if (!blog) {
    return (
      <div style={{ padding: "120px 20px", textAlign: "center" }}>
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

      <div className="blog-content">
        {blog.content}
      </div>
    </div>
  );
}

export default BlogDetailsPage;