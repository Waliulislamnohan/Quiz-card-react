import React from 'react';
import "./menu.css";
import {useContext} from "react";
import { GameStateContext } from '../helpers/Contexts';

function Menu(){
    const{ gameState , setGameState, userName, setUserName} = useContext(GameStateContext)
    return(

        <div id='body'>
        
            <h2>Menu</h2>
            <p>Enter your Name</p>
            <div className="send">
             <input onChange={(event)=>{
                setUserName(event.target.value);
             }} type="text" placeholder='write your name' />
             <button onClick={() => {
                setGameState("playing");
             }}>Start Quiz</button>
            </div>
           

        </div>
    )
}


export default Menu;