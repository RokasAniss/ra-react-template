const changeCase = require('change-case');

const tsx = name => {
  const kebabName = changeCase.paramCase(name);
  return `import React, { FC } from 'react';

const ${name}: FC = () => {
  const className = '${kebabName}';

  return <div className={className}>${name} View</div>;
};

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
