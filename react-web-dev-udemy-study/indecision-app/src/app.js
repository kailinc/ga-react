import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

const Layout = (props) => {
  return (
    <div>
      <p>header</p>
      { props.children }
      <p>footer</p>
    </div>
  )
}

const template = (
  <div>
    <h1>Page Title </h1>
    <p>Content</p>
  </div>
)
ReactDOM.render(<Layout><p>This is inLine</p></Layout>, document.getElementById('app'));
