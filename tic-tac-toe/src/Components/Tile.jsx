import React from 'react';
import './../css/Game.css';

function Tile({className, value, onClick, playerTurn}) {
    let hoverClass = null;
    if (value === null && playerTurn != null) {
        hoverClass= `${playerTurn.toLowerCase()}-hover`;
    }

    const colorClass = value === 'X' ? 'x-player' : 'o-player';
    return ( 
        <div onClick={onClick} className={`tile ${className} ${colorClass} ${hoverClass}`}>{value}</div>
     );
}

export default Tile;