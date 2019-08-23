const useJwtStorage = () => {
  const name = 'jwt';

  const getJWT = () => new Promise(resolve => resolve(localStorage.getItem(name)));
  const setJWT = (jwt) => new Promise(resolve => resolve(localStorage.setItem(name, jwt)));
  const clearJWT = () => new Promise(resolve => resolve(localStorage.clear(name)));

  return {
    getJWT,
    setJWT,
    clearJWT
  };
};

export default useJwtStorage;