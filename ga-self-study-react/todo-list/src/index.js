import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './App';
import registerServiceWorker from './registerServiceWorker';

let toDos = ["buy ice cream", "eat ice cream", "Go to the Gym"]
ReactDOM.render(
  <MyList theList={toDos}/>,
   document.getElementById('root'));

registerServiceWorker();
