import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment.js';
import Author from './Author.js';

class Post extends Component {

  constructor (props) {
    super()
    this.state = {
        title: 'The Magnificent Coder',
        author: [
          'MudaBish',
          'BrudaBish',
          'TudaBish'
        ],
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        comments: [
          'much wow',
          'soo cool'
        ]
    }
  }

  changeBody(e) {
    let newBody = prompt("What should the new body be?")
    this.setState({
      body: newBody
    })
  }

  handleInputForm(e) {
    this.setState({
      body: e.target.value
    })
  }
  render() {
    let allAuthor = [
      <Author author={this.state.author[0]} />,
      <Author author={this.state.author[1]} />,
      <Author author={this.state.author[2]} />
    ]
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h3>by {allAuthor}</h3>
        <p>{this.state.body}</p>
        <form>
          <input type="text" onChange={(e) => this.handleInputForm(e)}></input>
          <button onClick={(e) => this.changeBody(e)}>Edit Body</button>
        </form>
        <h3>Comments</h3>
          <Comment body={this.state.comments[0]}/>
      </div>
    );
  }
}

export default Post;
