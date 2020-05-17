import React from "react";
import "./scss/main.css";

import { StoreProvider } from "easy-peasy";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Preloader from "./components/Preloader";
import Quiz from "./components/Quiz";
import Game from "./components/Game/Game";
import Results from "./components/Results";

import store from "./store";

const App = () => {
  return (
    <StoreProvider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Preloader />} />
          <Route path="/quiz" render={() => <Quiz />} />
          <Route path="/game" render={() => <Game />} />
          <Route path="/results" render={() => <Results />} />
        </Switch>
      </Router>
    </StoreProvider>
  );
};

export default App;
