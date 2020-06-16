import React from "react";

import { useLocation, Redirect, Link } from "react-router-dom";

const Results = () => {
  const location = useLocation();

  let score;

  if (location.state) {
    score = location.state.score;
  } else {
    return <Redirect to={"/quiz"} />;
  }

  return (
    <div className="Results">
      <div className="content">
        <p>
          {score} answer{score > 1 && "s"} out of 10 <br />
          {score === 1 ? "was" : "were"} correct
        </p>
        <Link to={"/quiz"} className="play-again">
          Play Again
        </Link>
      </div>
    </div>
  );
};

export default Results;
