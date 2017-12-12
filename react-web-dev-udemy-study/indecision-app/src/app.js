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

const getOptions = () => {
  return app.options.map((option, index) => <li key={ index }>{ option }</li>)
}

const onMakeDecision = () => {
  const ranNum = Math.floor(Math.random() * app.options.length)
  const result = app.options[ranNum]
  alert(result);
}

const renderAgain = () => {
  const template = (
    <div>
      <h1>{ app.title }</h1>
      { app.subTitle && <p>{ app.subTitle }</p> }
      <p>{ app.options.length > 0 ? 'Here are your options' : 'You have no options' }</p>
      <ol>
        { getOptions() }
      </ol>
      <button disabled={ app.options.length === 0 } onClick={ onMakeDecision }>What Should I Do?</button>
      <button disabled={ app.options.length === 0 } onClick={ onRemoveAll }>Remove All</button>
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
