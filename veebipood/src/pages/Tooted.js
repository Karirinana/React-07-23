import React, { useState } from "react";
import ostukorvFailist from "../data/ostukorv.json";
import { ToastContainer, toast } from 'react-toastify';
import tootedFailist from "../data/tooted.json";
import { Link } from 'react-router-dom';

function Tooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const lisaOstukorvi = (klikitudToode) => {
    ostukorvFailist.push(klikitudToode);
    toast.success("Edukalt ostukorvi lisatud!");
  }
  return (
    <div>
      {tooted.map((toode, index) => (
        <div>
          <img className="pilt" src={toode.pilt} alt="" />
          <div>{toode.nimi}{" "}</div>
          <div>{toode.hind}{" $"}</div>
          <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>{" "}
          <Link to={"/toode/" + index}>
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
