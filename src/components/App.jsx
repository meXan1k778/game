import React, { useState } from 'react';
import Menu from './Menu';
import GameBar from './GameBar'

const App = () => {
    const [players, setPlayers] = useState(2)
    const [maxScore, setMaxScore] = useState(10)
    const [isStarted, setStart] = useState(false)


    const setPlayersNCount = (playersCount) => setPlayers(playersCount)
    
    const setScore = (score) => setMaxScore(score)

    const startGame = () => setStart(true)
    

    const game = isStarted ? 
                        <GameBar players={players} maxScore={maxScore}/> : 
                        <Menu setPlayersNCount={setPlayersNCount} setScore={setScore} maxScore={maxScore} players={players} startGame={startGame}/>
    return game
            
}

export default App