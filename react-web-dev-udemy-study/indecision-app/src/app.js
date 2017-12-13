class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: [],
      message: ''
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleDeleteOptions() {
    this.setState({
      options: []
    })
  }

  handlePick() {
    let ranNum = Math.floor(Math.random() * this.state.options.length)
    let ranOption = this.state.options[ranNum]
    console.log('handlePick: you should ', ranOption)
  }

  handleAddOption(option) {
    if (!option) {
      this.setState({
        message: 'Please enter an option.'
      })
    } else if (this.state.options.indexOf(option) > -1) {
      this.setState({
        message: 'This option already exists.'
      })
    } else {
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option),
          message: 'Your option has been added.'
        }
      })
    }
  }

  render() {
    const title = 'Indecision'
    const subTitle = 'Put Your Life in the hands of a computer'
    return (
      <div>
        <Header title={ title}  subTitle={ subTitle }/>
        <Action
          hasOptions={ this.state.options.length > 0 }
          handlePick={ this.handlePick }
        />
        <Options
          options={ this.state.options }
          handleDeleteOptions={ this.handleDeleteOptions }
        />
        <AddOption
          handleAddOption={ this.handleAddOption }
        />
        <p>{ this.state.message }</p>
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

  render() {
    return(
      <div>
        <button
          onClick={ this.props.handlePick }
          disabled={ !this.props.hasOptions }
        >What should I do? </button>
      </div>
    );
  }
}


class Options extends React.Component {

  render() {
    return(
      <div>
        <button onClick={ this.props.handleDeleteOptions }>Remove All Options </button>
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
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const option = e.target.elements.option.value
    // trim() is to get rid of spaces if there are only spaces
    if (option) {
      this.props.handleAddOption(option)
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
