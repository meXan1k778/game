import React, { useState } from 'react';
import Menu from './Menu';
import GameBar from './GameBar'

const App = () => {
    const [players, setPlayers] = useState(2)
    const [maxScore, setMaxScore] = useState(10)


    const setPlayersNCount = (players) => setPlayers(players)
    
    const setScore = (score) => setMaxScore(score)

    return <>
                <Menu setPlayersNCount={setPlayersNCount} setScore={setScore} maxScore={maxScore} players={players}/>
                <GameBar players={players} maxScore={maxScore}/>
            </>
            
}

export default App