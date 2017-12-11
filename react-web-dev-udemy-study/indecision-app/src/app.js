// JSX - JavaScript XML
let app = {
  title: 'Indecision App',
  subTitle: 'App Fit for a King',
  options: ['One', 'Two']
}

const onFormSubmit = (e) => {
  e.preventDefault()
  const input = e.target.elements.option.value;
  if (input) {
    app.options.push(input)
    e.target.elements.option.value = ''
    renderAgain();
  }
}

const onRemoveAll = () => {
  app.options = [];
  renderAgain();
}

const renderAgain = () => {
  const template = (
    <div>
      <h1>{ app.title }</h1>
      { app.subTitle && <p>{ app.subTitle }</p> }
      <p>{ app.options.length > 0 ? 'Here are your options' : 'You have no options' }</p>
      <p>{app.options.length}</p>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <button onClick={ onRemoveAll }>Remove All</button>
      <form onSubmit={ onFormSubmit } >
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  )

  const appRoot = document.getElementById('app');
  ReactDOM.render(template, appRoot);
}

renderAgain();
