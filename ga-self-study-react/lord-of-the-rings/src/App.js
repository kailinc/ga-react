import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        < Movie title="The Fellowship of the Ring" hours="2" minutes="58"/>
        < Movie title="The Two Towers" hours="2" minutes="59"/>
        < Movie title="The Return of the King" hours="3" minutes="21"/>
      </div>
    );
  }
}

export default App;
