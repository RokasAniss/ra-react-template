const changeCase = require('change-case');

const tsx = name => {
  const kebabName = changeCase.paramCase(name);
  return `import React, { FC } from 'react';

import ViewBase from '@/components/ViewBase';

const ${name}: FC = () => {
  return <ViewBase id="${kebabName}-view">${name}</ViewBase>;
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
