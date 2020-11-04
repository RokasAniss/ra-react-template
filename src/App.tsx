import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';

const App: FunctionComponent = () => {
  return (
    <Router>
      <MainLayout>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </div>
        <Switch>
          <Route path="/" exact>
            <span>Home</span>
          </Route>
          <Route path="/about" exact>
            <span>About</span>
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
};

export default App;
