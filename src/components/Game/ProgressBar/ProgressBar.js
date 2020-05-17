import React from "react";

const ProgressBar = ({ currentQuestion, questions }) => (
  <div className="Progress-bar">
    <div
      className="bar"
      style={{ height: `${currentQuestion * (100 / questions.length)}%` }}
    ></div>
    <div className="text">{(100 / questions.length) * currentQuestion}%</div>
  </div>
);

export default ProgressBar;
