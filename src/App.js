import React from "react";
import "./scss/main.css";

import { HashRouter as Router, Route } from "react-router-dom";

import Preloader from "./components/Preloader/Preloader";
import Quiz from "./components/Quiz/Quiz";
import Game from "./components/Game/Game";
import Results from "./components/Results/Results";

const App = () => (
  <Router>
    <Route exact path="/" render={() => <Preloader />} />
    <Route path="/quiz" render={() => <Quiz />} />
    <Route path="/game" render={() => <Game />} />
    <Route path="/results" render={() => <Results />} />
  </Router>
);

export default App;
