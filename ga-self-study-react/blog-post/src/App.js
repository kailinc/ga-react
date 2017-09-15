import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>by {this.props.author}</h3>
        <p>{this.props.body}</p>
        <h3>Comments</h3>
        <p>{this.props.comments}</p>
      </div>
    );
  }
}

export default Post;
