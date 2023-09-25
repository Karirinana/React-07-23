import React, { useContext } from "react";
import { NamesContext } from "../Contexts/NamesContext";
import '../css/Names.css';

function Names() {
  const { player1Ref, player2Ref, message, gameStart } = useContext(NamesContext);

  return (
    <div>
      <h1 className="welcomeHeader">Tic Tac Toe</h1>
      <p>
        Please get familiar with{" "}
        <a
          href="https://en.wikipedia.org/wiki/Tic-tac-toe"
          target="_blank"
          rel="noreferrer"
        >
          rules
        </a>{" "}
        before the game starts.
      </p>
      <form action="">
        <input ref={player1Ref} type="text" placeholder="Player 1 name:"  required/>
        <input ref={player2Ref} type="text" placeholder="Player 2 name:" required/>
        <button onClick={gameStart}>Let's play</button>
        {message}
      </form>
    </div>
  );
}

export default Names;
