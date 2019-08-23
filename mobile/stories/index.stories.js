import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ThemeProvider, Button } from 'react-native-elements';
import { withKnobs, text } from '@storybook/addon-knobs';

import { View } from 'react-native';
import rootStore from "../redux/rootStore";
import { Provider } from 'react-redux';
import theme from '../styles/theme';

import Clicker from '../../shared/components/Clicker/Clicker.native';
import Toast from '../components/Toast/Toast.native';

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
};

const CenteredView = ({ children }) => <View style={style}>{children}</View>;

/* global module */

storiesOf('Clicker', module)
  .add('default state', () => (
    <Provider store={rootStore()}>
      <CenteredView>
        <Clicker />
      </CenteredView>
    </Provider>
  ));

storiesOf('Buttons', module)
  .add('collection', () => (
    <ThemeProvider theme={theme}>
      <CenteredView>
        <Button title="Primary Button" />
        <Button buttonStyle={{ backgroundColor: theme.colors.secondary }} title="Secondary Button" />
      </CenteredView>
    </ThemeProvider>
  ));

storiesOf('Toast', module)
  .addDecorator(withKnobs)
  .add('default toast', () => (
    <Toast show={true} message="Default message" />
  ))
  .add('error toast', () => {
    return (
      <CenteredView>
        <Toast type="error" show={true} message={text('Message', 'Default error message')} />
      </CenteredView>
    );
  })
  .add('success toast', () => (
    <Toast type="success" show={true} message="Success message" />
  ));