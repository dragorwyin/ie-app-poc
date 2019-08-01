import React from 'react';
import { StyleSheet, View } from 'react-native';
import Mobile from './mobile/Mobile';

import rootReducers from "./redux/initStore";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

export default function App() {
  const store = createStore(rootReducers);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Mobile></Mobile>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
