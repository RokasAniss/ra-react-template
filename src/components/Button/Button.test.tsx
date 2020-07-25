import React from 'react';
import { shallow } from 'enzyme';

import Button, { ButtonProps } from './Button';

describe('Button', () => {
  const defaultProps: ButtonProps = {
    title: 'Buttonas',
  };

  const createWrapper = (props: Partial<ButtonProps> = {}) =>
    shallow(<Button {...defaultProps} {...props} />);

  it('Should render title', () => {
    const wrapper = createWrapper();
    expect(wrapper.text()).toBe('Buttonas');
  });
});
