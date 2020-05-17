// https://opentdb.com/api_config.php
// what's name for spinner?

import React, { useState, useEffect } from "react";
import axios from "axios";

const Quiz = () => {
  const [categories, setCategories] = useState([]);

  const selectTopic = (e) => {
    alert(`Selected topic {${e.target.innerHTML}}`);
  };

  useEffect(() => {
    (async function () {
      const link = "https://opentdb.com/api_category.php";
      const categories = await axios.get(link);
      console.log("waiting");
      const data = categories.data.trivia_categories;

      while (data.length > 7) {
        data.splice(Math.round(Math.random() * data.length), 1);
      }
      console.log(categories);
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
