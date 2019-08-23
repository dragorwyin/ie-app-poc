import React, { useState } from 'react';
import { Animated } from 'react-native';
import { Text } from 'react-native-elements';

const getBackground = (type) => {
  switch (type) {
    case 'success':
      return 'green';
    case 'error':
      return '#d15d4bcc';
    case 'warning':
      return 'orange';
    default:
      return 'black';
  }
};

const getStyle = (type, fadeAnim) => ({
  position: 'absolute',
  bottom: 0,
  display: 'flex',
  width: '100%',
  paddingVertical: 20,
  paddingHorizontal: 20,
  opacity: fadeAnim,
  height: 'auto',
  backgroundColor: getBackground(type),
});

const Toast = ({
  show = false,
  type = 'error',
  message = '',
}) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  let isShown = false;

  const fadeIn = () => {
    isShown = true;
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200
    }).start();
  };

  const fadeOut = () => setTimeout(() => {
    isShown = false;
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200
    }).start();
  }, 2000);

  if (show && !isShown) {
    fadeIn();
    fadeOut();
  }

  return (
    <Animated.View style={getStyle(type, fadeAnim)}>
      <Text style={{ color: 'white' }}>{message}</Text>
    </Animated.View>
  );
};

export default Toast;