import { combineReducers } from "redux";
import counterReducer from './reducers/counterReducer';

export default combineReducers({
  counter: counterReducer
});