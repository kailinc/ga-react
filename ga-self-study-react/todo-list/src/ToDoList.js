import  React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem.js';

const ToDoList = props => (
  <ul>
    {props.toDoItemArray.map((item, index) => (
      <ListItem key={index} doThis={item}/>
    ))}
  </ul>
)

export default ToDoList;
