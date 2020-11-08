import React from 'react';

const Speedometer = ({rnd, result, answerText}) =>{
    const elements = answerText === 0 ?
                                <div>{rnd}</div> : 
                                <><div>{rnd}</div><div>answer-text: {answerText} Your result is: {result}</div></>
    return elements
}

export default Speedometer