import {useState} from "react";

function Meist() {

    const [kontakt, n2itaKontakt] = useState("");

    return ( <div>
        <div>See on meist leht, nähtav localhost:3000/meist aadressil</div>
        <div>Meie töötajad:</div>
        <br />
        <div>Ivan Ivanov</div>
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
        <br /> <br />
        { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
    </div> );
}

export default Meist;