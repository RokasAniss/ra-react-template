import React, { FC, ReactNode } from 'react';
import classNames from 'classnames/bind';

import Logo from '@/components/Logo';

import styles from './MainLayout.module.scss';
const cx = classNames.bind(styles);

const MainLayout: FC<MainLayoutProps> = ({ children }: MainLayoutProps) => {
  const className = 'main-layout';

  return (
    <div className={cx(className)}>
      <div className={cx(`${className}__container`)}>
        <div className={cx(`${className}__logo`)}>
          <Logo />
        </div>
        <div className={cx(`${className}__body`)}>{children}</div>
      </div>
    </div>
  );
};

interface MainLayoutProps {
  children?: ReactNode;
}

export default MainLayout;
