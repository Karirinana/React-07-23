import React from "react";
import { useRef, useState } from "react";

function LisaTegelane() {
  const [sonum, uuendasonum] = useState("");
  const eesnimiRef = useRef();
  const perenimiRef = useRef();
  const elukohtRef = useRef();
  const vanusRef = useRef();

  const lisaUusTegelane = () => {
    if (eesnimiRef.current.value === "") {
      uuendasonum("Tühja nimega ei saa sisestada");
    } else {
      uuendasonum("Tegelane lisatud!");
      const tegelased = JSON.parse(localStorage.getItem("tegelased")) || [];
      tegelased.push({
        "eesnimi": eesnimiRef.current.value,
        "perenimi": perenimiRef.current.value,
        "elukoht": elukohtRef.current.value,
        "vanus": Number(vanusRef.current.value),
      });
      localStorage.setItem("tegelased", JSON.stringify(tegelased));
    }
  };

  return (
    <div>
      <div>{sonum}</div>
      <label>Tegelase nimi</label> <br />
      <input ref={eesnimiRef} type="text" /> <br />
      <label>Tegelase perenimi</label> <br />
      <input ref={perenimiRef} type="text" /> <br />
      <label>Tegelase elukoht</label> <br />
      <input ref={elukohtRef} type="text" /> <br />
      <label>Tegelase vanus</label> <br />
      <input ref={vanusRef} type="number" /> <br />
      <button onClick={lisaUusTegelane}>Lisa uus</button> <br />
    </div>
  );
}

export default LisaTegelane;
