import React, { Component } from 'react';

class Aside extends Component {
  render() {
    return(
      <div>
        {this.props.player}: {this.props.win}
      </div>
    )
  }
}

export default Aside;
