import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';

const App: FunctionComponent = () => {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/">
            <span>Home</span>
          </Route>
          <Route path="/about">
            <span>About</span>
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
};

export default App;
