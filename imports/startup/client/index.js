/* eslint-disable import/no-unresolved */
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';

Meteor.startup(() => {
  render(<Routes />, document.getElementById('react-root'));
  $('body').addClass('skin-blue');
});
