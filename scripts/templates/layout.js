const changeCase = require('change-case');

const tsx = name => {
  const kebabName = changeCase.paramCase(name);
  return `import React, { FC, ReactNode } from 'react';

import './${name}.layout.scss';

const ${name}: FC<${name}Props> = ({
  children,
}: ${name}Props) => {
  const className = '${kebabName}-layout';

  return <div className={className}>{children}</div>;
};

interface ${name}Props {
  children: ReactNode;
}

export default ${name};
`;
};

const scss = name => {
  const kebabName = changeCase.paramCase(name);
  return `.${kebabName}-layout {
  display: flex;
}
`;
};

const index = name =>
  `export { default } from './${name}.layout';
`;

module.exports = {
  tsx: tsx,
  scss: scss,
  index: index,
};
