import React, { useRef, useState } from 'react'
import tootedFailist from "../data/tooted.json";
import { ToastContainer, toast } from 'react-toastify';



function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa toode!");
  const inputiLuger = useRef();

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
      tootedFailist.push(inputiLuger.current.value);
    }
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
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