import React from 'react';
import { useParams } from 'react-router-dom';
import poedFailist from "../data/poed.json";

function YksikPood() {
    const { index } = useParams();
    const leitud = poedFailist[index];

  return (
    <div>
        <div>Poe nimi: {leitud.nimi}</div>
        <div>Poe lahtiolekuaeg: {leitud.aeg}</div>
        <div>Poe telefon: {leitud.tel}</div>
        {leitud === undefined && <div>Poodi ei leitud</div>}
    </div>
  )
}

export default YksikPood