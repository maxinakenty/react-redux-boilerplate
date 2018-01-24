import React from 'react';
import PropTypes from 'prop-types';

const CounterComponent = ({ state, onIncrement, onDecrement }) => (
  <div>
    <h1>Simple counter</h1>
    <h3>{state}</h3>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

CounterComponent.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  state: PropTypes.number.isRequired,
};

export default CounterComponent;
