/* eslint-disable import/no-unresolved */
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

import SideBar from './sidebar/sidebar';
import AppHeader from '../app/app_header';
import AppFooter from '../app/app_footer';
import Statistics from './views/statistics/statistics';

class Dashboard extends Component {
  componentWillMount() {
    // do something
  }

  render() {
    const { currentUser } = this.props;
    const contentMinHeight = {
      minHeight: `${window.innerHeight - 101}px`,
    };

    return (
      <div className="wrapper">
        <AppHeader user={currentUser} history={this.props.history} />
        <SideBar user={this.props.currentUser} users={this.props.users} />
        
        <div className="content-wrapper" style={contentMinHeight} >
          <Route exact path="/dashboard" name="statistics" component={Statistics} />
          <Route path="/dashboard/statistics" name="statistics" component={Statistics} />
        </div>

        <AppFooter />
        <div className="control-sidebar-bg" />
      </div>
    );
  }
}

Dashboard.propTypes = {
  currentUser: PropTypes.object,
  users: PropTypes.arrayOf(PropTypes.object),
  history: PropTypes.object,
};

export default withTracker(() => {
  /**
   * Add subscriptions here
   */
  Meteor.subscribe('users');

  return {
    currentUser: Meteor.user(),
    users: Meteor.users.find().fetch(),
  };
})(Dashboard);
