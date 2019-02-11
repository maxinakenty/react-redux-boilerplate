import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { rootReducer } from './store/root-reducer';
import { store } from './store/configure-store';
import { App } from './app';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render();

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./app', () => {
    render();
  });

  // Reload reducers
  module.hot.accept('./store/root-reducer', () => {
    store.replaceReducer(rootReducer);
  });
}
