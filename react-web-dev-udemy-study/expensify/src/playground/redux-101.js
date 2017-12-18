import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
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
  type: 'INCREMENT',
  incrementBy: 5
});
console.log('2.', store.getState());

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

// returns the current state obj
console.log('3.', store.getState());

store.dispatch({
  type: 'RESET'
});
console.log('4.', store.getState());
