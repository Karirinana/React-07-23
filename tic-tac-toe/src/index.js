import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NamesContextProvider from "./Contexts/NamesContext";
import GameHistoryContextProvider from "./Contexts/GameHistoryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GameHistoryContextProvider>
        <NamesContextProvider>
          <App />
        </NamesContextProvider>
      </GameHistoryContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
