const redux = require("redux");

// Reducer Function that is reponsible for execute the store according to the ACTION
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// REDUX Store
const store = redux.createStore(counterReducer);

// Subsription Code
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// We subscribe to the REDUX STORE
store.subscribe(counterSubscriber);

// We DISPATCHED an ACTION here
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
