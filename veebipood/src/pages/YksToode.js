import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json"

function YksToode() {
  const {nimi} = useParams();  // URLs localhost:3000/pilt/101
  //const {id, name} = useSearchParams(); localhost:3000/pilt?id=101&name=pildike
  const leitud = tootedFailist.find(toode => toode.nimi === nimi);

  if (leitud === undefined){
    return <div>Tooted ei leitnud!</div>
}

  return (
    <div>
      {/* <div>Toote järjekorra number: {jrknr}</div> */}
      <div>Toote nimi: {leitud.nimi}</div>
      <div>Toote hind: {leitud.hind}</div>
      <div>Toote kirjeldus: ...</div>
      <img src={leitud.pilt} alt="" />
    </div>
  )
}

export default YksToode