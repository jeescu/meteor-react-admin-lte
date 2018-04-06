/* eslint-disable import/no-unresolved */
import { Meteor } from 'meteor/meteor';
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const isAuthenticated = () => Meteor.user() !== null;
const LOGIN_URL = '/sign-in';

const AuthRoute = ({ component, ...props }) => {
  if (isAuthenticated()) {
    return <Route {...props} component={component} />;
  }

  return <Redirect to={LOGIN_URL} />;
};

AuthRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]),
};

export default AuthRoute;
