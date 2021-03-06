import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import type { MemoryRouterProps } from 'react-router';

import { DeepPartial } from 'types/helpers';
import { ApplicationState } from 'store';

import Title, { TitleProps } from './Title.container';

describe('Title', () => {
  const mockState: DeepPartial<ApplicationState> = {};

  const store = configureStore([])({
    ...mockState,
  });

  const createWrapper = (
    props: Partial<TitleProps> = {},
    routerProps?: MemoryRouterProps
  ): ReactWrapper =>
    mount(
      <Provider store={store}>
        <MemoryRouter {...routerProps}>
          <Title {...props} />
        </MemoryRouter>
      </Provider>
    );

  it('Should render Title', () => {
    const wrapper = createWrapper();

    expect(wrapper.exists()).toBe(true);
  });
});
