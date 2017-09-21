// setting up react in this app
import React from 'react';
import ReactDOM from 'react-dom';

// getting the styling
import './index.css';

// importing different components needed
import Post from './App';
import Homepage from './Homepage';
import About from './About';
import Movie from './Movie';

import registerServiceWorker from './registerServiceWorker';

// setting up react router in this file
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <nav>
        <Link to="/">Go To Home Page</Link> {' '}
        <Link to="/post">Go To Latest Post</Link> {' '}
        <Link to="/about">About</Link> {' '}
        <Link to="/favorite_movie">Movie</Link> {' '}
      </nav>
        <Route exact path="/post" component={Post}/>,
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/favorite_movie" component={Movie}/>
    </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
