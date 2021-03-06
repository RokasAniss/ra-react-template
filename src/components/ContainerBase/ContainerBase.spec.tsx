import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import ContainerBase, { ContainerBaseProps } from './ContainerBase';

describe('ContainerBase', () => {
  const defaultProps: ContainerBaseProps = {
    children: <div>Test</div>,
    id: 'test-id'
  };

  const createWrapper = (props: Partial<ContainerBaseProps> = {}): ShallowWrapper =>
    shallow(<ContainerBase {...defaultProps} {...props} />);

  it('Should render component', () => {
    const wrapper = createWrapper();

    expect(wrapper.exists()).toBe(true);
  });
});
