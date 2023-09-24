import React, { useRef, useState } from "react";

function Names() {
  const [message, setMessage] = useState("");
  const player1Ref = useRef();
  const player2Ref = useRef();

  const gameStart = (e) => {
    e.preventDefault();
    if (player1Ref.current.value === "" || player2Ref.current.value === "") {
      setMessage("Please add your name");
    } else {
      setMessage("");
      
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
        <label>Player 1 name:</label>
        <input ref={player1Ref} type="text" />
        <label>Player 2 name:</label>
        <input ref={player2Ref} type="text" />
        <button onClick={gameStart}>Let's play</button>
        {message}
      </form>
    </div>
  );
}

export default Names;
