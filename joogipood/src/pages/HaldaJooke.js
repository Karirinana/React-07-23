import React, { useState, useRef } from 'react';
import joogidFailist from "../data/joogid.json";

function HaldaJooke() {
  const [joogid, uuendaJoogid] = useState(joogidFailist);

  const joogidRef = useRef();

  const kustuta = (index) => {
    joogidFailist.splice(index,1);
    uuendaJoogid(joogidFailist.slice());
  }

  const lisa = () => {
    joogidFailist.push(joogidRef.current.value);
    uuendaJoogid(joogidFailist.slice());
  }

  return (
    <div>
      {joogid.map((jook, index) => 
        <div key={jook}>
          {jook} <button onClick={() => kustuta (index)}>X</button>
        </div>)}
      
      <label htmlFor="">Lisa oma joogi: </label>
      <input ref={joogidRef} type="text" />
      <button onClick={lisa}>lisa</button>
    </div>
  )
}

export default HaldaJooke