import React, { Component } from 'react';

class ReplayBtn extends Component {
  render() {
    return(
      <button onClick={this.props.handleClick}>Replay</button>
    )
  }
}

export default ReplayBtn;
