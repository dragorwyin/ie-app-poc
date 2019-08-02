const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COUNTER_ADD':
      return { count: state.count + 3 };
    default:
      return state;
  }
};

export default counterReducer;
