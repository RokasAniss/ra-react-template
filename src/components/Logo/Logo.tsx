import React, { FC } from 'react';

import raLogo from '@/assets/ra-logo.svg';

import './Logo.scss';

const Logo: FC = () => {
  const className = 'logo';

  return (
    <div className={className}>
      <img src={raLogo} alt="logo" />
    </div>
  );
};

export default Logo;
