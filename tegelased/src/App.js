import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import LisaTegelane from './pages/LisaTegelane';
import ValitudTegelased from './pages/ValitudTegelased';

function App() {
  return (
    <div className="App">

      <Link to="/"> 
        <button>Avalehele</button>
      </Link>
      <Link to="/lisa-tegelane">
        <button>Avalehele</button>
      </Link>
      <Link to="/valitud-tegelased">
        <button>Avalehele</button>
      </Link>

      <Routes>
        <Route path='' exact element= { <Avaleht />}></Route>
        <Route path='lisa-tegelane' exact element= { <LisaTegelane /> }></Route>
        <Route path='valitud-tegelased' exact element= { <ValitudTegelased /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
