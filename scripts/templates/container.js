const changeCase = require('change-case');

const tsx = name => {
  const kebabName = changeCase.paramCase(name);
  return `import React, { FC } from 'react';
import { connect } from 'react-redux';

import { ApplicationState } from '@/store';
import ContainerBase from '@/components/ContainerBase';

const ${name}: FC<${name}Props> = ({ appState }: ${name}Props) => {
  console.log(appState);
  return <ContainerBase id="${kebabName}-container">${name}</ContainerBase>;
};

export interface ${name}Props {
  appState?: ApplicationState;
}

const mapStateToProps = (
  state: ApplicationState
): ${name}Props => {
  return {
    appState: state,
  };
};

export default connect(mapStateToProps)(${name});
`;
};

const spec = name => {
  return `import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import type { MemoryRouterProps } from 'react-router';

// import { DeepPartial } from 'types/helpers';
import { ApplicationState } from 'store';

import ${name}, { ${name}Props } from './${name}.container';

describe('${name}', () => {
  const mockState: Partial<ApplicationState> = {};

  const store = configureStore([])({
    ...mockState,
  });

  const createWrapper = (
    props: Partial<${name}Props> = {},
    routerProps?: MemoryRouterProps
  ): ReactWrapper =>
    mount(
      <Provider store={store}>
        <MemoryRouter {...routerProps}>
          <${name} {...props} />
        </MemoryRouter>
      </Provider>
    );

  it('Should render ${name}', () => {
    const wrapper = createWrapper();

    expect(wrapper.exists()).toBe(true);
  });
});
`;
};

const index = name =>
  `export { default } from './${name}';
`;

module.exports = {
  tsx: tsx,
  spec: spec,
  index: index,
};
