import React from "react";

const ProgressBar = ({ progress }) => {
  const circleRadius = 100;
  const circleRadiusCircumference = circleRadius * 2 * Math.PI;

  return (
    <div className="box">
      <svg height="250" width="250">
        <circle
          cx="125"
          cy="125"
          r={circleRadius}
          style={{
            strokeDasharray: circleRadiusCircumference,
            strokeDashoffset:
              circleRadiusCircumference * (1 - (progress - 0.01) / 100),
          }}
        ></circle>
      </svg>
      <div className="text" style={{ fontSize: `${24 + progress / 2}px` }}>
        {progress}
        <span>%</span>
        {progress === 100 && (
          <p style={{ fontSize: "24px", textAlign: "center" }}>Ready</p>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
