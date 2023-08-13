import {useState} from "react";

function Meist() {
    const [kontakt, n2itaKontakt] = useState("");
    const tootajad =[
        {nimi:"Ivan Ivanov" , ala: "Uudisklippide taustamismuusika", telefon: "+372 111111111"},
        {nimi:"Petr Petrov" , ala: "Püstolreporter", telefon: "+372 222222222"},
        {nimi:"Sergei Sergeev" , ala: "Uudiste kujundamine", telefon: "+372 333333333"},
        {nimi:"Leonid Leonidov" , ala: "Välisturungute spetsialist", telefon: "+372 444444444"},
        {nimi:"Ivan Ivanov" , ala: "Uudisklippide taustamismuusika", telefon: "+372 111111111"},
        {nimi:"Petr Petrov" , ala: "Püstolreporter", telefon: "+372 222222222"},
        {nimi:"Sergei Sergeev" , ala: "Uudiste kujundamine", telefon: "+372 333333333"},
        {nimi:"Leonid Leonidov" , ala: "Välisturungute spetsialist", telefon: "+372 444444444"}
    ]

    const [valitud, uuendaValitud] = useState();

    const votaYhendust = (tootaja) => {
        n2itaKontakt(tootaja.telefon);
        uuendaValitud(tootaja.nimi);
    }

    return ( <div>
        <div>See on meist leht, nähtav localhost:3000/meist aadressil</div>
        <div>Meie töötajad:</div>
        VALITUD INIMENE: {valitud}
        <br />
        {/* <div>Ivan Ivanov</div>
        <div>Uudisklippide taustamismuusika</div>
        <button onClick={() => n2itaKontakt('+372 111111111')}>Võta ühendust</button>
        <br /> <br />
        <div>Petr Petrov</div>
        <div>Püstolreporter</div>
        <button onClick={() => n2itaKontakt('+372 222222222')}>Võta ühendust</button>
        <br /> <br />
        <div>Sergei Sergeev</div>
        <div>Uudiste kujundamine</div>
        <button onClick={() => n2itaKontakt('+372 333333333')}>Võta ühendust</button>
        <br /> <br />
        <div>Leonid Leonidov</div>
        <div>Välisturungute spetsialist</div>
        <button onClick={() => n2itaKontakt('+372 444444444')}>Võta ühendust</button>
        <br /> <br /> */}
        <div>{tootajad.map(tootaja =>
            <div className={tootaja.nimi === valitud ? "valitud" : undefined}>
                <div>{tootaja.nimi}</div>
                <div>{tootaja.ala}</div>
                <button onClick={() =>[n2itaKontakt(tootaja.telefon), uuendaValitud(tootaja.nimi)]}>Võta ühendust</button>
            </div>)}
        </div>
        { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
    </div> );
}

export default Meist;