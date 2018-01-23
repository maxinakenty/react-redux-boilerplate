import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';

import PropTypes from 'prop-types';
import { increment, decrement } from '../actions';

const Counter = ({ state, onIncrement, onDecrement }) => (
  <div className="App">
    <h1>Simple counter</h1>
    <h2>{state}</h2>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

Counter.propTypes = {
  state: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

const mapDispatchToProps = ({ dispatch }) => ({
  onIncrement: () => {
    dispatch(increment());
  },
  onDecrement: () => {
    dispatch(decrement());
  },
});

const mapStateToProps = ({ state }) => ({
  state,
});

const App = connect(mapDispatchToProps, mapStateToProps)(Counter);

export default hot(module)(App);
