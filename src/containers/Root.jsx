import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { hot } from 'react-hot-loader';
import App from '../components/App';
import rootReducer from '../reducers/';

// React the documentation:
// https://github.com/zalmoxisus/redux-devtools-extension#14-using-in-production
const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(
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
