import logo from "./logo.svg";
import {useState} from "react"
import Game from "./Game";
import Score from "./Score";
import "./App.css";

const App = () => {

  const [numQuestionsAnswered, setNumQuestionsAnswered] = useState(0);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0)

  const handleAnswerChosen = (isCorrectAnswer) => {
    setNumQuestionsAnswered(numQuestionsAnswered + 1)
    if(isCorrectAnswer){
      setNumCorrectAnswers(numCorrectAnswers+1)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="game">
       <h2>Mental Math</h2>
      <Game handleAnswerChosen={handleAnswerChosen} />
      <Score numCorrectAnswers={numCorrectAnswers} numQuestionsAnswered={numQuestionsAnswered}/>
      </div>
    </div>
  );
};

export default App;
