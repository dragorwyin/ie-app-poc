import React from 'react';
import rootStore from "../redux/rootStore";
import { Provider } from 'react-redux';

import { storiesOf, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import Clicker from '../components/Clicker/Clicker';
import Header from '../web/components/Header/Header';

storiesOf('Clicker', module)
  .add('Preview', () => (
    <Provider store={rootStore()}>
      <Clicker />
    </Provider>
  ))
  .add('Responsive Preview', () => (
    <Provider store={rootStore()}>
      <Clicker />
    </Provider>
  ), { viewport: { defaultViewport: 'iphonex' } });

storiesOf('Header', module)
  .add('Preview', () => (
    <Header />
  ));

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  },
});