import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Caption, { CaptionProps } from './Caption';

describe('Caption', () => {
  const defaultProps: CaptionProps = {};

  const createWrapper = (props: Partial<CaptionProps> = {}): ShallowWrapper =>
    shallow(<Caption {...defaultProps} {...props} />);

  it('Should render component', () => {
    const wrapper = createWrapper();

    expect(wrapper.exists()).toBe(true);
  });
});
