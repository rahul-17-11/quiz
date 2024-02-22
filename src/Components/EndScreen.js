import React from "react";
import { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBank";

function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const reset = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="last container my-2 py-2">
      <h2 className="text-center">We Appriciate For Your Effort And Time </h2>
      <h3 className="d-flex justify-content-lg-center">
        You Answered {score} correct out of {Questions.length}
      </h3>
      <div className="d-flex justify-content-lg-center">
        <button
          className="submit btn btn-lg btn-outline-primary"
          onClick={reset}
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
}

export default EndScreen;
