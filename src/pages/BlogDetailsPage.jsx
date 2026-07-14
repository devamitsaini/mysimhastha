import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import ShareButtons from "../components/guides/ShareButtons";
import { SEO, SchemaProvider } from "../seo";

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
      <div className="blog-details-status">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="blog-details-status">
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
    <>
      <SEO
        title={blog.title ? `${blog.title} | MySimhastha Blog` : "Blog | MySimhastha"}
        description={blog.excerpt || blog.summary?.slice(0, 160)}
        canonical={`https://www.mysimhastha.com/blog/${blog.slug}`}
        image={blog.image_url}
      />

      <SchemaProvider
        type="blog"
        data={{
          title: blog.title,
          description: blog.excerpt || blog.summary,
          url: `https://www.mysimhastha.com/blog/${blog.slug}`,
          image: blog.image_url,
          datePublished: blog.created_at,
          dateModified: blog.updated_at || blog.created_at,
          about: "Blog",
        }}
      />

      <div className="blog-details-container">
      {blog.image_url && (
        <img
          src={blog.image_url}
          alt={blog.title}
          className="blog-details-image"
        />
      )}

      <h1>{blog.title}</h1>

      <p className="blog-details-date">
        {new Date(blog.created_at).toLocaleDateString()}
      </p>
      
      <ShareButtons
        title={blog.title}
        image={blog.image_url}
      />
      
      <div className="blog-content">
        {blog.content}
      </div>
      </div>
    </>
  );
}

export default BlogDetailsPage;