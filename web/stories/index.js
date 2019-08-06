import React from 'react';
import { storiesOf, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import { setOptions } from '@storybook/addon-options';

import { Provider } from 'react-redux';
import rootStore from '../../redux/rootStore';
import configureStore from 'redux-mock-store';

import Header from '../components/Header/Header';
import Clicker from '../../components/Clicker/Clicker';

const newViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...newViewports,
    },
  },
});

setOptions({
  downPanelInRight: true,
});

const stories = storiesOf('Header', module)
  .addParameters({ viewport: { defaultViewport: 'iphone6' } })
  .add('Active items', () => (
    <div>
      <h1>Header</h1>
      <Header active={number('Active', 0)} name={text('Name', 'Campaign')}></Header>
      <h3>Second Header item active</h3>
      <Header active={1}></Header>
      <h3>Third Header item active</h3>
      <Header active={2}></Header>
    </div>
  ));

storiesOf('Clicker', module)
  .add('Real Preview', () => {
    return (
      <Provider store={rootStore()}>
        <Clicker />
      </Provider>
    );
  })
  .add('Mocked State', () => {
    const mockStore = configureStore();
    const state = { counter: { count: -1 } };
    const store = mockStore(() => state);

    return (
      <Provider store={store}>
        <Clicker />
      </Provider>
    );
  });

stories.addDecorator(withKnobs);