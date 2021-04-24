/* eslint-disable react/prop-types */
import React from 'react';

const EndGame = ({allPlayersPoints}) => {
 
    const results = allPlayersPoints.map((item, i) => <div>player {i+1} {item}</div>)
    return results
}

export default EndGame