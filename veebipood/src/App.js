//import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';

function App() {
  return (
    <div className="App">
      <Link to="avaleht">
        <img className= "pilt" src="https://i0.wp.com/eestinen.fi/wp-content/uploads/2019/01/koer.jpg?w=1024&ssl=1" alt="Koer" />
      </Link>

      <Link to="lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="ostukorv">
        <button className="nupp">Ostukorvi</button>
      </Link>

      <Routes>
        <Route path="avaleht" element={ <Avaleht /> }></Route>
        <Route path="lisa-toode" element={ <LisaToode /> }></Route>
        <Route path="ostukorv" element={ <Ostukorv /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
