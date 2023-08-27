import React, { useState } from 'react';

function ValitudTegelased() {
    const [valitudTegelased, uuendaValitudTegelased] = useState(
        JSON.parse(localStorage.getItem("ValitudTegelased")) || []);

    const eemalda = (index) => {
        valitudTegelased.splice(index,1);
        uuendaValitudTegelased(valitudTegelased.slice());
        localStorage.setItem("ValitudTegelased", JSON.stringify(valitudTegelased));
    }

    const tyhjenda = () => {
        uuendaValitudTegelased([]);
        localStorage.setItem("ValitudTegelased", JSON.stringify([]));
    }
    return ( <div>
        { valitudTegelased.length > 0 && <div>Valitud on {valitudTegelased.length} tegelast</div> }
        { valitudTegelased.length < 0 && <button onClick={tyhjenda}>Tühjenda</button> }
        { valitudTegelased.length === 0 && <div>Te ei valinud tegelasi</div> }
        {valitudTegelased.map((tegelane, index) =>
            <div>
                <div>{tegelane.eesnimi}</div>
                <div>{tegelane.perenimi}</div>
                <div>{tegelane.elukoht}</div>
                <div>{tegelane.vanus}</div>
                <button onClick={() => eemalda(index)}>Eemalda</button>
            </div>)}
    </div> );
}

export default ValitudTegelased;