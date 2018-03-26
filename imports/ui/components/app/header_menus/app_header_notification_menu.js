import React, { Component } from 'react';

// components
import AppHeaderNotificationMenuItem from './app_header_notification_menu_item';

export default class AppHeaderNotificationMenu extends Component {
  getNotificationItems() {
    this.notificationItems = [
      { _id: '1', classNames: 'fa fa-users text-aqua', message: '5 new members joined today' },
      { _id: '2', classNames: 'fa fa-warning text-yellow', message: 'Very long description here' },
    ];

    /* eslint-disable no-underscore-dangle */
    return this.notificationItems.map(item => (
      <AppHeaderNotificationMenuItem
        key={item._id}
        classNames={item.classNames}
        message={item.message}
      />));
  }

  render() {
    return (
      <li className="dropdown notifications-menu">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
          <i className="fa fa-bell-o" />
          <span className="label label-warning">2</span>
        </a>
        <ul className="dropdown-menu">
          <li className="header">You have 2 notifications</li>
          <li>
            <ul className="menu">
              {this.getNotificationItems()}
            </ul>
          </li>
          <li className="footer"><a href="#">View all</a></li>
        </ul>
      </li>
    );
  }
}
