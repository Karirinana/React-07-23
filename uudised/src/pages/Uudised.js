import React from 'react';

function Uudised() {
    const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
    return ( <div>
        <div>See on uudiste leht, nähtav localhost:3000/uudised aadressil</div>
        {uudised.length === 0 && <div>Ühtegi uudist hetkel pole! Lisame õige pea.</div>}
        <div>{uudised.map(uudis => <div>{uudis}</div>)}</div>
    </div> );
}

export default Uudised;