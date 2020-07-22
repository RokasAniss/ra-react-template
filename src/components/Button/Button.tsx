import React, { FunctionComponent } from 'react';

import './Button.scss';

const Button: FunctionComponent<ButtonProps> = ({ title, disabled }: ButtonProps) => {
  const className = "button";

  return (
    <button className={className} disabled={disabled}>
      <span className={`${className}__title`}>{title}</span>
    </button>
  );
};

interface ButtonProps {
  title?: string;
  disabled?: boolean;
}

export default Button;
