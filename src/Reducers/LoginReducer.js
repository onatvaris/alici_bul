import {EMAIL_CHANGED} from '../Actions/types';

const INITIAL_STATE = {
  email: '',
  statu: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case EMAIL_CHANGED:
      return {...state, statu: action.payload};

    default:
      return state;
  }
};
