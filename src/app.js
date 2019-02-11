import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/configure-store';

export const App = () => (
  <Provider store={store}>
    <h1>Hello World</h1>
  </Provider>
);
