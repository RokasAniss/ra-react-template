import React, { FunctionComponent } from 'react';

import './Button.scss';

const Button: FunctionComponent<ButtonProps> = ({ title }: ButtonProps) => {
  const className = "button";

  return (
    <button className={className}>
      <span className={`${className}__title`}>{title}</span>
    </button>
  );
};

interface ButtonProps {
  title?: string;
}

export default Button;
