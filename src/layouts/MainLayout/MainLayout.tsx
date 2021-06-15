import React, { FC, ReactNode } from 'react';

import Logo from '@/components/Logo';

import './MainLayout.scss';

const MainLayout: FC<MainLayoutProps> = ({ children }: MainLayoutProps) => {
  const className = 'main-layout';

  return (
    <div className={className}>
      <div className={`${className}__container`}>
        <div className={`${className}__logo`}>
          <Logo />
        </div>
        <div className={`${className}__body`}>{children}</div>
      </div>
    </div>
  );
};

interface MainLayoutProps {
  children?: ReactNode;
}

export default MainLayout;
