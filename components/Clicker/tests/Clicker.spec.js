import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { add as addAction } from '../../../redux/actions/counterActions';

// Components
import Clicker from '../Clicker';

describe('on Clicker init', () => {

  const mockStore = configureStore();
  let state = { counter: { count: 5 } };
  const store = mockStore(() => state);
  const actions = store.getActions();

  const { getByTestId } = render(
    <Provider store={store}>
      <Clicker />
    </Provider>
  );

  it('should have button', () => {
    const el = getByTestId('clicker-button');
    expect(el).toBeTruthy();
  });

  it('should have clicks counter', () => {
    const el = getByTestId('clicker-counter');
    expect(el).toHaveTextContent('clicks: 5');
  });

  describe('on user click', () => {
    const button = getByTestId('clicker-button');
    const el = getByTestId('clicker-counter');

    beforeAll(() => {
      state = { counter: { count: 10 } };
      fireEvent.click(button);
    });

    it('should show proper value on click', () => {
      expect(actions).toEqual([addAction()]);
      expect(el).toHaveTextContent('clicks: 10');
    });
  });
});