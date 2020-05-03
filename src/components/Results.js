import React from "react";

const Results = () => {
  const playAgain = () => {
    alert("User wants to play again");
  };

  return (
    <div className="Results">
      <div className="content">
        <p>
          7 answers out of 10 <br /> were correct
        </p>
        <button onClick={() => playAgain()}>Play Again</button>
      </div>
    </div>
  );
};

export default Results;
