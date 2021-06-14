import { combineReducers } from 'redux';

import { titleReducer } from './modules/title/title.reducer';
// IMPORT_REDUCER

// eslint-disable-next-line
export const rootReducer = () =>
  combineReducers({
    title: titleReducer,
    // DECLARE_REDUCER
  });

export type State = ReturnType<ReturnType<typeof rootReducer>>;
