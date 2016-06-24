import React from 'react';
import { render } from 'react-dom';
import { Routes } from './routes.jsx';

Meteor.startup( () => {
	render(<Routes />, document.getElementById( 'react-root' ));
	$('body').addClass('skin-blue');
});