import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from '../../kodutoo1/src/pages/Avaleht';
import Kontakt from '../../kodutoo1/src/pages/Kontakt';
import Meist from '../../kodutoo1/src/pages/Meist';
import Seaded from '../../kodutoo1/src/pages/Seaded';
import Loader from '../../kodutoo1/src/pages/Loader';
import Leht from '../../kodutoo1/src/pages/Leht';
import Books from './pages/Books';
import { useRef, useState } from 'react';


function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState ("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef(); 

  const logiSisse = () => {
    if (paroolRef.current.value === "123"){
      muudaSisselogitud("jah");
      muudaSonum(kasutajaNimiRef.current.value + ", Oled sisselogitud");
    } else {
      muudaSonum("Vale parool");
    }
  }


  return (
    <div className="App">
      <div>{sonum}</div>
      { sisselogitud === "ei" && <div>
        <label>Kasutajanimi</label> <br />
        <input ref={kasutajaNimiRef} type="text" /> <br />
        <label>Parool</label> <br />
        <input ref={paroolRef} type="password" /> <br />
      </div>}

      { sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button>}
      { sisselogitud === "jah" && <button onClick={() => muudaSisselogitud("ei")}>Logi välja</button>}
    
      <Link to="/">
        <button>Avaleht</button>
      </Link>
      <Link to="/Meist">
        <button>Meist</button>
      </Link>
      <Link to="/Kontakt">
        <button>Kontakt</button>
      </Link>
           <Link to="/Seaded">
        <button>Seaded</button>
      </Link>
       <Link to="/Books">
        <button>Books</button>
      </Link>
      <Routes>
        <Route path="" exact element={ <Avaleht /> }></Route>
        <Route path="kontakt" exact element={ <Kontakt /> }></Route>
        <Route path="meist" exact element={ <Meist /> }></Route>
        <Route path="seaded" exact element={ <Seaded /> }></Route>
        <Route path="loader" exact element={ <Loader /> }></Route>
        <Route path="leht" exact element={ <Leht /> }></Route>
        <Route path="books" exact element={ <Books /> }></Route>
      </Routes>


    </div>
  );
}

export default App;
