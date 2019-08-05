import React from 'react';;
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

// Components
import Clicker from './Clicker.native';

describe('on Clicker init', () => {

  const mockStore = configureStore();
  const state = { counter: { count: 5 } };
  const store = mockStore(() => state);

  const tree = renderer.create(
    <Provider store={store}>
      <Clicker />
    </Provider>
  ).toJSON();

  it('renders properly', () => {
    expect(tree).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });
});