import { TitleActionTypes, SetName } from './title.actionTypes';

export const setName = (payload: SetName['payload']): SetName => ({
  type: TitleActionTypes.setName,
  payload: payload,
});
