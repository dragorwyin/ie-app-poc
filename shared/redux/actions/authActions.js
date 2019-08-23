import useJwtStorage from '../../hooks/useJwtStorage';

const LOGIN_SUCCESS = (email, jwt) => ({
  type: 'LOGIN_SUCCESS',
  data: { email, jwt }
});

const SENDING_REQUEST = () => ({
  type: 'SENDING_REQUEST',
  data: {}
});

const LOGIN_ERROR = (message) => ({
  type: 'LOGIN_ERROR',
  data: { message }
});

export const login = (email, password) => async (dispatch, getState) => {
  dispatch(SENDING_REQUEST(email));

  const { jwt } = await new Promise((resolve) => {
    // just test
    setTimeout(() => resolve({ jwt: 'my-jwt' }), 200);
  });

  const jwtStorage = useJwtStorage();
  await jwtStorage.setJWT(jwt);

  dispatch(LOGIN_SUCCESS(email, jwt));
};