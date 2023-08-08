import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import Avaleht from "./pages/Avaleht";
import Halda from "./pages/HaldaJooke";
import Lisa from "./pages/LisaJook";

function App() {
  return (
    <div className="App">
      <Link to="/">
        <button>Avaleht</button>
      </Link>

      <Link to="/halda">
        <button>Halda</button>
      </Link>

      <Link to="/lisa">
        <button>Lisa</button>
      </Link>
      <Routes>
        <Route path="/" exact element={ <Avaleht />}></Route>
        <Route path="/halda" exact element={ <Halda />}></Route>
        <Route path="/lisa" exact element={ <Lisa/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
