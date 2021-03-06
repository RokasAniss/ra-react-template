import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import ViewBase, { ViewBaseProps } from './ViewBase';

describe('ViewBase', () => {
  const defaultProps: ViewBaseProps = {
    children: <div>Test</div>,
    id: 'test-id',
  };

  const createWrapper = (props: Partial<ViewBaseProps> = {}): ShallowWrapper =>
    shallow(<ViewBase {...defaultProps} {...props} />);

  it('Should render component', () => {
    const wrapper = createWrapper();

    expect(wrapper.exists()).toBe(true);
  });
});
