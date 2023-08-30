import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function KasutajaPostitused() {
    const { kasutajaId } = useParams();
    const [postitused, uuendaPostitused] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                uuendaPostitused(data.filter(element => element.userId === Number(kasutajaId)));
            });
    }, [kasutajaId]); 

    return (
        <div>
            {postitused.map(element => (
                <div key={element.id}>
                    <div><i>{element.userId}</i></div>
                    <div><u>{element.id}</u></div>
                    <div><b>{element.title}</b></div>
                    <div>{element.body}</div>
                </div>
            ))}
        </div>
    );
}

export default KasutajaPostitused;
