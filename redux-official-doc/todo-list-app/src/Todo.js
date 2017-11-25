import React from 'react';
import PropTypes from 'prop-types'

const Todo = ({onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

// propTypes defines type and which props are required
// onClick prop requires a function
// completed prop requires a boolean
// text prop requires a string
Todo.propTypes = {
  onClick = PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
