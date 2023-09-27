import React from "react";
import GameState from "./GameState";

function Reset({ gameState, handleReset }) {
  if (gameState === GameState.inProgress) {
    return;
  }
  return <button onClick={handleReset} className="reset-button">Reset</button>;
}

export default Reset;
