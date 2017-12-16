import React from 'react';
import {Link} from 'react-router-dom';

const Item = (props) => {
  console.log('Item:', props)
  return(
    <div>
      <h1>A Thing I've Done</h1>
      <p>This page is for the item with id of {props.match.params.id}</p>
    </div>
  )
}

export default Item;
