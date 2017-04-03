/* eslint-disable import/no-unresolved */
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

const adminUser = {
  username: 'admin',
  email: 'admin@mail.com',
  password: 'abc123',
};

if (!Meteor.users.findOne()) {
  Accounts.createUser(adminUser);
}
