import React from 'react';

const ClosedBar = ({helpText, setAnswerText}) => {
    return <div className="speedometer">
        {helpText}
        <input type="text" onChange={(e) => setAnswerText(e.target.value)}/>
        </div>
}

export default ClosedBar