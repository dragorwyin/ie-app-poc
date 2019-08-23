import useJwtStorage from '../useJwtStorage';

describe('useJwtStorage', () => {
  const jwtStorage = useJwtStorage();

  it('should set JWT item in Storage', () => {

    (async () => {
      await jwtStorage.setJWT('test');
      expect(await jwtStorage.getJWT()).toEqual('test');
    })();

  });

  it('should delete JWT item in Storage', () => {
    (async () => {
      await jwtStorage.setJWT('test');
      await jwtStorage.clearJWT('test');
      expect(await jwtStorage.getJWT()).toEqual(null);
    })();

  });

});