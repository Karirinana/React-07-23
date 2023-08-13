import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';
import Items from './pages/Items';
import YksikTagasisideAndja from './pages/YksikTagasisideAndja';

function App() {
  return (
    <div className="App">
      <Link to="/">
        <button>Avalehele</button>
      </Link>

      <Link to="/tagasiside">
        <button>Tagasisidele lehele</button>
      </Link>

      <Link to="/andjad">
        <button>Vaata, kes tagasisidet on andnud</button>
      </Link>

      <Link to="/items">
        <button>Asjad</button>
      </Link>

      <Routes>
        <Route path="/" exact element={<div>Tere</div>}></Route>
        <Route path="/tagasiside" exact element={ <Tagasiside />}></Route>
        <Route path="/andjad" exact element={ <TagasisideAndjad />}></Route>
        <Route path="/items" exact element={ <Items />}></Route>
        <Route path="/yks-andja/:index" exact element={ <YksikTagasisideAndja />}></Route>
      </Routes>
    </div>
  );
}

export default App;
