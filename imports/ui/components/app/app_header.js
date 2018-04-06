import React from 'react';
import PropTypes from 'prop-types';

import AppHeaderNotificationMenu from './header_menus/app_header_notification_menu';
import AppHeaderUserMenu from './header_menus/app_header_user_menu';

const AppHeader = ({ user, history }) => (
  <header className="main-header">

    <a href="#" className="logo">
      <span className="logo-mini"><b>A</b>L</span>
      <span className="logo-lg"><b>Admin</b>LTE</span>
    </a>

    <nav className="navbar navbar-static-top">
      <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>

      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">

          <AppHeaderNotificationMenu />
          <AppHeaderUserMenu user={user} history={history} />

        </ul>
      </div>
    </nav>

  </header>
);

AppHeader.propTypes = {
  user: PropTypes.object,
  history: PropTypes.object,
};

export default AppHeader;
