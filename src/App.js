import { React, useState } from "react";
import "./App.css";

import Cards from "./components/Cards";

const date = new Date().toLocaleString() + "";

const testCard = [
  {
    task: "Take out the bins",
    description: "it's Friday and today is the Blue Bin",
    date: date,
  },
  {
    task: "Take out the bins",
    description: "it's Friday and today is the Blue Bin",
    date: date,
  },
];

function App() {
  const [cards, setCard] = useState(testCard);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Cards cards={cards} />
    </div>
  );
}

export default App;
