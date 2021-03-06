import React, { FC, ReactNode } from 'react';

import './ContainerBase.scss';

const ContainerBase: FC<ContainerBaseProps> = ({
  children,
  id,
}: ContainerBaseProps) => {
  const className = 'container-base';

  return <div id={id} className={className}>{children}</div>;
};

export interface ContainerBaseProps {
  children: ReactNode;
  id: string;
}

export default ContainerBase;
