import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";

const App = () => {
  const [cards, setCards] = useState(Cards);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  const handleCardClick = (e) => {
    const clickedCard = cards.find((item) => item.logoURL === e.target.id);

    if (!clickedCard.clicked) {
      clickedCard.clicked = true;

      setScore(score + 1);

      setCards(cards);
    } 
    else {
      alert("Game Over");

      if (score > highestScore) {
        setHighestScore(score);
      }

      setScore(0);

      setCards(cards.map((item) => ({ ...item, clicked: false })));
    }
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Memory Card Game</h1>
        <h2>tips:</h2>
        <p>Click on a unique card image everytime.</p>
      </div>
      <ScoreBoard score={score} highestScore={highestScore}></ScoreBoard>
      
      <GameBoard cards={cards} handleCardClick={handleCardClick} />
    </div>
  );
};

export default App;
