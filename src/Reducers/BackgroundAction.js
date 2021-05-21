import {BACKGROUND_CHANGED, EMAIL_CHANGED, ICON_COLOR_CHANGED} from '../Actions/types';

const INITIAL_STATE = {
  selected: '',
  iconColor: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BACKGROUND_CHANGED:
      return {...state, selected: action.payload};
    case ICON_COLOR_CHANGED:
      return {...state, iconColor: action.payload};

    default:
      return state;
  }
};
