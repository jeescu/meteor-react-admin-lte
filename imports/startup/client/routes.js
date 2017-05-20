/* eslint-disable import/no-unresolved */
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Index from '../../ui/components/index';
import Home from '../../ui/components/home';
import SignIn from '../../ui/components/sign_in';
import SignUp from '../../ui/components/sign_up';
import Dashboard from '../../ui/components/dashboard/dashboard';
import Statistics from '../../ui/components/dashboard/views/statistics/statistics';
import { NotFound } from '../../ui/pages/not_found/not_found';

export const requireAuth = (nextState, replace) => {
  // No user is authenticated redirect ro index
  if (Meteor.user() === null) {
    replace({
      pathname: '/',
    });
  }
};

export const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Index}>
      <IndexRoute name="home" component={Home} />
      <Route path="sign-in" name="signIn" component={SignIn} />
      <Route path="sign-up" name="signUp" component={SignUp} />
      <Route path="dashboard" name="dashboard" component={Dashboard} onEnter={requireAuth}>
        <IndexRoute component={Statistics} />
        <Route path="statistics" name="statistics" component={Statistics} />
      </Route>
    </Route>
    <Route path="*" name="not-found" component={NotFound} />
  </Router>
);
