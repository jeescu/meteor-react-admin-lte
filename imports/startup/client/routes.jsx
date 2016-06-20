import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Index from '../../ui/components/index.jsx';
import { Home } from '../../ui/components/home.jsx';
import SignIn from '../../ui/components/sign_in.jsx';
import { SignUp } from '../../ui/components/sign_up.jsx';
import Dashboard from '../../ui/components/dashboard/dashboard.jsx';

Meteor.startup( () => {
	render( 
		<Router history={ browserHistory }>
			<Route path="/" component={ Index } children={ Home }>
				<Route path="/signin" component={SignIn} />
				<Route path="/signup" component={SignUp} />
			</Route>
			<Route path="/dashboard" component={Dashboard} />
		</Router>,
		document.getElementById( 'react-root' )
	);

	$('body').addClass('skin-blue');
});