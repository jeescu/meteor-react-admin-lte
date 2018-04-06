/* eslint-disable import/no-unresolved */
import { Accounts } from 'meteor/accounts-base';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CallOutMessage from './warnings/callout_message';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
      hasError: false,
      errorMessage: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeRepeatPassword = this.onChangeRepeatPassword.bind(this);
  }

  onChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  onChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  onChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  onChangeRepeatPassword(event) {
    this.setState({ repeatPassword: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    // password check
    if (this.state.password.length < 6) {
      this.setState({ hasError: true });
      this.setState({ errorMessage: 'Password should be atleast 6 characters.' });
      return;
    }

    if (this.state.password !== this.state.repeatPassword) {
      this.setState({ hasError: true });
      this.setState({ errorMessage: 'Password not matched' });
      return;
    }

    Accounts.createUser({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    }, (error) => {
      if (error) {
        this.setState({ hasError: true });
        this.setState({ errorMessage: error.reason });
      }
    });
  }

  getSignUpResponseMessage() {
    let message = '';
    if (this.state.hasError) {
      message = <CallOutMessage description={this.state.errorMessage} />;
    }

    return message;
  }

  render() {
    return (
      <div className="login-box">
        <div className="register-logo">
          <a href="/"><b>Admin</b>LTE</a>
        </div>

        <div className="register-box-body">
          <p className="login-box-msg">Register</p>
          {this.getSignUpResponseMessage()}

          <form onSubmit={this.onSubmit}>
            <div className="form-group has-feedback">
              <input
                type="text"
                onChange={this.onChangeUsername}
                value={this.state.username}
                className="form-control"
                placeholder="Username"
              />
              <span className="fa fa-user form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                type="email"
                onChange={this.onChangeEmail}
                value={this.state.email}
                className="form-control"
                placeholder="Email"
              />
              <span className="fa fa-envelope form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                type="password"
                onChange={this.onChangePassword}
                value={this.state.password}
                className="form-control"
                placeholder="Password"
              />
              <span className="fa fa-lock form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                type="password"
                onChange={this.onChangeRepeatPassword}
                value={this.state.repeatPassword}
                className="form-control"
                placeholder="Retype password"
              />
              <span className="fa fa-lock form-control-feedback" />
            </div>
            <div className="row">
              <div className="col-xs-4">
                <button type="submit" className="btn btn-primary btn-block btn-flat">
                  Register
                </button>
              </div>
            </div>
          </form>

          <br />
          <Link to="/sign-in">
              I already have an account
          </Link>

        </div>
      </div>
    );
  }
}
