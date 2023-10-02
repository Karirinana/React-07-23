import React, { useContext, useRef, useState } from "react";
import { NamesContext } from "../Contexts/NamesContext";
import '../css/Names.css';
import { useNavigate } from 'react-router-dom';

function Names() {
  const {setPlayers} = useContext(NamesContext);

  const navigate = useNavigate();

  const player1Ref = useRef();
  const player2Ref = useRef();

  const [message, setMessage] = useState("");

  const gameStart = (e) => {
    e.preventDefault();
    if (player1Ref.current.value === "" || player2Ref.current.value === "") {
      setMessage("Please add your name");
    } else {
      setMessage("");
      setPlayers({
        player1Name: player1Ref.current.value,
        player2Name: player2Ref.current.value,
      });
    navigate("/game");
    }
  };

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
