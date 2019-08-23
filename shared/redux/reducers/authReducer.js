const initialState = {
  email: '',
  error: '',
  isSendingRequest: false,
  jwt: null,
};

const authReducer = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        jwt: data.jwt,
        email: data.email,
        isSendingRequest: false,
      };
    case 'SENDING_REQUEST':
      return {
        ...state,
        isSendingRequest: true,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        error: data.message,
        isSendingRequest: false,
      };
    default:
      return state;
  }
};

export default authReducer;
