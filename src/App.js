import React from "react";
import "./scss/main.css";
import { StoreProvider, createStore, action } from "easy-peasy";

import Preloader from "./components/Preloader";
import Quiz from "./components/Quiz";
import Game from "./components/Game";
import Results from "./components/Results";

const store = createStore({
  todos: {
    items: ["Create store", "Wrap application", "Use store"],
    add: action((state, payload) => {
      state.items.push(payload);
    }),
  },
});

const App = () => {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <Preloader />
        <Quiz />
        <Game />
        <Results />
      </div>
    </StoreProvider>
  );
};

export default App;
