import React, { useEffect, useState } from "react";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        setPosts(result.data);
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  });
  return (
    <h1>
      {loading && <h1>Loading posts </h1>}
      {posts.map((post) => (
        <p style={{ paddingTop: "20px", borderStyle: "solid" }} key={post.id}>
          {post.title}
        </p>
      ))}
    </h1>
  );
}
export default Posts;
