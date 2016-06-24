import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// components
import SideBar from './sidebar/sidebar.jsx';
import AppHeader from '../layouts/app/app_header.jsx';
import AppFooter from '../layouts/app/app_footer.jsx';
import StatisticView from './views/statistics/statistics.jsx';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    getCurrentUser() {
        return this.props.currentUser;
    }

    getContentView() {
        let contentView = this.props.children;

        return contentView ? contentView : <StatisticView />;
    }

    render() {
        const user = this.getCurrentUser();

        const contentMinHeight = {
            minHeight: ((window.innerHeight - 101) + 'px')
        };

        return (
            <div className="wrapper">
                <AppHeader />
                <SideBar user={ user }/>
                
                <div className="content-wrapper" style={ contentMinHeight }>
                    { this.getContentView() }
                </div>

                <AppFooter />
                <div className="control-sidebar-bg"></div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    currentUser: PropTypes.object
};

export default createContainer(() => {

    return {
        currentUser: Meteor.user()
    };

}, Dashboard);
