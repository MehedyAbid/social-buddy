import React, { useState, useEffect } from "react";
import Post from "../Post/Post";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </div>
  );
};

export default Home;
