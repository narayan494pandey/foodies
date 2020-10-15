import React, { useState } from "react";
import Tweet from "./tweet";

function App() {
  //const [isRed, setRed] = useState(false);

  const [users, setUsers] = useState([
    { name: "Narayan", message: "Welcome to here" },
    { name: "Sonu", message: "Java Api" },
    { name: "ED", message: "Coffee House" },
    { name: "Travser", message: "Web App" },
  ]);

  return (
    <div className="app">
      {users.map((user) => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;

/*
<Tweet name="Narayan" message="this is random tweet" />
      <Tweet name="Sonu" message="hello" />
      <Tweet name="Travser" message="take a tea" />
      <Tweet name="Mosh" message="web course" />
      <div>
        <h1 className={isRed ? "red" : ""}>Change my color</h1>
        <button onClick={increment}>Increment</button>
        <h1>{count}</h1>
      </div>
*/
