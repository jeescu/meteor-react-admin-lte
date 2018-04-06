/* eslint-disable import/no-unresolved */
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AppHeaderUserMenu extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    Meteor.logout(() => {
      this.props.history.push('/');
    });
  }

  userDisplayName() {
    const currentUser = this.props.user;
    let name = 'Alexander Pierce';

    if (currentUser) {
      name = currentUser.emails[0].address;
    }

    return name;
  }

  render() {
    return (
      <li className="dropdown user user-menu">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
          <img
            src="/img/user2-160x160.jpg"
            className="user-image"
            alt="User"
          />
          <span className="hidden-xs">{this.userDisplayName()}</span>
        </a>

        <ul className="dropdown-menu">

          <li className="user-header">
            <img
              src="/img/user2-160x160.jpg"
              className="img-circle"
              alt="User"
            />
            <p>
              {this.userDisplayName()} - Admin <small>Admin since Jun. 2016</small>
            </p>
          </li>

          <li className="user-body">
            <div className="row">
              <div className="col-xs-4 text-center">
                <a href="#">Followers</a>
              </div>
              <div className="col-xs-4 text-center">
                <a href="#">Sales</a>
              </div>
              <div className="col-xs-4 text-center">
                <a href="#">Friends</a>
              </div>
            </div>
          </li>

          <li className="user-footer">
            <div className="pull-left">
              <a href="#" className="btn btn-default btn-flat">Profile</a>
            </div>
            <div className="pull-right">
              <a href="#" className="btn btn-default btn-flat" onClick={this.logout}>Sign out</a>
            </div>
          </li>

        </ul>
      </li>
    );
  }
}

AppHeaderUserMenu.propTypes = {
  user: PropTypes.object,
  history: PropTypes.object,
};
