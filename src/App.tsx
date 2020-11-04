import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import Home from '@/views/Home';
import About from '@/views/About';

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
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
};

export default App;
