import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Index from '../../ui/components/index.jsx';
import { Home } from '../../ui/components/home.jsx';
import SignIn from '../../ui/components/sign_in.jsx';
import Dashboard from '../../ui/components/dashboard/dashboard.jsx';
import Users from '../../ui/components/dashboard/views/users.jsx';

Meteor.startup( () => {
	render( 
		<Router history={ browserHistory }>
			<Route path="/" component={ Index }>
				<Route path="/signin" component={ SignIn }/>
			</Route>
			<Route path="/dashboard" component={ Dashboard }>
				<Route path="/dashboard/users" component={ Users }/>
			</Route>
		</Router>,
		document.getElementById( 'react-root' )
	);

	$('body').addClass('skin-blue');
});