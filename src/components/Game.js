import React from "react";

const Game = () => {
  const selectAnswer = (e) => {
    console.log(e.target.innerHTML);
  };

  return (
    <div className="Game">
      <div className="container">
        <div className="question">Question</div>
        <div className="answers">
          <button onClick={(e) => selectAnswer(e)}>Answer 1</button>
          <button onClick={(e) => selectAnswer(e)}>Answer 2</button>
          <button onClick={(e) => selectAnswer(e)}>Answer 3</button>
          <button onClick={(e) => selectAnswer(e)}>Answer 4</button>
        </div>
      </div>
      <div className="progress">
        <div className="bar"></div>
        <div className="text">30%</div>
      </div>
    </div>
  );
};

export default Game;
