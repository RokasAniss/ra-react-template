import { PayloadAction } from '@/types/app';

export type SetName = PayloadAction<TitleActionTypes.setName, string>;

export enum TitleActionTypes {
  setName = 'title/SET_NAME',
}
export type TitleActions = SetName;
