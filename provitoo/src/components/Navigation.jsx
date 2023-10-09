import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

function Navigation() {
  return (
    <div>
         <nav>
      <div className="navbar">
        <Link to="">
          <span className="nav-container">
            <img className="TW-logo" src="logo.svg" alt="" />
          </span>
        </Link>
        <div>
          <span className="nav-item">
            <Link to="/intro">
              <span>Nõuded</span>
            </Link>
          </span>
          <span className="nav-item">
            <Link to="/article">
             <span>Artikkel</span>
            </Link>
          </span>
          <span className="nav-item">
            <Link to="/list">
             <span>Tabel</span>
            </Link>
          </span>
          <span className="nav-item">
            <Link to="/life">
             <span>Game of life</span>
            </Link>
          </span>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navigation