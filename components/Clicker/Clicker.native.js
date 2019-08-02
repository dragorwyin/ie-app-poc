import React from 'react';
import { Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../redux/actions/counterActions';

export default function Mobile() {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.count);

  const onClick = () => {
    dispatch(add());
  };

  return (
    <View>
      <Button title="Click me" onPress={onClick}></Button>
      <Text>Clicked: {counter}</Text>
    </View>
  );
}
