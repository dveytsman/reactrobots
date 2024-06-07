import React from "react";
// import { robots } from "./robots";
import { Card } from "./Card";

const CardsList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot) => (
        <Card key={robot.id} robot={robot} />
      ))}
    </div>
  );
};

export default CardsList;
