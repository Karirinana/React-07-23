import React, { useContext } from "react";
import { GameHistoryContext } from '../Contexts/GameHistoryContext';
import { useNavigate } from 'react-router-dom';


function ScoreBoard() {
  const { gameHistory } = useContext(GameHistoryContext);

  const navigate = useNavigate(); 
  const backToPlayClick = () => {
    navigate('/game');
  }
  const resetTheGame = () => {
    navigate('/names');
  }

  return (
    <div>
      <h1>Tic Tac Toe Score Board</h1>
      <ul>
        {gameHistory.map((gameRecord, index) => (
          <li key={index}>
            <strong>Game {index + 1}</strong>
            <p>Player 1: {gameRecord.player1}</p>
            <p>Player 2: {gameRecord.player2}</p>
            <p>Outcome: {gameRecord.outcome}</p>
          </li>
        ))}
      </ul>
      <button onClick={backToPlayClick}>Back to play</button>
      <button onClick={resetTheGame}>Reset game</button>
    </div>
  )
}

export default ScoreBoard