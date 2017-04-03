import React, { Component, PropTypes } from 'react';

import SideBarUserPanel from './sidebar_user_panel';
import SideBarSearchPanel from './sidebar_search_panel';
import SideBarMenu from './sidebar_menu';

export default class SideBar extends Component {
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
      <aside className="main-sidebar">
        <section className="sidebar">
          <SideBarUserPanel userName={this.userDisplayName()} />
          <SideBarSearchPanel />
          <SideBarMenu userCount={this.props.users.length} />
        </section>
      </aside>
    );
  }
}

SideBar.propTypes = {
  user: PropTypes.object,
  users: PropTypes.array,
};
