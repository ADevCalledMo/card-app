import React from "react";
import Card from "./Card";

import { Box, Button } from "@chakra-ui/react";

const Cards = ({ cards, handleRid, handleAdd, handleForm }) => {
  return (
    <div>
      {cards.map((card) => (
        <Box my={4}>
          <Card
            task={card.task}
            description={card.description}
            date={card.date}
          />
        </Box>
      ))}
      <Box>
        <Button colorScheme="blue" onClick={handleRid} margin="1">
          Clear All
        </Button>
        <Button colorScheme="yellow" onClick={handleAdd} margin="1">
          Add Task
        </Button>
        <Button colorScheme="yellow" onClick={handleForm} margin="1">
          Add Task 2
        </Button>
      </Box>
    </div>
  );
};

export default Cards;
