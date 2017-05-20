/* eslint-disable import/no-unresolved */
import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import SideBar from './sidebar/sidebar';
import AppHeader from '../app/app_header';
import AppFooter from '../app/app_footer';
import StatisticView from './views/statistics/statistics';

class Dashboard extends Component {
  getContentView() {
    return this.props.children && <StatisticView />;
  }

  render() {
    const { currentUser } = this.props;

    const contentMinHeight = {
      minHeight: `${window.innerHeight - 101}px`,
    };

    return (
      <div className="wrapper">
        <AppHeader user={currentUser} />
        <SideBar user={this.props.currentUser} users={this.props.users} />
        
        <div className="content-wrapper" style={contentMinHeight} >
            {this.getContentView()}
        </div>

        <AppFooter />
        <div className="control-sidebar-bg"></div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.object,
  currentUser: PropTypes.object,
  users: PropTypes.arrayOf(PropTypes.object),
};

export default createContainer(() => {
  /**
   * Add subscription here
   */
  Meteor.subscribe('users');

  return {
    currentUser: Meteor.user(),
    users: Meteor.users.find().fetch(),
  };
}, Dashboard);
