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
    <>
      <h1>Header</h1>
      <Header active={0} />
      <h3>Another header</h3>
      <Header active={1} />
      <h3>And another header</h3>
      <Header active={2} />
    </>
  ));

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  },
});