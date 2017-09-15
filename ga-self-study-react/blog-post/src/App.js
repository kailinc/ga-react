import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment.js';
import Author from './Author.js';

class Post extends Component {
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
        <p>{this.props.body}</p>
        <h3>Comments</h3>
          <Comment body={this.props.comments[0]}/>
      </div>
    );
  }
}

export default Post;
