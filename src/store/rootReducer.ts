import { ReducersMapObject } from 'redux';
import { ApplicationState } from './ApplicationState.type';

import { titleReducer } from './modules/title/title.reducer';
// Reducer import


export const rootReducer: Partial<ReducersMapObject<ApplicationState>> = {
  title: titleReducer,
   // Reducer declare
};
