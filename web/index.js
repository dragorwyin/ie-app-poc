import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.scss';

ReactDOM.render(
  <main>
    <h1>Siema byku!</h1>
    <App />
  </main>,
  document.getElementById('root'),
);

module.hot.accept();