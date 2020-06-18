import React from "react";

import gooodAnswer from "../../../images/good-answer.png";
import badAnswer from "../../../images/bad-answer.png";

const Answers = ({ showAnswers, setShowAnswers, answers }) => (
  <div className={`answers ${showAnswers ? "active" : ""}`}>
    {answers.map(({ question, correctAnswer, userAnswer }) => (
      <div className="answer">
        <div className="question">{question}</div>
        <div className="correct-answer">
          Correct answer: {correctAnswer}
          <img src={gooodAnswer} alt="good answer" />
        </div>
        {correctAnswer === userAnswer || (
          <div className="user-answer">
            Your answer: {userAnswer}
            <img src={badAnswer} alt="bad answer" />
          </div>
        )}
      </div>
    ))}
    <button className="hide-answers" onClick={() => setShowAnswers(false)}>
      Hide Answers
    </button>
  </div>
);

export default Answers;
