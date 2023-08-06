import React, { useState } from 'react'

function Numbrid() {
    const [numbers, renewNumbers] = useState([4, 23, 7, 39, 19, 0, 9, 14, 135, 888, 69]);
    const reset = () => {
        renewNumbers([4, 23, 7, 39, 19, 0, 9, 14, 135, 888, 69]);
    }
    const sorteeriSuuruseJargiKasv = () => {
        numbers.sort((a,b) => a - b);
        renewNumbers(numbers.slice());
    }
    const sorteeriSuuruseJargiKahv = () => {
        numbers.sort((a,b) => b - a);
        renewNumbers(numbers.slice());
    }
    const sorteeriEsimeseNumbriTahestikuJarjekorras = () => {
        numbers.sort((a,b) => a.toString().localeCompare(b.toString()));
        renewNumbers(numbers.slice());
    }
    const sorteeriEsimeseNumbriVastupidiTahestikuJarjekorras= () => {
        numbers.sort((a,b) => b.toString().localeCompare(a.toString()));
        renewNumbers(numbers.slice());
    }
    const filterSuurem8 = () => {
        const vastus = numbers.filter(number => number > 8 );
        renewNumbers(vastus);
    }
    const filterVaiksem10 = () => {
        const vastus = numbers.filter(number => number < 10 );
        renewNumbers(vastus);
    }
    const filterPaarisArvud = () => {
        const vastus = numbers.filter(number => number % 2 === 0);
        renewNumbers(vastus);
    }
    const filterPaaritudArvud = () => {
        const vastus = numbers.filter(number => number % 2 !== 0);
        renewNumbers(vastus);
    }
    const filterAlgab1 = () => {
        const vastus = numbers.filter(number => number.toString().startsWith(1));
        renewNumbers(vastus);
    }
    const filterSisaldab3 = () => {
        const vastus = numbers.filter(number => number.toString().includes(3));
        renewNumbers(vastus);
    }
  return (
    <div>
        <button onClick={reset}>Reset</button>
        <br />
        <button onClick={sorteeriSuuruseJargiKasv}>Sorteeri numbri suuruse järgi kasvavalt</button>
        <button onClick={sorteeriSuuruseJargiKahv}>Sorteeri numbri suuruse järgi kahanevalt</button>
        <button onClick={sorteeriEsimeseNumbriTahestikuJarjekorras}>Sorteeri esimese numbri järgi tähestiku järjekorras</button>
        <button onClick={sorteeriEsimeseNumbriVastupidiTahestikuJarjekorras}>Sorteeri numbri vastupidises järjekorras esimese numbri osas</button>
        <br />
        <button onClick={filterSuurem8}>Jäta alles suuremad kui 8</button>
        <button onClick={filterVaiksem10}>Jäta alles väiksemad kui 10</button>
        <button onClick={filterPaarisArvud}>Jäta alles paarisarvud</button>
        <button onClick={filterPaaritudArvud}>Jäta alles paaritud arvud</button>
        <button onClick={filterAlgab1}>Jäta alles numbrid mis algavad 1-ga</button>
        <button onClick={filterSisaldab3}>Jäta alles numbrid mis sisaldavad 3-e</button>
         {numbers.map(number => <div>{number}</div>)}
    </div>
  )
}

export default Numbrid