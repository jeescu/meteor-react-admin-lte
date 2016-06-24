import React, { Component, PropTypes } from 'react';

// components
import SideBarUserPanel from './sidebar_user_panel';
import SideBarSearchPanel from './sidebar_search_panel.jsx';
import SideBarMenu from './sidebar_menu';

export default class SideBar extends Component {
	constructor(props) {
        super(props);
    }

    render() {
        const currentUser = this.props.user;

        let displayName = () => {
            if (currentUser) {
                return currentUser.emails[0].address;
            } else {
                return 'Alexander Pierce';
            }
        };

    	return (
			<aside className="main-sidebar">
                <section className="sidebar">

	                <SideBarUserPanel userName={ displayName() } />

					<SideBarSearchPanel />

					<SideBarMenu userCount={ this.props.userCount }/>
					
                </section>
            </aside>
        );
    }
}
    	