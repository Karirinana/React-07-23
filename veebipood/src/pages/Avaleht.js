import React, { useState } from 'react'

function Avaleht() { //Muudmoodi ei saagi väärtusi muuta kui useState. 
  const [kogus, uuendaKogus] = useState(Number(localStorage.getItem("kogus"))); //number ---> kokkuarvustusteks, võrdsusteks, tehted. 
  const [laigitud, uuendaLaigitud] = useState(false); //kahendväärtus ehk boolean
  const [sonum, uuendaSonum] = useState("Uuenda kogust!"); // võtta esimene täht, tagurpidi keerata
  //reacti hook ehk reacti erikood. Muudab väärtusi HTMLis.

  function nulli() {
    uuendaKogus(0);
    uuendaSonum("Panid tagasi nulli!");
    localStorage.setItem("kogus", 0);
  }

  function vahenda() {
    uuendaKogus(kogus -1);
    uuendaSonum("Vähendasid kogust!")
    localStorage.setItem("kogus", kogus - 1);
  }

  function suurenda() {
    uuendaKogus(kogus +1);
    uuendaSonum("Suurendasid kogust!")
    localStorage.setItem("kogus", kogus + 1);
  }

  return ( <div>
    <div>Avaleht</div>
    <div>
      { laigitud === true && <img src="/laigitud.svg" alt="" /> }
      { laigitud === false && <img src="/mittelaigitud.svg" alt="" /> }



      <span>{laigitud}</span>
      { laigitud === true && <button onClick={() => uuendaLaigitud (false)}>Muuda mittelaigituks</button> }
      { laigitud === false && <button onClick={() => uuendaLaigitud (true)}>Muuda laigituks</button> }
      <br /><br />

      <div>{sonum}</div>
      { kogus !== 0 && <button onClick={() => nulli(0)}>Tagasi nulli</button> }
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      <span className={kogus >= 10 ? "kuldne" : undefined}>{kogus} tk</span>
      <button onClick={suurenda}>+</button>
    </div>
    </div>)
}

export default Avaleht

// { laigitud === true ? <img src="/laigitud.svg" alt="" /> : laigitud === false && <img src="/mittelaigitud.svg" alt="" /> } 

//HTML:
//tumesinine- sissekirjutatud tüüp- tag: img, button, div, span
//tavaline sinine- muutujad htmlis
//helesinine- tagi atribuudi (omadused): onClick, className, src, alt, path, element, to
//kollane- funktsioon
//valge- väljanäidatav, märgid
//oranž/punane- sõna, jutumärkide vahel
//roheline- suure tähega roheline- imporditud tag, peab olema import: <Avaleht /> <BrowserRouter /> <Route />

//JavaScript:
//tumesinine- sissekirjutatud tüüp- reserveeritud sonad: const, let, function, true, false, undefined, null.
//tavaline sinine- muutujad 
//helesinine- muutuja votmed (omadused): ref.current.value  .length
//kollane- funktsioon
//valge- märgid
// oranž/punane - sõna, jutumärkide vahel
// roheline - suure tähega roheline - imporditud klass
