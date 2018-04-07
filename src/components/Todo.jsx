import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Todo = ({ onClick, completed, text }) => (
  <li className={classNames('todo', { todo_completed: completed })}>
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
