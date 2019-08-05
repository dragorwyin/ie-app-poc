import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../redux/actions/counterActions';
import ClickerStyled from './Clicker.styled';

// FUNCTIONS
export const onClick = (dispatch) => {
  dispatch(add());
};

// COMPONENT
const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.count);

  return (
    <ClickerStyled>
      <h1>Click the button</h1>
      <button
        data-testid="clicker-button"
        onClick={() => onClick(dispatch)}>
        Click me
      </button>
      <p data-testid="clicker-counter">clicks: {counter}</p>
    </ClickerStyled>
  );
};

export default App;