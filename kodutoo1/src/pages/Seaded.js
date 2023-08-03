import React, { useState } from 'react';
import '../App.css';


function Seaded() {
  const [kujundus, muudaKujundus] = useState(localStorage.getItem("veebilehe_kujundus"));

  const tumeLeht = () => {
    localStorage.setItem("veebilehe_kujundus", "dark_mode");
    muudaKujundus("dark_mode");
  }

  const heleLeht = () => {
    localStorage.setItem("veebilehe_kujundus", "light_mode");
    muudaKujundus("light_mode");
  }

  const varvilineLeht = () => {
    localStorage.setItem("veebilehe_kujundus", "colored_mode");
    muudaKujundus("colored_mode");
  }

  return (
    <div>
 {/*        {
      kujundus === "light_mode" ? (
        <>
          <button onClick={tumeLeht}>Tume leht</button> 
          <button onClick={varvilineLeht}>Värviline leht</button>
        </> 
        ) : 
          <button onClick={heleLeht}>Hele leht</button> 
        
      }  */}
      <button onClick={tumeLeht}>Tume leht</button>
      <button onClick={heleLeht}>Hele leht</button>
      <button onClick={varvilineLeht}>Värviline leht</button>
      
      { kujundus==="dark_mode" && <div>TUME LEHT</div>}
      { kujundus==="light_mode" && <div>HELE LEHT</div>}
      { kujundus==="colored_mode" && <div>VÄRVILINE LEHT</div>}
   
    </div>


  )
}

export default Seaded