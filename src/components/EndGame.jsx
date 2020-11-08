/* eslint-disable react/prop-types */
import React from 'react';

const EndGame = ({allPlayersPoints}) => {
 
    const results = allPlayersPoints.map((item, i) => <div>player {i+1} {item}</div>)
    return <div>endGame {results}</div>
}

export default EndGame