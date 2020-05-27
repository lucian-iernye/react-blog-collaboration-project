import React, { useState } from "react";
import styles from "./AddCommentForm.module.scss";

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: "post",
      body: JSON.stringify({ username, text: commentText }),
      // we tell to server what kind of data we send on
      headers: {
        "Content-Type": "application/json",
      },
    });

    const body = await result.json();
    setArticleInfo(body);

    // reset the form after adding the comment
    setUsername("");
    setCommentText("");
  };

  return (
    <>
      <div id="add-comment-form">
        <h3>Add a Comment</h3>

        <label htmlFor="name">
          Name:
          <input
            type="text"
            value={username}
            name="name"
            id=""
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>

        <label htmlFor="comment">
          Comment:
          <textarea
            name="comment"
            value={commentText}
            id=""
            cols="50"
            rows="4"
            onChange={(event) => setCommentText(event.target.value)}
          ></textarea>
        </label>

        <button onClick={() => addComment()}>Add Comment</button>
      </div>
    </>
  );
};

export default AddCommentForm;
