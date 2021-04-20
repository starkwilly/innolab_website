import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './_theme/custom.scss';
import 'react-app-polyfill/stable';
import App from './App';
import store from './_store/store';

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);