import React from 'react';
import './Question.scss'
const Question = (props) => {
    const yesSelected = props.answer === true;
    const noSelected = props.answer === false;
    return (
        <div className='question-container'>
            <div className='question-text-wrapper'>
                <h3 className='question-number'>{props.number}</h3>
                <h3 className='question-text'>{props.children}</h3>
            </div>
            <div className='question-answers'>
                <button className={yesSelected ? 'question-selected' : '' }>Yes</button>
                <button className={noSelected ? 'question-selected' : ''}>No</button>
            </div>
        </div>
    )
}

export default Question;
