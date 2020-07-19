import React, { FunctionComponent } from 'react';

const App: FunctionComponent = () => {
  const className = 'app';

  return (
    <div className={className}>
      <h1 className={`${className}__title`}>App</h1>
    </div>
  );
};

export default App;
