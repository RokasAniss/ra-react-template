import React, { FunctionComponent, ReactNode } from 'react';

import Logo from '@/components/Logo';

import './MainLayout.scss';

const MainLayout:FunctionComponent<MainLayoutProps> = ({ children }: MainLayoutProps) => {
    const className = "main-layout";

    return (
        <div className={className}>
            <Logo />
            <div className={`${className}__body`}>{children}</div>
        </div>
    );
};

interface MainLayoutProps {
    children?: ReactNode;
}

export default MainLayout;
