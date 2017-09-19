import React, { Component } from 'react';

const ListItem = props => (
  <div>
    <li>{props.doThis}</li>
  </div>
)
// class ListItem extends Component {
//   render() {
//     // makes a li with the value of this.props.doThis
//     return (
//       <div>
//         <li>{this.props.doThis}</li>
//       </div>
//     )
//   }
// }

export default ListItem;
