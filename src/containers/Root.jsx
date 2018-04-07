import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { hot } from 'react-hot-loader';
import rootReducer from '../reducers';
import App from '../components/App';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    // applyMiddleware(...your middleware)
    applyMiddleware(),
    // other store enhancers if any
  ),
);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default hot(module)(Root);
