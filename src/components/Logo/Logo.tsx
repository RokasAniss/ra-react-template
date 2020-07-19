import React, { FunctionComponent } from 'react';

import './Logo.scss';

const Logo: FunctionComponent = () => {
  const className = 'logo';

  return (
    <div className={className}>
      <h1 className={`${className}__title`}>Logo</h1>
    </div>
  );
};

export default Logo;
