import React from 'react';
import ReactDOM from 'react-dom';

import rootStore from "../redux/rootStore";
import { Provider } from 'react-redux';

import './styles.scss';
import Clicker from '../components/Clicker/Clicker';

ReactDOM.render(
  <Provider store={rootStore()}>
    <Clicker />
  </Provider>,
  document.getElementById('root'),
);