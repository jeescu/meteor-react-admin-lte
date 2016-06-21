import React, { Component, PropTypes } from 'react';

// components
import SideBar from './sidebar.jsx';
import AppHeader from '../layouts/app/app_header.jsx';
import AppFooter from '../layouts/app/app_footer.jsx';

// default child
import StatisticView from './views/statistics.jsx';

export default class Dashboard extends Component {

    render() {

    	var getChildView = () => {
            return this.props.children ? this.props.children : <StatisticView />;
        }

        return (
            <div className="wrapper">
                <AppHeader />
                
                <SideBar />

                { getChildView() }

                <AppFooter />

                <div className="control-sidebar-bg"></div>

            </div>
        );
    }
}