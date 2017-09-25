import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  render() {
    return(
      <div>
        <h1>This is Board</h1>
        <div>
          <Square/>
          <Square/>
        </div>
      </div>
    )
  }
}

export default Board
