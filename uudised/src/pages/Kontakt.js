import { useState } from "react"

function Kontakt() {

    const [n2itaTelKristiine, muudaN2itaTelKristiine] = useState(false);
    const [n2itaTelYlemiste, muudaN2itaTelYlemiste] = useState(false);
    const [n2itaTelTasku, muudaN2itaTelTasku] = useState(false);

    return ( <div> 
        <div>See on kontaktide leht, nähtav localhost:3000/kontakt aadressil</div> 
        <div>Võta meiega ühendust</div>
        <br />
        <div className= {n2itaTelKristiine === true ? "valitud" : undefined} onClick={() => muudaN2itaTelKristiine(!n2itaTelKristiine) }>Kristiine Keskus</div>
        {n2itaTelKristiine && <div className="valitud">+372 55555555</div>}
        <div className= {n2itaTelKristiine === true ? "valitud" : undefined} >Endla 45</div>
        <br />
        <div className= {n2itaTelYlemiste === true ? "valitud" : undefined} onClick={() => muudaN2itaTelYlemiste(!n2itaTelYlemiste) }>Ülemiste Keskus</div>
        {n2itaTelYlemiste && <div className="valitud">+372 66666666</div>}
        <div className= {n2itaTelYlemiste === true ? "valitud" : undefined} >Suur-Sõjamäe 4</div>
        <br />
        <div className= {n2itaTelTasku === true ? "valitud" : undefined} onClick={() => muudaN2itaTelTasku (!n2itaTelTasku)}>Tasku Keskus</div>
        {n2itaTelTasku && <div className="valitud">+372 77777777</div>}
        <div className= {n2itaTelTasku === true ? "valitud" : undefined}>Turu 2</div>
    </div>);
}

export default Kontakt;