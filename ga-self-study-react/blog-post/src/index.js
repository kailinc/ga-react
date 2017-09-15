import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

const article = {
  title: 'The Magnificent Coder',
  author: 'MudaBish',
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  comments: [
    'much wow',
    'soo cool'
  ]
}
ReactDOM.render(
  <Post
  title={article.title}
  author={article.author}
  body={article.body}
  comments={article.comments}
  />,
  document.getElementById('root'));
registerServiceWorker();
