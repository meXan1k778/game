/* eslint-disable react/prop-types */
import React from 'react';
import './menu.scss';

const Menu = ({setPlayersNCount, setScore, maxScore, players}) => {

const startGame = () => {
    console.log(players) 
}

    return <div className="container">
        <button type="button" onClick={startGame}>Start</button>
        <input type="text" placeholder="players number" onChange={(e) => setPlayersNCount(e.target.value)} value={players}/>
        <input type="text" placeholder="max-score" onChange={(e) => setScore(e.target.value)} value={maxScore}/>
            </div>
} 

export default Menu