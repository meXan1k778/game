/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Speedometer from './Speedometer';
import ClosedBar from './ClosedBar';
import EndGame from './EndGame';
import spd from '../img/Spd-scale.jpg';

import Cards from './CardsData'
import './gamebar.scss';

const GameBar = ({maxScore, players}) =>{

    const [currentPlayer, setCurrentPLayer] = useState(1)
    const [allPlayersPoints, setAllPlayers] = useState([])
    const [isOpen, changeStatus] = useState(true)
    const [randomNum, setRandom] = useState(0)
    const [helpText, setHelpText] = useState('')
    const [answerText, setAnswer] = useState(0)
    const [result, setResult] = useState(0)
    const [isEndRound, setEndRound] = useState(false)
    const [isGameOver, setGameOver] = useState(false)
    const [currentCard, setCurrentCard] = useState(Cards[Math.floor(Math.random() * Cards.length)])
    const [allCards, removeCard] = useState(Cards)

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
        setRandom(Math.floor(Math.random() * 180 + 1))
        initialScore(players)
    }, [])

    const compareFn = (answer) => {
        const range = Math.abs(answer - randomNum)
        if(range <= 2){
            return 4
        }
        if(range <=4){
            return 3
        }
        if(range <=6){
            return 2
        } return 0
    }

    const nextStep = () =>{
        changeStatus(!isOpen)
        const points = compareFn(answerText)
        setResult(points)
        setAllPlayers(allPlayersPoints.map((item, i) => i === currentPlayer - 1 ? item + points : item))
        setEndRound(!isEndRound)
    }

    const newRound = () =>{
        
        setAnswer(0)
        const NewList = allCards.filter(item => item !== currentCard )
        removeCard(NewList)
        if(NewList.length === 0) {
            setGameOver(true)
        }
        setCurrentCard(NewList[Math.floor(Math.random() * NewList.length)])
        if(allPlayersPoints[currentPlayer - 1] >= maxScore) setGameOver(!isGameOver)
        if(currentPlayer + 1 <= players){
            setCurrentPLayer(currentPlayer + 1)
        } else setCurrentPLayer(1)
        setRandom(Math.floor(Math.random() * 180 + 1))
        setEndRound(!isEndRound)
    }

    const element = isOpen ? <SpeedBar rnd={randomNum}><Speedometer rnd={randomNum} result={result} answerText={answerText}/></SpeedBar> : <ClosedBar helpText={helpText} setAnswerText={setAnswerText}/>

    let prompt = <button />
    if (!isOpen){
        prompt =  <button type="button" onClick={nextStep}>Confirm</button>
    }
    else if(!isEndRound){
        prompt = <button type="button" onClick={() => changeStatus(!isOpen)}>OK</button>
    }
    else {
        prompt = <button type="button" onClick={newRound}>next player</button>
    }

    return isGameOver ? <EndGame allPlayersPoints={allPlayersPoints}/> : <div className="desc-game">
        <div className="head main">
            <h4>players count: {players}</h4>
            {element}
            <h4>max Score: {maxScore}</h4></div>
        <div className="body main">
            <div className="player-data">
                <span>current player: {currentPlayer}</span>
                <span>score: {allPlayersPoints[currentPlayer-1]}</span>
            </div>
            <div className="card">{currentCard}</div>
            <div className="prompt">
               {isOpen && !isEndRound && <input type="text" onChange={(e) => setHelpText(e.target.value)} value={helpText}/>}
                {prompt}
            </div>
            
        </div>
    </div>
}

const SpeedBar = styled.div`
    background-color: red;
    box-sizing: border-box;
    background: url(${spd}) no-repeat 50% 50%;
    width: 70%;
    height: 60vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-size: contain;
    animation: spd 5s linear 1 forwards;
  
  @keyframes spd {
    0% {
      transform: rotate(0deg);
    }

    100% {
        transform: rotate(${prop => prop.rnd}deg);
      }
  }
`

export default GameBar