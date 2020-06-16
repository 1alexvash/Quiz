import React from "react";
import "./scss/main.css";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Preloader from "./components/Preloader";
import Quiz from "./components/Quiz";
import Game from "./components/Game/Game";
import Results from "./components/Results";

const App = () => {
  return (
    <Router>
      <Route exact path="/" render={() => <Preloader />} />
      <Route path="/quiz" render={() => <Quiz />} />
      <Route path="/game" render={() => <Game />} />
      <Route path="/results" render={() => <Results />} />
    </Router>
  );
};

export default App;
