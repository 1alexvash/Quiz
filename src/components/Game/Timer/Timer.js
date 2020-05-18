import React from "react";

import timerImg from "../../../images/timer.png";

const Timer = ({ secondsLeft, gameRoundTime }) => (
  <div className="Timer">
    <div className="icon">
      <img src={timerImg} alt="timer" />
    </div>
    <div className="text">{Math.abs(secondsLeft.toFixed(1))}s</div>
    <div className="progress">
      <div
        className="bar"
        style={{ width: `${100 - ((secondsLeft - 1) / gameRoundTime) * 100}%` }}
      ></div>
    </div>
  </div>
);

export default Timer;
