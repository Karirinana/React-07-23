import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from '../../kodutoo1/src/pages/Avaleht';
import Kontakt from '../../kodutoo1/src/pages/Kontakt';
import Meist from '../../kodutoo1/src/pages/Meist';

function App() {
  return (
    <div className="App">
      <Link to="/">
        <button>Avaleht</button>
      </Link>
      <Link to="/Meist">
        <button>Meist</button>
      </Link>
      <Link to="/Kontakt">
        <button>Kontakt</button>
      </Link>
      <Routes>
        <Route path="" exact element={ <Avaleht /> }></Route>
        <Route path="kontakt" exact element={ <Kontakt /> }></Route>
        <Route path="meist" exact element={ <Meist /> }></Route>
      </Routes>


    </div>
  );
}

export default App;
