import React, { useState, useEffect } from "react";

import timerImg from "../../../images/timer.png";

import { useStoreState, useStoreActions } from "easy-peasy";

const Timer = ({ noAnswer }) => {
  const responseTime = useStoreState((state) => state.game.responseTime);
  const leftTime = useStoreState((state) => state.game.leftTime);

  const updateLeftTime = useStoreActions(
    (actions) => actions.game.updateLeftTime
  );

  // const responseTime = 20;
  // const [leftTime, setLeftTime] = useState(responseTime);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (leftTime > 0) {
        updateLeftTime(leftTime - 1);
      } else {
        noAnswer();
        updateLeftTime(20);
      }
    }, 1000);
    // eslint-disable-next-line
  }, [leftTime]);

  return (
    <div className="Timer">
      <div className="icon">
        <img src={timerImg} alt="timer" />
      </div>
      <div className="text">{Math.abs(leftTime.toFixed(1))}s</div>
      <div className="progress">
        <div
          className="bar"
          style={{ width: `${100 - ((leftTime - 1) / responseTime) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Timer;
