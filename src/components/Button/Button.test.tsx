import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Button, { ButtonProps } from './Button';

describe('Button', () => {
  const defaultProps: ButtonProps = {
    label: 'Buttonas',
  };

  const createWrapper = (props: Partial<ButtonProps> = {}): ShallowWrapper =>
    shallow(<Button {...defaultProps} {...props} />);

  it('Should render title', () => {
    const wrapper = createWrapper();
    expect(wrapper.text()).toBe('Buttonas');
  });
});
