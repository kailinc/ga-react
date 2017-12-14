class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: [props.options],
      message: ''
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  componentDidMount() {
    console.log('fetching data')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('saving data')
  }

  componentWillUnmount() {
    console.log('it is gone')
  }

  handleDeleteOptions() {
    this.setState({ options: [] })
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
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
        <Header />
        <Action
          hasOptions={ this.state.options.length > 0 }
          handlePick={ this.handlePick }
        />
        <Options
          options={ this.state.options }
          handleDeleteOptions={ this.handleDeleteOptions }
          handleDeleteOption={ this.handleDeleteOption }
        />
        <AddOption
          handleAddOption={ this.handleAddOption }
        />
        <p>{ this.state.message }</p>
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return(
    <div>
      <h1>{ props.title }</h1>
      { props.subTitle && <h2>{ props.subTitle }</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'Title of the App'
}

const Action = (props) => {
  return(
    <div>
      <button
        onClick={ props.handlePick }
        disabled={ !props.hasOptions }
      >What should I do? </button>
    </div>
  )
}

const Options = (props) => {
  return(
    <div>
      <button onClick={ props.handleDeleteOptions }>Remove All Options </button>
      {
        props.options.map((cur, index) => <Option key={ index } optionText={ cur } handleDeleteOption={props.handleDeleteOption}/>)
      }
    </div>
  )
}

const Option = (props) => {
  return(
    <div>
      <p key={ props.key }>{ props.optionText }</p>
      <button onClick={(e) => props.handleDeleteOption(props.optionText) }>Remove</button>
    </div>
  )
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

const User = (props) => {
  return (
    <div>
      <h1>Name: { props.name } </h1>
      <h1>Age: { props.age } </h1>
    </div>
  )
};

ReactDOM.render(
  <IndecisionApp />,
  document.getElementById('app')
)
