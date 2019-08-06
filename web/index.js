import React from 'react';
import ReactDOM from 'react-dom';

import rootStore from "../redux/rootStore";
import { Provider } from 'react-redux';

import GlobalStyled from './global.styled';
import App from './App';

ReactDOM.render(
  <Provider store={rootStore()}>
    <GlobalStyled />
    <App />
  </Provider>,
  document.getElementById('root'),
);