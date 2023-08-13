import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import joogidFailist from "../data/joogid.json";

function Avaleht() {
  const [joogid, uuendaJoogid] = useState(joogidFailist);

  return (
    <div>Joogid: 
      {joogid.map((element, index) => 
        <div>
          <Link to={"/jook/" + index}>
          <span>{element}</span>
          </Link>
        </div>)}
    </div>
  )
}

export default Avaleht