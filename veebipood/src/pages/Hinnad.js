import React, { useState } from 'react'

function Hinnad() {
    const [hinnad, uuendaHinnad] = useState([42,12,55,7,412,1234,101,19,9,82]);

    const sorteeri =() => {
        hinnad.sort((a, b) => a - b);
        uuendaHinnad(hinnad.slice());
    }

    const filtreeri =() => {
        const vastus = hinnad.filter(hind => hind > 100);
        uuendaHinnad(vastus);
    }

    const arvutaKokku = () => {
        let summa = 0; 
        hinnad.forEach(hind => summa = summa + hind);
        return summa; 
    }

  return (
    <div>
        <button onClick={sorteeri}>Sorteeri</button>
        <button onClick={filtreeri}>Filtreeri</button>
        {hinnad.map(hind => <div>Maksumus: {hind}$</div> )}
        <div>Kokku: {arvutaKokku()} $</div>
    </div>
  )
}

export default Hinnad