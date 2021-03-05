import { PayloadAction } from '@/types/app';


export type ActionTwo = PayloadAction<TitleActionTypes.actionTwo, number>;

export enum TitleActionTypes {
  actionTwo = 'ACTION_TWO',
}
export type TitleActions = ActionTwo;
