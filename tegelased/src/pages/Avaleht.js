import React from 'react';
import { useState } from 'react';

function Avaleht() {
    const tegelased = JSON.parse(localStorage.getItem("tegelased")) || [];
 /*    [
        {eesnimi: "Mickey", perenimi: "Mouse", elukoht: "Disneyland", vanus: "33"},
        {eesnimi: "Minnie", perenimi: "Mouse", elukoht: "Disneyland", vanus: "17"},
        {eesnimi: "Winnie", perenimi: "Pooh", elukoht: "Hundered Acre Wood", vanus: "55"},
        {eesnimi: "Roo", perenimi: "Kangaroo", elukoht: "Hundered Acre Wood", vanus: "5"},
        {eesnimi: "Scooby", perenimi: "Doo", elukoht: "Crystal Cove", vanus: "20"}

        ]; */

    const [klikitudNimi, uuendaKlikitudNimi] = useState("");
        
    const kuvaNimi = (tegelane) => {
        //console.log(tegelane.eesnimi);
        uuendaKlikitudNimi(tegelane.eesnimi);
    }

    const valiTegelane = (klikitudTegelane) => {
        const valitud = JSON.parse(localStorage.getItem("ValitudTegelased")) || [];
        valitud.push(klikitudTegelane);
        localStorage.setItem("ValitudTegelased", JSON.stringify(valitud));
    }

    return ( <div>
        { klikitudNimi !== "" && <div>Klikisid tegelasele {klikitudNimi} peal</div>} <br />
        {tegelased.map(tegelane => 
            <div>
                <div>{tegelane.eesnimi}</div>
                <div>{tegelane.perenimi}</div>
                <div>{tegelane.elukoht}</div>
                <div>{tegelane.vanus}</div>
                <button onClick={() => kuvaNimi(tegelane)}>Kuva nimi</button>
                <button onClick={() => valiTegelane(tegelane)}>Vali tegelast</button>
            </div>)}
        
    </div>
     );
}

export default Avaleht;