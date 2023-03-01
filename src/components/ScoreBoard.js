import React from 'react'

function ScoreBoard({ score, highestScore }) {
    return <div className="score-board">
        <span><h1>Score: {score}</h1></span>
        <span><h2>Highest Score: {highestScore}</h2></span>
    </div>
}

export default ScoreBoard;
