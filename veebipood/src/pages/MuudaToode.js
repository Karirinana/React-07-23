import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import tootedFailist from "../data/tooted.json";

function MuudaToode() {
  const { index } = useParams();
  const leitud = tootedFailist[index];
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();
  const navigate = useNavigate();

  const muuda = () => {
    tootedFailist[index] = {
      nimi: nimiRef.current.value,
      hind: Number(hindRef.current.value),
      pilt: piltRef.current.value,
      aktiivne: aktiivneRef.current.checked,
    };
    navigate("/halda");
  };

  if (leitud === undefined) {
    return <div>Toode ei leitnud</div>;
  }

  return (
    <div>
      <label>Toode nimi</label> <br />
      <input ref={nimiRef} defaultValue={leitud.nimi} type="text" /> <br />
      <label>Toode hind</label> <br />
      <input ref={hindRef} defaultValue={leitud.hind} type="text" /> <br />
      <label>Toode pilt</label> <br />
      <input ref={piltRef} defaultValue={leitud.pilt} type="text" /> <br />
      <label>Toode aktiivne</label> <br />
      <input
        ref={aktiivneRef}
        defaultChecked={leitud.aktiivne}
        type="checkbox"
      />{" "}
      <br />
      Link <button onClick={muuda}>Muuda</button> <br />
    </div>
  );
}

export default MuudaToode;
