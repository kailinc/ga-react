// sets up react in this file
import React from 'react';

// sets up react dom with this line
import ReactDOM from 'react-dom';

// this gets Hello component which is in App.js
import Hello from './App.js';

// this is where the rendering beginds
// <Hello /> is a way to write components
// this will render at the div with the id of root

const person = {
  personName: 'Nick',
  personAge: 23,
  favorites: [
    "capybaras",
    "Tigers",
    "Dinosaurs count!"
  ]
}

ReactDOM.render(
  <Hello
  name={person.personName}
  age={person.personAge}
  animals={person.favorites}/>,
  document.getElementById('root')
)
