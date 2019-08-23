import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../shared/redux/actions/authActions';
import Toast from '../components/Toast/Toast.native';

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
  },
  container: {
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  }
});

const Login = () => {
  const dispatch = useDispatch();
  const { error } = useSelector(state => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPress = () => {
    dispatch(login(email, password));
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text h1 containerStyle={{ marginTop: 20 }}>Login</Text>
        <Input
          value={email}
          onChangeText={(value) => setEmail(value)}
          containerStyle={{ marginTop: 30 }}
          keyboardType="email-address"
          label="Email" />
        <Input
          value={password}
          onChangeText={(value => setPassword(value))}
          containerStyle={{ marginTop: 10 }}
          secureTextEntry={true}
          label="Password" />
        <View style={{ alignSelf: 'stretch', marginTop: 20 }}>
          <Button secondary
            onPress={onPress}
            title="Login"
            containerViewStyle={{ width: '100%', marginLeft: 0, alignSelf: 'stretch' }}>
          </Button>
        </View>
      </View>
      <Toast show={error !== ''} type="error" message={error} />
    </View>
  );
};

export default Login;