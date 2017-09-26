import React, { Component } from 'react';
import Board from './Board';
import Message from './Message';
import Aside from './Aside';

let players = [ 'X', 'O']

class Game extends Component {
  constructor() {
    super()
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      turn: 0,
      xWin: 0,
      yWin: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  // Over Archeiving Function to handle operations related with clicking on game board
  // updatesboard, check wins/loses/ties
  handleClick(i) {
    const spot = this.state.board[i]
    if (!spot) {
      let newBoard = updateBoard(this.state.board, i, this.state.turn)
      this.setState({
        board: newBoard,
        turn: this.state.turn + 1
      })
    }
  }

  render() {
    return(
      <div>
        <div>
        </div>
          <Aside />
        <div>
            <Message />
            <Board board={this.state.board} onMarkSpot={this.handleClick}/>
        </div>
        <div>
          <Aside />
        </div>

      </div>
    )
  }
}

// function to updateBoard with a nifty trick
const updateBoard = function (board, spot, turn) {
  board[spot] = players[turn % 2]
  return board
}

export default Game;