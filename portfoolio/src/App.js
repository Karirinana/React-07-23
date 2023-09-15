import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar  from './components/NavBar';
import Banner  from './components/Banner';
import Work from './pages/Work';
import Hobbies from './pages/Hobbies';
import Courses from './pages/Courses';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Routes>
        <Route path='work' element={ <Work /> } />
        <Route path='hobbies' element={ <Hobbies /> } />
        <Route path='courses' element={ <Courses />} />
      </Routes>
    </div>
  );
}

export default App;
