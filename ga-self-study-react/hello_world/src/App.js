// bring in React and Component from React
// and = ,
import React, {Component} from 'react';

// define our Hello component
// since hello inherits from Component class, gets to use code and
// capabilities from React.Component
class Hello extends Component {
  // what should the component render?
  render () {
    // make sure to return some UI
    return (
      <div>
        <h1>Hello World!</h1>
        <p>It is a wonderful world</p>
      </div>

    )
  }
}

// this makes the Hello class available to other files
// other files just need to import from App.js to get to use the Hello Class
// similar to module.export = { some functin, some pojo}
// when try to import something from App.js, JS will match named export
// 'default' means that if someone try to import something and can't find, will
// give Hello component
// there can only be one default export per file
export default Hello
