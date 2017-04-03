/* eslint-disable import/no-unresolved */
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Link } from 'react-router';

import CallOutMessage from './warnings/callout_message';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      hasError: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  onChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    
    Meteor.loginWithPassword({ email: this.state.email }, this.state.password, (error) => {
      if (error) {
        this.setState({ hasError: true });
      }
    });
  }

  getLoginResponseMessage() {
    let message = '';
    if (this.state.hasError) {
      message = <CallOutMessage description="Forbidden" />;
    }

    return message;
  }

  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="/"><b>Admin</b>LTE</a>
        </div>

        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
          {this.getLoginResponseMessage()}

          <form onSubmit={this.onSubmit}>
            <div className="form-group has-feedback">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={this.onChangeEmail}
                value={this.state.email}
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>
            
            <div className="form-group has-feedback">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={this.onChangePassword}
                value={this.state.password}
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>

            <div className="row">
              <div className="pull-right col-xs-4">
                <button type="submit" className="btn btn-primary btn-block btn-flat">
                  Sign In
                </button>
              </div>
            </div>
          </form>

          <a href="#">I forgot my password</a><br />
          <Link to={'/sign-up'}>
              Register
          </Link>

        </div>
      </div>
    );
  }
}
