import React from 'react';

import AppHeaderNotificationMenu from './header_menus/app_header_notification_menu';
import AppHeaderUserMenu from './header_menus/app_header_user_menu';

const AppHeader = () => (
  <header className="main-header">

    <a href="#" className="logo">
      <span className="logo-mini"><b>A</b>L</span>
      <span className="logo-lg"><b>Admin</b>LTE</span>
    </a>

    <nav className="navbar navbar-static-top">
      <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>

      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">

          <AppHeaderNotificationMenu />
          <AppHeaderUserMenu />

        </ul>
      </div>
    </nav>

  </header>
);

export default AppHeader;
