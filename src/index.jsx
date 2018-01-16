// import React from 'react';
// import { render } from 'react-dom';
// import App from './components/App';
// import './styles/main.scss';

// render(<App />, document.getElementById('root'));

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import todoApp from './reducers/';
import { addTodo, toggleTodo, setVisibilityFilter } from './actions';

const store = createStore(todoApp, composeWithDevTools());

store.dispatch(addTodo('some text'));
store.dispatch(addTodo('hello moscow'));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter('SHOW_COMPLETED'));
console.log(store.getState());
