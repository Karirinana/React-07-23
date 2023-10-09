import './App.css';
import { Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Artikkel from './pages/Artikkel';
import Game from './pages/Game';
import Nõuded from './pages/Nõuded';
import Tabel from './pages/Tabel';
import Nav from './components/Navigation';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="" exact element={ <Avaleht /> }></Route>
        <Route path="article" exact element={ <Artikkel /> }></Route>
        <Route path="life" exact element={ <Game /> }></Route>
        <Route path="intro" exact element={ <Nõuded /> }></Route>
        <Route path="list" exact element={ <Tabel /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
