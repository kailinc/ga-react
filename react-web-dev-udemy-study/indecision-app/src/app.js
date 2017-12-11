// JSX - JavaScript XML
console.log('app.js is running')

var app = {
  title: 'Indecision App',
  subTitle: 'App Fit for a King'
}
var template = (
  <div>
    <h1>{ app.title }</h1>
    <p>{ app.subTitle }</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
)

var user = {
  name: 'Andrew',
  age: 29,
  location: 'Boston, MA'
};

var templateTwo = (
  <div>
    <h1>{ user.name }</h1>
    <p>Age: { user.age }</p>
    <p>Location: { user.location }</p>
  </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(
  template,
  appRoot
);
