import React, { useState, useEffect } from "react";

import categoriesJSON from "../../data/categories.json";

import { useHistory } from "react-router-dom";

const Quiz = () => {
  const [categories, setCategories] = useState([]);
  const history = useHistory();

  const selectTopic = (category) =>
    history.push({
      pathname: "/game",
      state: { category },
    });

  useEffect(() => {
    const data = [];

    while (data.length < 5) {
      let random = Math.floor(Math.random() * categoriesJSON.length);
      data.push(categoriesJSON.splice(random, 1)[0]);
    }

    setCategories(data);
  }, []);

  const Categories = categories.map((category) => (
    <button key={category} onClick={(e) => selectTopic(category)}>
      {category}
    </button>
  ));

  return (
    <div className="Quiz">
      <div className="container">
        <h1>Quiz</h1>
        <h2>Choose topic:</h2>

        <div className="topics">{Categories}</div>
      </div>
    </div>
  );
};

export default Quiz;
