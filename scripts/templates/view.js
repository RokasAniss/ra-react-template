const changeCase = require('change-case');

const tsx = name => {
  const kebabName = changeCase.paramCase(name);
  return `import React, { FC, ReactNode } from 'react';

const ${name}: FC<${name}Props> = ({
  children',
}: ${name}Props) => {
  const className = '${kebabName}';

  return <div className={className}>{children}</div>;
};

interface ${name}Props {
  children: ReactNode;
}

export default ${name};
`;
};

const index = name =>
  `export { default } from './${name}.view';
`;

module.exports = {
  tsx: tsx,
  index: index,
};
