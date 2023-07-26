import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Work from './pages/Work';
import Hobbies from './pages/Hobbies';
import Courses from './pages/Courses';

function App() {
  return (
    <div className="App">
      <img className="mainPicture" src="https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg" alt="Karinas' Profile" />
      <div className='rectangle'></div>
      <div className='navigation-pictures'>
        
        <Link className="main-link" to="work">
          <img src="https://www.webdesignerdepot.com/cdn-origin/uploads/2018/05/UX.jpg" alt="UX design logo" />
          <p>Tööde lehele</p>
        </Link>
        <Link className="main-link" to="hobbies">
          <img src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1526992650-221580-shutterstock-1044511264jpg.jpg" alt="Hobbies" />
          <p>Hobide lehele</p>
        </Link>
        <Link className="main-link" to="courses">
          <img src="https://www.adobe.com/content/dam/cc/us/en/products/photoshop/photoshop-1200x630.jpg" alt="Photoshop logo" />
          <p>Kursuste lehele</p>
        </Link>
      </div>

      <Routes>
        <Route path='work' element={ <Work /> } />
        <Route path='hobbies' element={ <Hobbies /> } />
        <Route path='courses' element={ <Courses />} />
      </Routes>
    </div>
  );
}

export default App;
