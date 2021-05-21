import {StatusBarIOS} from 'react-native';
import {BACKGROUND_CHANGED, ICON_COLOR_CHANGED} from './types';

export const backgroundChanged = selected => {
  return dispatch => {
    dispatch({
      type: BACKGROUND_CHANGED,
      payload: selected,
    });
  };
};
export const iconColorChanged = selected => {
  return dispatch => {
    dispatch({
      type: ICON_COLOR_CHANGED,
      payload: selected,
    });
  };
};
