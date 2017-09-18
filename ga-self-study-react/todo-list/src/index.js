import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './App';
import registerServiceWorker from './registerServiceWorker';

// define an array of strings
let toDos = ["buy ice cream", "eat ice cream", "Go to the Gym"]

// pass the array to MyList component as this.props.theList
ReactDOM.render(
  <MyList theList={toDos}/>,
   document.getElementById('root'));

registerServiceWorker();
