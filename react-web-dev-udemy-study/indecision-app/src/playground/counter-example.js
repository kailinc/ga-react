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

let count = 0

const addCount = () => {
  count++;
  renderCounterApp()
}

const minusCount = () => {
  count--;
  renderCounterApp()
}
const resetCount = () => {
  count = 0;
  renderCounterApp()
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: { count }</h1>
      <button onClick={ addCount }> +1 </button>
      <button onClick={ minusCount }> -1 </button>
      <button onClick={ resetCount }>Reset</button>
    </div>
  );

  ReactDOM.render(
    templateTwo,
    appRoot
  );
}

renderCounterApp()
