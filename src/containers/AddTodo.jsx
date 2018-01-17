import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo } from '../actions';

const addTodoComponent = ({ dispatch }) => {
  let input = null;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();

        if (!input.value.trim()) return;
        dispatch(addTodo(input.value.trim()));
        input.value = '';
      }}
    >
      <input
        type="text"
        ref={node => {
          input = node;
        }}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

addTodoComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const AddTodo = connect()(addTodoComponent);

export default AddTodo;
