import { PortableText } from "@portabletext/react";

    function BlogDetailsPage({ blog, setPage }) {
    if (!blog) {
        return (
        <div style={{ padding: "120px 20px", textAlign: "center" }}>
            <h2>Blog not found</h2>

            <button
            className="blog-btn"
            onClick={() => setPage("blog")}
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
  <div className="blog-content">
    <PortableText value={blog.body} />
  </div>
</div>
    );
    }

    export default BlogDetailsPage;