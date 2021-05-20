import {combineReducers} from 'redux';
import loginReducers from './LoginReducer';
export default combineReducers({
  loginResponse: loginReducers,
});
