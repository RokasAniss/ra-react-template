import React, { FunctionComponent } from 'react';

import image from '@/assets/image.jpg';
import './Background.scss';

const Background: FunctionComponent = () => {
  const className = 'background';

  return (
    <div className={className}>
      <img className={`${className}__image`} src={image} />
    </div>
  );
};

export default Background;
