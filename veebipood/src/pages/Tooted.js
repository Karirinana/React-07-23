import React, { useState } from "react";
import ostukorvFailist from "../data/ostukorv.json";
import { ToastContainer, toast } from 'react-toastify';
import tootedFailist from "../data/tooted.json";
import { Link } from 'react-router-dom';

function Tooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist.filter(toode => toode.aktiivne === true));

  const lisaOstukorvi = (klikitudToode) => {
    ostukorvFailist.push(klikitudToode);
    toast.success("Edukalt ostukorvi lisatud!");
  }

  const sorteeriAZ = () => {
    tooted.sort((a,b) => a.nimi.localeCompare(b.nimi, "et"));
    uuendaTooted(tooted.slice());
  }

  const sorteeriZA = () => {
    tooted.sort((a,b) => b.nimi.localeCompare(a.nimi, "et"));
    uuendaTooted(tooted.slice());
  }

  const sorteeriHindKasv = () => {
    tooted.sort((a, b) => a.hind - b.hind);
    uuendaTooted(tooted.slice());
  }

  const sorteeriHindKah = () => {
    tooted.sort((a, b) => b.hind - a.hind);
    uuendaTooted(tooted.slice());
  }

  const filtreeriAlgabA = () => {
    const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("A"));
    uuendaTooted(vastus);
  }

  const filtreeriAlgabB = () => {
    const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("B"));
    uuendaTooted(vastus);
  }

  const filtreeriAlgabL = () => {
    const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("L"));
    uuendaTooted(vastus);
  }

  const filtreeriAlgabT = () => {
    const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("T"));
    uuendaTooted(vastus);
  }
  return (
    <div>
      <button onClick={() => sorteeriAZ()}>Sorteeri AZ</button>
      <button onClick={() => sorteeriZA()}>Sorteeri ZA</button>
      <button onClick={() => sorteeriHindKasv()}>Sorteeri hind kasvavalt</button>
      <button onClick={() => sorteeriHindKah()}>Sorteeri hind kahanevalt</button>
      <br />
      <button onClick={filtreeriAlgabA}>A</button>
      <button onClick={filtreeriAlgabB}>B</button>
      <button onClick={filtreeriAlgabL}>L</button>
      <button onClick={filtreeriAlgabT}>T</button>
      {tooted.map((toode) => (
        <div key={toode.nimi}>
          <img className="pilt" src={toode.pilt} alt="" />
          <div>{toode.nimi}{" "}</div>
          <div>{toode.hind}{" $"}</div>
          <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>{" "}
          <Link to={"/toode/" + toode.nimi}>
            <button>Vaata detailsemalt</button>
          </Link>
        </div>
      ))}
     <ToastContainer 
      position="bottom-right"
      autoClose={3000}
      theme="dark"
     />
    </div>
  );
}

export default Tooted;
