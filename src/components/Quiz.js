// what's name for spinner?

import React, { useState, useEffect } from "react";

import categoriesJSON from "../data/categories.json";

const Quiz = () => {
  const [categories, setCategories] = useState([]);

  const selectTopic = (e) => {
    alert(`Selected topic {${e.target.innerHTML}}`);
  };

  useEffect(() => {
    (async function () {
      const data = categoriesJSON;

      while (data.length > 7) {
        data.splice(Math.round(Math.random() * data.length), 1);
      }

      setCategories(data);
    })();
  }, []);

  return (
    <div className="Quiz">
      <div className="container">
        <h1>Quiz</h1>
        <h2>Choose topic:</h2>
        {categories.length ? (
          <div className="topics">
            {categories.map(({ id, name }) => (
              <button key={id} onClick={(e) => selectTopic(e)}>
                {name}
              </button>
            ))}
          </div>
        ) : (
          <h2>
            <div className="spinner">Loading...</div>
          </h2>
        )}
      </div>
    </div>
  );
};

export default Quiz;
