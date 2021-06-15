import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Caption, { CaptionProps } from './Caption';

export default {
  title: 'Components/Caption',
  component: Caption,
} as Meta;

const Template: Story<CaptionProps> = args => <Caption {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Caption',
} as CaptionProps;
