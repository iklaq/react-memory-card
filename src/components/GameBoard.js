import React from "react";

const GameBoard = ({ cards, handleCardClick }) => {
  

  const cardsArray = cards.map((card) => (
    <img
      className="card-image"
      key={card.id}
      src={card.logoURL}
      onClick={handleCardClick}
      id={card.id}
      alt="card"
    ></img>
  ));

  return <div className="game-board">{cardsArray}</div>;
};

export default GameBoard;
