import React, { useRef, useState } from 'react'
import tootedFailist from "../data/tooted.json";
import { ToastContainer, toast } from 'react-toastify';



function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa toode!");
  const inputiLuger = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();

  //function lisa() {} //ES5

  // ES6
  const lisa = () => {
    if (inputiLuger.current.value === "") {
      uuendaSonum("Tühja nimega toodet ei saa lisada!"); 
      toast.error("Tühja nimega toodet ei saa lisada!");
    } else if (inputiLuger.current.value.includes("!")){
      uuendaSonum("Hüümärgiga toodet ei saa lisada!");
      toast.error("Hüümärgiga toodet ei saa lisada!");
    } else {
      uuendaSonum("Toode edukalt lisatud: " + inputiLuger.current.value);
      toast.success("Edukalt ostukorvi lisatud: " + inputiLuger.current.value);
      tootedFailist.push({
        nimi : inputiLuger.current.value, 
        hind : Number(hindRef.current.value), 
        pilt: piltRef.current.value, 
        aktiivne: aktiivneRef.current.checked});
    }
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      <label>Toote hind</label> <br />
      <input ref={hindRef} type="number" /> <br />
      <label>Toote pilt</label> <br />
      <input ref={piltRef} type="text"/> <br />
      <label>Toote aktiivne</label> <br />
      <input ref={aktiivneRef} type="checkbox" /> <br />
      <button onClick={lisa}>Lisa</button> <br />
      <ToastContainer 
      position="bottom-right"
      autoClose={3000}
      theme="dark"
     />
    </div>
  )
}

export default LisaToode