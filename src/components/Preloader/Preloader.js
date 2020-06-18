import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import ProgressBar from "./ProgressBar/ProgressBar";

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
    return <Redirect to="/game" />;
  }
};

export default Preloader;
