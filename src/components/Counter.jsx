import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ state, onIncrement, onDecrement }) => (
  <div>
    <h1>Simple counter</h1>
    <h3>{state}</h3>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

Counter.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  state: PropTypes.number.isRequired,
};
