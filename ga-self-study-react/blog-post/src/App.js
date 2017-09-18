import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment.js';
import Author from './Author.js';

class Post extends Component {

  constructor (props) {
    super()
    this.state = {
      body: props.body
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
      <Author author={this.props.author[0]} />,
      <Author author={this.props.author[1]} />,
      <Author author={this.props.author[2]} />
    ]
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>by {allAuthor}</h3>
        <p>{this.state.body}</p>
        <form>
          <input type="text" onChange={(e) => this.handleInputForm(e)}></input>
          <button onClick={(e) => this.changeBody(e)}>Edit Body</button>
        </form>
        <h3>Comments</h3>
          <Comment body={this.props.comments[0]}/>
      </div>
    );
  }
}

export default Post;
