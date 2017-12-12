// JSX - JavaScript XML
let app = {
  title: 'Visibility Toggle',
  count: 0
}

const addCount = () => {
  app.count++
  render();
}

const render = () => {
  const template = (
    <div>
      <h1>{ app.title }</h1>
      <button onClick={ addCount }>{ app.count % 2 === 0 ? 'Show Details' : 'Hide Details' }</button>
      { app.count % 2 === 1 && <p>Hey. These are some details you can now see!</p> }
    </div>
  )

  const appRoot = document.getElementById('app');
  ReactDOM.render(template, appRoot);
}

render();
