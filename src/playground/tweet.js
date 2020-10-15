import React, { useState } from "react";
import "./App1.css";

function Tweet({ name, message }) {
  const [likes, setLikes] = useState(5);
  const increment = () => {
    setLikes(likes + 1);
  };
  return (
    <div className="tweet">
      <h1>{name}</h1>
      <p>{message}</p>
      <button onClick={increment}>No of likes: {likes}</button>
    </div>
  );
}

export default Tweet;
