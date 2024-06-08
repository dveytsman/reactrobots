import React, { useState, useEffect } from "react";
import CardsList from "./CardsList";
import { robots as robotData } from "./robots";
import SearchBox from "./SearchBox";
import "./App.css";

const App = () => {
  const [robots, setRobots] = useState(robotData);
  const [searchField, setSearchField] = useState("");
  const [error, setError] = useState(null);

  let filteredRobots = [];
  try {
    filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
  } catch (err) {
    console.log("Error filtering robots");
    setError("an error occurred while filtering robots.");
  }

  return (
    <div className="tc">
      <h1 className="f1">Stock Photos</h1>
      <SearchBox setSearchField={setSearchField} />
      {error ? <p>{error}</p> : <CardsList robots={filteredRobots} />}
    </div>
  );
};

export default App;
