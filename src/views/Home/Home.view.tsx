import React, { FC } from 'react';

import Title from '@/containers/Title';
import Button from '@/components/Button';

const Home: FC = () => {
  const className = 'home';

  return (
    <div className={className}>
      <Title />
      <br/>
      Home View
      <Button label="Clicker me" variant="simple" />
    </div>
  );
};

export default Home;
