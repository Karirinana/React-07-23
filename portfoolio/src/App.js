import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar  from './components/NavBar';
import Banner  from './components/Banner';
import About from './pages/About';
import Hobbies from './pages/Hobbies';
import Projects from './pages/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Hobbies />
      <About />
      <Contact />
      <Routes>
        <Route path='about' element={ <About /> } />
        <Route path='hobbies' element={ <Hobbies /> } />
        <Route path='projects' element={ <Projects />} />
      </Routes>
    </div>
  );
}

export default App;
