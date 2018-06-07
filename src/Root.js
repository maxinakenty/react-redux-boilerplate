import { createBrowserHistory } from 'history';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './components/App';
import rootReducer from './reducers';
import IS_DEVELOPMENT from '../tools/constants';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  rootReducer,
  IS_DEVELOPMENT
    ? composeWithDevTools(applyMiddleware(thunk, middleware))
    : applyMiddleware(thunk, middleware),
);

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

export default hot(module)(Root);
