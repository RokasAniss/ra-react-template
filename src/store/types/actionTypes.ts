export interface SetTitle {
  type: ActionTypes.setTitle;
  payload: string;
}

export enum ActionTypes {
  setTitle = 'SetTitle',
}

export type Actions = SetTitle;
