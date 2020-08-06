import store from './store';
import { ActionTypes } from './types/actionTypes';

export const SetChapter = (payload: string): void => {
  store.dispatch({ type: ActionTypes.setTitle, payload: payload });
};
