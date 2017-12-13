class IndecisionApp extends React.Component {

  render() {
    const title = 'Indecision'
    const subTitle = 'Put Your Life in the hands of a computer'
    const options = ['thing One', 'thing Two', 'thing Three']
    return (
      <div>
        <Header title={ title}  subTitle={ subTitle }/>
        <Action />
        <Options options={ options }/>
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {

  render() {
    return(
      <div>
        <h1>{ this.props.title }</h1>
        <h2>{ this.props.subTitle }</h2>
      </div>
    )
  }
}

class Action extends React.Component {

  handlePick() {
    alert('handlePick')
  }

  render() {
    return(
      <div>
        <button onClick={ this.handlePick }>What should I do? </button>
      </div>
    );
  }
}


class Options extends React.Component {

  constructor(props) {
    // ensure values still get set
    super(props);

    // to keep this in context
    this.handleRemoveAll = this.handleRemoveAll.bind(this)
  }

  handleRemoveAll() {
    console.log(this.props.options)
  }

  render() {
    return(
      <div>
        <button onClick={ this.handleRemoveAll }>Remove All Options </button>
        { this.props.options.map((cur, index) => <Option stuff={ index } value={ cur }/>) }
      </div>
    )
  }
}

class Option extends React.Component {

  render() {
    return(
      <div>
        <p key={ this.props.stuff }>{ this.props.value }</p>
      </div>
    )
  }
}

class AddOption extends React.Component {

  handleSubmit(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim();
    // trim() is to get rid of spaces if there are only spaces
    if (option) {
      console.log('handleSubmit: this is option ', option)
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(
  <IndecisionApp />,
  document.getElementById('app')
)
