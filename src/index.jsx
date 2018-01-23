import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

const rootReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

const Counter = ({ state, onIncrement, onDecrement }) => (
  <div className="coutner">
    <h1>Simple counter</h1>
    <h3>{state}</h3>
    <button onClick={() => onIncrement} />
    <button onClick={() => onDecrement} />
  </div>
);

Counter.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  state: PropTypes.number.isRequired,
};

const mapStateToProp = ({ state }) => ({
  state,
});

const mapDispatchToProps = ({ dispatch }) => ({
  onIncrement: () => {
    dispatch({ type: 'INCREMENT' });
  },
  onDecrement: () => {
    dispatch({ type: 'DECREMENT' });
  },
});

const App = connect(mapStateToProp, mapDispatchToProps)(Counter);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
