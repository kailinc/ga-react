import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem';
import ToDoList from './ToDoList'

class MyList extends Component {
  constructor (props) {
    super()
    // sets that state of MyList Component to be the props that is passed down
    this.state = {
      toDoItemArray: props.theList,
      newItem: ''
    }
  }

  // function to clear the state.toDoItemArray to be empty array
  clearList (e) {
    this.setState({
      toDoItemArray: []
    })
  }

  // function to get current value of input field and set state
  newItemChange (e) {
    this.inputEntry = ''
    this.setState({
      newItem: e.target.value
    })
  }

  addItem (e) {
    e.preventDefault()
    let newArray = this.state.toDoItemArray
    newArray.push(this.state.newItem)
    this.setState({
      toDoItemArray: newArray,
      newItem: ''
    })
  }

  render() {
    // this is a function that loops through the state.toDoItemArray
    // for every item in the list calls ListItem component with doThis as the current item
    // sets the key to be the index of the item in the array

    return (
      <div>
        <h1>Things I should stop procastinating</h1>
        <ul>
          <ToDoList toDoItemArray={this.state.toDoItemArray}/>
        </ul>
        <input type="text" ref="newItem" placeholder="Add a new item here" onChange={(e) => this.newItemChange(e)}></input>
        <button onClick={(e) => this.addItem(e)}>Add it!</button>
        <button onClick={(e) => this.clearList(e)}>Clear List</button>
      </div>
    );
  }
}

export default MyList;
