import React, { createContext, useState } from "react";

export const NamesContext = createContext();

const NamesContextProvider = (props) => {

  const [players, setPlayers] = useState({});
  const [winner, setWinner] = useState([]);
  

  


  return (
    <NamesContext.Provider
      value={{ players, setPlayers, winner, setWinner }}
    >
      {props.children}
    </NamesContext.Provider>
  );
};

export default NamesContextProvider;
