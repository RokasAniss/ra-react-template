const changeCase = require('change-case');

const tsx = name => {
  const kebabName = changeCase.paramCase(name);
  const pascalName = changeCase.pascalCase(name);

  return `import React, { FC } from 'react';
import classNames from 'classnames/bind';

import style from './${pascalName}.module.scss';
const cx = classNames.bind(style);

const ${pascalName}: FC<${pascalName}Props> = ({
  label = '${name}',
}: ${pascalName}Props) => {
  const className = '${kebabName}';

  return <div className={cx(className)}>{label}</div>;
};

export interface ${pascalName}Props {
  label?: string;
}

export default ${pascalName};
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
  const pascalName = changeCase.pascalCase(name);

  return `import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import ${pascalName}, { ${pascalName}Props } from './${pascalName}';

describe('${pascalName}', () => {
  const defaultProps: ${pascalName}Props = {};

  const createWrapper = (props: Partial<${pascalName}Props> = {}): ShallowWrapper =>
    shallow(<${pascalName} {...defaultProps} {...props} />);

  it('Should render component', () => {
    const wrapper = createWrapper();

    expect(wrapper.exists()).toBe(true);
  });
});
`;
};

const story = name => {
  const pascalName = changeCase.pascalCase(name);

  return `import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ${pascalName}, { ${pascalName}Props } from './${pascalName}';

export default {
  title: 'Components/${pascalName}',
  component: ${pascalName},
} as Meta;

const Template: Story<${pascalName}Props> = args => <${pascalName} {...args} />;

export const Default = Template.bind({});
Accent.args = {
  label: '${pascalName}',
} as ${pascalName}Props;
`;
};

const index = name => {
  const pascalName = changeCase.pascalCase(name);

  return `export { default } from './${pascalName}';
`;
};

module.exports = {
  tsx: tsx,
  scss: scss,
  index: index,
  story: story,
  spec: spec,
};
