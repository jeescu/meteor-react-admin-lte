/* eslint-disable import/no-unresolved */
import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import SignIn from './sign_in';
import Home from './home';
import SignUp from './sign_up';
import Dashboard from './dashboard/dashboard';

class Index extends Component {
  /**
   * Decides route when user is authenticated or not
   */
  getChildRoute() {
    let childRoute = this.props.children;
    const user = this.props.currentUser;
    let defaultChild = <Home />;
    const dashboardRoute = <Dashboard />;

    if (childRoute) {
      defaultChild = (childRoute.type.name === 'SignIn') ? <SignIn /> : defaultChild;
      defaultChild = (childRoute.type.name === 'SignUp') ? <SignUp /> : defaultChild;
    }

    if (user) {
      if (!childRoute) {
        childRoute = dashboardRoute;
      } else {
        if (childRoute.type.name === 'SignUp' || childRoute.type.name === 'SignIn') {
          childRoute = dashboardRoute;
        }
      }
    } else {
      childRoute = defaultChild;
    }

    return childRoute;
  }

  render() {
    return (
      <div className="app-layout">
        {this.getChildRoute()}
      </div>
    );
  }
}

Index.propTypes = {
  children: PropTypes.object,
  currentUser: PropTypes.object,
};
 
export default createContainer(() => ({
  currentUser: Meteor.user(),
}), Index);
