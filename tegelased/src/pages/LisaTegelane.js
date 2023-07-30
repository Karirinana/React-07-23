import { useRef, useState } from "react";

function LisaTegelane() {

    const [sonum, uuendasonum] = useState("");
    const nimiRef = useRef();

    const lisaUusTegelane = () => {
        if (nimiRef.current.value === "") {
            uuendasonum("Tühja nimega ei saa sisestada");
        } else {
            uuendasonum("Tegelane lisatud!");
        }
    }

    return ( 
        <div>
            <div>{sonum}</div>
            <label>Tegelase nimi</label> <br />
            <input ref={nimiRef} type="text" /> <br />
            <button onClick={lisaUusTegelane}>Lisa uus</button> <br />
        </div> );
}

export default LisaTegelane;