import React from 'react';
import '../css/Nõuded.css'

function Nõuded() {
  return (
    <div className='intro-box'>
      <h1>FUNKTSIONAALSED NÕUDED</h1>
      <span>Artikli vaade on lihtne: tee päring ja kuva saadud vastus.</span>
      <span>Tabeli vaate puhul soovime näha, kuidas sa Array-dega ringi käia oskad:</span>
      <span>Tabelis tuleb saadud vastus tabeli ridadel välja kuvada, sh tabelile 3-sammuline sorteerimine peale panna (Asc, Desc, Default).</span>
      <span>Tabelile tuleb ka lehejaotus külge panna. Funktsionaalsus peaks olema 1:1 proovitöö lehel oleva lehejaotusega.</span>
      <h2>MITTEFUNKTSIONAALSED NÕUDED</h2>
      <ul>
        <li>* Proovitöö lahendamiseks peab kasutama Vue, React või Angular raamistiku.</li>
        <li>* Proovitöö puhul soovitame vältida väliseid mooduleid (paginator, table sorter, jne).</li>
        <li>* Kujundus ei pea olema sama, mis proovitööl, aga selle järgi tegemine annab lisapunkte.</li>
      </ul>
      <h1>API</h1>
      <div className='buttons-info'>
        <button>ARTIKKEL</button>
        <button>NIMEKIRI</button>
      </div>
      <h1>MATERJALID</h1>
      <div className='buttons-materials'>
        <button>FONT</button>
        <button>GRAAFIKA</button>
      </div>
    </div>
  )
}

export default Nõuded