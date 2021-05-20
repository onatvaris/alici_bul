import {StatusBarIOS} from 'react-native';
import {EMAIL_CHANGED, STATUS_CHANGED} from './types';

export const emailChanged = email => {
  console.log('email', email);
  return dispatch => {
    dispatch({
      type: EMAIL_CHANGED,
      payload: email,
    });
  };
};

export const statuChanged = status => {
  return dispatch => {
    dispatch({
      type: STATUS_CHANGED,
      payload: status,
    });
  };
};
