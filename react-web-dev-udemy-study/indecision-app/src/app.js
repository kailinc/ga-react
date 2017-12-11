// JSX - JavaScript XML
console.log('app.js is running')

let app = {
  title: 'Indecision App',
  subTitle: 'App Fit for a King',
  options: ['One', 'Two']
}

const template = (
  <div>
    <h1>{ app.title }</h1>
    { app.subTitle && <p>{ app.subTitle }</p> }
    <p>{ app.options.length > 0 ? 'Here are your options' : 'You have no options' }</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
)

let user = {
  name: 'Andrew',
  age: 18,
  location: 'Boston, MA'
};

function getLocation (location) {
  return location ? <p>Location: { location }</p> : undefined;
}

const templateTwo = (
  <div>
    <h1>{ user.name ? user.name : 'Anonymous' }</h1>
    { user.age >= 18 && <p>Age: { user.age }</p> }
    { getLocation(user.location) }
  </div>
)

const appRoot = document.getElementById('app');

ReactDOM.render(
  template,
  appRoot
);
