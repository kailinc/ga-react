'use strict';

// JSX - JavaScript XML
var app = {
  title: 'Visibility Toggle',
  count: 0
};

var addCount = function addCount() {
  app.count++;
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: addCount },
      app.count % 2 === 0 ? 'Show Details' : 'Hide Details'
    ),
    app.count % 2 === 1 && React.createElement(
      'p',
      null,
      'Hey. These are some details you can now see!'
    )
  );

  var appRoot = document.getElementById('app');
  ReactDOM.render(template, appRoot);
};

render();
