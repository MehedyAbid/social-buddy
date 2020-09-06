import React from "react";

const Comment = (props) => {
  const { name, email, body, id } = props.comment;
  const commentStyle = {
    border: "1px solid black",
    marginTop: "5px",
  };
  return (
    <div style={commentStyle}>
      <h3>Commented By: {name}</h3>
      <p>Email: {email}</p>
      <p>Comment : {body}</p>
    </div>
  );
};

export default Comment;
