import React from "react";
import Card from "./Card";

const Cards = ({ cards }) => {
  return (
    <div>
      {cards.map((card) => (
        <Card
          task={card.task}
          description={card.description}
          date={card.date}
        />
      ))}
    </div>
  );
};

export default Cards;
