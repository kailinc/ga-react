import React, { Component } from 'react';
import Board from './Board';
import Message from './Message';
import Aside from './Aside';
import ReplayBtn from './ReplayBtn';

let players = [ 'x', 'o']

class Game extends Component {
  constructor() {
    super()
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      turn: 0,
      x: 1,
      o: 0,
      msg: 'Welcome to React T3'
    }
    this.handleClick = this.handleClick.bind(this)
    this.replay = this.replay.bind(this)
  }
  // Over Archeiving Function to handle operations related with clicking on game board
  // updatesboard, check wins/loses/ties
  handleClick(i) {
    const spot = this.state.board[i]
    // determines current user using turns
    let winner = players[this.state.turn % 2]

    // checks for empty spot
    if (!spot) {
      this.setState({
        board: updateBoard(this.state.board, i, this.state.turn),
        turn: this.state.turn + 1
      })
      if (checkWin(this.state.board,i, this.state.turn)) {
        if (winner === 'x') {
          this.setState({
            x: this.state.x + 1,
            msg: 'Player X Wins!'
          })
        } else {
          this.setState({
            o: this.state.o + 1,
            msg: 'Player O Wins!'
          })
        }
        this.setState({
          board: [null, null, null,null, null, null,null, null, null],
          turn: 0
        })
      } else {
        let message = "Player " + winner + "'s Turn."
        this.setState({
          msg: message
        })
      }
    }
  }

  // method to reset the this.state
  replay() {
    this.setState({
      board: [null, null, null,null, null, null,null, null, null],
      turn: 0,
      msg: 'New Game'
    })
  }

  render() {
    return(
      <div>
        <div>
        </div>
          <Aside win={this.state.x} player='X'/>
        <div>
            <Message msg={this.state.msg}/>
            <Board board={this.state.board} onMarkSpot={this.handleClick}/>
            <ReplayBtn handleClick={this.replay}/>
        </div>
        <div>
          <Aside win={this.state.o} player='O'/>
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

// function to check Game Status
const checkWin = function(board, spot, turn) {
  let winCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  // for loop that tests for winning combinations specified in winCombo = []
  for (let i = 0; i < winCombo.length; i++) {
    if (board[winCombo[i][0]] === board[winCombo[i][1]] &&  board[winCombo[i][1]] === board[winCombo[i][2]] &&  board[winCombo[i][2]] === players[turn % 2]) {
      return true
    }
  }
  return false
}

export default Game;
