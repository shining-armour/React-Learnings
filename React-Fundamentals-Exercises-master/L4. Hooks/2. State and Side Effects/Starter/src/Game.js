import PropTypes from "prop-types"
import { useState,useEffect } from "react"


const Game = ({handleAnswerChosen}) => {

    const [num1, setNum1] = useState(null);
    const [num2, setNum2] = useState(null);
    const [num3, setNum3] = useState(null);
    const [proposedAnswer, setProposedAnswer] = useState(null);

    // generate initial qstn when Game component is mounted
    useEffect(() => {
        console.log("enters use effect hook block")
        let newQuestion = generateNewQuestion()
        setNum1(newQuestion[0])
        setNum2(newQuestion[1])
        setNum3(newQuestion[2])
        setProposedAnswer(newQuestion[3])
    },[])

    const evaluateAnswer = (e) => {

        const correctAnswer = num1 + num2 + num3;
        
        // refresh question on screen
        const newQuestion = generateNewQuestion()
        refreshCurrentQuestion(newQuestion)

        // evaluate if answer is correct
        const isCorrectAnswer = (correctAnswer === proposedAnswer && e.target.name==="true") || (correctAnswer !== proposedAnswer && e.target.name==="false")
        handleAnswerChosen(isCorrectAnswer)

    }

    const generateNewQuestion = () => {
        const num1 = Math.floor(Math.random() * 100)
        const num2 = Math.floor(Math.random() * 100)
        const num3 = Math.floor(Math.random() * 100)
        const proposedAnswer = Math.floor(Math.random() * 3) + num1 + num2 + num3
        return [num1,num2,num3,proposedAnswer];
    }

    const refreshCurrentQuestion = (newQuestion) => {
        setNum1(newQuestion[0])
        setNum2(newQuestion[1])
        setNum3(newQuestion[2])
        setProposedAnswer(newQuestion[3])
    }

    return (<div>
    <div className="equation">
      <p className="text">{`${num1} + ${num2} + ${num3} = ${proposedAnswer}`}</p>
    </div>
    <button name="true" onClick={(e) => evaluateAnswer(e)}>True</button>
    <button name="false" onClick={(e) => evaluateAnswer(e)}>False</button>
  </div>);
}

Game.propTypes = {
    handleAnswerChosen: PropTypes.func.isRequired
}

export default Game;