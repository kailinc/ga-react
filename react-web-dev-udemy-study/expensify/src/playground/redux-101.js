import { createStore } from 'redux';

const store = createStore((state = { count: 0 }) => {
  return state;
});

// returns the current state obj
console.log(store.getState());
