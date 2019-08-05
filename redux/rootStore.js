import { combineReducers, createStore } from "redux";
import counterReducer from './reducers/counterReducer';

export default () => {
  const rootReducers = combineReducers({
    counter: counterReducer
  });
  return createStore(rootReducers);
};