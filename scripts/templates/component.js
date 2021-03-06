const changeCase = require('change-case');

const tsx = name => {
  const kebabName = changeCase.paramCase(name);
  return `import React, { FC } from 'react';

import './${name}.scss';

const ${name}: FC<${name}Props> = ({
  label = '${name}',
}: ${name}Props) => {
  const className = '${kebabName}';

  return <div className={className}>{label}</div>;
};

export interface ${name}Props {
  label?: string;
}

export default ${name};
`;
};

const scss = name => {
  const kebabName = changeCase.paramCase(name);
  return `.${kebabName} {
  display: flex;
}
`;
};

const spec = name => {
  return `import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import ${name}, { ${name}Props } from './${name}';

describe('${name}', () => {
  const defaultProps: ${name}Props = {};

  const createWrapper = (props: Partial<${name}Props> = {}): ShallowWrapper =>
    shallow(<${name} {...defaultProps} {...props} />);

  it('Should render component', () => {
    const wrapper = createWrapper();

    expect(wrapper.exists()).toBe(true);
  });
});
`;
};

const story = name => {
  return `import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ${name}, { ${name}Props } from './${name}';

export default {
  title: 'Components/${name}',
  component: ${name},
} as Meta;

const Template: Story<${name}Props> = args => <${name} {...args} />;

export const Accent = Template.bind({});
Accent.args = {
  label: '${name}',
} as ${name}Props;
`;
};

const index = name =>
  `export { default } from './${name}';
`;

module.exports = {
  tsx: tsx,
  scss: scss,
  index: index,
  story: story,
  spec: spec,
};
