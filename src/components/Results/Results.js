import React from "react";

import { useState } from "react";

import { useLocation, Redirect, Link } from "react-router-dom";

import Answers from "./Answers/Answers";

const Results = () => {
  const [showAnswers, setShowAnswers] = useState(false);
  const location = useLocation();

  let score, answers;

  if (location.state) {
    score = location.state.score;
    answers = location.state.answers;
  } else {
    return <Redirect to={"/quiz"} />;
  }

  return (
    <div className="Results">
      <Answers
        showAnswers={showAnswers}
        setShowAnswers={setShowAnswers}
        answers={answers}
      />

      <div className="content">
        <button className="show-answers" onClick={() => setShowAnswers(true)}>
          Show Answers
        </button>
        <div className="score">
          <p>
            {score} answer{score > 1 && "s"} out of 10{" "}
          </p>
          <p>{score === 1 ? "was" : "were"} correct</p>
        </div>
        <Link to={"/quiz"} className="play-again">
          Play Again
        </Link>
      </div>
    </div>
  );
};

export default Results;
