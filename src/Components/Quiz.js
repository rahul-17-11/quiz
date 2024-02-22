import React from "react";
import { useContext, useState } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBank";

function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const [currQuestion, setcurrQuestion] = useState(0);
  const [optionChossen, setOptionChossen] = useState("");

  const nextQuestion = () => {
    if (Questions[currQuestion].answer === optionChossen) {
      setScore(() => score + 1);
    }

    setcurrQuestion(() => currQuestion + 1);
  };
  const submitQuiz = () => {
    if (Questions[currQuestion].answer === optionChossen) {
      setScore(() => score + 1);
    }
    setGameState("endScreen");
  };
  return (
    <div className="quiz container my-2 py-2 ">
      <div className="container">
        <h2 className="text-center">{Questions[currQuestion].prompts}</h2>
        <div>
          <button
            className="option btn btn-lg mx-1 my-1"
            onClick={() => setOptionChossen("A")}
          >
            {Questions[currQuestion].optionA}
          </button>
          <button
            className="option btn btn-lg mx-1 my-1"
            onClick={() => setOptionChossen("B")}
          >
            {Questions[currQuestion].optionB}
          </button>
          <button
            className="option btn btn-lg mx-1 my-1"
            onClick={() => setOptionChossen("C")}
          >
            {Questions[currQuestion].optionC}
          </button>
          <button
            className="option btn btn-lg mx-1 my-1"
            onClick={() => setOptionChossen("D")}
          >
            {Questions[currQuestion].optionD}
          </button>
        </div>
      </div>
      {currQuestion < Questions.length - 1 ? (
        <button
          className="btn btn-lg btn-outline-primary mx-1 my-1"
          onClick={nextQuestion}
        >
          Next Quiz
        </button>
      ) : (
        <button
          className="submit btn btn-lg btn-outline-primary mx-1 my-1"
          onClick={submitQuiz}
        >
          Submit Quiz
        </button>
      )}
    </div>
  );
}

export default Quiz;
