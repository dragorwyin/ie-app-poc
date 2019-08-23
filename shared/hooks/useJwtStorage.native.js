import { AsyncStorage } from 'react-native';

const useJwtStorage = () => {
  const name = 'jwt';

  const getJWT = () => AsyncStorage.getItem(name);
  const setJWT = (jwt) => AsyncStorage.setItem(name, jwt);
  const clearJWT = () => AsyncStorage.removeItem(name);

  return {
    getJWT,
    setJWT,
    clearJWT
  };
};

export default useJwtStorage;