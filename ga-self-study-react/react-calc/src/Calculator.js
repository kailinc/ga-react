import React, { Component } from 'react';
import './App.css'

class Calculator extends Component {
  constructor (props) {
    super()
    // initializes the answer to be 0
    this.state = {
      answer: 0
    }
  }

  // function to add inputs
  add(e) {
    e.preventDefault()
    // we can use refs like id to get the value of each input
    // if there is a value on an input use it else use 0
    const sum = (parseInt(this.refs.val1.value) || 0) + (parseInt(this.refs.val2.value) || 0)
    this.setState({
      answer: sum
    })
  }

  render() {
    return(
      <div className="container">
        <h1>Add with React!</h1>
        <div className="add">
          <input type="number" ref="val1" onChange={ (e) => this.add(e)}/>
          <span>+</span>
          <input type="number" ref="val2" onChange={ (e) => this.add(e)}/>
          <span>=</span>
          <h3>{this.state.answer}</h3>
        </div>
      </div>
    )
  }
}

export default Calculator
