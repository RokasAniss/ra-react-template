import React, { FC, ReactNode } from 'react';

import style from './ContainerBase.module.scss';

const ContainerBase: FC<ContainerBaseProps> = ({
  children,
  id,
}: ContainerBaseProps) => {
  return <div id={id} className={style['container-base']}>{children}</div>;
};

export interface ContainerBaseProps {
  children: ReactNode;
  id: string;
}

export default ContainerBase;
