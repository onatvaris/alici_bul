import {combineReducers} from 'redux';
import loginReducers from './LoginReducer';
import backgroundReducers from './BackgroundAction';
export default combineReducers({
  loginResponse: loginReducers,
  backgroundResponse: backgroundReducers,
});
