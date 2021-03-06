import React, { FC } from 'react';
import Title from '@/containers/Title';

const Home: FC = () => {
  const className = 'home';

  return (
    <div className={className}>
      <Title />
      <br/>
      Home View
    </div>
  );
};

export default Home;
