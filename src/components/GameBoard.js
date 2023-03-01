import React from "react";

const GameBoard = ({ cards, handleCardClick }) => {
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

  const cardsArray = cards.map((card) => (
    <img
      className={card}
      key={card.id}
      src={card.logoURL}
      onClick={handleCardClick}
      id={card.logoURL}
      alt="card"
    ></img>
  ));

  return <div className="game-board">{cardsArray}</div>;
};

export default GameBoard;
