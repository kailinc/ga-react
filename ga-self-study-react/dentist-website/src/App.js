import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// importing different components
import Home from './Home';
import Procedures from './Procedures';
import Contact from './Contact';

// importing BrowserRouter from react-router
// official name of react-router is react-router-dom
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>{'  '}
              <Link to="/procedures">See Our Procedures</Link>{'  '}
              <Link to="/contact">Contact</Link>{'  '}
            </nav>
            <Route exact path="/" component={Home} />
            <Route exact path="/procedures" component={Procedures} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
