import React, { FunctionComponent } from 'react';

import classNames from 'classnames/bind';

import style from './Button.module.scss';
const cx = classNames.bind(style);

const Button: FunctionComponent<ButtonProps> = ({
  label,
  disabled,
  variant = 'accent',
}: ButtonProps) => {
  const className = 'button';

  return (
    <button
      className={cx(className, `-${variant}`)}
      disabled={disabled}
    >
      <span className={cx(`${className}__title`)}>{label}</span>
    </button>
  );
};

export interface ButtonProps {
  label?: string;
  disabled?: boolean;
  variant?: 'accent' | 'simple';
}

export default Button;
