import React, { FunctionComponent, ReactNode } from 'react';

import './Background.scss';

const Background: FunctionComponent<BackgroundProps> = ({ children }: BackgroundProps) => {
  const className = "background";

  return (
    <div className={className}>
      <h1 className={`${className}__title`}>Background</h1>
      <div className={`${className}__body`}>{children}</div>
    </div>
  );
};

interface BackgroundProps {
  children?: ReactNode;
}

export default Background;
