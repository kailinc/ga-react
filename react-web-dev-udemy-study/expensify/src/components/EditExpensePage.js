import React from 'react';
import ReactDOM from 'react-dom';

const EditExpensePage = (props) => {
  console.log(props)
  return(
    <div>
      EditExpensePage
      Editing if of {props.match.params.id}
    </div>
  )
}
export default EditExpensePage;
