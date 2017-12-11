'use strict';

// JSX - JavaScript XML
var app = {
  title: 'Indecision App',
  subTitle: 'App Fit for a King',
  options: ['One', 'Two']
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var input = e.target.elements.option.value;
  if (input) {
    app.options.push(input);
    e.target.elements.option.value = '';
    renderAgain();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  renderAgain();
};

var getOptions = function getOptions() {
  return app.options.map(function (option, index) {
    return React.createElement(
      'li',
      { key: index },
      option
    );
  });
};

var renderAgain = function renderAgain() {
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
      getOptions()
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove All'
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  var appRoot = document.getElementById('app');
  ReactDOM.render(template, appRoot);
};

renderAgain();
