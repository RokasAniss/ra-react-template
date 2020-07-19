import React, { FunctionComponent } from 'react';

const App: FunctionComponent = () => {
  const className = 'app';

  return (
    <div className={className}>
      <span className={`${className}__title`}>App</span>
    </div>
  );
};

export default App;
