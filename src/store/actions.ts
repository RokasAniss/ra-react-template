import store from './store';
import { ActionTypes } from './types/actionTypes';

export const SetTitle = (payload: string): void => {
  store.dispatch({ type: ActionTypes.setTitle, payload: payload });
};
