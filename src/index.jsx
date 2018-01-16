import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import App from './components/App';
import './styles/main.scss';

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root'),
);
