import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router';

import SignIn from './sign_in';
import SignUp from './sign_up';
import Dashboard from './dashboard/dashboard';

export default class Index extends Component {
    constructor(props) {
        super(props);
    }
    /**
     * Decides route when user is authenticated or not
     */
    getChildRoute() {
        let route = this.props.children;
        const user = this.props.currentUser;
        let defaultTemplate = <SignIn />;
        let dashboardRoute = <Dashboard />;

        if (route && route.type.name == 'SignUp') {
            defaultTemplate = <SignUp />;
        }

        route = user ? (!route ? dashboardRoute :
            (route.type.name == 'SignUp' || route.type.name == 'SignIn') ? dashboardRoute : route
        ) : defaultTemplate;

        return route;
    }

    render() {

        return (
            <div className="app-layout">
				{ this.getChildRoute() }
			</div>
        );
    }
}

Index.propTypes = {
    currentUser: PropTypes.object,
};
 
export default createContainer(() => {
    return {
        currentUser: Meteor.user(),
    };
}, Index);