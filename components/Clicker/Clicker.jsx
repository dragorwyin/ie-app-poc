import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../redux/actions/counterActions';
import ClickerStyled from './ClickerStyled';

// COMPONENT
const Clicker = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.count);

  const onClick = () => {
    dispatch(add());
  };

  return (
    <ClickerStyled data-testid="clicker-styles">
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

export default Clicker;