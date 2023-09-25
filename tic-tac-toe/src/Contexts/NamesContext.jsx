import React, { createContext, useRef, useState } from "react";

export const NamesContext = createContext();

const NamesContextProvider = (props) => {
  const [players] = useState([]);

  const player1Ref = useRef();
  const player2Ref = useRef();

  const [message, setMessage] = useState("");

  const gameStart = (e) => {
    e.preventDefault();
    if (player1Ref.current.value === "" || player2Ref.current.value === "") {
      setMessage("Please add your name");
    } else {
      setMessage("");
      players.push({
        player1Name: player1Ref.current.value,
        player2Name: player2Ref.current.value,
      });
    }
  };
  return (
    <NamesContext.Provider
      value={{ player1Ref, player2Ref, message, gameStart, players }}
    >
      {props.children}
    </NamesContext.Provider>
  );
};

export default NamesContextProvider;
