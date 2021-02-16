import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import './Button.scss';

const Button: FunctionComponent<ButtonProps> = ({
  title,
  disabled,
  variant = 'accent',
}: ButtonProps) => {
  const className = 'button';

  return (
    <button
      className={classNames(className, `-${variant}`)}
      disabled={disabled}
    >
      <span className={`${className}__title`}>{title}</span>
    </button>
  );
};

export interface ButtonProps {
  title?: string;
  disabled?: boolean;
  variant?: 'accent' | 'simple';
}

export default Button;
