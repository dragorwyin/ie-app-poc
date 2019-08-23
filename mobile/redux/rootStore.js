import { combineReducers, createStore, applyMiddleware } from "redux";
import counterReducer from '../../shared/redux/reducers/counterReducer';
import authReducer from "../../shared/redux/reducers/authReducer";
import thunk from 'redux-thunk';

export default () => {
  const rootReducers = combineReducers({
    counter: counterReducer,
    auth: authReducer,
  });
  return createStore(rootReducers, applyMiddleware(thunk));
};