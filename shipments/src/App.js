import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import ShipmentDetails from "./pages/ShipmentDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" exact element={<Navigate to="/shipment-details"/>}></Route>
        <Route path="shipment-details" exact element={ <ShipmentDetails/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
