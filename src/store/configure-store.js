import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './root-reducer';
import IS_DEVELOPMENT from '../../constants';

export const store = createStore(
  rootReducer,
  IS_DEVELOPMENT
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk),
);
