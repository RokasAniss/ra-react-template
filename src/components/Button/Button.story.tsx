import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Accent = Template.bind({});
Accent.args = {
  title: 'Button',
} as ButtonProps;

export const Simple = Template.bind({});
Simple.args = {
  title: 'Button',
  variant: 'simple',
} as ButtonProps;
