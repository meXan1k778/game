/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Speedometer from './Speedometer';
import ClosedBar from './ClosedBar';
import './gamebar.scss';

const GameBar = ({maxScore, players}) =>{

    const [currentPlayer, setCurrentPLayer] = useState(1)
    const [allPlayers, setAllPlayers] = useState([])
    const [isOpen, changeStatus] = useState(true)
    const [randomNum, setRandom] = useState(0)
    const [helpText, setHelpText] = useState('')
    const [answerText, setAnswer] = useState(0)

    const initialScore = (number) => {
        const points = []
        for(let i =0; i < number; i+=1){
            points.push(0)
        }

        setAllPlayers(points)
    }

    const setAnswerText = (text) => {
        setAnswer(text)
    }

    useEffect(() => {
        setRandom(Math.floor(Math.random() * 100 + 1))
        initialScore(players)
    }, [])

    const nextStep = () =>{
        changeStatus(!isOpen)
        console.log(answerText)
    }

const element = isOpen ? <div className="speedometer"><Speedometer rnd={randomNum}/></div> : <ClosedBar helpText={helpText} setAnswerText={setAnswerText}/>
 const prompt = isOpen ?
    <button type="button" onClick={() => changeStatus(!isOpen)}>OK</button> : 
    <button type="button" onClick={nextStep}>OK</button>

    return <div className="desc-game">
        <div className="head main">
            <h4>players count: {players}</h4>
            {element}
            <h4>maxScore: {maxScore}</h4></div>
        <div className="body main">
            <div className="player-data">
                <span>current player: {currentPlayer}</span>
                <span>score: {allPlayers[currentPlayer-1]}</span>
            </div>
            <div className="card">card</div>
            <div className="prompt">
               {isOpen && <input type="text" onChange={(e) => setHelpText(e.target.value)}/>}
                {prompt}
            </div>
            
        </div>
    </div>
}

export default GameBar