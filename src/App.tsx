import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { paths } from '@/routes';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/views/Home';
import About from '@/views/About';

const App: FC = () => {
  return (
    <Router>
      <MainLayout>
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
