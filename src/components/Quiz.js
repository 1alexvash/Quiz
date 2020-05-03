import React from "react";

const Quiz = () => {
  const selectTopic = (e) => {
    alert(`Selected topic {${e.target.innerHTML}}`);
  };

  return (
    <div className="Quiz">
      <div className="container">
        <h1>Quiz</h1>
        <h2>Choose topic:</h2>
        <div className="topics">
          <button onClick={(e) => selectTopic(e)}>Science</button>
          <button onClick={(e) => selectTopic(e)}>Philosophy</button>
          <button onClick={(e) => selectTopic(e)}>Education</button>
          <button onClick={(e) => selectTopic(e)}>Celebretiees</button>
          <button onClick={(e) => selectTopic(e)}>Languages</button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
