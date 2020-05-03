import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function addPercent() {
      setProgress(progress + 1);
    }
    if (progress < 100) {
      let timer = setInterval(addPercent, 40);
      return () => clearInterval(timer);
    }
  }, [progress]);

  setTimeout(() => {
    setShowPreloader(false);
  }, 5500);

  if (showPreloader && process.env.NODE_ENV !== "development") {
    return (
      <div className="Preloader">
        <div className="content">
          <ProgressBar progress={progress} />
        </div>
      </div>
    );
  } else {
    return "";
  }
};

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

export default Preloader;
