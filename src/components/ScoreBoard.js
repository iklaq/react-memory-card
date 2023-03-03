import React from 'react'

function ScoreBoard({ score, highestScore }) {
    return <div className="score-board">
        <h1>Score: {score}</h1>
        <h2>Highest Score: {highestScore}</h2>
    </div>
}

export default ScoreBoard;
