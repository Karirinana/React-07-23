import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


//navigeerimiseks (urli vahetuseks ja erineva sisu kuvamiseks
//1. npm react-router-dom
//2.<App /> umber <BrowserRouter>
//3. App.js failis urli ja sisu seoste loomine. 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

