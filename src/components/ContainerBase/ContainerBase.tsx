import React, { FC, ReactNode } from 'react';
import classNames from 'classnames/bind';

import style from './ContainerBase.module.scss';
const cx = classNames.bind(style);

const ContainerBase: FC<ContainerBaseProps> = ({
  children,
  id,
}: ContainerBaseProps) => {
  const className = 'container-base';

  return <div id={id} className={cx(className)}>{children}</div>;
};

export interface ContainerBaseProps {
  children: ReactNode;
  id: string;
}

export default ContainerBase;
