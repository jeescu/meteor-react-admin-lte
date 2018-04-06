/* eslint-disable import/no-unresolved */
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CallOutMessage from './warnings/callout_message';

/* eslint-disable react/prop-types */
export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      hasError: false,
      isLoggingIn: false,
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
    this.setState({ isLoggingIn: true, hasError: false });
    
    Meteor.loginWithPassword({ email: this.state.email }, this.state.password, (error) => {
      this.setState({ isLoggingIn: false });
      
      if (error) {
        this.setState({ hasError: true });
      } else {
        this.props.history.push('/dashboard');
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

  displayLoggingIn() {
    let loading = '';
    if (this.state.isLoggingIn) {
      loading = (
        <div className="login-box-msg">
          <i className="fa fa-cog fa-spin fa-2x fa-fw" />
        </div>
      );
    }

    return loading;
  }

  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="/"><b>Admin</b>LTE</a>
        </div>

        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
          {this.displayLoggingIn()}
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
              <span className="fa fa-envelope form-control-feedback" />
            </div>

            <div className="form-group has-feedback">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={this.onChangePassword}
                value={this.state.password}
              />
              <span className="fa fa-lock form-control-feedback" />
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
          <Link to="/sign-up">
            Register
          </Link>

        </div>
      </div>
    );
  }
}
