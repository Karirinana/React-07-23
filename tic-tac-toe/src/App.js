import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import Names from "./Pages/Names";
import Scoreboard from "./Pages/ScoreBoard";
import Game from "./Pages/Game";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" exact element={ <Navigate to="/names"/> }/>
        <Route path="names" exact element={ <Names /> }/>
        <Route path="game" exact element={ <Game /> }/>
        <Route path="scoreboard" exact element={ <Scoreboard /> }/>
      </Routes>
    </div>
  );
}

export default App;
