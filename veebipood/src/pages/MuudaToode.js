import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import tootedFailist from "../data/tooted.json";

function MuudaToode() {
  const {index} = useParams(); 
  const leitud = tootedFailist[index];
  const nimiRef = useRef(); 
  const navigate = useNavigate();

  const muuda = () => {
    tootedFailist[index] = nimiRef.current.value;
    navigate("/halda");
  }

  return (
    <div>
      <label>Toode nimi</label> <br />
      <input ref={nimiRef} defaultValue={leitud} type="text" /> <br />
     Link <button onClick={muuda}>Muuda</button> <br />
    </div>
  )
}

export default MuudaToode