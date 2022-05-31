import { React, useState } from "react";
import "./App.css";

import Cards from "./components/Cards";
import Form from "./components/Form";

const date = new Date().toLocaleString() + "";

const testCard = [
  {
    task: "Take out the bins",
    description: "it's Friday and today is the Blue Bin",
    date: date,
  },
  {
    task: "Walk the Dog",
    description:
      "The Dog seems to love going to the park in the morning - so take him",
    date: date,
  },
];

const addedCard = {
  task: "Study Japanese",
  description: "Do WaniKani or Bunpro",
  date: date
}

function App() {
  const [cards, setCard] = useState(testCard);
  const [form, setForm ] = useState(Form)

  // CRU [D]
  const handleRid = () => {
    const newCards = [];

    setCard(newCards);
  };

  const handleAdd = () => {
    const addedCards = [...testCard, addedCard]

    setCard(addedCards)
  }

  const handleForm = () => {
      setForm(Form)
  }

  return (
    <div className="App">
      {/* <Form /> */}
      <Cards 
      cards={cards}
      handleRid={handleRid}
      handleAdd={handleAdd}
      form={form}
      handleForm={handleForm}
      />
    </div>
  );
}

export default App;
