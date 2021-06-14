import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { paths } from '@/routes';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/views/Home';
import About from '@/views/About';

const App: FunctionComponent = () => {
  return (
    <Router>
      <MainLayout>
        <div>
          <Link to={paths.home}>Home</Link>
          <Link to={paths.about}>About</Link>
        </div>
        <Switch>
          <Route path={paths.home} exact>
            <Home />
          </Route>
          <Route path={paths.about} exact>
            <About />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
};

export default App;
