import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NamesContextProvider from "./Contexts/NamesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NamesContextProvider>
          <App />
      </NamesContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
