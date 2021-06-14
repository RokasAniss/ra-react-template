import React, { FC } from 'react';

import './Logo.scss';

const Logo: FC = () => {
  const className = 'logo';

  return (
    <div className={className}>
      <h1 className={`${className}__title`}>Logo</h1>
    </div>
  );
};

export default Logo;
