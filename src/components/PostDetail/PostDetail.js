import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../Comment/Comment";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const url2 = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(url2)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  console.log(post);
  console.log(comments);

  return (
    <div>
      <h1>Title : {post.title}</h1>
      <p> {post.body}</p>
      {comments.map((comment) => (
        <Comment comment={comment}></Comment>
      ))}
    </div>
  );
};

export default PostDetail;
