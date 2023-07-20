import React, { useState } from "react";
import "./App.css";
import Menu from "./components/menu"
import {GameStateContext} from './helpers/Contexts'

function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName,setUserName] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo.svg" className="App-logo" alt="logo" />
          <h1>QUIZ card</h1>
          <GameStateContext.Provider value={{gameState, setGameState, userName,setUserName}}>
              {gameState === 'menu' && <Menu/>}
          </GameStateContext.Provider>
          
      </header>
    </div>
  );
}

export default App;
