'use strict';

// JSX - JavaScript XML
var template = React.createElement(
  'p',
  null,
  'This is pretty dope'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
