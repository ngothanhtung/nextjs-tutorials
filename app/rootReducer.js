import { combineReducers } from 'redux';
import counterReducers from './counter/reducers';
import authReducers from './auth/reducers';

const rootReducer = combineReducers({
  auth: authReducers,
  counter: counterReducers,
});

export default rootReducer;
