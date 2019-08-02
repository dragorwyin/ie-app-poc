import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../redux/actions/counterActions';

const App = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.count);

  const onClick = () => {
    dispatch(add());
  };

  return (
    <main className="app">
      <h1>Click the button</h1>
      <button onClick={onClick}>Click me</button>
      <p>clicks: {counter}</p>
    </main>
  );
};


export default App;