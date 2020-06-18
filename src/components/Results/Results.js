import React from "react";

import { useState } from "react";

import { useLocation, Redirect, Link } from "react-router-dom";

import Answers from "./Answers/Answers";

const Results = () => {
  const [showAnswers, setShowAnswers] = useState(false);
  const location = useLocation();

  let score;

  let answers = [
    {
      question: "What is the answer to equation 2 + 2",
      correctAnswer: "4",
      userAnswer: "4",
    },
    {
      question: "What is the answer to equation 2 + 2 * 2",
      correctAnswer: "6",
      userAnswer: "8",
    },
    {
      question: "What is the answer to equation 2 + 2",
      correctAnswer: "4",
      userAnswer: "4",
    },
    {
      question: "What is the answer to equation 2 + 2 * 2",
      correctAnswer: "6",
      userAnswer: "8",
    },
    {
      question: "What is the answer to equation 2 + 2",
      correctAnswer: "4",
      userAnswer: "4",
    },
    {
      question: "What is the answer to equation 2 + 2 * 2",
      correctAnswer: "6",
      userAnswer: "8",
    },
    {
      question: "What is the answer to equation 2 + 2",
      correctAnswer: "4",
      userAnswer: "4",
    },
    {
      question: "What is the answer to equation 2 + 2 * 2",
      correctAnswer: "6",
      userAnswer: "8",
    },
    {
      question: "What is the answer to equation 2 + 2",
      correctAnswer: "4",
      userAnswer: "4",
    },
    {
      question: "What is the answer to equation 2 + 2 * 2",
      correctAnswer: "6",
      userAnswer: "8",
    },
  ];

  // if (location.state) {
  //   score = location.state.score;
  // } else {
  //   return <Redirect to={"/quiz"} />;
  // }
  score = 5;

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
