import React, { FC } from 'react';
import classNames from 'classnames/bind';

import raLogo from '@/assets/ra-logo.svg';

import styles from './Logo.module.scss';
const cx = classNames.bind(styles);

const Logo: FC = () => {
  const className = 'logo';

  return (
    <div className={cx(className)}>
      <img src={raLogo} className={cx(`${className}__icon`)} alt="logo" />
      <span className={cx(`${className}__title`)}>ra react template</span>
    </div>
  );
};

export default Logo;
