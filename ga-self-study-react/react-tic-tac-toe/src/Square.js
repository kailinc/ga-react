import React, { Component } from 'react';

class Square extends Component {
  constructor() {
    super()
  }


  render() {
    return(
      <button onClick={this.props.onClick}>{this.props.value}</button>
    )
  }
}

export default Square;
