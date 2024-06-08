import React, { useState, useEffect } from "react";
// import { robots } from "./robots";
import { Card } from "./Card";

const CardsList = ({ robots }) => {
  const [error, setError] = useState();

  return (
    <div>
      {robots.map((robot, index) => (
        <Card key={robot.id} robot={robot} />
      ))}
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default CardsList;
