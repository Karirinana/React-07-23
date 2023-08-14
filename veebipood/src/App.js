//import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';
import { useState } from 'react';
import MitteLeitud from './pages/MitteLeitud';
import Hinnad from './pages/Hinnad';
import Tooted from './pages/Tooted';
import Poed from './pages/Poed';
import HaldaTooted from './pages/HaldaTooted';
import MuudaToode from './pages/MuudaToode';
import YksToode from './pages/YksToode';
import YksikPood from './pages/YksikPood';

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

      <Link to="/hinnad">
        <button className="nupp">Hinnad</button>
      </Link>

      <Link to="/poed">
        <button className="nupp">Poed</button>
      </Link>

      <Link to="/tooted">
        <button className="nupp">Tooted</button>
      </Link>

      <Link to="/halda">
        <button className="nupp">Halda tooted</button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht /> }></Route>
        <Route path="lisa-toode" element={ <LisaToode /> }></Route>
        <Route path="ostukorv" element={ <Ostukorv /> }></Route>
        <Route path="settings" element={ <Seaded /> }></Route>
        <Route path="hinnad" element={ <Hinnad /> }></Route>
        <Route path="Poed" element={ <Poed /> }></Route>
        <Route path="YksPood/:index" element={ <YksikPood /> }></Route>
        <Route path="tooted" element={ <Tooted /> }></Route>
        <Route path="halda" element={ <HaldaTooted /> }></Route>
        <Route path="muuda/:index" element={ <MuudaToode /> }></Route>
        <Route path="toode/:nimi" element={ <YksToode /> }></Route>
        <Route path="*" element={ <MitteLeitud /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
