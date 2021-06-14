import { store } from '@/store';

import { TitleActionTypes, SetName } from './title.actionTypes';

export const setName = (payload: SetName['payload']): void => {
  const data: SetName = {
    type: TitleActionTypes.setName,
    payload: payload,
  };
  store.dispatch(data);
};
