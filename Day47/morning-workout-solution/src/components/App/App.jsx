import React, { Component } from 'react';
import Question from '../Question/Question.jsx';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            questions: [
                {
                    text: "Albert Einstein failed every subject in school that wasn't math or physics.",
                    answer: undefined,
                },
                {
                    text: "Franklin Roosevelt's face can be seen on Mount Rushmore",
                    answer: undefined,
                },
                {
                    text: "Tea has more caffeine than soda and coffee",
                    answer: undefined,
                },
            ]
        }
    }

    handleAnswerClick = (e) => {
        console.log("I'm trying to answer the question!")
    }

    render() {
        const questionComponents = this.state.questions.map((question, index) => {
            return (
                <Question number={index + 1} answer={question.answer}>
                    {question.text}
                </Question>
            )
        })
        return (
            <>
                {questionComponents}
            </>
        )
    }
}

export default App;
