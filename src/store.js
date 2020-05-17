import { createStore, action } from "easy-peasy";

const store = createStore({
  responseTime: 20,
  leftTime: 20,
  add: action((state, payload) => {
    state.items.push(payload);
  }),
  updateLeftTime: action((state, payload) => {
    state.leftTime = payload;
  }),
});

export default store;
