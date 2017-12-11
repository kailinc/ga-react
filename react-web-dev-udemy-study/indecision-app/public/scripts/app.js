'use strict';

// JSX - JavaScript XML
console.log('app.js is running');

var app = {
  title: 'Indecision App',
  subTitle: 'App Fit for a King',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subTitle && React.createElement(
    'p',
    null,
    app.subTitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'You have no options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var count = 0;

var addCount = function addCount() {
  count = count + 1;
};

var minusCount = function minusCount() {
  count = count - 1;
};
var resetCount = function resetCount() {
  count = 0;
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addCount },
    ' +1 '
  ),
  React.createElement(
    'button',
    { onClick: minusCount },
    ' -1 '
  ),
  React.createElement(
    'button',
    { onClick: resetCount },
    'Reset'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
