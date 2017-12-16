import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    404 This page does not exist
    <Link to="/">Go Back Home</Link>
  </div>
)

export default NotFoundPage;
