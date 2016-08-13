import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router';

import SideBar from './sidebar/sidebar.jsx';
import AppHeader from '../app/app_header.jsx';
import AppFooter from '../app/app_footer.jsx';
import StatisticView from './views/statistics/statistics.jsx';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    getContentView() {
        let contentView = this.props.children;

        return contentView ? contentView : <StatisticView />;
    }

    componentDidMount() {
        // i just want to show browser url in '/dashboard'.
        // So, this component is repeated after index rendered <Dashboard />
        browserHistory.push('/dashboard');
    }

    render() {

        const contentMinHeight = {
            minHeight: ((window.innerHeight - 101) + 'px')
        };

        return (
            <div className="wrapper">
                <AppHeader user={ this.props.currentUser }/>
                <SideBar user={ this.props.currentUser } users={ this.props.users }/>
                
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
    currentUser: PropTypes.object,
    users: PropTypes.arrayOf(PropTypes.object)
};

export default createContainer(() => {
    /**
     * Add subscription here
     */
    Meteor.subscribe('users');

    return {
        currentUser: Meteor.user(),
        users: Meteor.users.find().fetch()
    };
}, Dashboard);
