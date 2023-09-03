import React, { useEffect, useState, useRef } from 'react';
import config from "../data/config.json";

function HaldaJooke() {
  const [joogid, uuendaJoogid] = useState([]);

  useEffect(() => {
    fetch(config.joogidDbUrl)
      .then(res => res.json())
      .then(json => uuendaJoogid(json || []));
  }, []);

  const joogidRef = useRef();

  const kustuta = (index) => {
    joogid.splice(index,1);
    uuendaJoogid(joogid.slice());
    fetch(config.joogidDbUrl, {"method": "PUT", "body": JSON.stringify(joogid)})
  }

  const lisa = () => {
    joogid.push({"nimi": joogidRef.current.value});
    uuendaJoogid(joogid.slice());
    fetch(config.joogidDbUrl, {"method": "PUT", "body": JSON.stringify(joogid)})
  }

  return (
    <div>
      {joogid.map((jook, index) => 
        <div key={jook}>
          {jook.nimi} 
          <button onClick={() => kustuta (index)}>X</button>
        </div>)}
      
      <label htmlFor="">Lisa oma joogi: </label>
      <input ref={joogidRef} type="text" />
      <button onClick={lisa}>lisa</button>
    </div>
  )
}

export default HaldaJooke