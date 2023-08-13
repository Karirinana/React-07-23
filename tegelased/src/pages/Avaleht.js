import React from 'react';
import { useState } from 'react';

function Avaleht() {
    const tegelased = [
        {eesnimi: "Mickey", perenimi: "Mouse", elukoht: "Disneyland"},
        {eesnimi: "Minnie", perenimi: "Mouse", elukoht: "Disneyland"},
        {eesnimi: "Winnie", perenimi: "Pooh", elukoht: "Hundered Acre Wood"},
        {eesnimi: "Roo", perenimi: "Kangaroo", elukoht: "Hundered Acre Wood"},
        {eesnimi: "Scooby", perenimi: "Doo", elukoht: "Crystal Cove"}

        ];
        
    const kuvaNimi = (tegelane) => {
        //console.log(tegelane.eesnimi);
        uuendaKlikitudNimi(tegelane.eesnimi);
    }

    const [klikitudNimi, uuendaKlikitudNimi] = useState("");

    return ( <div>
        { klikitudNimi !== "" && <div>Klikisid tegelasele {klikitudNimi} peal</div>}
        {tegelased.map(tegelane => 
            <div>
                <div>{tegelane.eesnimi}</div>
                <div>{tegelane.perenimi}</div>
                <div>{tegelane.elukoht}</div>
                <button onClick={() => kuvaNimi(tegelane)}>Kuva nimi</button>
            </div>)}
        
    </div>
     );
}

export default Avaleht;