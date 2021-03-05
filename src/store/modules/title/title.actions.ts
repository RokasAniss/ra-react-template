import { store } from '@/store';
import { TitleActionTypes, ActionTwo } from './title.actionTypes';

export const actionTwo = (payload: ActionTwo['payload']): void => {
  const data: ActionTwo = {
    type: TitleActionTypes.actionTwo,
    payload: payload,
  };
  store.dispatch(data);
};
