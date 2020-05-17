// what's name for spinner?

import React, { useState, useEffect } from "react";

import categoriesJSON from "../data/categories.json";

const Quiz = () => {
  const [categories, setCategories] = useState([]);

  const selectTopic = (e) => {
    alert(`Selected topic {${e.target.innerHTML}}`);
  };

  useEffect(() => {
    const data = [];

    while (data.length < 7) {
      let random = Math.round(Math.random() * categoriesJSON.length);

      data.push(categoriesJSON.splice(random, 1)[0]);
    }

    setCategories(data);
  }, []);

  return (
    <div className="Quiz">
      <div className="container">
        <h1>Quiz</h1>
        <h2>Choose topic:</h2>

        <div className="topics">
          {categories.map(({ id, name }) => (
            <button key={id} onClick={(e) => selectTopic(e)}>
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
