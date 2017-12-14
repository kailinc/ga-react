class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }

    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  componentDidMount() {
    let counter = localStorage.getItem('counter')
    counter = parseInt(counter, 10)
    this.setState({
      counter
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      localStorage.setItem('counter', this.state.counter)
    }
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter - 1
      }
    })
  }

  handleReset() {
    this.setState({
      counter: 0
    })
  }

  render() {
    return(
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={ this.handleAddOne }>Add</button>
        <button onClick={ this.handleMinusOne }>Minus</button>
        <button onClick={ this.handleReset }>Reset</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('app')
)
