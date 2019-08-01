import React from 'react';
import ReactDOM from 'react-dom';

import rootReducers from "../redux/initStore";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './styles.scss';
import App from './App';

const store = createStore(rootReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

module.hot.accept();