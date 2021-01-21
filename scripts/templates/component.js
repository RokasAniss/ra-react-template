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

interface ${name}Props {
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

const index = name =>
  `export { default } from './${name}';
`;

module.exports = {
  tsx: tsx,
  scss: scss,
  index: index,
};
