import React, { FunctionComponent, ReactNode } from 'react';

import './MainLayout.scss';

const MainLayout:FunctionComponent<MainLayoutProps> = ({ children }: MainLayoutProps) => {
    const className = "main-layout";

    return (
        <div className={className}>
            <div className={`${className}__body`}>{children}</div>
        </div>
    );
};

interface MainLayoutProps {
    children?: ReactNode;
}

export default MainLayout;
