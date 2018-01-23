import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';

import PropTypes from 'prop-types';
import { increment, decrement } from '../actions';

const App = ({ onIncrement, onDecrement }) => (
  <div className="App">
    <h1>Simple counter</h1>
    <button onClick={dipatch(onIncrement())}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

App.propTypes = {
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

export default hot(module)(connect(mapDispatchToProps)());
