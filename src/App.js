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
    const clickedCard = cards.find((item) => item.id === Number(e.target.id));

    if (!clickedCard.clicked) {
      setScore(prevScore => prevScore + 1);
      
      setClickedStatus(Number(e.target.id));
    } else {
      resetGame();
    }
  };

  const setClickedStatus = (cardId) => {
    const updatedCards = [...cards];
    const clickedCardIndex = updatedCards.findIndex(card => card.id === cardId);
    updatedCards[clickedCardIndex].clicked = true;
    setCards(updatedCards);
  }

  const resetGame = () => {
    alert("Game Over");

    if (score > highestScore) {
      setHighestScore(score);
    }

    setScore(0);
    setCards(cards.map((item) => ({ ...item, clicked: false })));
  };

  const suffleCards = (cards) => {
    for (
      let currentIndex = cards.length - 1;
      currentIndex > 0;
      currentIndex--
    ) {
      const randomIndex = Math.floor(Math.random() * (currentIndex + 1));

      [cards[currentIndex], cards[randomIndex]] = [
        cards[randomIndex],
        cards[currentIndex],
      ];
    }
  };
  suffleCards(cards);

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
