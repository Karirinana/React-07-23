//import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';
import { useState } from 'react';
import MitteLeitud from './pages/MitteLeitud';

function App() {
  const [teema, uuendaTeema] = useState(localStorage.getItem("teema"));

  const uuendaTeemaHeledaks = () => {
    uuendaTeema("hele");
    localStorage.setItem("teema", "hele");
  }

  const uuendaTeemaTumedaks = () => {
    uuendaTeema("tume");
    localStorage.setItem("teema", "tume");

  }

  return (
    <div className={teema === "tume" ? "tume-leht" : "hele-leht"}>
      <Link to="/">
        <img className= "pilt" src="https://i0.wp.com/eestinen.fi/wp-content/uploads/2019/01/koer.jpg?w=1024&ssl=1" alt="Koer" />
      </Link>

      {
        teema === "tume" ?
        <button onClick={uuendaTeemaHeledaks}>Heledaks</button> :
        <button onClick={uuendaTeemaTumedaks}>Tumdedaks</button>
      }
      {/*{ teema === "tume" && <button>Heledaks</button> }
      { teema === "hele" && <button>Tumedaks</button> }*/}

      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="/ostukorv">
        <button className="nupp">Ostukorvi</button>
      </Link>

            <Link to="/settings">
        <button className="nupp">Seaded</button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht /> }></Route>
        <Route path="lisa-toode" element={ <LisaToode /> }></Route>
        <Route path="ostukorv" element={ <Ostukorv /> }></Route>
        <Route path="settings" element={ <Seaded /> }></Route>
        <Route path="*" element={ <MitteLeitud /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
