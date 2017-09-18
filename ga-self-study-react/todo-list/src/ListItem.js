import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    // makes a li with the value of this.props.doThis
    return (
      <div>
        <li>{this.props.doThis}</li>
      </div>
    )
  }
}

export default ListItem;
