import React, { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './Caption.module.scss';
const cx = classNames.bind(styles);

const Caption: FC<CaptionProps> = ({ label = 'Caption' }) => {
  const className = 'caption';

  return <div className={cx(className)}><p className={cx(`${className}__paragraph`)}>{label}</p></div>;
};

export interface CaptionProps {
  label?: string;
}

export default Caption;
