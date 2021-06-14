import React, { FC } from 'react';

import Title from '@/containers/Title';

const About: FC = () => {
  const className = 'about';

  return (
    <div className={className}>
      <Title />
      <br />
      About View
    </div>
  );
};

export default About;
