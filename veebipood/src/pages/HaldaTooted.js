import React, { useState } from "react";
import toodedFailist from "../data/tooted.json";
import { Link } from "react-router-dom";

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
        {jrknr}
        <div>{toode.nimi}{" "}</div>
        <img className="pilt" src={toode.pilt} alt="" />
        <div>{toode.hind}{" "}</div>
          <button onClick={() => kustuta(jrknr)}>Kustuta</button>
          <Link to={"/muuda/" + jrknr}>
            <button>Muuda</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HaldaTooted;
