import React, { useState } from "react";
import { Link } from "react-router-dom";
import ostukorvFailist from "../data/ostukorv.json";

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist);

  const lisa = (klikitudToode) => {
    ostukorv.push(klikitudToode); // iga nuppu vajutus peab olema erinev (dunaamiline)
    uuendaOstukorv(ostukorv.slice());
  };

  const kustuta = (jrknr) => {
    ostukorv.splice(jrknr, 1);
    uuendaOstukorv(ostukorv.slice());
  };

  const tyhjenda = () => {
    ostukorv.splice(0);
    uuendaOstukorv(ostukorv.slice());
  };

   const arvutaOstukorviKogusumma = () => {
    let summa = 0;
    ostukorv.forEach(toode => summa = summa + toode.hind);
    return summa;
   }
  return (
    <div>
      { ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
      { ostukorv.length > 0 && <div>Ostukorvis on {ostukorv.length} toodet</div>}
      { ostukorv.map((toode, jrknr) => (
        <div key={jrknr}>
          {jrknr} 
          <div>{toode.nimi}{" "}</div>
          <div>{toode.hind}{" "}</div>
          <img className="pilt" src={toode.pilt} alt="" />
          <button on onClick={() => lisa(toode)}>+</button>{" "}
          <button on onClick={() => kustuta(jrknr)}>X</button>{" "}
        </div>
      ))}
      {ostukorv.length === 0 && <>
        <div>Ostukorv on tühi</div>
        <Link to="/lisa-toode">Tooteid lisama</Link>
      </>}
      {ostukorv.length > 0 && <div>Kogusumma: {arvutaOstukorviKogusumma()} $</div>}
    </div>
  );
}

export default Ostukorv;

//Kus teen "npm start" -sinna tulevad koodivead
//komplileerimise vead ehk:
//1. import tegemata
//2. muutuja seos vale
//3. html pole uks komplekt
//jnejne

//run-time error ehk kaimasolemise error
//parem klops ---> inspect --> console
//1. className vaikse n tahega
//2. URL vale
