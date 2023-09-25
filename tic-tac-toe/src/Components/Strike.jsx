import React from 'react';
import './../css/Game.css';

function Strike({strikeClass}) {
    return ( 
        <div className={`strike ${strikeClass}`}></div>
     );
}

export default Strike;