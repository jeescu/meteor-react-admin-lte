import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import SignIn from './sign_in';
import Home from './home';
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
        let childRoute = this.props.children;
        const user = this.props.currentUser;
        let defaultChild = <Home />;
        let dashboardRoute = <Dashboard />;

        if (childRoute) {
            defaultChild = (childRoute.type.name == 'SignIn') ? <SignIn /> : defaultChild;
            defaultChild = (childRoute.type.name == 'SignUp') ? <SignUp /> : defaultChild;
        }

        childRoute = user ? (!childRoute ? dashboardRoute :
            (childRoute.type.name == 'SignUp' || childRoute.type.name == 'SignIn') ? dashboardRoute : childRoute
        ) : defaultChild;

        return childRoute;
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