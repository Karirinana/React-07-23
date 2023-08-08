import React, { useState, useRef } from 'react';

function Tagasiside() {
    const [tagasisided, määraTagasisided] = useState(["Oli hea", "Huvitav", "Teistsugune", "Põnev"]);
    const tagasisideRef = useRef();

    function kustuta(index) {
        tagasisided.splice(index,1);
        määraTagasisided(tagasisided.slice());
    }

    function lisaUusTagasiside() {
        tagasisided.push(tagasisideRef.current.value);
        määraTagasisided(tagasisided.slice());
    }

  return (
    <div>Tagasisided:
        {tagasisided.map((element, index) =>
        <div>
            <span>{element}</span>
            <button onClick={() => kustuta(index)}>X</button>
        </div>)}
        <br />
        <label htmlFor="">Lisa uus tagasiside:</label>
        <input ref={tagasisideRef} type="text" />
        <button onClick={() => lisaUusTagasiside()}>Sisesta</button>
    </div>
  )
}

export default Tagasiside