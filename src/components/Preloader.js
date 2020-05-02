import React, { useState } from "react";

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  setTimeout(() => {
    setShowPreloader(false);
  }, 5000);

  if (showPreloader && process.env.NODE_ENV !== "development") {
    return (
      <div className="Preloader">
        <div className="content">Content</div>
      </div>
    );
  } else {
    return "";
  }
};

export default Preloader;
