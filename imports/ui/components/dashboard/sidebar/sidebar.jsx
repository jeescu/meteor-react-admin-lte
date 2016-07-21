import React, { Component, PropTypes } from 'react';

import SideBarUserPanel from './sidebar_user_panel';
import SideBarSearchPanel from './sidebar_search_panel.jsx';
import SideBarMenu from './sidebar_menu';

export default class SideBar extends Component {
	constructor(props) {
        super(props);
    }

    userDisplayName() {
        const currentUser = this.props.user;

        if (currentUser) {
            return currentUser.emails[0].address;
        } else {
            return 'Alexander Pierce';
        }
    };

    render() {

    	return (
			<aside className="main-sidebar">
                <section className="sidebar">

	                <SideBarUserPanel userName={ this.userDisplayName() } />

					<SideBarSearchPanel />

					<SideBarMenu userCount={ this.props.users.length }/>
					
                </section>
            </aside>
        );
    }
}
    	