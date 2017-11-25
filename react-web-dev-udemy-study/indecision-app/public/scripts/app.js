'use strict';

// JSX - JavaScript XML
var tempalte = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'For people who dont know what to do with their life'
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Kailin Chen'
  ),
  React.createElement(
    'p',
    null,
    'Age: 22'
  ),
  React.createElement(
    'p',
    null,
    'Location: Boston, MA'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
