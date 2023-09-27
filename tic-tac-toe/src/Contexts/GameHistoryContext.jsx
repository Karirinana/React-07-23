import React, { createContext, useState} from 'react';

export const GameHistoryContext = createContext();

const GameHistoryContextProvider = (props) => {

  const [gameHistory, setGameHistory] = useState([]);



    
    return (
        <GameHistoryContext.Provider value={{gameHistory}}>
            { props.children }
        </GameHistoryContext.Provider>
    )
}

export default GameHistoryContextProvider
