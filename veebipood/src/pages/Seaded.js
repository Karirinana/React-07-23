import React, { useState } from 'react'

function Seaded() {
    const [keel, uuendaKeel] = useState ("est");
  //  let kasutaja = "sdfdfg";

  //  const uuendaKasutaja = () => {
   //     kasutaja = "sddgfbfa";
      //  console.log(kasutaja); //<--- logidese väljaprint
   // }

  return (
    <div>
        <button onClick={() => uuendaKeel("est")}>Eesti keelseks</button>
        <button onClick={() => uuendaKeel ("eng")}>To English</button>
        <button onClick={() => uuendaKeel ("rus")}>По Русскии</button>

        { keel === "est" && <div>Leht on eesti keelne</div>}
        { keel === "eng" && <div>Page is in English</div>}
        {keel === "rus" && <div>Страница на русском</div>}
    </div>
  )
}

export default Seaded