import { TitleActions, TitleActionTypes } from './title.actionTypes';
import { TitleState } from './title.state';

const initialState: TitleState = {
  id: 0,
};

export const titleReducer = (state = initialState, action: TitleActions): TitleState => {
  switch (action.type) {
    case TitleActionTypes.actionTwo:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};
