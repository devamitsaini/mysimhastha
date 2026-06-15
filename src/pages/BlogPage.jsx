import React, { useEffect, useState } from "react";
import { client } from "../sanity";
import "../styles/blog.css";

function BlogPage({ setPage, setSelectedBlog }) {
  const [posts, setPosts] = useState([]);

useEffect(() => {
  client
    .fetch(`
      *[_type == "post"]{
  _id,
  title,
  slug,
  body,
  _createdAt,
  mainImage{
    asset->{
      url
    }
  }
}
    `)
    .then((data) => {
      console.log(data);
      setPosts(data);
    })
    .catch(console.error);
}, []);

  return (
  <div className="blog-page">
    <h1>Simhastha Blog</h1>

    {posts.map((post) => (
  <div className="blog-card" key={post._id}>

  {post.mainImage?.asset?.url && (
    <img
      src={post.mainImage.asset.url}
      alt={post.title}
      className="blog-image"
    />
  )}

  <h2>{post.title || "Untitled Post"}</h2>

  <p className="blog-date">
    {new Date(post._createdAt).toLocaleDateString()}
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