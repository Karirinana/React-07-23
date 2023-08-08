import React, { useState, useRef } from "react";
import andjateFail from "../data/nimed.json";

function TagasisideAndjad() {
  const [andjad, uuendaAndjad] = useState(andjateFail);

  const filtreeriM = () => {
    const vastus = andjad.filter((element) => element.startsWith("M"));
    uuendaAndjad(vastus);
  };

  const filterSixLetters = () => {
    const vastus = andjad.filter((element) => element.length === 6);
    uuendaAndjad(vastus);
  };

  const filterEndingY = () => {
    const vastus = andjad.filter((element) => element.endsWith("y"));
    uuendaAndjad(vastus);
  };

  const sortZA = () => {
    andjad.sort().reverse();
    uuendaAndjad(andjad.slice());
  };

  const insertEST = () => {
    const vastus = andjad.map((element) => "EST-" + element);
    uuendaAndjad(vastus);
  };

  const kustuta = (index) => {
    andjad.splice(index, 1);
    uuendaAndjad(andjad.slice());
  };

  const andjaRef = useRef();

  const lisa = () => {
    andjad.push(andjaRef.current.value);
    uuendaAndjad(andjad.slice());
  };

  return (
    <div>
      <div>Kuva palju nimesid on : {andjad.length} tk</div>
      <button onClick={filtreeriM}>
        Filtreeri ehk jäta kõik M tähega algavad nimed alles
      </button>
      <button onClick={filterSixLetters}>
        Filtreeri ehk jäta kõik täpselt 6 kohalised nimed alles
      </button>
      <button onClick={filterEndingY}>
        Filtreeri ehk jäta kõik y tähega lõppevad nimed alles
      </button>
      <button onClick={sortZA}>Sorteeri Z-A</button>
      <button onClick={insertEST}>Kirjuta iga nime ette "EST-"</button>
      {andjad.map((element, index) => (
        <div key={element}>
          {element} <button onClick={() => kustuta(index)}>Kustutama</button>
        </div>
      ))}
      <label>Võimalda uut nime kõige lõppu lisada</label> <br />
      <input ref={andjaRef} type="text" /> <br />
      <button onClick={lisa}>Lisa</button>
    </div>
  );
}

export default TagasisideAndjad;
