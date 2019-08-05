import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../redux/actions/counterActions';

export const onClick = (dispatch) => {
  dispatch(add());
};

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.count);

  return (
    <main className="app">
      <h1>Click the button</h1>
      <button
        data-testid="clicker-button"
        onClick={() => onClick(dispatch)}>
        Click me
      </button>
      <p data-testid="clicker-counter">clicks: {counter}</p>
    </main>
  );
};


export default App;