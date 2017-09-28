import React, { Component } from 'react';
import './index.css';

class Square extends Component {
  render() {
    return(
      <button className="grid" onClick={this.props.onClick}>{this.props.value}</button>
    )
  }
}

export default Square;
