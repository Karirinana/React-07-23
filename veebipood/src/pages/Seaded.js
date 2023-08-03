import React, { useState } from 'react'

function Seaded() {
    const [keel, uuendaKeel] = useState(localStorage.getItem("keel") || "est");
  //  let kasutaja = "sdfdfg";

  //  const uuendaKasutaja = () => {
   //     kasutaja = "sddgfbfa";
      //  console.log(kasutaja); //<--- logidese väljaprint
   // }
  function est () {
    uuendaKeel("est");
    localStorage.setItem("keel", "est");
  }

    function eng () {
    uuendaKeel("eng");
    localStorage.setItem("keel", "eng");
  }

    function rus () {
    uuendaKeel("rus");
    localStorage.setItem("keel", "rus");
  }

  return (
    <div>
        <button onClick={est}>Eesti keelseks</button>
        <button onClick={eng}>To English</button>
        <button onClick={rus}>По Русскии</button>

        { keel === "est" && <div>Leht on eesti keelne</div>}
        { keel === "eng" && <div>Page is in English</div>}
        {keel === "rus" && <div>Страница на русском</div>}
    </div>
  )
}

export default Seaded