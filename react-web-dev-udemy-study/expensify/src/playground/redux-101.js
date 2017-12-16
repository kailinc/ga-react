import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
        return state;
  }
});
console.log('1. ', store.getState());

store.dispatch({
  type: 'INCREMENT'
});
console.log('2.', store.getState());

store.dispatch({
  type: 'DECREMENT'
});

// returns the current state obj
console.log('3.', store.getState());

store.dispatch({
  type: 'RESET'
});
console.log('4.', store.getState());
