import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Avaleht() {
    const [postitused, uuendaPostitused] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => uuendaPostitused(data))
    }, []);

    return ( <div>
        <div>See on avaleht, nähtav localhost:3000 aadressil</div>   
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/El_Mundo_logo.svg/2560px-El_Mundo_logo.svg.png" alt="El Mundo logo" />
        { postitused.map(element => 
            <div key={element.id}>
                <div><i>{element.userId}</i></div>
                <div><u>{element.id}</u></div>
                <div><b>{element.title}</b></div>
                <div>{element.body}</div>
                <Link to={"kasutaja-postitus/" + element.userId}>
                    <button>Kuva kõik kasutaja postitused</button>
                </Link>
                <Link to={"vaata-postitus/" + element.id}>
                    <button>Kuva postitust</button>
                </Link>
            </div>
        )}
    </div> );
}

export default Avaleht;