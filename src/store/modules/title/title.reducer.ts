import { TitleActions, TitleActionTypes } from './title.actionTypes';
import { TitleState } from './title.state';

const initialState: TitleState = {
  name: 'ra-react-template',
};

export const titleReducer = (state = initialState, action: TitleActions): TitleState => {
  switch (action.type) {
    case TitleActionTypes.setName:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
