import React, { FunctionComponent } from 'react';

import './Button.scss';

const Button: FunctionComponent<ButtonProps> = ({ title }: ButtonProps) => {
  const className = "button";

  return (
    <div className={className}>
      <h1 className={`${className}__title`}>{title}</h1>
    </div>
  );
};

interface ButtonProps {
  title: string;
}

export default Button;
