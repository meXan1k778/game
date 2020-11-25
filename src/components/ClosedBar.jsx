import React from 'react';
import styled from 'styled-components';
import IntegerStep from './Slider'
import fishImg from '../img/fish.png';

const ClosedBar = ({helpText, setAnswerText, answerText}) => {

    return <><FishRotate  answerText={answerText}>
        {helpText}
        {/* <input type="text" onChange={(e) => setAnswerText(e.target.value)}/> */}
        </FishRotate>
        <IntegerStep setAnswerText={setAnswerText}/>
        </>
}

const FishRotate = styled.div`
    background-color: red;
    box-sizing: border-box;
    background: url(${fishImg}) no-repeat 50% 50%;
    width: 70%;
    height: 60vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-size: contain;
    animation: fish 4s linear 1 forwards;
  
  @keyframes fish {
    0% {
      transform: rotate(0deg);
    }

    100% {
        transform: rotate(${prop => prop.answerText}deg);
      }
  }
`

export default ClosedBar