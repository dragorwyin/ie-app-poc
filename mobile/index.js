import React from 'react';
import { ThemeProvider } from 'react-native-elements';

import rootStore from "./redux/rootStore";
import { Provider } from 'react-redux';
import theme from './styles/theme';
import Login from './views/Login';

export default function App() {

  return (
    <Provider store={rootStore()}>
      <ThemeProvider theme={theme}>
        <Login></Login>
      </ThemeProvider>
    </Provider>
  );
}