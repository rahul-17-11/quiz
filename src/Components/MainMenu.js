import React from "react";
import { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";

function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContext);

  return (
    <>
      <div className="menu container my-2 py-2">
        <h2 className="text-center">Please Click Below To Start Quiz</h2>
        <div className="d-flex justify-content-lg-center">
          <button
            className="submit btn btn-lg btn-outline-primary"
            onClick={() => {
              setGameState("quiz");
            }}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </>
  );
}

export default MainMenu;
