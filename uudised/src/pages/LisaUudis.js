import React, { useRef, useState } from "react";

function LisaUudis() {
  const uudiseRef = useRef();
  const [sonum, uuendaSonum] = useState("");

  const lisaUusUudis = () => {
    const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
    uudised.push(uudiseRef.current.value);
    localStorage.setItem("uudised", JSON.stringify(uudised));
  };

  const kontroll = () => {
    uuendaSonum("");

    if (
      uudiseRef.current.value.charAt(0) ===
      uudiseRef.current.value.charAt(0).toLowerCase()
    ) {
      uuendaSonum("Sisestatud uudise nimetus algab väikse tähega. Palun parandage!");
    }

    if (uudiseRef.current.value.includes("  ")) {
      uuendaSonum("Sisestatud kaks tühikut. Palun parandage!");
    }
  };

  return (
    <div>
      <div>{sonum}</div>
      <label htmlFor="">Uudise nimi:</label>
      <input onChange={kontroll} ref={uudiseRef} type="text" />
      <button onClick={lisaUusUudis}>Lisa uudis</button>
    </div>
  );
}

export default LisaUudis;
