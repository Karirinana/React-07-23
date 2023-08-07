import React, { useState } from "react";
import toodedFailist from "../data/tooted.json";

function HaldaTooted() {
  const [tooted, uuendaTooted] = useState(toodedFailist);

  const kustuta = (jrknr) => {
    toodedFailist.splice(jrknr, 1);
    uuendaTooted(toodedFailist.slice());
  };
  
  return (
    <div>
      {tooted.map((toode, jrknr) => (
        <div>
        {toode}{" "}
          <button onClick={() => kustuta(jrknr)}>Kustuta</button>
        </div>
      ))}
    </div>
  );
}

export default HaldaTooted;
