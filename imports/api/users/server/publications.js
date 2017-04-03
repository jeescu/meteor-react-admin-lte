/* eslint-disable import/no-unresolved */
import { Meteor } from 'meteor/meteor';

Meteor.publish('users', () => Meteor.users.find());
