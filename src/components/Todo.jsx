import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ completed, onClick, text }) => (
  <li className={completed ? 'todo todo--active' : 'todo'}>
    <a href="*" onClick={onClick}>
      {text}
    </a>
  </li>
);

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
