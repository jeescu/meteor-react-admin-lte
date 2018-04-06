import React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AuthRoute from './authRoute';

import Home from '../../ui/components/home';
import SignIn from '../../ui/components/sign_in';
import SignUp from '../../ui/components/sign_up';
import Dashboard from '../../ui/components/dashboard/dashboard';
import NotFound from '../../ui/pages/not_found/not_found';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" name="home" component={Home} />
      <Route path="/sign-in" name="signIn" component={SignIn} />
      <Route path="/sign-up" name="signUp" component={SignUp} />
      <AuthRoute path="/dashboard" name="dashboard" component={Dashboard} />
      <Route name="not-found" component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
