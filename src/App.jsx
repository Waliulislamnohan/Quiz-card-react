import React, { useState } from "react";
import "./App.css";
import Menu from "./components/menu"
import Quiz from "./components/Quiz"
import EndScreen from "./components/EndScreeen"
import {GameStateContext} from './helpers/Contexts'

function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName,setUserName] = useState("");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo.svg" className="App-logo" alt="logo" />
          <h1>QUIZ card</h1>
          <GameStateContext.Provider value={{          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,}}>
              {gameState === 'menu' && <Menu/>}
              {gameState === 'playing' && <Quiz/>}
              {gameState === "finished" && <EndScreen />}
          </GameStateContext.Provider>
          
      </header>
    </div>
  );
}

export default App;
