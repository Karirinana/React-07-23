import React, { useState, useEffect, useContext } from "react";
import Board from "./Board";
import "./../css/Game.css";
import GameOver from "./GameOver";
import GameState from "./GameState";
import Reset from "./Reset";
import { useNavigate } from "react-router-dom";
import { NamesContext } from "../Contexts/NamesContext";

function TicTacToe() {
  const navigate = useNavigate();
  const { players, setWinner } = useContext(NamesContext);
  const [gameHistory, setGameHistory] = useState([]);

  const scoreButtonClick = () => {
    navigate("/scoreboard");
  };

  const player_X = "X";
  const player_O = "O";

  
  const [currentPlayerName, setCurrentPlayerName] = useState(players.player1Name);
  const [startingPlayer, setStartingPlayer] = useState(players.player1Name);

  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(player_X);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgress);

  const winningCombinations = [
    { combo: [0, 1, 2], strikeClass: "strike-row-1" },
    { combo: [3, 4, 5], strikeClass: "strike-row-2" },
    { combo: [6, 7, 8], strikeClass: "strike-row-3" },

    { combo: [0, 3, 6], strikeClass: "strike-column-1" },
    { combo: [1, 4, 7], strikeClass: "strike-column-2" },
    { combo: [2, 5, 8], strikeClass: "strike-column-3" },

    { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
    { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
  ];

  function checkWinner(tiles, setStrikeClass, setGameState) {
    for (const { combo, strikeClass } of winningCombinations) {
      const tileValue1 = tiles[combo[0]];
      const tileValue2 = tiles[combo[1]];
      const tileValue3 = tiles[combo[2]];
  
      if (
        tileValue1 !== null &&
        tileValue1 === tileValue2 &&
        tileValue1 === tileValue3
      ) {
        setStrikeClass(strikeClass);
        if (tileValue1 === player_X && currentPlayerName === players.player1Name) {
          setGameState(GameState.playerXWins);
          setWinner(players.player1Name);
          setStartingPlayer(players.player1Name);
        } else if (tileValue1 === player_X && currentPlayerName === players.player2Name) {
          setGameState(GameState.playerXWins);
          setWinner(players.player2Name);
          setStartingPlayer(players.player2Name)
        } else if (tileValue1 === player_O && currentPlayerName === players.player1Name) {
          setGameState(GameState.playerOWins);
          setWinner(players.player1Name)
          setStartingPlayer(players.player1Name)
        } else {
          setGameState(GameState.playerOWins);
          setWinner(players.player2Name)
          setStartingPlayer(players.player2Name)
        }
      }
    }
  
    const allTilesFilled = tiles.every((tile) => tile !== null);
    if (allTilesFilled) {
      setGameState(GameState.draw);
      setStartingPlayer(currentPlayerName);
    }
  
    return null; 
  }

  const handleTileClick = (index) => {
    if (gameState !== GameState.inProgress) {
      return;
    }
    if (tiles[index] !== null) {
      return;
    }
    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);
 
   if (gameState === GameState.inProgress) {
    if (playerTurn === player_X) {
      setPlayerTurn(player_O);
      setCurrentPlayerName(currentPlayerName === players.player1Name ? players.player2Name : players.player1Name);
    } else {
      setPlayerTurn(player_X);
      setCurrentPlayerName(currentPlayerName === players.player1Name ? players.player2Name : players.player1Name);
    }
  }
};

 
const handleReset = () => {
  setGameState(GameState.inProgress);
  setTiles(Array(9).fill(null));
  setStrikeClass(null);

  const previousGame = gameHistory[gameHistory.length - 1];
  if (
    previousGame &&
    previousGame.player1 === players.player1Name &&
    previousGame.player2 === players.player2Name
  ) {
    setStartingPlayer(previousGame.winner);
    setCurrentPlayerName(previousGame.winner);
    setPlayerTurn(player_X);
  } else {
    setStartingPlayer(players.player1Name);
    setCurrentPlayerName(players.player1Name);
    setPlayerTurn(player_X);
  }

  setWinner(null);

  setGameHistory(prevHistory => [
    ...prevHistory,
    {
      player1: players.player1Name,
      player2: players.player2Name,
      winner: null
    }
  ]);
};


  
 

  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tiles]);

  return (
    <div>
      <button onClick={scoreButtonClick} className="score-button">
        Score
      </button>
      <h1>Tic Tac Toe</h1>
      <Board
        playerTurn={playerTurn}
        tiles={tiles}
        onTileClick={handleTileClick}
        strikeClass={strikeClass}
      />
      <div className="player-names">
        <h1 className={`player-name ${currentPlayerName === players.player1Name ? 'active' : ''}`}>
          {players.player1Name}
        </h1>
        <h1 className={`player-name ${currentPlayerName === players.player2Name ? 'active' : ''}`}>
          {players.player2Name}
        </h1>
      </div>
      <GameOver gameState={gameState} />
      <Reset gameState={gameState} handleReset={handleReset} />
    </div>
  );
}

export default TicTacToe;
