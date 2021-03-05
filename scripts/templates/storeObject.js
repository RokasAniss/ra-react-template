const changeCase = require('change-case');

const state = name => {
  const PascalName = changeCase.pascalCase(name);
  return `export interface ${PascalName}State {
  id?: number;
}`;
};

const actionTypes = name => {
  const PascalName = changeCase.pascalCase(name);
  return `import { Action, PayloadAction } from 'types/app';

export type ActionOne = Action<${PascalName}ActionTypes.actionOne>;

export type ActionTwo = PayloadAction<${PascalName}ActionTypes.actionTwo, number>;

export enum ${PascalName}ActionTypes {
  actionOne = 'ACTION_ONE',
  actionTwo = 'ACTION_TWO',
}
export type ${PascalName}Actions = ActionOne | ActionTwo;
`;
};

const actions = name => {
  const PascalName = changeCase.pascalCase(name);
  return `import store from 'store';
import { ${PascalName}ActionTypes, ActionOne, ActionTwo } from './${name}.actionTypes';

export const actionOne = (): void => {
  const data: ActionOne = {
    type: ${PascalName}ActionTypes.actionOne,
  };
  store.dispatch(data);
};

export const actionTwo = (payload: ActionTwo['payload']): void => {
  const data: ActionTwo = {
    type: ${PascalName}ActionTypes.actionTwo,
    payload: payload,
  };
  store.dispatch(data);
};
`;
};

const reducer = name => {
  const PascalName = changeCase.pascalCase(name);
  return `import { ${PascalName}Actions, ${PascalName}ActionTypes } from './${name}.actionTypes';
import { ${PascalName}State } from './${name}.state';

const initialState: ${PascalName}State = {
  id: 0,
};

const ${name}Reducer = (state = initialState, action: ${PascalName}Actions): ${PascalName}State => {
  switch (action.type) {
    case ${PascalName}ActionTypes.actionTwo:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};

export default ${name}Reducer;
`;
};

const sagas = name => {
  const PascalName = changeCase.pascalCase(name);
  return `import { all, takeLatest } from 'redux-saga/effects';

import { ${PascalName}ActionTypes, ActionOne } from './${name}.actionTypes';

export function* sagaFunction(values: ActionOne): Generator {
  try {
    console.log(values);
  } catch (err: unknown) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

export default function* watch${PascalName}(): Generator {
  yield all([takeLatest(${PascalName}ActionTypes.actionOne, sagaFunction)]);
}
`;
};

module.exports = {
  state,
  actionTypes,
  actions,
  reducer,
  sagas
};
