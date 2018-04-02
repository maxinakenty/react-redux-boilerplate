import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import App from '../components/App';
import rootReducer from '../reducers/';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default hot(module)(Root);
